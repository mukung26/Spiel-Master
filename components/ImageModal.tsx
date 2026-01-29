
import React, { useState, useEffect, useRef } from 'react';
import { X, Copy, Check, ZoomIn, ZoomOut, Maximize, RotateCcw } from 'lucide-react';

interface ImageModalProps {
  src: string;
  onClose: () => void;
  onCopy?: (msg: string) => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({ src, onClose, onCopy }) => {
  const [copied, setCopied] = useState(false);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const startPos = useRef({ x: 0, y: 0 });
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const handleCopy = async () => {
    try {
      const response = await fetch(src);
      const blob = await response.blob();
      await navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })]);
      setCopied(true);
      if (onCopy) onCopy('Image copied to clipboard');
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error(e);
      if (onCopy) onCopy('Failed to copy image');
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.stopPropagation();
    const delta = -e.deltaY;
    const factor = 0.1;
    let newScale = scale + (delta > 0 ? factor : -factor);
    
    // Clamp scale
    newScale = Math.min(Math.max(0.5, newScale), 5);
    
    setScale(newScale);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    startPos.current = { x: e.clientX - position.x, y: e.clientY - position.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - startPos.current.x,
      y: e.clientY - startPos.current.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const resetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md animate-in fade-in duration-200 overflow-hidden" 
      onClick={onClose}
      onWheel={handleWheel}
    >
      <div className="absolute top-0 left-0 right-0 p-4 z-50 flex justify-between items-start pointer-events-none">
          <div className="pointer-events-auto flex gap-2">
            <button
                onClick={(e) => { e.stopPropagation(); resetZoom(); }}
                className="p-2 rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors"
                title="Reset View"
            >
                <RotateCcw size={20} />
            </button>
             <div className="bg-black/50 text-white/70 px-3 py-2 rounded-full text-xs font-mono font-bold">
               {Math.round(scale * 100)}%
             </div>
          </div>

          <div className="pointer-events-auto flex gap-2">
             <button
              onClick={(e) => { e.stopPropagation(); handleCopy(); }}
              className={`
                p-2 rounded-full transition-all shadow-lg border border-white/10
                ${copied ? 'bg-green-600 text-white' : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'}
              `}
              title="Copy Image"
            >
              {copied ? <Check size={20} /> : <Copy size={20} />}
            </button>
            <button 
                onClick={onClose} 
                className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            >
                <X size={28} />
            </button>
          </div>
      </div>

      <div 
        className="relative w-full h-full flex items-center justify-center cursor-move"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onClick={e => e.stopPropagation()}
      >
         <img 
            ref={imgRef}
            src={src} 
            className="max-w-none transition-transform duration-75 ease-linear select-none" 
            style={{ 
                transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                maxHeight: '85vh',
                maxWidth: '85vw'
            }}
            draggable={false}
            alt="Expanded" 
         />
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-xs font-medium pointer-events-none bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
        Scroll to zoom • Drag to pan
      </div>
    </div>
  );
};
