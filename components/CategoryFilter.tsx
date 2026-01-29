import React from 'react';
import { useSortable, SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors, DragEndEvent } from '@dnd-kit/core';
import { GripVertical, Plus, Pencil } from 'lucide-react';

interface CategoryFilterProps {
  categories: string[];
  selected: string | 'All';
  onSelect: (cat: string | 'All') => void;
  isAdmin?: boolean;
  onEditCategory?: (cat: string) => void;
  onDeleteCategory?: (cat: string) => void;
  onAddCategory?: () => void;
  onReorder?: (newOrder: string[]) => void;
  isEditMode: boolean;
  onToggleEditMode?: () => void;
}

interface SortableCategoryChipProps {
  cat: string;
  selected: string | 'All';
  onSelect: (cat: string) => void;
  isAdmin?: boolean;
  onEditCategory?: (cat: string) => void;
  onDeleteCategory?: (cat: string) => void;
  isEditMode: boolean;
}

const SortableCategoryChip: React.FC<SortableCategoryChipProps> = ({ 
  cat, 
  selected, 
  onSelect, 
  isAdmin, 
  onEditCategory, 
  onDeleteCategory,
  isEditMode
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: cat, disabled: !isEditMode });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 50 : 1,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div ref={setNodeRef} style={style} className="relative group flex-shrink-0">
      <div
        className={`relative px-4 py-2 text-sm font-medium rounded-lg border transition-all whitespace-nowrap select-none flex items-center gap-2 ${
          selected === cat 
            ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 border-transparent' 
            : 'bg-white dark:bg-[#303134] text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
        }`}
      >
        {isEditMode && (
           <span 
              {...attributes} 
              {...listeners} 
              className="cursor-grab text-gray-400 hover:text-gray-600 touch-none"
           >
             <GripVertical size={12} />
           </span>
        )}
        <button onClick={() => onSelect(cat)} className="focus:outline-none">
           {cat}
        </button>
      </div>
      
      {isAdmin && isEditMode && cat !== 'N/A' && (
        <div className="absolute -top-2 -right-2 flex gap-1 z-10 pointer-events-auto animate-in zoom-in duration-200">
          <button 
            type="button"
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => { e.stopPropagation(); onEditCategory?.(cat); }}
            className="w-5 h-5 bg-white dark:bg-gray-700 text-blue-600 border border-gray-200 dark:border-gray-600 rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition-transform cursor-pointer"
            title="Edit"
          >
            <i className="fa-solid fa-pencil text-[8px]"></i>
          </button>
          <button 
            type="button"
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => { e.stopPropagation(); onDeleteCategory?.(cat); }}
            className="w-5 h-5 bg-white dark:bg-gray-700 text-red-500 border border-gray-200 dark:border-gray-600 rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition-transform cursor-pointer"
            title="Delete"
          >
            <i className="fa-solid fa-trash text-[8px]"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  categories, 
  selected, 
  onSelect, 
  isAdmin, 
  onEditCategory, 
  onDeleteCategory, 
  onAddCategory, 
  onReorder,
  isEditMode,
  onToggleEditMode
}) => {
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 5 } }));

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id && onReorder) {
       const oldIndex = categories.indexOf(active.id as string);
       const newIndex = categories.indexOf(over.id as string);
       const newCategories = [...categories];
       newCategories.splice(oldIndex, 1);
       newCategories.splice(newIndex, 0, active.id as string);
       onReorder(newCategories);
    }
  };

  return (
    <div className="w-full flex flex-col">
        <div className="flex items-center w-full">
            {/* Scrollable Container */}
            <div className="flex-1 overflow-x-auto no-scrollbar flex items-center gap-2 py-1 scroll-smooth pr-2">
                {/* "All" is fixed in list */}
                <div className="flex-shrink-0">
                    <button
                        onClick={() => onSelect('All')}
                        className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all whitespace-nowrap ${
                        selected === 'All' 
                            ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 border-transparent' 
                            : 'bg-white dark:bg-[#303134] text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
                        }`}
                    >
                        All
                    </button>
                </div>
                
                {isEditMode ? (
                    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                        <SortableContext items={categories} strategy={horizontalListSortingStrategy}>
                            {categories.map((cat) => (
                                <SortableCategoryChip 
                                    key={cat}
                                    cat={cat}
                                    selected={selected}
                                    onSelect={onSelect}
                                    isAdmin={isAdmin}
                                    onEditCategory={onEditCategory}
                                    onDeleteCategory={onDeleteCategory}
                                    isEditMode={true}
                                />
                            ))}
                        </SortableContext>
                    </DndContext>
                ) : (
                    categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => onSelect(cat)}
                            className={`flex-shrink-0 px-4 py-2 text-sm font-medium rounded-lg border transition-all whitespace-nowrap ${
                            selected === cat 
                                ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 border-transparent' 
                                : 'bg-white dark:bg-[#303134] text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
                            }`}
                        >
                            {cat}
                        </button>
                    ))
                )}
            </div>

            {/* Sticky Actions Container */}
            <div className="flex items-center gap-2 pl-3 border-l border-gray-300 dark:border-gray-700 flex-shrink-0 bg-transparent">
                {isEditMode && (
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            onAddCategory?.();
                        }}
                        className="flex-shrink-0 w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all shadow-md active:scale-95"
                        title="Add Category"
                    >
                        <Plus size={18} />
                    </button>
                )}
                
                <button 
                    type="button"
                    onClick={onToggleEditMode}
                    className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all ${isEditMode ? 'bg-gray-800 text-white dark:bg-white dark:text-black shadow-md' : 'text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'}`}
                    title={isEditMode ? "Done Editing" : "Manage Categories"}
                >
                    <Pencil size={18} />
                </button>
            </div>
        </div>

        {/* Navigation Guide */}
        <div className="flex justify-start mt-1.5 px-1 opacity-70">
             <span className="text-[10px] font-medium text-gray-400 dark:text-gray-500 flex items-center gap-1.5">
                <i className="fa-solid fa-arrows-left-right text-[8px]"></i>
                Hold <kbd className="font-sans bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-[9px] border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300">Shift</kbd> + Scroll to slide
             </span>
        </div>
    </div>
  );
};