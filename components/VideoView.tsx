
import React, { useState } from 'react';
import { generateVideo } from '../services/geminiService';
import { Video, Loader2, Play, Key, ShieldCheck, Download, Sparkles } from 'lucide-react';

export const VideoView: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string>('');

  const checkKeyAndGenerate = async () => {
    if (!prompt.trim()) return;
    setStatus('Checking API Key permissions...');
    const win = window as any;
    if (win.aistudio) {
      const hasKey = await win.aistudio.hasSelectedApiKey();
      if (!hasKey) {
        setStatus('Waiting for API key selection...');
        try {
          await win.aistudio.openSelectKey();
        } catch (e) {
          setStatus('Key selection failed.');
          return;
        }
      }
    }

    setLoading(true);
    setStatus('Initializing Veo model...');
    setVideoUrl(null);

    try {
      setStatus('Generating video... This may take a minute.');
      const url = await generateVideo(prompt);
      setVideoUrl(url);
      setStatus('Complete!');
    } catch (e: any) {
      console.error(e);
      if (e.message?.includes('Requested entity was not found') && win.aistudio) {
        setStatus('API Key issue detected. Prompting re-selection...');
        try {
          await win.aistudio.openSelectKey();
          const url = await generateVideo(prompt);
          setVideoUrl(url);
          setStatus('Complete!');
        } catch (retryError) {
          setStatus('Generation failed.');
        }
      } else {
        setStatus(`Error: ${e.message || 'Unknown error'}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 md:p-12 max-w-6xl mx-auto h-full flex flex-col animate-fade-in overflow-y-auto">
      
      {/* Dashboard Header */}
      <div className="mb-8 text-center md:text-left">
        <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
           <ShieldCheck className="text-red-500" size={20} />
           <span className="text-xs font-black text-red-500 uppercase tracking-widest">Visual Intelligence Tool</span>
        </div>
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Veo Video Studio</h2>
        <p className="text-gray-500 dark:text-slate-400 text-lg max-w-2xl">
          Generate high-fidelity 720p videos from text prompts using Google's Veo generative engine.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 flex-1">
        {/* Controls Card */}
        <div className="md:col-span-4 bg-white dark:bg-slate-800 p-8 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-xl flex flex-col h-fit relative overflow-hidden transition-colors">
          <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500 to-orange-700 opacity-5 blur-2xl rounded-full -mr-10 -mt-10`}></div>
          <div className="relative z-10">
            <label className="block text-[10px] font-black text-gray-500 dark:text-slate-500 uppercase mb-3 tracking-widest">Video Narrative</label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe your scene (e.g., A neon hologram of a cat driving at top speed)..."
              className="w-full h-32 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl p-4 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500/50 focus:outline-none resize-none mb-6 shadow-inner placeholder-gray-400 dark:placeholder-slate-600"
            />
            
            <div className="bg-gray-50 dark:bg-slate-900/50 border border-gray-200 dark:border-slate-700 rounded-xl p-4 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Key size={14} className="text-yellow-600 dark:text-yellow-500" />
                <span className="text-[10px] font-black text-gray-900 dark:text-white uppercase">Billing Required</span>
              </div>
              <p className="text-[10px] text-gray-500 dark:text-slate-500 font-bold leading-relaxed">
                Video generation requires a paid billing project. You'll be prompted to select one.
              </p>
            </div>

            <button
              onClick={checkKeyAndGenerate}
              disabled={loading || !prompt}
              className="w-full flex items-center justify-center py-4 bg-red-600 hover:bg-red-500 rounded-xl text-white text-[10px] font-black uppercase tracking-widest shadow-lg transition-all active:scale-95 disabled:opacity-50"
            >
              {loading ? <Loader2 className="animate-spin mr-2" size={16} /> : <Play className="mr-2" size={16} />}
              Generate Video
            </button>

            {status && (
              <p className="mt-4 text-[9px] font-black text-gray-400 dark:text-slate-500 uppercase text-center tracking-widest animate-pulse">
                {status}
              </p>
            )}
          </div>
        </div>

        {/* Viewport Card */}
        <div className="md:col-span-8 bg-gray-100 dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800 flex items-center justify-center min-h-[450px] p-6 relative shadow-2xl overflow-hidden group transition-colors">
          <div className={`absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-red-500 to-orange-700 opacity-5 blur-3xl rounded-full -ml-20 -mb-20 pointer-events-none`}></div>
          
          {loading && (
            <div className="absolute inset-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-20 transition-all">
              <div className="text-center">
                <Loader2 className="animate-spin text-red-500 mx-auto mb-4" size={48} />
                <p className="text-[10px] font-black text-gray-500 dark:text-slate-300 uppercase tracking-[0.2em] animate-pulse">Processing Frame Sequence</p>
              </div>
            </div>
          )}

          {!videoUrl && !loading && (
            <div className="text-center text-gray-400 dark:text-slate-700 relative z-10">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl inline-block mb-4 shadow-xl border border-gray-200 dark:border-slate-700/50">
                <Video size={40} />
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest">Output Viewport</p>
            </div>
          )}

          {videoUrl && !loading && (
            <div className="w-full flex flex-col relative z-10">
              <video 
                controls 
                autoPlay 
                loop 
                className="w-full aspect-video rounded-xl shadow-2xl border border-gray-200 dark:border-slate-800"
                src={videoUrl}
              />
              <div className="mt-4 flex items-center justify-between bg-white dark:bg-slate-800 p-4 rounded-xl border border-gray-200 dark:border-slate-700">
                <div className="flex items-center gap-3">
                  <Sparkles size={16} className="text-yellow-500" />
                  <span className="text-[10px] font-black text-gray-600 dark:text-slate-300 uppercase tracking-widest truncate max-w-[200px]">Veo Generation Complete</span>
                </div>
                <a 
                  href={videoUrl} 
                  download="scs-master-video.mp4"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-slate-700 text-gray-900 dark:text-white rounded-lg text-[10px] font-black uppercase transition-all shadow-md"
                >
                  <Download size={14} />
                  Download
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
