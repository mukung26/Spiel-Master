
import React, { useState, useEffect, useRef } from 'react';
import { translateText } from '../services/geminiService';
import { Languages, Copy, Check, ArrowLeftRight, Loader2, Zap, ShieldCheck, Lock } from 'lucide-react';

interface TranslatorViewProps {
  isAdmin?: boolean;
}

export const TranslatorView: React.FC<TranslatorViewProps> = ({ isAdmin = false }) => {
  const [sourceText, setSourceText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [targetLang, setTargetLang] = useState('Portuguese (Brazil)');
  const [sourceLang, setSourceLang] = useState('English');
  const debounceTimer = useRef<any>(null);

  useEffect(() => {
    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    if (!sourceText.trim()) {
      setTranslatedText('');
      setLoading(false);
      return;
    }
    setLoading(true);
    debounceTimer.current = setTimeout(() => {
      handleTranslate();
    }, 1000);
    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, [sourceText, targetLang]);

  const handleTranslate = async () => {
    if (!sourceText.trim()) return;
    setLoading(true);
    try {
      const result = await translateText(sourceText, targetLang);
      setTranslatedText(result);
    } catch (e) {
      console.error('Translation failed', e);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (!translatedText) return;
    navigator.clipboard.writeText(translatedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const swapLanguages = () => {
    const prevSource = sourceLang;
    const prevTarget = targetLang;
    const prevSourceText = sourceText;
    const prevTranslatedText = translatedText;
    setSourceLang(prevTarget);
    setTargetLang(prevSource);
    setSourceText(prevTranslatedText);
    setTranslatedText(prevSourceText);
  };

  return (
    <div className="p-6 md:p-12 max-w-6xl mx-auto h-full flex flex-col animate-fade-in overflow-y-auto relative">
      
      {/* Header Section */}
      <div className="mb-8 text-center md:text-left">
        <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
           <ShieldCheck className="text-orange-500" size={20} />
           <span className="text-xs font-black text-orange-500 uppercase tracking-widest">AI Intelligence Tool</span>
        </div>
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">AI Pro Translator</h2>
        <p className="text-gray-500 dark:text-slate-400 text-lg max-w-2xl">
          Lightning-fast translations between English and Portuguese, optimized for professional Customer Service.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 min-h-[400px]">
        {/* Source Side Card */}
        <div className="group relative bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 p-6 flex flex-col transition-all shadow-xl overflow-hidden">
          <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-700 opacity-5 blur-2xl rounded-full -mr-10 -mt-10`}></div>
          <div className="flex items-center justify-between mb-4 relative z-10">
            <span className="text-[10px] font-black text-gray-500 dark:text-slate-500 uppercase tracking-widest">{sourceLang}</span>
            <button 
              onClick={swapLanguages} 
              className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-full text-gray-500 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all active:rotate-180 duration-500"
              title="Swap Languages"
            >
              <ArrowLeftRight size={16} />
            </button>
          </div>
          <textarea
            value={sourceText}
            onChange={(e) => setSourceText(e.target.value)}
            placeholder="Start typing to translate..."
            className="flex-1 bg-transparent text-gray-900 dark:text-white text-xl placeholder-gray-400 dark:placeholder-slate-600 focus:outline-none resize-none custom-scrollbar font-medium relative z-10"
          />
          {sourceText && (
            <button 
              onClick={() => setSourceText('')}
              className="absolute bottom-6 right-6 p-2 bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 text-gray-500 dark:text-slate-400 rounded-lg text-[9px] font-black uppercase tracking-widest transition-colors z-10"
            >
              Clear
            </button>
          )}
        </div>

        {/* Target Side Card */}
        <div className="group relative bg-gray-50 dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800 p-6 flex flex-col transition-all shadow-2xl overflow-hidden">
          <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500 to-red-700 opacity-5 blur-2xl rounded-full -mr-10 -mt-10`}></div>
          <div className="flex items-center justify-between mb-4 relative z-10">
            <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest">{targetLang}</span>
            {translatedText && !loading && (
              <button 
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-[9px] font-black text-gray-500 dark:text-slate-500 hover:text-gray-900 dark:hover:text-white transition-colors bg-white dark:bg-slate-800 px-3 py-1 rounded-full border border-gray-200 dark:border-slate-700 shadow-sm"
              >
                {copied ? <Check size={12} className="text-green-500" /> : <Copy size={12} />}
                {copied ? 'COPIED' : 'COPY'}
              </button>
            )}
          </div>
          
          <div className="flex-1 relative z-10 overflow-y-auto custom-scrollbar">
            {loading ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50/40 dark:bg-slate-900/40 backdrop-blur-[1px]">
                <Loader2 className="animate-spin text-blue-500" size={32} />
                <span className="mt-3 text-[9px] font-black text-gray-400 dark:text-slate-500 uppercase tracking-widest animate-pulse">Processing</span>
              </div>
            ) : null}
            <p className={`text-xl font-medium leading-relaxed ${!translatedText ? 'text-gray-400 dark:text-slate-700 italic' : 'text-gray-900 dark:text-white'}`}>
              {translatedText || "Translation result..."}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-white/50 dark:bg-slate-800/50 p-6 rounded-2xl border border-gray-200 dark:border-slate-700 flex flex-wrap items-center justify-between gap-6 shadow-lg">
        <div className="flex items-center gap-8">
          <div className="flex flex-col">
            <span className="text-[9px] font-black text-gray-500 dark:text-slate-500 uppercase tracking-widest mb-1">Target Language</span>
            <select 
              value={targetLang}
              onChange={(e) => setTargetLang(e.target.value)}
              className="bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-white font-black text-xs px-3 py-1.5 rounded-lg focus:outline-none cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors border-none"
            >
              <option value="Portuguese (Brazil)">Portuguese (Brazil)</option>
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="Chinese (Simplified)">Chinese (Simplified)</option>
            </select>
          </div>
          <div className="h-10 w-px bg-gray-200 dark:bg-slate-700 hidden sm:block"></div>
          <div className="flex flex-col">
            <span className="text-[9px] font-black text-gray-500 dark:text-slate-500 uppercase tracking-widest mb-1">AI Engine</span>
            <div className="flex items-center gap-2">
              <Zap size={14} className="text-yellow-500" />
              <span className="text-gray-900 dark:text-white font-black text-xs uppercase tracking-tight">Gemini 3 Flash</span>
            </div>
          </div>
        </div>
        <div className="text-[10px] font-bold text-gray-500 dark:text-slate-500 uppercase tracking-wider text-right max-w-xs leading-relaxed hidden sm:block">
          Optimized for professional tone and e-commerce terminology.
        </div>
      </div>
    </div>
  );
};
