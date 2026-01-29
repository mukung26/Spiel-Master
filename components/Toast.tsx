
import React from 'react';

interface ToastProps {
  message: string;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 animate-bounce">
      <div className="bg-gray-900 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3">
        <i className="fa-solid fa-circle-check text-green-400"></i>
        <span className="text-sm font-medium">{message}</span>
      </div>
    </div>
  );
};
