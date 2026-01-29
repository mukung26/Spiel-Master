
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MousePointer2, Circle, ArrowRight, Square, Undo2, Redo2, Copy, Eraser, Scissors, Trash2 } from 'lucide-react';

// Removing dependencies on services/editorStorage.ts to use LocalStorage directly

type Tool = 'select' | 'arrow' | 'circle' | 'box';

interface DrawObject {
  type: Tool;
  x: number;
  y: number;
  endX: number;
  endY: number;
  color: string;
}

const LOCAL_STORAGE_KEY = 'spiel_editor_state';

export const EditorView: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [bgImage, setBgImage] = useState<HTMLImageElement | null>(null);
  
  // State
  const [objects, setObjects] = useState<DrawObject[]>([]);
  const [previewObj, setPreviewObj] = useState<DrawObject | null>(null); // For live animation
  const [currentTool, setCurrentTool] = useState<Tool>('select');
  const [isDrawing, setIsDrawing] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [color, setColor] = useState('#ef4444'); // Default Red

  // History State for Undo/Redo
  const [history, setHistory] = useState<DrawObject[][]>([[]]);
  const [historyIndex, setHistoryIndex] = useState(0);

  // --- Persistence Logic (LocalStorage) ---

  // Load state on mount
  useEffect(() => {
    const loadState = () => {
      try {
        const savedJson = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (savedJson) {
            const saved = JSON.parse(savedJson);
            
            if (saved.imageBase64) {
                const img = new Image();
                img.src = saved.imageBase64;
                img.onload = () => setBgImage(img);
            }
            
            if (saved.objects && saved.objects.length > 0) {
                setObjects(saved.objects);
                setHistory([saved.objects]);
                setHistoryIndex(0);
            }
        }
      } catch (e) {
        console.error("Failed to load editor state from localStorage", e);
      }
    };
    loadState();
  }, []);

  // Save state on change (Debounced to avoid lag)
  useEffect(() => {
    const saveState = async () => {
      if (!bgImage) return;
      
      let base64 = bgImage.src;
      
      // If blob, convert to base64 for storage
      if (bgImage.src.startsWith('blob:')) {
         try {
           const response = await fetch(bgImage.src);
           const blob = await response.blob();
           const reader = new FileReader();
           reader.readAsDataURL(blob); 
           reader.onloadend = () => {
             const b64 = reader.result as string;
             try {
               localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({
                 imageBase64: b64,
                 objects: objects,
                 timestamp: Date.now()
               }));
             } catch(err) {
               console.warn("LocalStorage quota exceeded, cannot save image state.");
             }
           };
           return;
         } catch (e) {
           console.error("Failed to convert blob for saving", e);
           return;
         }
      }
      
      // Direct Base64 save
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({
            imageBase64: base64,
            objects: objects,
            timestamp: Date.now()
        }));
      } catch(err) {
        console.warn("LocalStorage quota exceeded, cannot save image state.");
      }
    };

    if (bgImage) {
        const timeout = setTimeout(saveState, 500);
        return () => clearTimeout(timeout);
    }
  }, [bgImage, objects]);

  // --- History Management ---

  const addToHistory = (newObjects: DrawObject[]) => {
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(newObjects);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
    setObjects(newObjects);
  };

  const undo = useCallback(() => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      setObjects(history[newIndex]);
    }
  }, [history, historyIndex]);

  const redo = useCallback(() => {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);
      setObjects(history[newIndex]);
    }
  }, [history, historyIndex]);

  const deleteLast = useCallback(() => {
    if (objects.length > 0) {
      const newObjects = objects.slice(0, -1);
      addToHistory(newObjects);
    }
  }, [objects, history, historyIndex]);

  // --- Keyboard Shortcuts ---

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Undo
      if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
        e.preventDefault();
        undo();
      }
      // Redo
      if ((e.ctrlKey || e.metaKey) && (e.key === 'y' || (e.shiftKey && e.key === 'Z'))) {
        e.preventDefault();
        redo();
      }
      // Delete Last (Backspace or Delete)
      if (e.key === 'Backspace' || e.key === 'Delete') {
         if (objects.length > 0) {
            e.preventDefault();
            deleteLast();
         }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [undo, redo, deleteLast, objects]);


  // Global Paste Listener
  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      const items = e.clipboardData?.items;
      if (!items) return;

      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') !== -1) {
          const blob = items[i].getAsFile();
          if (blob) {
            const img = new Image();
            img.src = URL.createObjectURL(blob);
            img.onload = () => {
              setBgImage(img);
              // Reset history for new image
              setObjects([]);
              setHistory([[]]);
              setHistoryIndex(0);
              setPreviewObj(null);
            };
          }
        }
      }
    };

    window.addEventListener('paste', handlePaste);
    return () => window.removeEventListener('paste', handlePaste);
  }, []);

  // --- Drawing Logic ---

  const drawArrow = (ctx: CanvasRenderingContext2D, fromx: number, fromy: number, tox: number, toy: number) => {
    const headlen = 20; 
    const dx = tox - fromx;
    const dy = toy - fromy;
    const angle = Math.atan2(dy, dx);
    ctx.moveTo(fromx, fromy);
    ctx.lineTo(tox, toy);
    ctx.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
    ctx.moveTo(tox, toy);
    ctx.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
  };

  const drawCircle = (ctx: CanvasRenderingContext2D, x: number, y: number, endX: number, endY: number) => {
      const radiusX = Math.abs(endX - x) / 2;
      const radiusY = Math.abs(endY - y) / 2;
      const centerX = Math.min(x, endX) + radiusX;
      const centerY = Math.min(y, endY) + radiusY;
      ctx.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI);
  };

  const drawBox = (ctx: CanvasRenderingContext2D, x: number, y: number, endX: number, endY: number) => {
      ctx.rect(x, y, endX - x, endY - y);
  };

  // Render Canvas Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !containerRef.current) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 1. Responsive Sizing & Background
    const container = containerRef.current;
    
    // Clear canvas first
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (bgImage) {
        // Fit image to container while maintaining aspect ratio
        const maxWidth = container.clientWidth - 40;
        const maxHeight = container.clientHeight - 40;
        let w = bgImage.width;
        let h = bgImage.height;

        if (w > maxWidth || h > maxHeight) {
             const ratio = Math.min(maxWidth / w, maxHeight / h);
             w *= ratio;
             h *= ratio;
        }

        canvas.width = w;
        canvas.height = h;
        ctx.drawImage(bgImage, 0, 0, w, h);
    } else {
        canvas.width = container.clientWidth - 40;
        canvas.height = 500;
        
        // Placeholder background
        ctx.fillStyle = window.matchMedia('(prefers-color-scheme: dark)').matches ? '#282a2c' : '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Dashed Border
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 2;
        ctx.setLineDash([10, 10]);
        ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);
        ctx.setLineDash([]);

        // Text
        ctx.fillStyle = '#94a3b8';
        ctx.font = 'bold 20px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Paste Image (Ctrl+V) to Start Editing', canvas.width / 2, canvas.height / 2);
    }

    // Helper to render an object
    const renderObject = (obj: DrawObject) => {
      ctx.strokeStyle = obj.color;
      ctx.lineWidth = 4;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.beginPath();
      
      if (obj.type === 'arrow') {
        drawArrow(ctx, obj.x, obj.y, obj.endX, obj.endY);
      } else if (obj.type === 'circle') {
        drawCircle(ctx, obj.x, obj.y, obj.endX, obj.endY);
      } else if (obj.type === 'box') {
        drawBox(ctx, obj.x, obj.y, obj.endX, obj.endY);
      }
      ctx.stroke();
    };

    // 2. Draw Committed Objects
    objects.forEach(renderObject);

    // 3. Draw Live Preview Object (Animation)
    if (previewObj) {
        ctx.save();
        ctx.shadowColor = 'rgba(0,0,0,0.5)';
        ctx.shadowBlur = 10;
        renderObject(previewObj);
        ctx.restore();
    }

  }, [bgImage, objects, previewObj, containerRef.current?.clientWidth, containerRef.current?.clientHeight]);


  // --- Mouse Handlers ---

  const getCanvasCoordinates = (e: React.MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (currentTool === 'select' || !bgImage) return;
    setIsDrawing(true);
    const pos = getCanvasCoordinates(e);
    setStartPos(pos);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDrawing || currentTool === 'select') return;
    const pos = getCanvasCoordinates(e);
    
    // Create a temporary object for the live view
    setPreviewObj({
        type: currentTool,
        x: startPos.x,
        y: startPos.y,
        endX: pos.x,
        endY: pos.y,
        color: color
    });
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDrawing || currentTool === 'select') return;
    setIsDrawing(false);
    
    // Commit preview to objects if valid
    if (previewObj) {
        const newObjects = [...objects, previewObj];
        addToHistory(newObjects);
        setPreviewObj(null);
    }
  };

  const copyToClipboard = async () => {
     if (!canvasRef.current) return;
     canvasRef.current.toBlob(blob => {
        if(blob) {
            navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
            alert("Copied to clipboard!");
        }
     });
  };

  const handleDeleteImage = async () => {
    // Instant Reset
    setBgImage(null);
    setObjects([]);
    setHistory([[]]);
    setHistoryIndex(0);
    setPreviewObj(null);
    
    // Clear LocalStorage
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  return (
    <div className="h-full flex flex-col bg-[#f0f2f5] dark:bg-[#202124]">
      
      {/* Top Toolbar */}
      <div className="p-4 bg-white dark:bg-[#1e1e1e] border-b border-gray-200 dark:border-gray-700 flex flex-wrap items-center justify-between gap-4 shadow-sm z-10">
         
         <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
                <button 
                    onClick={() => setCurrentTool('select')}
                    className={`p-2 rounded-md transition-all ${currentTool === 'select' ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-300 shadow-sm' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
                    title="View Mode"
                >
                    <MousePointer2 size={18} />
                </button>
                <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-2"></div>
                <button 
                    onClick={() => setCurrentTool('arrow')}
                    className={`p-2 rounded-md transition-all ${currentTool === 'arrow' ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-300 shadow-sm' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
                    title="Draw Arrow"
                >
                    <ArrowRight size={18} />
                </button>
                <button 
                    onClick={() => setCurrentTool('box')}
                    className={`p-2 rounded-md transition-all ${currentTool === 'box' ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-300 shadow-sm' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
                    title="Draw Box"
                >
                    <Square size={18} />
                </button>
                <button 
                    onClick={() => setCurrentTool('circle')}
                    className={`p-2 rounded-md transition-all ${currentTool === 'circle' ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-300 shadow-sm' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
                    title="Draw Circle"
                >
                    <Circle size={18} />
                </button>
            </div>

            <div className="flex items-center bg-gray-100 dark:bg-gray-800 p-1 rounded-lg px-2 gap-3">
                <input 
                    type="color" 
                    value={color} 
                    onChange={(e) => setColor(e.target.value)}
                    className="w-6 h-6 rounded cursor-pointer border-0 bg-transparent p-0"
                    title="Choose Color"
                />
            </div>

            <div className="h-8 w-px bg-gray-200 dark:bg-gray-700 mx-1"></div>

            {/* History Controls */}
            <button 
                onClick={undo}
                disabled={historyIndex <= 0}
                className="p-2.5 text-gray-500 dark:text-gray-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors flex items-center gap-2 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-gray-500"
                title="Undo (Ctrl+Z)"
            >
                <Undo2 size={16} />
            </button>
            <button 
                onClick={redo}
                disabled={historyIndex >= history.length - 1}
                className="p-2.5 text-gray-500 dark:text-gray-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors flex items-center gap-2 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-gray-500"
                title="Redo (Ctrl+Y)"
            >
                <Redo2 size={16} />
            </button>

             <div className="h-8 w-px bg-gray-200 dark:bg-gray-700 mx-1"></div>

            {/* Delete Controls */}
            <button 
                onClick={deleteLast}
                disabled={objects.length === 0}
                className="p-2.5 text-gray-500 dark:text-gray-400 hover:text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-lg transition-colors flex items-center gap-2 disabled:opacity-30"
                title="Eraser: Undo Last Shape (Delete Key)"
            >
                <Eraser size={16} />
            </button>
            <button 
                onClick={handleDeleteImage}
                disabled={!bgImage}
                className="p-2.5 text-gray-500 dark:text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors flex items-center gap-2 disabled:opacity-30"
                title="Reset: Delete Image & Clear All"
            >
                <Trash2 size={16} />
            </button>
         </div>

         <div>
            <button 
                onClick={copyToClipboard}
                disabled={!bgImage}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0"
            >
                <Copy size={16} /> Copy Result
            </button>
         </div>
      </div>

      {/* Main Canvas Area */}
      <div 
        ref={containerRef}
        className="flex-1 bg-gray-200 dark:bg-[#0f172a] overflow-hidden flex items-center justify-center relative"
      >
         <canvas 
           ref={canvasRef}
           onMouseDown={handleMouseDown}
           onMouseMove={handleMouseMove}
           onMouseUp={handleMouseUp}
           onMouseLeave={handleMouseUp}
           className={`shadow-2xl rounded-lg transition-shadow ${currentTool === 'select' ? 'cursor-default' : 'cursor-crosshair'}`}
         />
      </div>
      
      {/* Instruction Footer */}
      <div className="bg-white dark:bg-[#1e1e1e] p-2 border-t border-gray-200 dark:border-gray-800 text-center">
         <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest flex items-center justify-center gap-2">
            <Scissors size={12} />
            Paste Image (Ctrl+V) &bull; Undo (Ctrl+Z) &bull; Redo (Ctrl+Y) &bull; Auto-saved Locally
         </p>
      </div>
    </div>
  );
};
