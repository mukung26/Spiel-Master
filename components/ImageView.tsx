import React, { useState, useRef } from 'react';
import { generateImage, analyzeImage } from '../services/geminiService';
import { Image as ImageIcon, Sparkles, Upload, Loader2, RefreshCw } from 'lucide-react';

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
      alert('Failed to generate image. Please try again.');
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
    <div className="p-4 md:p-8 max-w-5xl mx-auto h-full overflow-y-auto">
      <div className="flex mb-8 bg-slate-800 p-1 rounded-xl w-fit">
        <button
          onClick={() => { setActiveTab('generate'); setResult(null); setPrompt(''); }}
          className={`flex items-center px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === 'generate' ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-400 hover:text-white'
          }`}
        >
          <Sparkles size={16} className="mr-2" />
          Generate
        </button>
        <button
          onClick={() => { setActiveTab('analyze'); setResult(null); setPrompt(''); }}
          className={`flex items-center px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === 'analyze' ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-400 hover:text-white'
          }`}
        >
          <ImageIcon size={16} className="mr-2" />
          Analyze
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Controls Column */}
        <div className="md:col-span-1 space-y-6">
          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
            {activeTab === 'generate' ? (
              <>
                <label className="block text-sm font-medium text-slate-300 mb-2">Image Prompt</label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="A futuristic city with flying cars, neon lights, cyberpunk style..."
                  className="w-full h-32 bg-slate-900 border border-slate-700 rounded-xl p-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none mb-4"
                />
                <button
                  onClick={handleGenerate}
                  disabled={loading || !prompt}
                  className="w-full flex items-center justify-center py-3 bg-blue-600 hover:bg-blue-500 rounded-xl text-white font-medium disabled:opacity-50 transition-colors"
                >
                  {loading ? <Loader2 className="animate-spin mr-2" /> : <Sparkles className="mr-2" size={18} />}
                  Generate Image
                </button>
              </>
            ) : (
              <>
                <label className="block text-sm font-medium text-slate-300 mb-2">Upload Image</label>
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-slate-600 rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-700/50 hover:border-blue-500 transition-colors mb-4"
                >
                  {selectedFile ? (
                    <div className="text-center">
                      <ImageIcon className="mx-auto text-blue-400 mb-2" size={32} />
                      <p className="text-sm text-white truncate max-w-[200px]">{selectedFile.name}</p>
                    </div>
                  ) : (
                    <div className="text-center text-slate-400">
                      <Upload className="mx-auto mb-2" size={32} />
                      <p className="text-sm">Click to upload</p>
                    </div>
                  )}
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    onChange={handleFileChange} 
                    accept="image/*" 
                    className="hidden" 
                  />
                </div>

                <label className="block text-sm font-medium text-slate-300 mb-2">Question (Optional)</label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe this image..."
                  className="w-full h-24 bg-slate-900 border border-slate-700 rounded-xl p-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none mb-4"
                />
                 <button
                  onClick={handleAnalyze}
                  disabled={loading || !selectedFile}
                  className="w-full flex items-center justify-center py-3 bg-green-600 hover:bg-green-500 rounded-xl text-white font-medium disabled:opacity-50 transition-colors"
                >
                  {loading ? <Loader2 className="animate-spin mr-2" /> : <RefreshCw className="mr-2" size={18} />}
                  Analyze Image
                </button>
              </>
            )}
          </div>
        </div>

        {/* Result Column */}
        <div className="md:col-span-2 bg-slate-900 rounded-2xl border border-slate-800 flex items-center justify-center min-h-[400px] p-6 relative">
          {loading && (
            <div className="absolute inset-0 bg-slate-900/80 flex items-center justify-center z-10 rounded-2xl">
              <div className="text-center">
                <Loader2 className="animate-spin text-blue-500 mx-auto mb-3" size={48} />
                <p className="text-slate-300">Working magic...</p>
              </div>
            </div>
          )}

          {!result && !loading && (
            <div className="text-center text-slate-600">
              <div className="bg-slate-800 p-4 rounded-full inline-block mb-4">
                {activeTab === 'generate' ? <Sparkles size={32} /> : <ImageIcon size={32} />}
              </div>
              <p>Result will appear here</p>
            </div>
          )}

          {result && !loading && activeTab === 'generate' && (
            <img src={result} alt="Generated" className="max-w-full max-h-[600px] rounded-xl shadow-2xl" />
          )}

          {result && !loading && activeTab === 'analyze' && (
            <div className="w-full h-full flex flex-col">
              <div className="flex justify-center mb-6">
                {selectedFile && (
                  <img 
                    src={URL.createObjectURL(selectedFile)} 
                    alt="Original" 
                    className="h-48 rounded-lg object-contain bg-slate-800"
                  />
                )}
              </div>
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 flex-grow overflow-auto">
                <h3 className="text-lg font-semibold text-white mb-2">Analysis Result</h3>
                <p className="text-slate-300 whitespace-pre-wrap">{result}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};