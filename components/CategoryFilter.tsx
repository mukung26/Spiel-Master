import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  selected: string | 'All';
  onSelect: (cat: string | 'All') => void;
  isAdmin?: boolean;
  onEditCategory?: (cat: string) => void;
  onDeleteCategory?: (cat: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  categories, 
  selected, 
  onSelect, 
  isAdmin, 
  onEditCategory, 
  onDeleteCategory 
}) => {
  const allOptions = ['All', ...categories];

  return (
    <div className="flex gap-2 py-2 no-scrollbar overflow-x-auto items-center">
      {allOptions.map((cat) => (
        <div key={cat} className="relative group flex-shrink-0">
          <button
            onClick={() => onSelect(cat)}
            className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all whitespace-nowrap ${
              selected === cat 
                ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 border-transparent' 
                : 'bg-white dark:bg-[#303134] text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            {cat}
          </button>
          
          {isAdmin && cat !== 'All' && cat !== 'N/A' && (
            <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1 z-10">
              <button 
                onClick={(e) => { e.stopPropagation(); onEditCategory?.(cat); }}
                className="w-6 h-6 bg-white dark:bg-gray-700 text-blue-600 border border-gray-200 dark:border-gray-600 rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
                title="Edit"
              >
                <i className="fa-solid fa-pencil text-[10px]"></i>
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); onDeleteCategory?.(cat); }}
                className="w-6 h-6 bg-white dark:bg-gray-700 text-red-500 border border-gray-200 dark:border-gray-600 rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
                title="Delete"
              >
                <i className="fa-solid fa-trash text-[10px]"></i>
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};