
import React from 'react';
import { View } from '../types';
import { MessageSquare, Languages, LayoutGrid, Bug, Scissors, Shield } from 'lucide-react';

interface NavigationProps {
  currentView: View;
  onNavigate: (view: View) => void;
  isAdmin?: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({ currentView, onNavigate, isAdmin }) => {
  const navItems = [
    { view: View.HOME, label: 'Dashboard', icon: LayoutGrid },
    { view: View.CHAT, label: 'Chat AI', icon: MessageSquare },
    { view: View.TRANSLATOR, label: 'Translator', icon: Languages },
    { view: View.EDITOR, label: 'Image Editor', icon: Scissors },
  ];

  if (isAdmin) {
    navItems.push({ view: View.ADMIN, label: 'Admin', icon: Shield });
  }

  return (
    <nav className="w-full md:w-72 bg-white dark:bg-[#202124] border-t md:border-t-0 md:border-r border-gray-100 dark:border-gray-800 flex flex-col transition-colors duration-300">
      <div className="flex md:flex-col justify-around md:justify-start p-2 md:p-4 gap-1 md:gap-1 overflow-x-auto flex-1 no-scrollbar">
        {navItems.map((item) => {
          const isActive = currentView === item.view;
          return (
            <button
              key={item.view}
              onClick={() => onNavigate(item.view)}
              className={`
                flex flex-col md:flex-row items-center md:px-3 md:py-2.5 rounded-lg transition-all duration-200
                flex-1 md:flex-none min-w-[70px] md:min-w-0 text-left
                ${isActive 
                  ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-bold' 
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium'}
              `}
            >
              <item.icon size={16} className={`mb-1 md:mb-0 md:mr-3 ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400 dark:text-gray-500'}`} />
              <span className="text-[10px] md:text-xs tracking-wide">{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Support Footer */}
      <div className="hidden md:block p-6 border-t border-gray-100 dark:border-gray-800 mt-auto bg-gray-50/50 dark:bg-black/20">
        <div className="group flex items-start gap-3 p-3 rounded-xl hover:bg-white dark:hover:bg-slate-800 transition-all border border-transparent hover:border-gray-200 dark:hover:border-slate-700">
          <Bug size={14} className="text-gray-400 dark:text-gray-600 mt-0.5 group-hover:text-blue-500 transition-colors" />
          <p className="text-[10px] font-bold text-gray-500 dark:text-gray-500 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">
            For bugs or improvements, kindly contact <a href="https://link.seatalk.io/profile/open?seatalk_id=1223036706" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 font-black hover:underline">Kong</a>.
          </p>
        </div>
      </div>
    </nav>
  );
};
