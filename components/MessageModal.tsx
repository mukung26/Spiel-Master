import React from 'react';

interface MessageModalProps {
  title: string;
  message: string;
  type: 'success' | 'error' | 'info';
  onClose: () => void;
}

export const MessageModal: React.FC<MessageModalProps> = ({ title, message, type, onClose }) => {
  const icon = type === 'success' ? 'fa-circle-check' : (type === 'error' ? 'fa-circle-xmark' : 'fa-circle-info');
  const colorClass = type === 'success' ? 'text-green-500' : (type === 'error' ? 'text-red-500' : 'text-blue-500');
  
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
      <div className="bg-white dark:bg-slate-900 rounded-3xl w-full max-w-sm shadow-2xl overflow-hidden p-8 text-center border border-gray-100 dark:border-slate-800 transform scale-100 opacity-100 transition-all">
        <div className={`w-20 h-20 rounded-full bg-gray-50 dark:bg-slate-800 mx-auto flex items-center justify-center mb-6 ${colorClass} shadow-inner`}>
          <i className={`fa-solid ${icon} text-4xl`}></i>
        </div>
        <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-3 tracking-tight">{title}</h3>
        {/* Added whitespace-pre-wrap and break-words to handle long URLs */}
        <p className="text-gray-500 dark:text-gray-400 mb-8 text-sm leading-relaxed font-medium whitespace-pre-wrap break-words select-all">
          {message}
        </p>
        <button 
          onClick={onClose}
          className="w-full py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:opacity-90 hover:scale-[1.02] transition-all shadow-lg"
        >
          Okay, Got it
        </button>
      </div>
    </div>
  );
};