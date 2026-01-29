
import React, { useState, useMemo } from 'react';
import { Spiel } from '../types';
import { ArrowUpDown, ChevronDown, Clock, Calendar, ArrowDownAZ } from 'lucide-react';

interface SidebarProps {
  spiels: Spiel[];
  onSelectSpiel: (id: string) => void;
  filterText?: string;
  variant: 'user' | 'default';
}

type SortOption = 'latest' | 'oldest' | 'az';

export const Sidebar: React.FC<SidebarProps> = ({ spiels, onSelectSpiel, filterText = '', variant }) => {
  const [sortOption, setSortOption] = useState<SortOption>('latest');
  const [isSortOpen, setIsSortOpen] = useState(false);

  // Filter first
  const filtered = useMemo(() => {
    return !filterText 
      ? spiels 
      : spiels.filter(s => s.title.toLowerCase().includes(filterText.toLowerCase()));
  }, [spiels, filterText]);

  // Then Sort
  const sortedSpiels = useMemo(() => {
    return [...filtered].sort((a, b) => {
      switch (sortOption) {
        case 'az':
          return a.title.localeCompare(b.title);
        case 'oldest':
          return a.createdAt - b.createdAt;
        case 'latest':
        default:
          return b.createdAt - a.createdAt;
      }
    });
  }, [filtered, sortOption]);

  const sortLabel = {
    'latest': 'Latest',
    'oldest': 'Oldest',
    'az': 'A-Z'
  }[sortOption];

  return (
    <div className="flex flex-col gap-1">
      {/* Subtle Sort Control */}
      <div className="relative px-5 mb-1 group">
         <button 
           onClick={() => setIsSortOpen(!isSortOpen)}
           className="flex items-center gap-1 text-[10px] text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 uppercase tracking-wider font-semibold transition-colors"
         >
           <span>{sortLabel}</span>
           <ChevronDown size={10} />
         </button>

         {isSortOpen && (
           <>
            <div className="fixed inset-0 z-10" onClick={() => setIsSortOpen(false)}></div>
            <div className="absolute top-full left-5 mt-1 bg-white dark:bg-[#282a2c] rounded shadow-lg border border-gray-100 dark:border-gray-700 py-1 z-20 min-w-[120px]">
               <button onClick={() => { setSortOption('latest'); setIsSortOpen(false); }} className="w-full text-left px-3 py-1.5 text-[11px] hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300">Latest</button>
               <button onClick={() => { setSortOption('oldest'); setIsSortOpen(false); }} className="w-full text-left px-3 py-1.5 text-[11px] hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300">Oldest</button>
               <button onClick={() => { setSortOption('az'); setIsSortOpen(false); }} className="w-full text-left px-3 py-1.5 text-[11px] hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300">Name (A-Z)</button>
            </div>
           </>
         )}
      </div>

      <div className="flex flex-col">
        {sortedSpiels.length === 0 ? (
          <div className="px-5 py-4 text-left">
            <p className="text-xs text-gray-400 italic">No items found.</p>
          </div>
        ) : (
          sortedSpiels.map((spiel) => (
            <button
              key={spiel.id}
              onClick={() => onSelectSpiel(spiel.id)}
              className={`
                group w-full text-left pl-5 pr-2 py-1.5
                text-sm font-medium transition-all duration-150
                text-gray-600 dark:text-gray-400
                hover:text-blue-600 dark:hover:text-blue-400
                hover:bg-blue-50 dark:hover:bg-blue-900/10
                border-l-[3px] border-transparent hover:border-blue-500
                truncate
              `}
              title={spiel.title}
            >
              {spiel.title}
            </button>
          ))
        )}
      </div>
    </div>
  );
};
