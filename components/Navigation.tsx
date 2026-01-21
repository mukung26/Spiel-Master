import React from 'react';
import { View } from '../types';
import { MessageSquare, Image, Video, Mic, Home, LayoutGrid } from 'lucide-react';

interface NavigationProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentView, onNavigate }) => {
  const navItems = [
    { view: View.HOME, label: 'Dashboard', icon: LayoutGrid },
    { view: View.CHAT, label: 'Chat', icon: MessageSquare },
    { view: View.IMAGE, label: 'Vision & Image', icon: Image },
    { view: View.VIDEO, label: 'Veo Video', icon: Video },
    { view: View.LIVE, label: 'Gemini Live', icon: Mic },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full md:w-64 md:relative md:h-screen bg-slate-900 border-t md:border-t-0 md:border-r border-slate-700 z-50">
      <div className="hidden md:flex items-center justify-center h-16 border-b border-slate-700">
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Gemini Studio
        </h1>
      </div>
      
      <div className="flex md:flex-col justify-around md:justify-start p-2 md:p-4 gap-1 md:gap-2 overflow-x-auto">
        {navItems.map((item) => {
          const isActive = currentView === item.view;
          return (
            <button
              key={item.view}
              onClick={() => onNavigate(item.view)}
              className={`
                flex flex-col md:flex-row items-center md:px-4 md:py-3 rounded-lg transition-all duration-200
                flex-1 md:flex-none
                ${isActive 
                  ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}
              `}
            >
              <item.icon size={20} className="mb-1 md:mb-0 md:mr-3" />
              <span className="text-xs md:text-sm font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};