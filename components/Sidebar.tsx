import React from 'react';
import { Spiel } from '../types';

interface SidebarProps {
  spiels: Spiel[];
  onSelectSpiel: (id: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ spiels, onSelectSpiel }) => {
  return (
    <nav className="flex flex-col gap-1.5 pb-20">
      {spiels.map((spiel) => (
        <button
          key={spiel.id}
          onClick={() => onSelectSpiel(spiel.id)}
          title={spiel.title}
          className="
            group w-full text-left px-5 py-3.5 rounded-r-2xl mr-3
            text-sm font-medium transition-all duration-200 ease-out
            text-gray-600 dark:text-gray-400 
            hover:bg-blue-50 dark:hover:bg-blue-900/30 
            hover:text-blue-700 dark:hover:text-blue-300 
            hover:translate-x-1 hover:shadow-sm
            border-l-[3px] border-transparent hover:border-blue-500
            flex items-center
          "
        >
          <span className="truncate w-full leading-relaxed select-none">
            {spiel.title}
          </span>
          {/* Subtle arrow on hover */}
          <i className="fa-solid fa-chevron-right text-[10px] opacity-0 group-hover:opacity-50 -ml-2 group-hover:ml-2 transition-all duration-300"></i>
        </button>
      ))}
    </nav>
  );
};