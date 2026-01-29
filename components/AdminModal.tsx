
import React, { useState, useEffect, useMemo } from 'react';
import { Spiel } from '../types';
import { Database, HardDrive, ExternalLink, Activity, Info, Upload, X, Image as ImageIcon, Palette } from 'lucide-react';
import { compressImage } from '../utils/imageUtils';

interface AdminModalProps {
  categories: string[];
  onClose: () => void;
  onSubmit: (spiel: Omit<Spiel, 'id' | 'createdAt'>) => void;
  initialData?: Spiel;
  onPushInitialData?: () => void;
  onRepairDatabase?: () => void;
  currentSpiels?: Spiel[];
}

const COLORS = [
  { label: 'Default', value: 'bg-white dark:bg-[#1e1e1e]' },
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

export const AdminModal: React.FC<AdminModalProps> = ({ 
  categories, onClose, onSubmit, initialData, onPushInitialData, onRepairDatabase, currentSpiels = []
}) => {
  const [activeTab, setActiveTab] = useState<'content' | 'settings'>(initialData ? 'content' : 'content');
  const [isProcessingImage, setIsProcessingImage] = useState(false);

  const [formData, setFormData] = useState<Omit<Spiel, 'id' | 'createdAt'>>({
    category: categories[0] || 'N/A',
    title: '',
    english: '',
    brazil: '',
    tags: [],
    images: [],
    color: 'bg-white dark:bg-[#1e1e1e]'
  });

  // Calculate storage stats
  const storageStats = useMemo(() => {
    const jsonString = JSON.stringify(currentSpiels);
    const bytes = new TextEncoder().encode(jsonString).length;
    const kb = (bytes / 1024).toFixed(2);
    const percentage = ((bytes / (1024 * 1024 * 1024)) * 100).toFixed(6); // 1GB limit

    return { kb, percentage, count: currentSpiels.length };
  }, [currentSpiels]);

  useEffect(() => {
    if (initialData) {
      setFormData({
        category: initialData.category,
        title: initialData.title,
        english: initialData.english,
        brazil: initialData.brazil,
        tags: initialData.tags || [],
        images: initialData.images || [],
        color: initialData.color || 'bg-white dark:bg-[#1e1e1e]'
      });
    }
  }, [initialData]);

  // ESC Listener
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Paste listener for images
  useEffect(() => {
    const handlePaste = async (e: ClipboardEvent) => {
      const items = e.clipboardData?.items;
      if (!items) return;

      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') !== -1) {
          const file = items[i].getAsFile();
          if (file) {
            await processAndAddImage(file);
          }
        }
      }
    };

    window.addEventListener('paste', handlePaste);
    return () => window.removeEventListener('paste', handlePaste);
  }, [formData.images]);

  const processAndAddImage = async (file: File) => {
    setIsProcessingImage(true);
    try {
      const compressedBase64 = await compressImage(file);
      setFormData(prev => ({
        ...prev,
        images: [...(prev.images || []), compressedBase64]
      }));
    } catch (error) {
      console.error("Image compression failed", error);
    } finally {
      setIsProcessingImage(false);
    }
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
        await processAndAddImage(file);
      }
    }
  };

  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images?.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeTab === 'settings') {
      onClose();
      return;
    }
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className={`
        ${formData.color ? formData.color.split(' ')[0] : 'bg-white'} dark:bg-[#1e1e1e]
        rounded-3xl w-full max-w-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] transition-colors duration-300
      `}>
        <div className="px-8 pt-8 border-b border-black/5 dark:border-white/10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-black text-gray-900 dark:text-white uppercase tracking-tighter flex items-center gap-2">
              <Database className="text-orange-500" size={20} />
              {initialData ? 'Edit My Spiel' : 'Create My Spiel'}
            </h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              <i className="fa-solid fa-circle-xmark text-2xl"></i>
            </button>
          </div>
          <div className="flex gap-6">
            <button 
              onClick={() => setActiveTab('content')}
              className={`pb-4 text-[10px] font-black uppercase tracking-widest border-b-4 transition-all ${activeTab === 'content' ? 'border-orange-500 text-orange-600 dark:text-orange-400' : 'border-transparent text-gray-400 dark:text-slate-500'}`}
            >
              Content & Media
            </button>
            <button 
              onClick={() => setActiveTab('settings')}
              className={`pb-4 text-[10px] font-black uppercase tracking-widest border-b-4 transition-all ${activeTab === 'settings' ? 'border-blue-500 text-blue-600 dark:text-blue-400' : 'border-transparent text-gray-400 dark:text-slate-500'}`}
            >
              System & Storage
            </button>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <form id="admin-form" onSubmit={handleSubmit} className="p-8 space-y-6">
            {activeTab === 'content' ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 dark:text-slate-500 uppercase mb-2 tracking-widest">Category</label>
                    <select 
                      className="w-full p-3 bg-white/50 dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-xl font-bold text-sm text-gray-900 dark:text-white outline-none focus:border-orange-500 transition-colors"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    >
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 dark:text-slate-500 uppercase mb-2 tracking-widest">Title</label>
                    <input 
                      type="text" 
                      className="w-full p-3 bg-white/50 dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-xl font-bold text-sm text-gray-900 dark:text-white outline-none focus:border-orange-500 transition-colors"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      required
                      placeholder="e.g., Refund Approved"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black text-red-600 dark:text-red-400 uppercase mb-2 tracking-widest">English Response</label>
                    <textarea 
                      className="w-full p-4 bg-white/50 dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-2xl h-48 text-sm font-medium text-gray-900 dark:text-white outline-none focus:border-red-500 transition-colors resize-none"
                      value={formData.english}
                      onChange={(e) => setFormData({ ...formData, english: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase mb-2 tracking-widest">Brazil (Portuguese)</label>
                    <textarea 
                      className="w-full p-4 bg-white/50 dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-2xl h-48 text-sm font-medium text-gray-900 dark:text-white outline-none focus:border-blue-500 transition-colors resize-none"
                      value={formData.brazil}
                      onChange={(e) => setFormData({ ...formData, brazil: e.target.value })}
                      required
                    />
                  </div>
                </div>

                {/* Color Palette */}
                <div>
                   <label className="block text-[10px] font-black text-gray-400 dark:text-slate-500 uppercase mb-2 tracking-widest flex items-center gap-2">
                     <Palette size={14} />
                     Card Background
                   </label>
                   <div className="flex flex-wrap gap-2">
                     {COLORS.map((c) => (
                       <button
                         key={c.label}
                         type="button"
                         onClick={() => setFormData({...formData, color: c.value})}
                         className={`w-8 h-8 rounded-full border-2 transition-all shadow-sm ${c.value.split(' ')[0]} ${formData.color === c.value ? 'border-orange-500 scale-110' : 'border-gray-200 dark:border-gray-700 hover:scale-105'}`}
                         title={c.label}
                       />
                     ))}
                   </div>
                </div>

                {/* Image Upload Section */}
                <div>
                   <label className="block text-[10px] font-black text-gray-400 dark:text-slate-500 uppercase mb-2 tracking-widest flex items-center gap-2">
                     <ImageIcon size={14} />
                     Visual Aids (Images)
                   </label>
                   
                   <div 
                    className="border-2 border-dashed border-gray-200 dark:border-slate-700 rounded-2xl p-6 flex flex-col items-center justify-center text-gray-400 hover:bg-white/40 dark:hover:bg-black/40 hover:border-blue-400 transition-all cursor-pointer bg-white/20 dark:bg-black/20"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={handleDrop}
                   >
                     {isProcessingImage ? (
                       <div className="animate-pulse flex flex-col items-center">
                          <Activity size={24} className="mb-2 text-blue-500 animate-spin" />
                          <span className="text-xs font-bold">Compressing Image...</span>
                       </div>
                     ) : (
                       <div className="text-center">
                          <Upload size={24} className="mx-auto mb-2 opacity-50" />
                          <p className="text-xs font-bold mb-1">Drag & Drop or <span className="text-blue-500">Paste (Ctrl+V)</span> images here</p>
                          <p className="text-[10px] opacity-60">Images will be automatically compressed to save storage.</p>
                       </div>
                     )}
                   </div>

                   {formData.images && formData.images.length > 0 && (
                     <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
                       {formData.images.map((img, idx) => (
                         <div key={idx} className="relative group flex-shrink-0">
                           <img src={img} alt="preview" className="h-20 w-auto rounded-lg border border-gray-200 dark:border-slate-700 object-cover" />
                           <button 
                            type="button"
                            onClick={() => removeImage(idx)}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                           >
                             <X size={12} />
                           </button>
                         </div>
                       ))}
                     </div>
                   )}
                </div>
              </>
            ) : (
              <div className="space-y-6">
                {/* Storage Card */}
                <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-gray-200 dark:border-slate-700">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xs font-black text-gray-900 dark:text-white uppercase tracking-widest flex items-center gap-2">
                      <HardDrive size={14} className="text-blue-500" />
                      Storage Monitor
                    </h4>
                    <span className="text-[10px] font-bold text-slate-400">Limit: 1.00 GB</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-gray-100 dark:border-slate-800">
                      <p className="text-[10px] font-black text-slate-500 uppercase mb-1">My Spiels</p>
                      <p className="text-xl font-black text-blue-500">{storageStats.count}</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-gray-100 dark:border-slate-800">
                      <p className="text-[10px] font-black text-slate-500 uppercase mb-1">Data Size</p>
                      <p className="text-xl font-black text-orange-500">{storageStats.kb} <span className="text-xs">KB</span></p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-tighter text-slate-500">
                      <span>Usage Status</span>
                      <span className={parseFloat(storageStats.percentage) > 80 ? 'text-red-500' : 'text-green-500'}>
                        {storageStats.percentage}% Used
                      </span>
                    </div>
                    <div className="w-full h-3 bg-gray-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-1000" 
                        style={{ width: `${Math.max(parseFloat(storageStats.percentage) * 1000, 2)}%` }}
                      ></div>
                    </div>
                    <p className="text-[9px] text-slate-500 italic">Estimating based on template character count. Actual Firebase storage includes metadata.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {onRepairDatabase && (
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-100 dark:border-green-800 flex flex-col gap-3">
                      <div>
                          <h4 className="text-xs font-black text-green-900 dark:text-green-100 uppercase mb-1 flex items-center gap-1.5">
                            <Activity size={12} />
                            Repair Database
                          </h4>
                          <p className="text-[10px] text-green-700 dark:text-green-300 font-bold leading-relaxed">
                            Clean up cloud paths and fix broken template IDs.
                          </p>
                      </div>
                      <button 
                        type="button"
                        onClick={onRepairDatabase}
                        className="bg-green-600 text-white px-4 py-2 rounded-lg text-[10px] font-black uppercase hover:bg-green-700 transition-colors self-start"
                      >
                        Sync & Repair
                      </button>
                    </div>
                  )}

                  {onPushInitialData && (
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800 flex flex-col gap-3">
                      <div>
                        <h4 className="text-xs font-black text-blue-900 dark:text-blue-100 uppercase mb-1 flex items-center gap-1.5">
                          <Info size={12} />
                          Factory Reset
                        </h4>
                        <p className="text-[10px] text-blue-700 dark:text-blue-300 font-bold leading-relaxed">
                          Wipe all custom spiels and restore defaults.
                        </p>
                      </div>
                      <button 
                        type="button"
                        onClick={onPushInitialData}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg text-[10px] font-black uppercase hover:bg-blue-700 transition-colors self-start"
                      >
                        Reset to Default
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </form>
        </div>

        <div className="p-8 border-t border-black/5 dark:border-white/10 flex justify-end gap-4">
          <button type="button" onClick={onClose} className="text-xs font-black text-gray-400 dark:text-slate-500 uppercase tracking-widest hover:text-gray-900 dark:hover:text-white transition-colors">Close</button>
          {activeTab === 'content' && (
            <button form="admin-form" type="submit" className="px-8 py-3 rounded-2xl text-white font-black text-xs uppercase tracking-widest shadow-lg bg-orange-500 hover:bg-orange-600 transition-transform active:scale-95">
              {initialData ? 'Update Spiel' : 'Create Spiel'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
