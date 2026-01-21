import React, { useState, useRef, useEffect } from 'react';
import { generateText } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Send, Loader2, Bot, User, AlertCircle, Trash2 } from 'lucide-react';
import { auth, database } from '../firebase';
import { ref, push, onValue, remove, off } from 'firebase/database';

export const ChatView: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Get current user for database path
  const user = auth.currentUser;

  // Load History from Firebase
  useEffect(() => {
    if (!user) return;

    const chatRef = ref(database, `chats/${user.uid}`);
    
    const unsubscribe = onValue(chatRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Convert object to array and parse timestamps
        const loadedMessages = Object.entries(data).map(([key, value]: [string, any]) => ({
          ...value,
          id: key, // Use Firebase key as ID
          timestamp: new Date(value.timestamp) // Ensure Date object
        }));
        
        // Sort by time
        loadedMessages.sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());
        setMessages(loadedMessages);
      } else {
        // Default welcome message if no history
        setMessages([{
            id: 'welcome',
            role: 'model',
            text: "Hello! I'm powered by Gemini 3 Flash. How can I help you today? \n\n(Your chat history is now saved automatically)",
            timestamp: new Date()
        }]);
      }
    });

    return () => off(chatRef);
  }, [user]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const handleClearHistory = async () => {
    if (!user) return;
    if (window.confirm("Are you sure you want to clear your entire chat history?")) {
        try {
            const chatRef = ref(database, `chats/${user.uid}`);
            await remove(chatRef);
            // State will update automatically via onValue listener
        } catch (e) {
            console.error("Failed to clear history", e);
            alert("Failed to clear history");
        }
    }
  };

  const handleSend = async () => {
    if (!input.trim() || loading || !user) return;

    const textToSend = input;
    setInput('');
    setLoading(true);

    const chatRef = ref(database, `chats/${user.uid}`);

    // 1. Push User Message to Firebase
    const userMsg: Omit<ChatMessage, 'id'> = {
      role: 'user',
      text: textToSend,
      timestamp: new Date() // Firebase will store as string/number, we parse on read
    };

    // We store using a simpler object without ID first, push generates the ID
    // Note: We cast timestamp to any to satisfy TS for Firebase serialization if needed, 
    // but JS Date objects serialize to ISO strings automatically in Firebase.
    await push(chatRef, { ...userMsg, timestamp: userMsg.timestamp.toISOString() });

    try {
      // Prepare history for API context (exclude welcome and errors)
      // We use the 'messages' state which contains previous history
      const history = messages
        .filter(m => m.id !== 'welcome' && !m.text.startsWith('Error:'))
        .map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        }));

      // 2. Call Gemini API
      const responseText = await generateText(textToSend, history);
      
      // 3. Push Bot Response to Firebase
      const botMsg = {
        role: 'model',
        text: responseText,
        timestamp: new Date().toISOString()
      };
      
      await push(chatRef, botMsg);
      
    } catch (error: any) {
      console.error(error);
      // For errors, we generally don't save them to DB to avoid clutter, just show locally
      const errorMsg: ChatMessage = {
        id: 'error-' + Date.now(),
        role: 'model',
        text: `Error: ${error.message || 'Something went wrong.'} \n\nPlease check your API Key configuration.`,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] md:h-screen bg-slate-900">
      
      {/* Chat Header with Clear Button */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-10">
         <div className="flex items-center gap-2 text-slate-400 text-xs font-medium uppercase tracking-wider">
            <Bot size={14} />
            <span>Gemini 3 Flash</span>
         </div>
         {messages.length > 1 && (
             <button 
                onClick={handleClearHistory}
                className="text-slate-500 hover:text-red-400 transition-colors flex items-center gap-1.5 text-xs font-bold uppercase"
                title="Clear History"
             >
                <Trash2 size={12} />
                <span>Clear Chat</span>
             </button>
         )}
      </div>

      <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`
              flex max-w-[85%] md:max-w-[70%] rounded-2xl p-4 shadow-lg transition-all
              ${msg.role === 'user' 
                ? 'bg-blue-600 text-white rounded-br-none' 
                : 'bg-slate-800 text-slate-200 rounded-bl-none border border-slate-700'}
              ${msg.text.startsWith('Error:') ? 'border-red-500/50 bg-red-900/20' : ''}
            `}>
              <div className="mr-3 mt-1 flex-shrink-0">
                {msg.text.startsWith('Error:') ? (
                    <AlertCircle size={18} className="text-red-400" />
                ) : (
                    msg.role === 'user' ? <User size={18} /> : <Bot size={18} />
                )}
              </div>
              <div className="whitespace-pre-wrap leading-relaxed text-sm md:text-base">
                {msg.text}
              </div>
            </div>
          </div>
        ))}
        {loading && (
           <div className="flex justify-start animate-fade-in">
             <div className="bg-slate-800 border border-slate-700 rounded-2xl rounded-bl-none p-4 shadow-lg flex items-center gap-2">
               <Loader2 className="animate-spin text-blue-500" size={16} />
               <span className="text-slate-400 text-sm">Gemini is thinking...</span>
             </div>
           </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto relative flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your message..."
            className="w-full bg-slate-800 text-white placeholder-slate-500 rounded-xl pl-4 pr-12 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-slate-700 transition-all"
            disabled={loading}
          />
          <button
            onClick={handleSend}
            disabled={loading || !input.trim()}
            className="absolute right-2 p-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white disabled:opacity-50 transition-colors"
          >
            {loading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
          </button>
        </div>
        <p className="text-center text-[10px] text-slate-600 mt-2">
            AI can make mistakes. Please double check responses. History is saved.
        </p>
      </div>
    </div>
  );
};