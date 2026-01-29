
import React, { useEffect, useState, useRef } from 'react';
import { Spiel } from '../types';
import { X, Copy, Image as ImageIcon, ShieldCheck, User, Pencil, Trash2, Pin, ZoomIn, Palette } from 'lucide-react';
import { compressImage } from '../utils/imageUtils';

interface SpielDetailModalProps {
  spiel: Spiel;
  onClose: () => void;
  onCopy: (msg: string) => void;
  onEdit?: () => void;
  isAdmin?: boolean;
  onSave?: (id: string, updates: Partial<Spiel>) => void;
  onViewImage?: (url: string) => void;
}

const COLORS = [
  { label: 'Default', value: 'bg-white dark:bg-[#202124]' },
  { label: 'Red', value: 'bg-red-100 dark:bg-red-900/30' },
  { label: 'Orange', value: 'bg-orange-100 dark:bg-orange-900/30' },
  { label: 'Yellow', value: 'bg-yellow-100 dark:bg-yellow-900/30' },
  { label: 'Green', value: 'bg-green-100 dark:bg-green-900/30' },
  { label: 'Teal', value: 'bg-teal-100 dark:bg-teal-900/30' },
  { label: 'Blue', value: 'bg-blue-100 dark:bg-blue-900/30' },
  { label: 'Purple', value: 'bg-purple-100 dark:bg-purple-900/30' },
  { label: 'Pink', value: 'bg-pink-100 dark:bg-pink-900/30' },
  { label: 'Gray', value: 'bg-gray-100 dark:bg-gray-800' },
];

export const SpielDetailModal: React.FC<SpielDetailModalProps> = ({ 
  spiel, onClose, onCopy, onEdit, isAdmin, onSave, onViewImage 
}) => {
  // Local state for inline editing
  const [formData, setFormData] = useState({
    title: spiel.title,
    english: spiel.english,
    brazil: spiel.brazil,
    images: spiel.images || [],
    color: spiel.color || 'bg-white dark:bg-[#202124]',
    isPinned: spiel.isPinned || false
  });
  
  const [isDirty, setIsDirty] = useState(false);
  const [isProcessingImage, setIsProcessingImage] = useState(false);
  const [showPalette, setShowPalette] = useState(false);

  // Auto-save on unmount if dirty
  const isDirtyRef = useRef(false);
  const formDataRef = useRef(formData);

  useEffect(() => {
    formDataRef.current = formData;
    isDirtyRef.current = isDirty;
  }, [formData, isDirty]);

  // Handle closing and saving
  const handleClose = () => {
    if (isDirtyRef.current && onSave && !spiel.isDefault && isAdmin) {
      onSave(spiel.id, formDataRef.current);
    }
    onClose();
  };

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      onCopy(`Copied ${label}`);
    } catch (err) {
      onCopy('Failed to copy');
    }
  };

  const isEditable = isAdmin && !spiel.isDefault;

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    
    // Paste Event Listener for Images
    const handlePaste = async (e: ClipboardEvent) => {
      if (!isEditable) return;

      const items = e.clipboardData?.items;
      if (!items) return;

      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') !== -1) {
          const file = items[i].getAsFile();
          if (file) {
            setIsProcessingImage(true);
            try {
              const compressed = await compressImage(file);
              setFormData(prev => ({
                ...prev,
                images: [...prev.images, compressed]
              }));
              setIsDirty(true);
              onCopy('Image pasted and added');
            } catch (err) {
              console.error(err);
              onCopy('Failed to process image');
            } finally {
              setIsProcessingImage(false);
            }
          }
        }
      }
    };

    window.addEventListener('keydown', handleEsc);
    window.addEventListener('paste', handlePaste);
    return () => {
      window.removeEventListener('keydown', handleEsc);
      window.removeEventListener('paste', handlePaste);
    };
  }, [isEditable]);

  const handleChange = (field: keyof typeof formData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setIsDirty(true);
  };

  const handleRemoveImage = (indexToRemove: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, idx) => idx !== indexToRemove)
    }));
    setIsDirty(true);
  };

  const handleTogglePin = () => {
      if (!isEditable) return;
      handleChange('isPinned', !formData.isPinned);
  };

  // Get current bg color from form data
  const bgColor = formData.color;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200" onClick={handleClose}>
      <div 
        className={`${bgColor} w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-gray-200 dark:border-gray-700 transition-colors duration-300 scale-100 text-gray-900 dark:text-gray-100 relative`} 
        onClick={e => { e.stopPropagation(); setShowPalette(false); }}
      >
        {/* Header Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-black/5 dark:border-white/10">
           <div className="flex items-center gap-2">
              <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-md ${spiel.isDefault ? 'bg-orange-50 text-orange-600 dark:bg-orange-900/20' : 'bg-blue-50 text-blue-600 dark:bg-blue-900/20'}`}>
                {spiel.category}
              </span>
              {spiel.isDefault ? <ShieldCheck size={14} className="text-orange-500" /> : <User size={14} className="text-blue-500" />}
           </div>
           <div className="flex items-center gap-2">
              {/* Pin Button */}
              {isEditable && (
                  <button 
                    onClick={handleTogglePin}
                    className={`p-2 rounded-full transition-colors ${formData.isPinned ? 'text-gray-900 dark:text-gray-100 bg-black/5 dark:bg-white/10' : 'text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10'}`}
                    title={formData.isPinned ? "Unpin" : "Pin note"}
                  >
                      <Pin size={20} className={formData.isPinned ? "fill-current" : ""} />
                  </button>
              )}
              
              <button onClick={handleClose} className="p-2 rounded-full transition-colors text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10" title={isDirty ? "Save & Close" : "Close"}>
                {isDirty ? <span className="text-xs font-bold mr-2 text-blue-500">Done</span> : null}
                <X size={20} />
              </button>
           </div>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-6">
           {/* Title */}
           <div className="border-b border-black/5 dark:border-white/10 pb-4">
             {isEditable ? (
               <input 
                 type="text"
                 value={formData.title}
                 onChange={(e) => handleChange('title', e.target.value)}
                 className="w-full text-2xl font-bold leading-tight bg-transparent border-none focus:ring-0 outline-none placeholder-gray-400"
                 placeholder="Title"
               />
             ) : (
               <h2 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">{spiel.title}</h2>
             )}
           </div>

           {/* Two Column Layout for Text */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {/* English Section */}
               <div className="space-y-2 h-full flex flex-col">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400">English Response</span>
                    <button onClick={() => copyToClipboard(formData.english, 'English')} className="p-1.5 transition-colors rounded-md text-gray-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20" title="Copy English">
                      <Copy size={16} />
                    </button>
                  </div>
                  <div className="flex-1 p-4 rounded-xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-black/20 overflow-hidden flex flex-col">
                    {isEditable ? (
                      <textarea
                        value={formData.english}
                        onChange={(e) => handleChange('english', e.target.value)}
                        className="w-full h-full min-h-[300px] bg-transparent border-none focus:ring-0 outline-none resize-none text-sm md:text-base font-medium leading-relaxed text-gray-800 dark:text-gray-200 custom-scrollbar"
                        placeholder="Type English response..."
                      />
                    ) : (
                      <div className="overflow-y-auto max-h-[400px] custom-scrollbar">
                        <p className="text-sm md:text-base whitespace-pre-wrap font-medium leading-relaxed text-gray-800 dark:text-gray-200">{spiel.english}</p>
                      </div>
                    )}
                  </div>
               </div>

               {/* Portuguese Section */}
               <div className="space-y-2 h-full flex flex-col">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400">Portuguese (Brazil)</span>
                    <button onClick={() => copyToClipboard(formData.brazil, 'Portuguese')} className="p-1.5 transition-colors rounded-md text-gray-400 hover:text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20" title="Copy Portuguese">
                      <Copy size={16} />
                    </button>
                  </div>
                  <div className="flex-1 p-4 rounded-xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-black/20 overflow-hidden flex flex-col">
                    {isEditable ? (
                      <textarea
                        value={formData.brazil}
                        onChange={(e) => handleChange('brazil', e.target.value)}
                        className="w-full h-full min-h-[300px] bg-transparent border-none focus:ring-0 outline-none resize-none text-sm md:text-base font-medium leading-relaxed text-gray-800 dark:text-gray-200 custom-scrollbar"
                        placeholder="Type Portuguese response..."
                      />
                    ) : (
                      <div className="overflow-y-auto max-h-[400px] custom-scrollbar">
                        <p className="text-sm md:text-base whitespace-pre-wrap font-medium leading-relaxed text-gray-800 dark:text-gray-200">{spiel.brazil}</p>
                      </div>
                    )}
                  </div>
               </div>
           </div>

           {/* Images */}
           {(formData.images.length > 0 || isProcessingImage) && (
             <div className="space-y-2 pt-4">
                <span className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400">Visual Aids</span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {formData.images.map((img, idx) => (
                    <div 
                      key={idx} 
                      className="relative group rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 aspect-square bg-gray-100 dark:bg-gray-800 cursor-zoom-in"
                    >
                      <div onClick={() => onViewImage?.(img)} className="w-full h-full">
                         <img src={img} alt={`Visual aid ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      </div>
                      
                      {/* Hover Overlay with Icon */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                         <div className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                            <ZoomIn size={18} />
                         </div>
                      </div>

                      {/* Delete Button for Edit Mode */}
                      {isEditable && (
                        <button 
                          onClick={(e) => { e.stopPropagation(); handleRemoveImage(idx); }}
                          className="absolute top-2 right-2 bg-red-600 text-white p-1.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-700 pointer-events-auto"
                          title="Remove Image"
                        >
                          <Trash2 size={14} />
                        </button>
                      )}
                    </div>
                  ))}
                  
                  {isProcessingImage && (
                    <div className="relative rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 aspect-square bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                       <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                    </div>
                  )}
                </div>
                {isEditable && (
                  <p className="text-[10px] text-gray-400 mt-2 italic">
                    Tip: Click anywhere in this window and press Ctrl+V to paste an image.
                  </p>
                )}
             </div>
           )}
        </div>
        
        {/* Footer Toolbar */}
        <div className="p-4 border-t border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/5 flex justify-between items-center text-[10px] font-medium text-gray-500 dark:text-gray-400 relative">
           
           {/* Color Palette Toggle (Only when editable) */}
           {isEditable && (
             <div className="relative">
                <button 
                  onClick={(e) => { e.stopPropagation(); setShowPalette(!showPalette); }}
                  className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 text-gray-500 dark:text-gray-400 transition-colors"
                  title="Change background color"
                >
                  <Palette size={16} />
                </button>

                {/* Popover Color Picker */}
                {showPalette && (
                  <div className="absolute bottom-full left-0 mb-2 p-2 bg-white dark:bg-[#303134] rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 flex gap-2 z-50 animate-in fade-in zoom-in-95 duration-200">
                     {COLORS.map((c) => (
                       <button
                         key={c.label}
                         onClick={(e) => { 
                           e.stopPropagation(); 
                           handleChange('color', c.value); 
                           setShowPalette(false); 
                         }}
                         className={`w-6 h-6 rounded-full border border-gray-300 dark:border-gray-600 hover:scale-110 transition-transform ${c.value.split(' ')[0]} ${formData.color === c.value ? 'ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-gray-800' : ''}`}
                         title={c.label}
                       />
                     ))}
                  </div>
                )}
             </div>
           )}

           <div className="flex gap-4">
               <span>Created: {new Date(spiel.createdAt).toLocaleDateString()}</span>
               <span>ID: {spiel.id.substring(0, 8)}...</span>
           </div>
           
           {isEditable && (
             <button 
               onClick={handleClose} 
               className="px-4 py-1.5 bg-transparent hover:bg-black/5 dark:hover:bg-white/10 rounded-lg text-gray-900 dark:text-gray-100 font-bold transition-colors"
             >
               Close
             </button>
           )}
        </div>
      </div>
    </div>
  );
};
