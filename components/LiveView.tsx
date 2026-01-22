
import React, { useEffect, useRef, useState } from 'react';
import { GoogleGenAI, LiveServerMessage, Modality } from '@google/genai';
import { Mic, MicOff, Activity, XCircle, ShieldCheck, Zap, AudioLines } from 'lucide-react';
import { createPcmBlob, decodeAudioData, base64ToBytes } from '../utils/audioUtils';

export const LiveView: React.FC = () => {
  const [connected, setConnected] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  
  const inputAudioContextRef = useRef<AudioContext | null>(null);
  const outputAudioContextRef = useRef<AudioContext | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const sessionRef = useRef<any>(null);
  const nextStartTimeRef = useRef<number>(0);
  const sourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());

  const disconnect = () => {
    if (sessionRef.current) {
      sessionRef.current.close();
      sessionRef.current = null;
    }
    sourcesRef.current.forEach(source => {
      try { source.stop(); } catch(e) {}
    });
    sourcesRef.current.clear();
    if (inputAudioContextRef.current) {
      inputAudioContextRef.current.close();
      inputAudioContextRef.current = null;
    }
    if (outputAudioContextRef.current) {
      outputAudioContextRef.current.close();
      outputAudioContextRef.current = null;
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    setConnected(false);
    setIsSpeaking(false);
    addLog("Session disconnected.");
  };

  useEffect(() => {
    return () => disconnect();
  }, []);

  const addLog = (msg: string) => setLogs(prev => [...prev.slice(-4), msg]);

  const connect = async () => {
    try {
      addLog("Initializing Audio Pipeline...");
      const inputCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
      const outputCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      inputAudioContextRef.current = inputCtx;
      outputAudioContextRef.current = outputCtx;
      
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      addLog("Microphone Ready.");

      const apiKey = process.env.API_KEY;
      if (!apiKey) throw new Error("API_KEY not defined");
        
      const ai = new GoogleGenAI({ apiKey });
      const model = 'gemini-2.5-flash-native-audio-preview-12-2025';

      const sessionPromise = ai.live.connect({
        model,
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Zephyr' } },
          },
          systemInstruction: 'You are a professional customer service trainer. Respond briefly and clearly.',
        },
        callbacks: {
          onopen: () => {
            addLog("AI Session Active.");
            setConnected(true);
            const source = inputCtx.createMediaStreamSource(stream);
            const scriptProcessor = inputCtx.createScriptProcessor(4096, 1, 1);
            scriptProcessor.onaudioprocess = (e) => {
              const inputData = e.inputBuffer.getChannelData(0);
              const pcmBlob = createPcmBlob(inputData);
              sessionPromise.then(session => {
                session.sendRealtimeInput({ media: pcmBlob });
              });
            };
            source.connect(scriptProcessor);
            scriptProcessor.connect(inputCtx.destination);
          },
          onmessage: async (message: LiveServerMessage) => {
            const base64Audio = message.serverContent?.modelTurn?.parts?.[0]?.inlineData?.data;
            if (base64Audio) {
              setIsSpeaking(true);
              const outCtx = outputAudioContextRef.current;
              if (!outCtx) return;
              nextStartTimeRef.current = Math.max(nextStartTimeRef.current, outCtx.currentTime);
              const audioBuffer = await decodeAudioData(base64ToBytes(base64Audio), outCtx, 24000, 1);
              const source = outCtx.createBufferSource();
              source.buffer = audioBuffer;
              source.connect(outCtx.destination);
              source.addEventListener('ended', () => {
                sourcesRef.current.delete(source);
                if (sourcesRef.current.size === 0) setIsSpeaking(false);
              });
              source.start(nextStartTimeRef.current);
              nextStartTimeRef.current += audioBuffer.duration;
              sourcesRef.current.add(source);
            }
            if (message.serverContent?.interrupted) {
              for (const src of sourcesRef.current) { try { src.stop(); } catch(e) {} }
              sourcesRef.current.clear();
              nextStartTimeRef.current = 0;
              setIsSpeaking(false);
            }
          },
          onclose: () => { setConnected(false); },
          onerror: (e) => { addLog("Connection error."); }
        }
      });
      sessionRef.current = await sessionPromise;
    } catch (err) {
      addLog("Connection failed.");
      setConnected(false);
    }
  };

  return (
    <div className="p-6 md:p-12 max-w-6xl mx-auto h-full flex flex-col animate-fade-in overflow-y-auto">
      
      {/* Dashboard Header */}
      <div className="mb-8 text-center md:text-left">
        <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
           <ShieldCheck className="text-green-500" size={20} />
           <span className="text-xs font-black text-green-500 uppercase tracking-widest">Audio Intelligence Tool</span>
        </div>
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Gemini Live Voice</h2>
        <p className="text-gray-500 dark:text-slate-400 text-lg max-w-2xl">
          Real-time spoken interaction for policy practice or instant support queries. Low-latency, human-like voice response.
        </p>
      </div>

      {/* Main Interactive Card */}
      <div className="flex-1 bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-2xl flex flex-col min-h-[500px] overflow-hidden relative items-center justify-center transition-colors">
        <div className={`absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-800 opacity-5 blur-3xl rounded-full pointer-events-none`}></div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="mb-12 relative group">
            {/* Visualizer Ring */}
            <div className={`absolute inset-0 rounded-full blur-3xl transition-all duration-700 ${
              connected 
                ? isSpeaking ? 'bg-green-500 opacity-40 scale-150 animate-pulse' : 'bg-green-400 opacity-10 scale-110'
                : 'bg-gray-400 dark:bg-slate-700 opacity-5'
            }`}></div>
            
            <div className={`
              relative z-10 w-48 h-48 rounded-full flex items-center justify-center border-4 shadow-2xl transition-all duration-500
              ${connected ? 'border-green-500 bg-gray-50 dark:bg-slate-900' : 'border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900'}
            `}>
              {connected ? (
                <AudioLines className={`w-16 h-16 ${isSpeaking ? 'text-green-500 animate-bounce' : 'text-green-400/50'}`} />
              ) : (
                <MicOff className="w-16 h-16 text-gray-300 dark:text-slate-700" />
              )}
            </div>
          </div>

          <div className="text-center space-y-8 max-w-sm w-full">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {connected ? (isSpeaking ? "Gemini is speaking..." : "Listening...") : "Ready for connection"}
              </h3>
              <p className="text-[10px] font-black text-gray-500 dark:text-slate-500 uppercase tracking-widest leading-relaxed">
                {connected ? "Speak naturally as if talking to a colleague." : "Start a live session to activate the audio pipeline."}
              </p>
            </div>
            
            <div className="flex justify-center">
              {!connected ? (
                <button
                  onClick={connect}
                  className="px-10 py-4 bg-green-600 hover:bg-green-500 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-green-600/10 flex items-center transition-all hover:scale-105 active:scale-95"
                >
                  <Mic className="mr-2" size={16} /> Establish Link
                </button>
              ) : (
                <button
                  onClick={disconnect}
                  className="px-10 py-4 bg-red-600 hover:bg-red-500 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-red-600/10 flex items-center transition-all hover:scale-105 active:scale-95"
                >
                  <XCircle className="mr-2" size={16} /> Terminate
                </button>
              )}
            </div>

            <div className="bg-gray-100 dark:bg-slate-900/80 border border-gray-200 dark:border-slate-700 p-4 rounded-xl h-24 overflow-y-auto custom-scrollbar text-left font-mono text-[10px] text-gray-500 dark:text-slate-500 space-y-1">
              {logs.length === 0 ? <span className="opacity-40">&gt; Awaiting activity...</span> : logs.map((l, i) => <div key={i} className="animate-in slide-in-from-left-2">&gt; {l}</div>)}
            </div>
          </div>
        </div>

        {/* Footer Indicators */}
        <div className="absolute bottom-6 flex gap-4">
           <div className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 dark:bg-slate-900/50 rounded-full border border-gray-200 dark:border-slate-700/50">
             <Zap size={10} className="text-yellow-500" />
             <span className="text-[9px] font-black text-gray-400 dark:text-slate-400 uppercase tracking-tighter">Native Audio Engine</span>
           </div>
           <div className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 dark:bg-slate-900/50 rounded-full border border-gray-200 dark:border-slate-700/50">
             <Activity size={10} className="text-blue-500" />
             <span className="text-[9px] font-black text-gray-400 dark:text-slate-400 uppercase tracking-tighter">24k Stereo Out</span>
           </div>
        </div>
      </div>
    </div>
  );
};
