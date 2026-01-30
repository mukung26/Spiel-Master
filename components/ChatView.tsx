
import React, { useState, useRef, useEffect } from 'react';
import { generateText } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Send, Loader2, Bot, Trash2, Settings, Sparkles, X, Copy, Sparkle, Lock, Check } from 'lucide-react';
import { database } from '../firebase';

interface CustomInstructions {
  aboutMe: string;
  responseStyle: string;
  isEnabled: boolean;
}

interface ChatViewProps {
  user?: any;
  isAdmin?: boolean;
}

// --- Helper Components ---

const FormattedText = ({ text }: { text: string }) => {
  if (!text) return null;
  
  // Split by newlines to handle paragraphs
  const lines = text.split('\n');
  
  return (
    <div className="space-y-2">
      {lines.map((line, i) => {
        if (!line.trim()) return <div key={i} className="h-1"></div>;
        
        // Simple Bold Parser: **text**
        const parts = line.split(/(\*\*.*?\*\*)/g);
        return (
          <p key={i} className="leading-relaxed break-words whitespace-pre-wrap">
            {parts.map((part, j) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={j} className="font-bold text-gray-900 dark:text-white">{part.slice(2, -2)}</strong>;
              }
              return <span key={j}>{part}</span>;
            })}
          </p>
        );
      })}
    </div>
  );
};

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button 
        onClick={handleCopy} 
        className="text-gray-400 hover:text-gray-900 dark:text-slate-500 dark:hover:text-white transition-colors"
        title="Copy text"
    >
        {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
    </button>
  );
};

const DualColumnMessage = ({ text }: { text: string }) => {
    let content = { english: text, portuguese: '' };
    let isSplit = false;

    try {
      // Robust JSON extraction: handles markdown code blocks or plain text JSON
      let cleanText = text.trim();
      const codeBlockRegex = /```(?:json)?\s*([\s\S]*?)\s*```/;
      const match = cleanText.match(codeBlockRegex);
      if (match) {
        cleanText = match[1];
      }
      
      // Try parsing
      const parsed = JSON.parse(cleanText);
      if (parsed.english && parsed.portuguese) {
        content = parsed;
        isSplit = true;
      }
    } catch (e) {
      // Not JSON, fall back to standard text rendering
    }

    if (isSplit) {
        return (
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full mt-2">
                {/* English Column */}
                <div className="flex flex-col gap-2 p-5 bg-white dark:bg-black/20 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm">
                    <div className="flex items-center justify-between border-b border-gray-100 dark:border-white/5 pb-2 mb-1">
                        <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 flex items-center gap-2">
                           <img src="https://flagcdn.com/w20/us.png" alt="US" className="w-4 h-3 rounded-sm object-cover opacity-80" />
                           English Response
                        </span>
                        <CopyButton text={content.english} />
                    </div>
                    <div className="text-[15px] text-gray-800 dark:text-gray-200">
                       <FormattedText text={content.english} />
                    </div>
                </div>

                {/* Portuguese Column */}
                <div className="flex flex-col gap-2 p-5 bg-white dark:bg-black/20 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm">
                    <div className="flex items-center justify-between border-b border-gray-100 dark:border-white/5 pb-2 mb-1">
                        <span className="text-[10px] font-black uppercase tracking-widest text-green-600 dark:text-green-400 flex items-center gap-2">
                           <img src="https://flagcdn.com/w20/br.png" alt="BR" className="w-4 h-3 rounded-sm object-cover opacity-80" />
                           Portuguese Response
                        </span>
                        <CopyButton text={content.portuguese} />
                    </div>
                    <div className="text-[15px] text-gray-800 dark:text-gray-200">
                       <FormattedText text={content.portuguese} />
                    </div>
                </div>
            </div>
        );
    }

    // Standard Message (Formatted)
    return (
        <div className="w-full text-[15px] text-gray-800 dark:text-gray-200">
            <FormattedText text={text} />
        </div>
    );
};

// --- Main ChatView Component ---

export const ChatView: React.FC<ChatViewProps> = ({ user, isAdmin = false }) => {
  const [input, setInput] = useState('');
  
  // Initialize messages from LocalStorage if available for instant load
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    if (user?.uid) {
      const saved = localStorage.getItem(`chat_history_${user.uid}`);
      if (saved) {
        try {
          // Parse and revive Date objects
          return JSON.parse(saved, (key, value) => {
            if (key === 'timestamp') return new Date(value);
            return value;
          });
        } catch (e) {
          console.error("Failed to parse local chat history", e);
        }
      }
    }
    return [];
  });

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

  // 1. Sync with Firebase (Source of Truth)
  useEffect(() => {
    if (!user?.uid) return;
    const chatRef = database.ref(`chats/${user.uid}`);
    const configRef = database.ref(`user_config/${user.uid}/custom_instructions`);
    
    const handleChatUpdate = (snapshot: any) => {
      const data = snapshot.val();
      if (data) {
        // 72-Hour Auto-Cleanup Logic
        const now = Date.now();
        const expirationTime = 72 * 60 * 60 * 1000;
        const updates: Record<string, null> = {};
        const loadedMessages: ChatMessage[] = [];

        Object.entries(data).forEach(([key, value]: [string, any]) => {
           const msgTime = new Date(value.timestamp).getTime();
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

        if (Object.keys(updates).length > 0) {
           chatRef.update(updates).catch(console.error);
        }

        loadedMessages.sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());
        setMessages(loadedMessages);
      } else if (messages.length === 0) { // Only show welcome if no local history either
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

  // 2. Persist to LocalStorage whenever messages change
  useEffect(() => {
    if (user?.uid && messages.length > 0) {
      localStorage.setItem(`chat_history_${user.uid}`, JSON.stringify(messages));
    }
  }, [messages, user]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

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
        setMessages([]); 
        // Also clear local storage
        localStorage.removeItem(`chat_history_${user.uid}`);
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
    if (e.key === 'Enter') {
      if (e.shiftKey) {
        return;
      }
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="h-full flex flex-col bg-[#f0f2f5] dark:bg-[#202124] text-gray-900 dark:text-white overflow-hidden relative font-sans animate-fade-in transition-colors duration-300">
      
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-4 md:px-0 py-6 custom-scrollbar scroll-smooth">
        <div className="max-w-4xl mx-auto space-y-8">
            
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
                            <div className="bg-white dark:bg-[#282a2c] text-gray-800 dark:text-white px-5 py-3.5 rounded-3xl rounded-br-sm max-w-[80%] shadow-sm border border-gray-200 dark:border-transparent text-[15px] leading-relaxed whitespace-pre-wrap break-words">
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

      {/* Input Area */}
      <div className="p-4 md:p-6 bg-[#f0f2f5] dark:bg-[#202124] transition-colors duration-300">
        <div className="max-w-3xl mx-auto">
            <div className="relative bg-white dark:bg-[#1e1f20] rounded-3xl border border-gray-200 dark:border-transparent focus-within:ring-2 focus-within:ring-blue-100 dark:focus-within:bg-[#282a2c] dark:focus-within:ring-0 shadow-sm transition-all">
                
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
                    <button 
                        onClick={() => setShowSettings(true)}
                        className="p-2 text-gray-400 hover:text-gray-900 dark:text-slate-400 dark:hover:text-white rounded-full hover:bg-gray-100 dark:hover:bg-[#333537] transition-colors"
                        title="Instructions"
                    >
                        <Settings size={20} />
                    </button>
                    <button 
                        onClick={handleClearHistory}
                        className="p-2 text-gray-400 hover:text-red-500 dark:text-slate-400 dark:hover:text-red-500 rounded-full hover:bg-gray-100 dark:hover:bg-[#333537] transition-colors"
                        title="Clear History"
                    >
                        <Trash2 size={20} />
                    </button>
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
                Gemini can make mistakes. Chat is saved locally and synced for continuity.
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
