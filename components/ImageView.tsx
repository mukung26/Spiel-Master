
import React, { useState, useRef } from 'react';
import { generateImage, analyzeImage } from '../services/geminiService';
import { Image as ImageIcon, Sparkles, Upload, Loader2, RefreshCw, ShieldCheck } from 'lucide-react';

export const ImageView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'generate' | 'analyze'>('generate');
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setResult(null);
    try {
      const imageUrl = await generateImage(prompt);
      setResult(imageUrl);
    } catch (e) {
      console.error(e);
      alert('Failed to generate image.');
    } finally {
      setLoading(false);
    }
  };

  const handleAnalyze = async () => {
    if (!selectedFile) return;
    setLoading(true);
    setResult(null);
    try {
      const analysis = await analyzeImage(selectedFile, prompt);
      setResult(analysis);
    } catch (e) {
      console.error(e);
      alert('Failed to analyze image.');
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <div className="p-6 md:p-12 max-w-6xl mx-auto h-full flex flex-col animate-fade-in overflow-y-auto">
      
      {/* Dashboard Header */}
      <div className="mb-8 text-center md:text-left">
        <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
           <ShieldCheck className="text-purple-500" size={20} />
           <span className="text-xs font-black text-purple-500 uppercase tracking-widest">Visual Intelligence Tool</span>
        </div>
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Visual AI Studio</h2>
        <p className="text-gray-500 dark:text-slate-400 text-lg max-w-2xl">
          Generate realistic assets or analyze customer-provided evidence with advanced computer vision.
        </p>
      </div>

      <div className="flex mb-8 bg-white dark:bg-slate-800 p-1.5 rounded-2xl w-fit border border-gray-200 dark:border-slate-700 shadow-lg">
        <button
          onClick={() => { setActiveTab('generate'); setResult(null); setPrompt(''); }}
          className={`flex items-center px-8 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
            activeTab === 'generate' ? 'bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-white shadow-xl' : 'text-gray-400 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white'
          }`}
        >
          <Sparkles size={14} className="mr-2" />
          Generate
        </button>
        <button
          onClick={() => { setActiveTab('analyze'); setResult(null); setPrompt(''); }}
          className={`flex items-center px-8 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
            activeTab === 'analyze' ? 'bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-white shadow-xl' : 'text-gray-400 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white'
          }`}
        >
          <ImageIcon size={14} className="mr-2" />
          Analyze
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 flex-1">
        {/* Controls Card */}
        <div className="md:col-span-4 bg-white dark:bg-slate-800 p-8 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-xl flex flex-col h-fit relative overflow-hidden transition-colors">
          <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-700 opacity-5 blur-2xl rounded-full -mr-10 -mt-10`}></div>
          <div className="relative z-10">
            {activeTab === 'generate' ? (
              <>
                <label className="block text-[10px] font-black text-gray-500 dark:text-slate-500 uppercase mb-3 tracking-widest">Image Prompt</label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe the image you need..."
                  className="w-full h-32 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl p-4 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500/50 focus:outline-none resize-none mb-6 shadow-inner placeholder-gray-400 dark:placeholder-slate-600"
                />
                <button
                  onClick={handleGenerate}
                  disabled={loading || !prompt}
                  className="w-full flex items-center justify-center py-4 bg-purple-600 hover:bg-purple-500 rounded-xl text-white text-[10px] font-black uppercase tracking-widest shadow-lg transition-all active:scale-95"
                >
                  {loading ? <Loader2 className="animate-spin mr-2" size={16} /> : <Sparkles className="mr-2" size={16} />}
                  Generate Asset
                </button>
              </>
            ) : (
              <>
                <label className="block text-[10px] font-black text-gray-500 dark:text-slate-500 uppercase mb-3 tracking-widest">Source Image</label>
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-gray-200 dark:border-slate-700 rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-700/50 hover:border-purple-500 transition-all mb-6 group"
                >
                  {selectedFile ? (
                    <div className="text-center">
                      <ImageIcon className="mx-auto text-purple-500 dark:text-purple-400 mb-2" size={32} />
                      <p className="text-[10px] text-gray-900 dark:text-white font-bold truncate max-w-[150px] uppercase tracking-tighter">{selectedFile.name}</p>
                    </div>
                  ) : (
                    <div className="text-center text-gray-400 dark:text-slate-500 group-hover:text-gray-600 dark:group-hover:text-slate-300">
                      <Upload className="mx-auto mb-2" size={32} />
                      <p className="text-[10px] font-black uppercase tracking-widest">Upload Media</p>
                    </div>
                  )}
                  <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />
                </div>
                <label className="block text-[10px] font-black text-gray-500 dark:text-slate-500 uppercase mb-3 tracking-widest">Analysis Goal</label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Ask a question about the image..."
                  className="w-full h-24 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl p-4 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500/50 focus:outline-none resize-none mb-6 shadow-inner placeholder-gray-400 dark:placeholder-slate-600"
                />
                 <button
                  onClick={handleAnalyze}
                  disabled={loading || !selectedFile}
                  className="w-full flex items-center justify-center py-4 bg-green-600 hover:bg-green-500 rounded-xl text-white text-[10px] font-black uppercase tracking-widest shadow-lg transition-all active:scale-95"
                >
                  {loading ? <Loader2 className="animate-spin mr-2" size={16} /> : <RefreshCw className="mr-2" size={16} />}
                  Run Analysis
                </button>
              </>
            )}
          </div>
        </div>

        {/* Viewport Card */}
        <div className="md:col-span-8 bg-gray-100 dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800 flex items-center justify-center min-h-[500px] p-8 relative shadow-2xl overflow-hidden group transition-colors">
          <div className={`absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-500 to-blue-700 opacity-5 blur-3xl rounded-full -ml-20 -mb-20 pointer-events-none`}></div>
          
          {loading && (
            <div className="absolute inset-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-20 transition-all">
              <div className="text-center">
                <Loader2 className="animate-spin text-purple-500 mx-auto mb-4" size={48} />
                <p className="text-[10px] font-black text-gray-500 dark:text-slate-300 uppercase tracking-[0.2em] animate-pulse">Rendering Data</p>
              </div>
            </div>
          )}

          {!result && !loading && (
            <div className="text-center text-gray-400 dark:text-slate-700 relative z-10">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl inline-block mb-4 shadow-xl border border-gray-200 dark:border-slate-700/50">
                {activeTab === 'generate' ? <Sparkles size={40} /> : <ImageIcon size={40} />}
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest">Output Viewport</p>
            </div>
          )}

          {result && !loading && activeTab === 'generate' && (
            <div className="relative z-10 w-full flex justify-center">
               <img src={result} alt="Generated" className="max-w-full max-h-[550px] rounded-2xl shadow-2xl border border-gray-200 dark:border-slate-700" />
            </div>
          )}

          {result && !loading && activeTab === 'analyze' && (
            <div className="w-full h-full flex flex-col relative z-10">
              <div className="flex justify-center mb-8">
                {selectedFile && (
                  <img src={URL.createObjectURL(selectedFile)} alt="Original" className="h-48 rounded-xl object-contain bg-white dark:bg-slate-950 border border-gray-200 dark:border-slate-800 shadow-xl" />
                )}
              </div>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-gray-200 dark:border-slate-700 flex-grow overflow-auto shadow-inner">
                <h3 className="text-xs font-black text-gray-900 dark:text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                   <ShieldCheck size={14} className="text-green-500" />
                   Official Analysis Result
                </h3>
                <p className="text-gray-600 dark:text-slate-300 text-sm md:text-base leading-relaxed whitespace-pre-wrap font-medium">{result}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
