import React from 'react';
import { Spiel } from '../types';
import { RotateCcw, Trash2 } from 'lucide-react';

interface SpielCardProps {
  spiel: Spiel;
  onCopy: (msg: string) => void;
  isAdmin?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
  onRestore?: () => void;
  isTrashView?: boolean;
}

export const SpielCard: React.FC<SpielCardProps> = ({ 
  spiel, onCopy, isAdmin, onEdit, onDelete, onRestore, isTrashView = false 
}) => {
  
  const copyToClipboard = async (text: string, lang: 'EN' | 'BR') => {
    try {
      await navigator.clipboard.writeText(text);
      onCopy(`Copied ${lang} response`);
    } catch (err) {
      onCopy('Failed to copy text.');
    }
  };

  const copyImageToClipboard = async (imageUrl: string) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      await navigator.clipboard.write([
        new ClipboardItem({ [blob.type]: blob })
      ]);
      onCopy('Image copied!');
    } catch (err) {
      onCopy('Right-Click -> Copy Image');
    }
  };

  return (
    <div id={spiel.id} className={`bg-white dark:bg-[#303134] rounded-[24px] shadow-sm hover:shadow-md border transition-all duration-200 overflow-hidden group/card scroll-mt-32 ${isTrashView ? 'border-red-200 dark:border-red-900/30' : 'border-gray-100 dark:border-transparent'}`}>
      {/* Card Header */}
      <div className="px-8 pt-8 pb-4 flex flex-wrap justify-between items-start gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
             <span className={`text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md ${isTrashView ? 'bg-red-50 text-red-500 dark:bg-red-900/20' : 'text-blue-600 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30'}`}>
              {spiel.category}
            </span>
            {spiel.tags?.map(tag => (
              <span key={tag} className="text-[11px] text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md">#{tag}</span>
            ))}
            {isTrashView && <span className="text-[10px] font-black uppercase text-red-500 tracking-widest bg-red-100 dark:bg-red-900/40 px-2 py-1 rounded">Deleted</span>}
          </div>
          <h3 className={`font-medium text-xl tracking-tight leading-snug ${isTrashView ? 'text-gray-500 dark:text-gray-400 line-through' : 'text-gray-900 dark:text-gray-100'}`}>
            {spiel.title}
          </h3>
        </div>
        
        {isAdmin && (
          <div className="flex gap-2">
            {isTrashView ? (
               <>
                 <button 
                  onClick={onRestore}
                  className="px-3 h-8 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 hover:bg-green-100 flex items-center justify-center gap-1 transition-colors text-xs font-bold"
                  title="Restore"
                >
                  <RotateCcw size={12} />
                  Restore
                </button>
                <button 
                  onClick={onDelete}
                  className="px-3 h-8 rounded-full bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-100 flex items-center justify-center gap-1 transition-colors text-xs font-bold"
                  title="Delete Permanently"
                >
                  <Trash2 size={12} />
                  Forever
                </button>
               </>
            ) : (
               <>
                <button 
                  onClick={onEdit}
                  className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 flex items-center justify-center transition-colors"
                  title="Edit"
                >
                  <i className="fa-solid fa-pencil text-xs"></i>
                </button>
                <button 
                  onClick={onDelete}
                  className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-red-100 hover:text-red-600 flex items-center justify-center transition-colors"
                  title="Move to Trash"
                >
                  <i className="fa-solid fa-trash text-xs"></i>
                </button>
               </>
            )}
          </div>
        )}
      </div>

      {/* Content Blocks */}
      <div className={`px-6 pb-8 flex flex-col md:flex-row gap-4 ${isTrashView ? 'opacity-60' : ''}`}>
        
        {/* Brazil Block */}
        <div className="flex-1 bg-gray-50 dark:bg-[#202124] rounded-2xl p-5 relative group/block border border-gray-100 dark:border-gray-800">
          <div className="flex justify-between items-center mb-3">
             <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Portuguese</span>
             </div>
             {!isTrashView && (
               <button 
                onClick={() => copyToClipboard(spiel.brazil, 'BR')}
                className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                title="Copy"
               >
                 <i className="fa-regular fa-copy text-sm"></i>
               </button>
             )}
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-[15px] leading-relaxed whitespace-pre-wrap font-normal selection:bg-blue-200 dark:selection:bg-blue-900">
            {spiel.brazil}
          </p>
        </div>

        {/* English Block */}
        <div className="flex-1 bg-gray-50 dark:bg-[#202124] rounded-2xl p-5 relative group/block border border-gray-100 dark:border-gray-800">
          <div className="flex justify-between items-center mb-3">
             <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">English</span>
             </div>
             {!isTrashView && (
               <button 
                onClick={() => copyToClipboard(spiel.english, 'EN')}
                className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                title="Copy"
               >
                 <i className="fa-regular fa-copy text-sm"></i>
               </button>
             )}
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-[15px] leading-relaxed whitespace-pre-wrap font-normal selection:bg-blue-200 dark:selection:bg-blue-900">
            {spiel.english}
          </p>
        </div>

      </div>

      {/* Images Section */}
      {spiel.images && spiel.images.length > 0 && !isTrashView && (
        <div className="px-8 pb-8">
           <div className="flex items-center gap-2 mb-3">
              <i className="fa-solid fa-image text-gray-400 text-xs"></i>
              <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Visual Aids</span>
           </div>
           <div className="flex gap-3 overflow-x-auto pb-2">
             {spiel.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => copyImageToClipboard(img)}
                  className="relative group rounded-xl overflow-hidden h-24 w-auto flex-shrink-0 border border-gray-200 dark:border-gray-700 hover:ring-2 hover:ring-blue-500 hover:ring-offset-1 dark:hover:ring-offset-[#303134] transition-all"
                >
                  <img src={img} alt="Visual aid" className="h-full w-auto object-cover" />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <i className="fa-solid fa-copy text-white drop-shadow-md"></i>
                  </div>
                </button>
             ))}
           </div>
        </div>
      )}
    </div>
  );
};