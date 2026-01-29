
import React from 'react';
import { Spiel } from '../types';
import { Trash2, Pin, Pencil, RotateCcw, ShieldCheck } from 'lucide-react';

interface SpielCardProps {
  spiel: Spiel;
  onCopy: (msg: string) => void;
  isAdmin?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
  onRestore?: () => void;
  onPin?: () => void;
  onExpand?: () => void;
  isTrashView?: boolean;
  onViewImage?: (url: string) => void;
  isEditMode?: boolean;
}

export const SpielCard: React.FC<SpielCardProps> = ({ 
  spiel, onCopy, isAdmin, onEdit, onDelete, onRestore, onPin, onExpand, isTrashView = false, onViewImage, isEditMode = false
}) => {
  
  const copyToClipboard = async (text: string, lang: 'EN' | 'BR') => {
    try {
      await navigator.clipboard.writeText(text);
      onCopy(`${lang} Copied!`);
    } catch (err) {
      onCopy('Failed to copy text.');
    }
  };

  // Helper to parse links and preserve newlines
  const formatContent = (text: string) => {
    if (!text) return null;
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);
    return parts.map((part, i) => {
      if (part.match(urlRegex)) {
        return (
          <a 
            key={i} 
            href={part} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 dark:text-blue-400 hover:underline z-20 relative break-all font-bold"
            onClick={(e) => e.stopPropagation()}
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  const isUrgent = spiel.category === 'Return/Refund' || spiel.title.toLowerCase().includes('scam') || spiel.title.toLowerCase().includes('urgent');
  
  // Custom background logic
  const getBackgroundColor = () => {
    if (isUrgent && !isTrashView) return 'bg-[#3f1212] border-red-900/50';
    if (spiel.color) return `${spiel.color} border-transparent`;
    return 'bg-white dark:bg-[#1e1e1e] border-gray-200 dark:border-[#333]';
  };

  const bgClass = getBackgroundColor();
  
  const isUrgentDark = isUrgent && !isTrashView;
  const textColorClass = isUrgentDark ? 'text-white' : 'text-gray-900 dark:text-gray-100';
  const subTextColorClass = isUrgentDark ? 'text-white/80' : 'text-gray-600 dark:text-gray-300';
  const borderColorClass = isUrgentDark ? 'border-white/20' : 'border-gray-200 dark:border-gray-700';

  const images = spiel.images || [];

  // Render Google Keep Style Image Grid with Black Separator Lines
  const renderImageGrid = () => {
    if (images.length === 0) return null;

    const handleImageClick = (e: React.MouseEvent, img: string) => {
        e.stopPropagation();
        onViewImage?.(img);
    };

    // Common grid container style with black background for gap lines
    const gridContainerClass = "w-full bg-black border-b border-gray-200 dark:border-gray-800";

    if (images.length === 1) {
        return (
            <div className="w-full h-40 bg-gray-100 dark:bg-gray-800 relative group/image">
                <img 
                    src={images[0]} 
                    alt="attachment" 
                    className="w-full h-full object-cover transition-opacity hover:opacity-90 cursor-zoom-in" 
                    onClick={(e) => handleImageClick(e, images[0])}
                    loading="lazy"
                />
            </div>
        );
    }

    if (images.length === 2) {
        return (
            <div className={`${gridContainerClass} h-40 grid grid-cols-2 gap-[1px]`}>
                {images.map((img, i) => (
                    <div key={i} className="relative w-full h-full overflow-hidden bg-white dark:bg-gray-800">
                        <img 
                            src={img} 
                            alt={`attachment ${i}`} 
                            className="w-full h-full object-cover hover:opacity-90 cursor-zoom-in"
                            onClick={(e) => handleImageClick(e, img)}
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        );
    }

    if (images.length === 3) {
        return (
            <div className={`${gridContainerClass} h-52 flex flex-col gap-[1px]`}>
                <div className="w-full h-[60%] overflow-hidden relative bg-white dark:bg-gray-800">
                     <img 
                        src={images[0]} 
                        alt="attachment 0" 
                        className="w-full h-full object-cover hover:opacity-90 cursor-zoom-in"
                        onClick={(e) => handleImageClick(e, images[0])}
                        loading="lazy"
                    />
                </div>
                <div className="w-full h-[40%] grid grid-cols-2 gap-[1px]">
                    {images.slice(1).map((img, i) => (
                        <div key={i} className="relative w-full h-full overflow-hidden bg-white dark:bg-gray-800">
                            <img 
                                src={img} 
                                alt={`attachment ${i+1}`} 
                                className="w-full h-full object-cover hover:opacity-90 cursor-zoom-in"
                                onClick={(e) => handleImageClick(e, img)}
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // 4 or more
    const displayImages = images.slice(0, 4);
    const remaining = images.length - 4;
    
    return (
        <div className={`${gridContainerClass} h-52 grid grid-cols-2 grid-rows-2 gap-[1px]`}>
            {displayImages.map((img, i) => (
                <div key={i} className="relative w-full h-full overflow-hidden group/item bg-white dark:bg-gray-800">
                    <img 
                        src={img} 
                        alt={`attachment ${i}`} 
                        className="w-full h-full object-cover hover:opacity-90 cursor-zoom-in"
                        onClick={(e) => handleImageClick(e, img)}
                        loading="lazy"
                    />
                    {i === 3 && remaining > 0 && (
                        <div 
                            className="absolute inset-0 bg-black/50 flex items-center justify-center cursor-pointer hover:bg-black/40 transition-colors"
                            onClick={(e) => { e.stopPropagation(); onExpand?.(); }}
                        >
                            <span className="text-white font-bold text-lg">+{remaining}</span>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
  };

  return (
    <div 
      id={spiel.id}
      className={`
        relative flex flex-col break-inside-avoid h-full rounded-xl overflow-hidden transition-all duration-200 border shadow-sm
        ${bgClass}
        ${!isTrashView ? 'cursor-pointer hover:shadow-md' : ''}
      `}
      onClick={!isTrashView ? onExpand : undefined}
    >
      {/* Image Grid - Replaces old Cover Image */}
      {renderImageGrid()}

      <div className="p-4 flex flex-col gap-2 flex-grow">
         {/* Header */}
         <div className="flex justify-between items-start gap-2 relative">
            <h3 className={`font-bold text-sm leading-tight pr-4 ${textColorClass}`}>
               {spiel.title}
            </h3>
            
            <div className="flex flex-col items-center gap-1">
                {spiel.isDefault && (
                    <ShieldCheck size={12} className="text-orange-500 flex-shrink-0" />
                )}
                {/* Pin Indicator on Card */}
                 {spiel.isPinned && !isTrashView && (
                    <div className="absolute top-0 right-0 -mt-1 -mr-1">
                         <Pin size={12} className="text-gray-900 dark:text-gray-100 fill-current" />
                    </div>
                 )}
            </div>
         </div>

         {/* Content - Compact text */}
         <div className={`space-y-2 text-xs leading-relaxed ${subTextColorClass}`}>
            {spiel.english && (
               <div className="line-clamp-6 transition-all select-none">
                  {formatContent(spiel.english)}
               </div>
            )}
            
            {spiel.english && spiel.brazil && (
               <div className={`border-t border-dashed ${borderColorClass}`}></div>
            )}

            {spiel.brazil && (
               <div className="line-clamp-6 transition-all select-none">
                  {formatContent(spiel.brazil)}
               </div>
            )}
         </div>

         {/* Footer Controls */}
         <div className={`flex items-center justify-between pt-3 mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200`}>
             {/* Copy Chips - Always visible if hovering */}
             <div className="flex gap-1.5">
                {spiel.english && (
                   <button 
                     onClick={(e) => { e.stopPropagation(); copyToClipboard(spiel.english, 'EN'); }}
                     className={`px-2 py-0.5 rounded text-[9px] font-black border opacity-80 hover:opacity-100 transition-opacity ${isUrgentDark ? 'border-white/40 text-white' : 'border-gray-300 text-gray-500 dark:border-gray-600 dark:text-gray-400'}`}
                   >
                     EN
                   </button>
                )}
                {spiel.brazil && (
                   <button 
                     onClick={(e) => { e.stopPropagation(); copyToClipboard(spiel.brazil, 'BR'); }}
                     className={`px-2 py-0.5 rounded text-[9px] font-black border opacity-80 hover:opacity-100 transition-opacity ${isUrgentDark ? 'border-white/40 text-white' : 'border-gray-300 text-gray-500 dark:border-gray-600 dark:text-gray-400'}`}
                   >
                     BZ
                   </button>
                )}
             </div>

             {/* Actions */}
             <div className="flex gap-1">
                {!isTrashView ? (
                  <>
                     {onPin && (
                        <button onClick={(e) => {e.stopPropagation(); onPin()}} className={`p-1.5 rounded-full hover:bg-black/10 dark:hover:bg-white/10 ${spiel.isPinned ? 'text-gray-900 dark:text-gray-100' : 'text-gray-400'}`}>
                           <Pin size={14} className={spiel.isPinned ? "fill-current" : ""} />
                        </button>
                     )}
                     {isAdmin && !spiel.isDefault && (
                        <button onClick={(e) => {e.stopPropagation(); onEdit?.()}} className={`p-1.5 rounded-full hover:bg-black/10 dark:hover:bg-white/10 ${isUrgentDark ? 'text-white/70 hover:text-white' : 'text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}>
                           <Pencil size={14} />
                        </button>
                     )}
                     {isAdmin && !spiel.isDefault && (
                        <button onClick={(e) => {e.stopPropagation(); onDelete?.()}} className="p-1.5 rounded-full hover:bg-black/10 dark:hover:bg-white/10 text-gray-400 hover:text-red-500">
                           <Trash2 size={14} />
                        </button>
                     )}
                  </>
                ) : (
                  <>
                     <button onClick={(e) => {e.stopPropagation(); onRestore?.()}} className="p-1 text-green-500"><RotateCcw size={14} /></button>
                     <button onClick={(e) => {e.stopPropagation(); onDelete?.()}} className="p-1 text-red-500"><Trash2 size={14} /></button>
                  </>
                )}
             </div>
           </div>
      </div>
    </div>
  );
};
