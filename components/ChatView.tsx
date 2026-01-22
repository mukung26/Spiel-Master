
import React, { useState, useRef, useEffect } from 'react';
import { generateText } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Send, Loader2, Bot, Trash2, Settings, Sparkles, X, Copy, Sparkle } from 'lucide-react';
import { database } from '../firebase';

interface CustomInstructions {
  aboutMe: string;
  responseStyle: string;
  isEnabled: boolean;
}

interface ChatViewProps {
  user?: any;
}

export const ChatView: React.FC<ChatViewProps> = ({ user }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  
  const [instructions, setInstructions] = useState<CustomInstructions>({
    aboutMe: '',
    responseStyle: '',
    isEnabled: true
  });
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!user?.uid) return;
    const chatRef = database.ref(`chats/${user.uid}`);
    const configRef = database.ref(`user_config/${user.uid}/custom_instructions`);
    
    // onValue replacement for v8
    const handleChatUpdate = (snapshot: any) => {
      const data = snapshot.val();
      if (data) {
        // 72-Hour Auto-Cleanup Logic
        const now = Date.now();
        const expirationTime = 72 * 60 * 60 * 1000; // 72 hours in milliseconds
        const updates: Record<string, null> = {};
        const loadedMessages: ChatMessage[] = [];

        Object.entries(data).forEach(([key, value]: [string, any]) => {
           const msgTime = new Date(value.timestamp).getTime();
           // If message is older than 72h, mark for deletion
           if (now - msgTime > expirationTime) {
             updates[key] = null;
           } else {
             loadedMessages.push({
                ...value,
                id: key,
                timestamp: new Date(value.timestamp)
             });
           }
        });

        // Execute cleanup if there are old messages
        if (Object.keys(updates).length > 0) {
           chatRef.update(updates).catch(console.error);
        }

        loadedMessages.sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());
        setMessages(loadedMessages);
      } else {
        // Initial welcome message (Plain text)
        const welcomeMessage = `Hello ${user.displayName || 'there'}! I'm your Seller Support Assistant.\n\nI can help you with customer inquiries, policy details, and SOPs.`;
        
        setMessages([{
            id: 'welcome',
            role: 'model',
            text: welcomeMessage,
            timestamp: new Date()
        }]);
      }
    };

    const handleConfigUpdate = (snapshot: any) => {
      const data = snapshot.val();
      if (data) setInstructions(data);
    };

    chatRef.on('value', handleChatUpdate);
    configRef.on('value', handleConfigUpdate);

    return () => {
      chatRef.off('value', handleChatUpdate);
      configRef.off('value', handleConfigUpdate);
    };
  }, [user]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
    }
  }, [input]);

  const handleSaveInstructions = async () => {
    if (!user?.uid) return;
    setIsSaving(true);
    try {
      const configRef = database.ref(`user_config/${user.uid}/custom_instructions`);
      await configRef.set(instructions);
      setLastSaved(true);
      setTimeout(() => setLastSaved(false), 3000);
    } catch (e) {
      console.error(e);
    } finally {
      setIsSaving(false);
    }
  };

  const handleClearHistory = async () => {
    if (!user?.uid) return;
    if (window.confirm("Delete all chat messages? This cannot be undone.")) {
      try {
        const chatRef = database.ref(`chats/${user.uid}`);
        // Force UI clear immediately for responsiveness
        setMessages([]); 
        await chatRef.set(null);
      } catch (e) {
        console.error("Failed to clear history", e);
        alert("Failed to clear history. Please try again.");
      }
    }
  };

  const handleSend = async () => {
    if (!input.trim() || loading || !user?.uid) return;
    const textToSend = input;
    setInput('');
    setLoading(true);
    
    // Reset textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }

    const combinedInstructions = instructions.isEnabled 
      ? `CONTEXT ABOUT ME: ${instructions.aboutMe}\n\nMY PREFERRED RESPONSE STYLE: ${instructions.responseStyle}`
      : "";

    const chatRef = database.ref(`chats/${user.uid}`);
    await chatRef.push({
      role: 'user',
      text: textToSend,
      timestamp: new Date().toISOString()
    });

    try {
      // Filter out 'error' messages from history before sending
      const history = messages
        .filter(m => m.id !== 'welcome' && !m.text.startsWith('Error:'))
        .map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        }));

      const responseText = await generateText(textToSend, history, combinedInstructions);
      
      await chatRef.push({
        role: 'model',
        text: responseText,
        timestamp: new Date().toISOString()
      });
      
    } catch (error: any) {
      console.error(error);
      const errorMessage = `Error: ${error.message || 'Check your configuration.'}`;
      
      setMessages(prev => [...prev, {
        id: 'error-' + Date.now(),
        role: 'model',
        text: errorMessage,
        timestamp: new Date()
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // If user presses Enter WITHOUT Shift, send message.
    // If Shift is held, allow default behavior (new line).
    if (e.key === 'Enter') {
      if (e.shiftKey) {
        return;
      }
      e.preventDefault();
      handleSend();
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  // Helper to render the Gemini-style dual column
  const DualColumnMessage = ({ text }: { text: string }) => {
    let content = { english: text, portuguese: '' };
    try {
      const parsed = JSON.parse(text);
      if (parsed.english || parsed.portuguese) {
        content = parsed;
      }
    } catch (e) {
      // If parsing fails, treat raw text as English
    }

    // Standard cleanup
    const cleanText = (t: string) => t?.replace(/\*\*/g, '').replace(/<br>/g, '\n').replace(/`/g, '') || '';

    return (
      <div className="w-full">
        {/* If we have both, show grid. If only English (raw), show single. */}
        {content.portuguese ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* English Column */}
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-gray-500 dark:text-slate-300">English Response</span>
                        <button 
                            onClick={() => copyToClipboard(cleanText(content.english))} 
                            className="text-gray-400 hover:text-gray-900 dark:text-slate-500 dark:hover:text-white transition-colors"
                            title="Copy English"
                        >
                            <Copy size={14} />
                        </button>
                    </div>
                    <p className="text-[15px] leading-relaxed text-gray-800 dark:text-slate-200 whitespace-pre-wrap font-normal">
                        {cleanText(content.english)}
                    </p>
                </div>

                {/* Portuguese Column */}
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-gray-500 dark:text-slate-300">Portuguese Response</span>
                        <button 
                            onClick={() => copyToClipboard(cleanText(content.portuguese))} 
                            className="text-gray-400 hover:text-gray-900 dark:text-slate-500 dark:hover:text-white transition-colors"
                            title="Copy Portuguese"
                        >
                            <Copy size={14} />
                        </button>
                    </div>
                    <p className="text-[15px] leading-relaxed text-gray-800 dark:text-slate-200 whitespace-pre-wrap font-normal">
                        {cleanText(content.portuguese)}
                    </p>
                </div>
            </div>
        ) : (
            <p className="text-[15px] leading-relaxed text-gray-800 dark:text-slate-200 whitespace-pre-wrap font-normal">
                {cleanText(content.english)}
            </p>
        )}
      </div>
    );
  };

  return (
    <div className="h-full flex flex-col bg-[#f0f2f5] dark:bg-[#202124] text-gray-900 dark:text-white overflow-hidden relative font-sans animate-fade-in transition-colors duration-300">
      
      {/* Messages Area - Styled like Gemini */}
      <div className="flex-1 overflow-y-auto px-4 md:px-0 py-6 custom-scrollbar scroll-smooth">
        <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Header for Context (Only visible if empty state or top) */}
            {messages.length === 0 && (
                <div className="mt-20 text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="w-16 h-16 bg-gradient-to-tr from-blue-500 to-red-500 rounded-full mx-auto flex items-center justify-center shadow-lg shadow-purple-500/20 mb-6">
                        <Sparkle size={32} className="text-white fill-white" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-medium bg-gradient-to-r from-blue-600 via-purple-600 to-red-500 text-transparent bg-clip-text">
                        Hello, {user.displayName?.split(' ')[0] || 'Agent'}
                    </h1>
                    <p className="text-xl text-gray-500 dark:text-slate-400 font-light">How can I help with your cases today?</p>
                </div>
            )}

            {messages.map((msg) => (
                <div key={msg.id} className={`group animate-in fade-in slide-in-from-bottom-2 duration-500`}>
                    {msg.role === 'user' ? (
                        <div className="flex justify-end mb-6">
                            <div className="bg-white dark:bg-[#282a2c] text-gray-800 dark:text-white px-5 py-3.5 rounded-3xl rounded-br-sm max-w-[80%] shadow-sm border border-gray-200 dark:border-transparent text-[15px] leading-relaxed whitespace-pre-wrap">
                                {msg.text}
                            </div>
                        </div>
                    ) : (
                        <div className="flex gap-4 mb-8">
                            <div className="flex-shrink-0 mt-1">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-red-600 flex items-center justify-center shadow-lg">
                                    <Sparkles size={16} className="text-white fill-white" />
                                </div>
                            </div>
                            <div className="flex-1 min-w-0 py-1">
                                <DualColumnMessage text={msg.text} />
                            </div>
                        </div>
                    )}
                </div>
            ))}

            {loading && (
                <div className="flex gap-4 mb-8 animate-pulse">
                    <div className="flex-shrink-0 mt-1">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-red-600 flex items-center justify-center">
                            <Sparkles size={16} className="text-white" />
                        </div>
                    </div>
                    <div className="flex-1 space-y-3 py-2">
                        <div className="h-4 bg-gray-200 dark:bg-[#282a2c] rounded w-3/4"></div>
                        <div className="h-4 bg-gray-200 dark:bg-[#282a2c] rounded w-1/2"></div>
                    </div>
                </div>
            )}
            
            <div ref={messagesEndRef} className="h-4" />
        </div>
      </div>

      {/* Input Area - Floating Bottom Bar */}
      <div className="p-4 md:p-6 bg-[#f0f2f5] dark:bg-[#202124] transition-colors duration-300">
        <div className="max-w-3xl mx-auto">
            <div className="relative bg-white dark:bg-[#1e1f20] rounded-3xl border border-gray-200 dark:border-transparent focus-within:ring-2 focus-within:ring-blue-100 dark:focus-within:bg-[#282a2c] dark:focus-within:ring-0 shadow-sm transition-all">
                
                {/* Custom Instructions Indicator */}
                {instructions.isEnabled && (instructions.aboutMe || instructions.responseStyle) && (
                   <div className="absolute -top-8 left-4 flex items-center gap-2">
                      <div className="flex items-center gap-1.5 bg-white dark:bg-[#1e1f20] text-gray-500 dark:text-slate-400 text-[10px] font-medium uppercase px-3 py-1 rounded-full border border-gray-200 dark:border-[#282a2c] shadow-sm">
                         <Bot size={12} />
                         <span>Custom Instructions Active</span>
                      </div>
                   </div>
                )}

                <textarea
                    ref={textareaRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask Gemini"
                    className="w-full bg-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 rounded-3xl pl-6 pr-14 py-4 focus:outline-none resize-none custom-scrollbar overflow-hidden min-h-[56px] text-base"
                    disabled={loading}
                    rows={1}
                />
                
                <div className="absolute right-2 bottom-2 flex items-center gap-1">
                    {/* Settings Trigger */}
                    <button 
                        onClick={() => setShowSettings(true)}
                        className="p-2 text-gray-400 hover:text-gray-900 dark:text-slate-400 dark:hover:text-white rounded-full hover:bg-gray-100 dark:hover:bg-[#333537] transition-colors"
                        title="Instructions"
                    >
                        <Settings size={20} />
                    </button>
                    {/* Clear History Button */}
                    <button 
                        onClick={handleClearHistory}
                        className="p-2 text-gray-400 hover:text-red-500 dark:text-slate-400 dark:hover:text-red-500 rounded-full hover:bg-gray-100 dark:hover:bg-[#333537] transition-colors"
                        title="Clear History"
                    >
                        <Trash2 size={20} />
                    </button>
                    {/* Send Button */}
                    <button
                        onClick={handleSend}
                        disabled={loading || !input.trim()}
                        className={`p-2 rounded-full transition-all flex items-center justify-center ${
                            input.trim() ? 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-white dark:text-black dark:hover:bg-slate-200' : 'bg-gray-200 text-gray-400 dark:bg-[#333537] dark:text-slate-500 cursor-not-allowed'
                        }`}
                    >
                        {loading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} className={input.trim() ? "ml-0.5" : ""} />}
                    </button>
                </div>
            </div>
            
            <p className="text-center text-[11px] text-gray-400 dark:text-slate-500 mt-3">
                Gemini can make mistakes, so double-check it. Messages older than 72h are automatically deleted.
            </p>
        </div>
      </div>

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-[#1e1f20] border border-gray-200 dark:border-[#282a2c] w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden flex flex-col transition-colors">
            <div className="px-8 py-6 border-b border-gray-100 dark:border-[#282a2c] flex justify-between items-center">
               <div className="flex items-center gap-3">
                  <Sparkles className="text-blue-500 dark:text-blue-400" size={18} />
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">System Instructions</h3>
               </div>
               <button onClick={() => setShowSettings(false)} className="text-gray-400 hover:text-gray-900 dark:text-slate-400 dark:hover:text-white transition-colors">
                  <X size={20} />
               </button>
            </div>
            <div className="p-8 space-y-6">
               <div className="space-y-2">
                  <label className="text-xs font-medium text-gray-500 dark:text-slate-400">What should the AI know about you?</label>
                  <textarea 
                    value={instructions.aboutMe}
                    onChange={(e) => setInstructions({ ...instructions, aboutMe: e.target.value })}
                    className="w-full h-24 bg-gray-50 dark:bg-[#0b0b0b] border border-gray-200 dark:border-[#282a2c] rounded-xl p-4 text-sm text-gray-900 dark:text-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none resize-none transition-all placeholder-gray-400 dark:placeholder-slate-600"
                    placeholder="e.g., I am a senior agent handling escalated logistics cases."
                  />
               </div>
               <div className="space-y-2">
                  <label className="text-xs font-medium text-gray-500 dark:text-slate-400">How should the AI respond?</label>
                  <textarea 
                    value={instructions.responseStyle}
                    onChange={(e) => setInstructions({ ...instructions, responseStyle: e.target.value })}
                    className="w-full h-24 bg-gray-50 dark:bg-[#0b0b0b] border border-gray-200 dark:border-[#282a2c] rounded-xl p-4 text-sm text-gray-900 dark:text-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none resize-none transition-all placeholder-gray-400 dark:placeholder-slate-600"
                    placeholder="e.g., Use a very formal tone, always include the ticket ID placeholder."
                  />
               </div>
               <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-[#282a2c]">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className={`w-10 h-6 rounded-full p-1 transition-colors ${instructions.isEnabled ? 'bg-blue-600' : 'bg-gray-300 dark:bg-[#333537]'}`}>
                        <div className={`w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${instructions.isEnabled ? 'translate-x-4' : 'translate-x-0'}`}></div>
                    </div>
                    <input 
                      type="checkbox" 
                      className="hidden"
                      checked={instructions.isEnabled}
                      onChange={(e) => setInstructions({ ...instructions, isEnabled: e.target.checked })}
                    />
                    <span className="text-xs font-medium text-gray-600 dark:text-slate-300">Enable Custom Instructions</span>
                  </label>
                  <div className="flex items-center gap-4">
                     {lastSaved && <span className="text-xs text-green-500 dark:text-green-400">Saved</span>}
                     <button onClick={handleSaveInstructions} className="bg-gray-900 dark:bg-white text-white dark:text-black hover:opacity-90 px-6 py-2 rounded-full text-xs font-bold transition-all">
                        {isSaving ? "Saving..." : "Save"}
                     </button>
                  </div>
               </div>
            </div>
            
            <div className="p-4 bg-gray-50 dark:bg-[#282a2c]/50 text-center">
                 <button onClick={handleClearHistory} className="text-xs text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 flex items-center justify-center gap-2 w-full">
                    <Trash2 size={12} /> Clear Chat History
                 </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
