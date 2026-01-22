
import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable';
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors, DragEndEvent } from '@dnd-kit/core';
import { GripVertical } from 'lucide-react';

interface CategoryFilterProps {
  categories: string[];
  selected: string | 'All';
  onSelect: (cat: string | 'All') => void;
  isAdmin?: boolean;
  onEditCategory?: (cat: string) => void;
  onDeleteCategory?: (cat: string) => void;
  onReorder?: (newOrder: string[]) => void;
  isEditMode: boolean;
}

const SortableCategoryChip = ({ 
  cat, 
  selected, 
  onSelect, 
  isAdmin, 
  onEditCategory, 
  onDeleteCategory,
  isEditMode
}: {
  cat: string;
  selected: string | 'All';
  onSelect: (cat: string) => void;
  isAdmin?: boolean;
  onEditCategory?: (cat: string) => void;
  onDeleteCategory?: (cat: string) => void;
  isEditMode: boolean;
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
    touchAction: 'none' as 'none'
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
           <span {...attributes} {...listeners} className="cursor-grab text-gray-400 hover:text-gray-600">
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
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => { e.stopPropagation(); onEditCategory?.(cat); }}
            className="w-5 h-5 bg-white dark:bg-gray-700 text-blue-600 border border-gray-200 dark:border-gray-600 rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
            title="Edit"
          >
            <i className="fa-solid fa-pencil text-[8px]"></i>
          </button>
          <button 
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => { e.stopPropagation(); onDeleteCategory?.(cat); }}
            className="w-5 h-5 bg-white dark:bg-gray-700 text-red-500 border border-gray-200 dark:border-gray-600 rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
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
  onReorder,
  isEditMode
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
    <div className="flex gap-2 py-2 no-scrollbar overflow-x-auto items-center">
      {/* "All" is fixed and not sortable */}
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
  );
};
