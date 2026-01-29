
import React from 'react';
import { View } from '../types';
import { MessageSquare, Languages, ArrowRight, ShieldCheck, Scissors } from 'lucide-react';

interface HomeViewProps {
  onNavigate: (view: View) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const cards = [
    {
      view: View.CHAT,
      title: "Chat AI Assistant",
      description: "Get real-time help with seller cases based strictly on professional SOPs.",
      icon: MessageSquare,
      color: "from-blue-500 to-indigo-700"
    },
    {
      view: View.TRANSLATOR,
      title: "Pro Translator",
      description: "Instant translation between English and Portuguese with a focus on CS professional tone.",
      icon: Languages,
      color: "from-orange-500 to-red-700"
    },
    {
      view: View.EDITOR,
      title: "Image Editor",
      description: "Paste screenshots, add arrows/circles, and save edits locally. Great for highlighting evidence.",
      icon: Scissors,
      color: "from-purple-500 to-pink-700"
    }
  ];

  return (
    <div className="p-6 md:p-12 max-w-6xl mx-auto animate-fade-in overflow-y-auto h-full">
      <div className="mb-12 text-center md:text-left">
        <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
           <ShieldCheck className="text-orange-500" size={20} />
           <span className="text-xs font-black text-orange-500 uppercase tracking-widest">Professional Suite</span>
        </div>
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">CS Workspace</h2>
        <p className="text-gray-600 dark:text-slate-400 text-lg max-w-2xl">
          Streamlined AI tools for efficient customer support. 
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <button
            key={card.view}
            onClick={() => onNavigate(card.view)}
            className="group relative overflow-hidden bg-white dark:bg-[#1e1e1e] rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 text-left flex flex-col h-full shadow-sm hover:shadow-xl"
          >
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${card.color} opacity-5 blur-2xl rounded-full -mr-10 -mt-10 transition-opacity group-hover:opacity-15`}></div>
            
            <div className="flex items-start justify-between mb-4">
              <div className={`p-4 rounded-xl bg-gradient-to-br ${card.color} shadow-lg text-white`}>
                <card.icon size={24} />
              </div>
              <ArrowRight className="text-gray-300 dark:text-gray-600 group-hover:text-gray-900 dark:group-hover:text-white transition-colors transform group-hover:translate-x-1" />
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{card.title}</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm flex-grow">{card.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};
