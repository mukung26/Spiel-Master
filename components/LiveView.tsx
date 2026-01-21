import React, { useEffect, useRef, useState } from 'react';
import { GoogleGenAI, LiveServerMessage, Modality } from '@google/genai';
import { Mic, MicOff, Activity, XCircle } from 'lucide-react';
import { createPcmBlob, decodeAudioData, base64ToBytes } from '../utils/audioUtils';

export const LiveView: React.FC = () => {
  const [connected, setConnected] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  
  // Refs for audio context and handling
  const inputAudioContextRef = useRef<AudioContext | null>(null);
  const outputAudioContextRef = useRef<AudioContext | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const sessionRef = useRef<any>(null); // To hold the active session
  const nextStartTimeRef = useRef<number>(0);
  const sourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());

  // Cleanup function
  const disconnect = () => {
    if (sessionRef.current) {
      sessionRef.current.close();
      sessionRef.current = null;
    }
    
    // Stop all playing sources
    sourcesRef.current.forEach(source => {
      try { source.stop(); } catch(e) {}
    });
    sourcesRef.current.clear();

    // Close contexts
    if (inputAudioContextRef.current) {
      inputAudioContextRef.current.close();
      inputAudioContextRef.current = null;
    }
    if (outputAudioContextRef.current) {
      outputAudioContextRef.current.close();
      outputAudioContextRef.current = null;
    }
    
    // Stop microphone stream
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
      addLog("Initializing Audio Contexts...");
      const inputCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
      const outputCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      
      inputAudioContextRef.current = inputCtx;
      outputAudioContextRef.current = outputCtx;
      
      addLog("Requesting Microphone...");
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      addLog("Connecting to Gemini Live...");

      // Fallback API Key logic for LiveView
      const apiKey = (process.env.API_KEY && process.env.API_KEY !== 'PLACEHOLDER_API_KEY') 
        ? process.env.API_KEY.trim() 
        : "AIzaSyC7iXvQTgtD-0og2bRGcPnafxHBZ55bJjM";
        
      const ai = new GoogleGenAI({ apiKey });
      const model = 'gemini-2.5-flash-native-audio-preview-12-2025';

      // Create a promise wrapper for the session
      const sessionPromise = ai.live.connect({
        model,
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Zephyr' } },
          },
          systemInstruction: 'You are a helpful, concise AI assistant.',
        },
        callbacks: {
          onopen: () => {
            addLog("Connected! Start speaking.");
            setConnected(true);

            // Setup Input Processing
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
            // Handle Audio Output
            const base64Audio = message.serverContent?.modelTurn?.parts?.[0]?.inlineData?.data;
            
            if (base64Audio) {
              setIsSpeaking(true);
              const outputCtx = outputAudioContextRef.current;
              if (!outputCtx) return;

              nextStartTimeRef.current = Math.max(nextStartTimeRef.current, outputCtx.currentTime);
              
              const audioBuffer = await decodeAudioData(
                base64ToBytes(base64Audio),
                outputCtx,
                24000,
                1
              );

              const source = outputCtx.createBufferSource();
              source.buffer = audioBuffer;
              source.connect(outputCtx.destination);
              
              source.addEventListener('ended', () => {
                sourcesRef.current.delete(source);
                if (sourcesRef.current.size === 0) setIsSpeaking(false);
              });

              source.start(nextStartTimeRef.current);
              nextStartTimeRef.current += audioBuffer.duration;
              sourcesRef.current.add(source);
            }

            // Handle Interruption
            if (message.serverContent?.interrupted) {
              addLog("Interrupted.");
              for (const src of sourcesRef.current) {
                src.stop();
              }
              sourcesRef.current.clear();
              nextStartTimeRef.current = 0;
              setIsSpeaking(false);
            }
          },
          onclose: () => {
            addLog("Connection closed.");
            setConnected(false);
          },
          onerror: (e) => {
            console.error(e);
            addLog("Error occurred.");
          }
        }
      });

      // Save session reference to close it later
      sessionRef.current = await sessionPromise;

    } catch (err) {
      console.error(err);
      addLog("Failed to connect: " + err);
      setConnected(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 bg-slate-900">
      <div className="relative mb-12">
        {/* Visualizer Ring */}
        <div className={`absolute inset-0 rounded-full blur-2xl transition-all duration-300 ${
          connected 
            ? isSpeaking ? 'bg-blue-500 opacity-60 scale-150 animate-pulse' : 'bg-green-500 opacity-30 scale-110'
            : 'bg-slate-700 opacity-20'
        }`}></div>
        
        <div className={`
          relative z-10 w-48 h-48 rounded-full flex items-center justify-center border-4 shadow-2xl transition-all duration-500
          ${connected ? 'border-blue-400 bg-slate-800' : 'border-slate-700 bg-slate-800'}
        `}>
          {connected ? (
            <Activity className={`w-20 h-20 ${isSpeaking ? 'text-blue-400 animate-bounce' : 'text-green-400'}`} />
          ) : (
            <MicOff className="w-20 h-20 text-slate-600" />
          )}
        </div>
      </div>

      <div className="space-y-6 text-center z-10">
        <h2 className="text-3xl font-bold text-white">
          {connected ? (isSpeaking ? "Gemini is speaking..." : "Listening...") : "Start Live Session"}
        </h2>
        
        <div className="flex justify-center space-x-4">
          {!connected ? (
            <button
              onClick={connect}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold text-lg shadow-lg flex items-center transition-transform hover:scale-105"
            >
              <Mic className="mr-2" /> Connect
            </button>
          ) : (
            <button
              onClick={disconnect}
              className="px-8 py-4 bg-red-600 hover:bg-red-500 text-white rounded-full font-bold text-lg shadow-lg flex items-center transition-transform hover:scale-105"
            >
              <XCircle className="mr-2" /> End Session
            </button>
          )}
        </div>

        <div className="mt-8 bg-black/30 p-4 rounded-xl max-w-md mx-auto text-left h-32 overflow-y-auto font-mono text-xs text-slate-400 border border-slate-800">
          {logs.length === 0 ? <span className="opacity-50">Log output...</span> : logs.map((l, i) => <div key={i}>&gt; {l}</div>)}
        </div>
      </div>
    </div>
  );
};