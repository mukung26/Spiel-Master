import React, { useState, useEffect } from 'react';
import { Spiel } from '../types';

interface AdminModalProps {
  categories: string[];
  onClose: () => void;
  onSubmit: (spiel: Omit<Spiel, 'id' | 'createdAt'>) => void;
  initialData?: Spiel;
  onPushInitialData?: () => void;
  onRepairDatabase?: () => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({ 
  categories, onClose, onSubmit, initialData, onPushInitialData, onRepairDatabase
}) => {
  const [activeTab, setActiveTab] = useState<'content' | 'settings'>(initialData ? 'content' : 'content');

  const [formData, setFormData] = useState<Omit<Spiel, 'id' | 'createdAt'>>({
    category: categories[0] || 'N/A',
    title: '',
    english: '',
    brazil: '',
    tags: [],
    images: []
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        category: initialData.category,
        title: initialData.title,
        english: initialData.english,
        brazil: initialData.brazil,
        tags: initialData.tags || [],
        images: initialData.images || []
      });
    }
  }, [initialData]);

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
      <div className="bg-white dark:bg-slate-900 rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] transition-colors duration-300">
        <div className="px-8 pt-8 border-b border-gray-100 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-900/50">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">Admin Control</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              <i className="fa-solid fa-circle-xmark text-2xl"></i>
            </button>
          </div>
          <div className="flex gap-6">
            <button 
              onClick={() => setActiveTab('content')}
              className={`pb-4 text-[10px] font-black uppercase tracking-widest border-b-4 transition-all ${activeTab === 'content' ? 'border-orange-500 text-orange-600 dark:text-orange-400' : 'border-transparent text-gray-400 dark:text-slate-500'}`}
            >
              {initialData ? 'Edit Template' : 'Add New'}
            </button>
            <button 
              onClick={() => setActiveTab('settings')}
              className={`pb-4 text-[10px] font-black uppercase tracking-widest border-b-4 transition-all ${activeTab === 'settings' ? 'border-blue-500 text-blue-600 dark:text-blue-400' : 'border-transparent text-gray-400 dark:text-slate-500'}`}
            >
              Database Actions
            </button>
          </div>
        </div>
        
        <form id="admin-form" onSubmit={handleSubmit} className="p-8 space-y-6 overflow-y-auto">
          {activeTab === 'content' ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black text-gray-400 dark:text-slate-500 uppercase mb-2 tracking-widest">Category</label>
                  <select 
                    className="w-full p-3 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl font-bold text-sm text-gray-900 dark:text-white outline-none focus:border-orange-500 transition-colors"
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
                    className="w-full p-3 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl font-bold text-sm text-gray-900 dark:text-white outline-none focus:border-orange-500 transition-colors"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase mb-2 tracking-widest">Brazil (Portuguese)</label>
                <textarea 
                  className="w-full p-4 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl h-32 text-sm font-medium text-gray-900 dark:text-white outline-none focus:border-blue-500 transition-colors"
                  value={formData.brazil}
                  onChange={(e) => setFormData({ ...formData, brazil: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-[10px] font-black text-red-600 dark:text-red-400 uppercase mb-2 tracking-widest">English Response</label>
                <textarea 
                  className="w-full p-4 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl h-32 text-sm font-medium text-gray-900 dark:text-white outline-none focus:border-red-500 transition-colors"
                  value={formData.english}
                  onChange={(e) => setFormData({ ...formData, english: e.target.value })}
                  required
                />
              </div>
            </>
          ) : (
            <div className="space-y-6">
              
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-100 dark:border-green-800 flex flex-col gap-3">
                 <div>
                    <h4 className="text-xs font-black text-green-900 dark:text-green-100 uppercase mb-1">Repair Database Structure</h4>
                    <p className="text-[10px] text-green-700 dark:text-green-300 font-bold leading-relaxed">
                      If you can edit but not delete, use this to clean up the database structure. It syncs your current screen list to the cloud.
                    </p>
                 </div>
                 <button 
                  type="button"
                  onClick={onRepairDatabase}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg text-[10px] font-black uppercase hover:bg-green-700 transition-colors self-start"
                >
                  Sync Local to Cloud (Repair)
                </button>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800 flex flex-col gap-3">
                <div>
                   <h4 className="text-xs font-black text-blue-900 dark:text-blue-100 uppercase mb-1">Reset Database</h4>
                   <p className="text-[10px] text-blue-700 dark:text-blue-300 font-bold leading-relaxed">
                     Warning: this wipes everything and restores the original 25 default templates.
                   </p>
                </div>
                <button 
                  type="button"
                  onClick={onPushInitialData}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg text-[10px] font-black uppercase hover:bg-blue-700 transition-colors self-start"
                >
                  Reset to Defaults
                </button>
              </div>

              <div className="pt-4 border-t border-gray-100 dark:border-slate-700">
                <p className="text-[10px] font-bold text-gray-400 dark:text-slate-500 text-center">
                  Database URL is hardcoded for stability.
                </p>
              </div>
            </div>
          )}
        </form>

        <div className="p-8 border-t border-gray-100 dark:border-slate-800 bg-gray-50/80 dark:bg-slate-900/80 flex justify-end gap-4">
          <button type="button" onClick={onClose} className="text-xs font-black text-gray-400 dark:text-slate-500 uppercase tracking-widest hover:text-gray-900 dark:hover:text-white transition-colors">Cancel</button>
          {activeTab === 'content' && (
            <button form="admin-form" type="submit" className="px-8 py-3 rounded-2xl text-white font-black text-xs uppercase tracking-widest shadow-lg bg-orange-500 hover:bg-orange-600">
              {initialData ? 'Apply Changes' : 'Save Template'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};