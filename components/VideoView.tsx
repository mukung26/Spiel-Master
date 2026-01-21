import React, { useState } from 'react';
import { generateVideo } from '../services/geminiService';
import { Video, Loader2, Play, Key } from 'lucide-react';

export const VideoView: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string>('');

  const checkKeyAndGenerate = async () => {
    if (!prompt.trim()) return;

    setStatus('Checking API Key permissions...');
    
    // Check for API key selection (Veo requirement)
    // Cast window to any to avoid type conflicts with environment types
    const win = window as any;
    if (win.aistudio) {
      const hasKey = await win.aistudio.hasSelectedApiKey();
      if (!hasKey) {
        setStatus('Waiting for API key selection...');
        try {
          await win.aistudio.openSelectKey();
          // We assume success after the dialog closes, per instructions
        } catch (e) {
          console.error("Key selection failed/cancelled", e);
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
      // Retry logic for "Requested entity was not found" per prompt instructions
      if (e.message?.includes('Requested entity was not found') && win.aistudio) {
        setStatus('API Key issue detected. Prompting re-selection...');
        try {
          await win.aistudio.openSelectKey();
          setStatus('Retrying generation...');
          const url = await generateVideo(prompt);
          setVideoUrl(url);
          setStatus('Complete!');
        } catch (retryError) {
          console.error("Retry failed", retryError);
          setStatus('Generation failed. Please check console.');
        }
      } else {
        setStatus(`Error: ${e.message || 'Unknown error'}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto h-full overflow-y-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center">
          <Video className="mr-3 text-red-500" />
          Veo Video Studio
        </h2>
        <p className="text-slate-400">
          Generate 720p videos from text prompts using Google's Veo model. 
          <br/>
          <span className="text-xs text-slate-500">*Requires a paid billing project selected via the popup.</span>
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
          <label className="block text-sm font-medium text-slate-300 mb-2">Video Prompt</label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="A neon hologram of a cat driving at top speed..."
            className="w-full h-24 bg-slate-900 border border-slate-700 rounded-xl p-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-red-500 focus:outline-none resize-none mb-4"
          />
          <div className="flex justify-between items-center">
             <div className="text-sm text-yellow-500 flex items-center">
               <Key size={14} className="mr-1" />
               Billing Project Required
             </div>
             <button
              onClick={checkKeyAndGenerate}
              disabled={loading || !prompt}
              className="px-6 py-3 bg-red-600 hover:bg-red-500 rounded-xl text-white font-medium disabled:opacity-50 transition-colors flex items-center"
            >
              {loading ? <Loader2 className="animate-spin mr-2" /> : <Play className="mr-2" size={18} />}
              Generate Video
            </button>
          </div>
          {status && <p className="mt-4 text-sm text-slate-400 text-center">{status}</p>}
        </div>

        {videoUrl && (
          <div className="bg-black rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
            <video 
              controls 
              autoPlay 
              loop 
              className="w-full aspect-video"
              src={videoUrl}
            >
              Your browser does not support the video tag.
            </video>
            <div className="p-4 bg-slate-900 flex justify-between items-center">
              <span className="text-white font-medium truncate pr-4">{prompt}</span>
              <a 
                href={videoUrl} 
                download="gemini-video.mp4"
                className="text-sm text-blue-400 hover:text-blue-300"
              >
                Download
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};