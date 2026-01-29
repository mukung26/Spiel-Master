
import React from 'react';
import { Spiel } from '../types';
import { SpielCard } from './SpielCard';
import { X, Trash2, ArchiveRestore } from 'lucide-react';

interface TrashModalProps {
  deletedSpiels: Spiel[];
  onClose: () => void;
  onRestore: (id: string) => void;
  onDeleteForever: (id: string) => void;
}

export const TrashModal: React.FC<TrashModalProps> = ({ 
  deletedSpiels, onClose, onRestore, onDeleteForever 
}) => {
  return (
    <div className="fixed inset-0 z-[50] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#f0f2f5] dark:bg-[#1e1e1e] w-full max-w-6xl h-[85vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-gray-200 dark:border-gray-700">
        {/* Header */}
        <div className="p-6 bg-white dark:bg-[#202124] border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center shadow-sm">
                    <Trash2 size={24} />
                </div>
                <div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">Trash Bin</h2>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Items here are removed from the main view.</p>
                </div>
            </div>
            <button 
                onClick={onClose} 
                className="p-2.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
                <X size={24} />
            </button>
        </div>
        
        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar bg-[#f0f2f5] dark:bg-[#121212]">
            {deletedSpiels.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center opacity-40 space-y-4">
                    <div className="w-24 h-24 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center">
                        <ArchiveRestore size={48} className="text-gray-400 dark:text-gray-600" />
                    </div>
                    <p className="text-lg font-bold text-gray-500 dark:text-gray-400">The trash is empty</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {deletedSpiels.map(spiel => (
                        <div key={spiel.id} className="h-64">
                            <SpielCard 
                                spiel={spiel} 
                                onCopy={() => {}} 
                                isTrashView={true}
                                onRestore={() => onRestore(spiel.id)}
                                onDelete={() => onDeleteForever(spiel.id)}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
      </div>
    </div>
  );
};
