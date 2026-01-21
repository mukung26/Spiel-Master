import React from 'react';
import { View } from '../types';
import { MessageSquare, Image, Video, Mic, ArrowRight } from 'lucide-react';

interface HomeViewProps {
  onNavigate: (view: View) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const cards = [
    {
      view: View.CHAT,
      title: "Chat Assistant",
      description: "Ask questions, get help with code, or write stories using Gemini 3 Flash.",
      icon: MessageSquare,
      color: "from-green-500 to-emerald-700"
    },
    {
      view: View.IMAGE,
      title: "Vision & Creation",
      description: "Generate stunning images with Imagen 3 or analyze photos with Gemini 2.5 Flash.",
      icon: Image,
      color: "from-purple-500 to-indigo-700"
    },
    {
      view: View.VIDEO,
      title: "Video Studio",
      description: "Create 720p videos from text prompts using the powerful Veo model.",
      icon: Video,
      color: "from-orange-500 to-red-700"
    },
    {
      view: View.LIVE,
      title: "Gemini Live",
      description: "Experience real-time, low-latency voice conversations with multimodal understanding.",
      icon: Mic,
      color: "from-blue-500 to-cyan-700"
    }
  ];

  return (
    <div className="p-6 md:p-12 max-w-6xl mx-auto animate-fade-in">
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-4xl font-bold mb-4 text-white">Welcome to Gemini Studio</h2>
        <p className="text-slate-400 text-lg max-w-2xl">
          Explore the capabilities of the latest Google Gemini models. 
          Generate text, images, video, and interact in real-time.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card) => (
          <button
            key={card.view}
            onClick={() => onNavigate(card.view)}
            className="group relative overflow-hidden bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-slate-500 transition-all duration-300 text-left"
          >
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${card.color} opacity-10 blur-2xl rounded-full -mr-10 -mt-10 transition-opacity group-hover:opacity-20`}></div>
            
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${card.color} bg-opacity-10`}>
                <card.icon className="text-white" size={32} />
              </div>
              <ArrowRight className="text-slate-500 group-hover:text-white transition-colors transform group-hover:translate-x-1" />
            </div>
            
            <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
            <p className="text-slate-400">{card.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};