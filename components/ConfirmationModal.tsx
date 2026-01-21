import React from 'react';

interface ConfirmationModalProps {
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  isDeleting?: boolean;
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ 
  title, message, onConfirm, onCancel, isDeleting 
}) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 rounded-3xl w-full max-w-sm shadow-2xl overflow-hidden p-6 border border-gray-100 dark:border-slate-800 transform transition-all scale-100">
        <div className="flex flex-col items-center text-center mb-6">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center mb-4 shadow-sm">
                <i className="fa-solid fa-trash-can text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed px-2">{message}</p>
        </div>
        
        <div className="flex gap-3">
            <button 
                onClick={onCancel}
                disabled={isDeleting}
                className="flex-1 py-3.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors disabled:opacity-50"
            >
                Cancel
            </button>
            <button 
                onClick={onConfirm}
                disabled={isDeleting}
                className="flex-1 py-3.5 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-red-500/30 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {isDeleting ? (
                    <>
                        <i className="fa-solid fa-circle-notch fa-spin"></i>
                        <span>Deleting...</span>
                    </>
                ) : (
                    <span>Delete</span>
                )}
            </button>
        </div>
      </div>
    </div>
  );
};