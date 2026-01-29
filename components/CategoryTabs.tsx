
import React from 'react';

interface CategoryTabsProps {
  // Use string array instead of non-existent Category enum
  categories: string[];
  selected: string | 'All';
  onSelect: (cat: string | 'All') => void;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({ categories, selected, onSelect }) => {
  const allOptions: (string | 'All')[] = ['All', ...categories];

  const getIcon = (cat: string | 'All') => {
    // Match icon to category string labels as defined in constants.tsx
    switch (cat) {
      case 'All': return 'fa-list-ul';
      case 'Product & Seller': return 'fa-store';
      case 'Logistics': return 'fa-truck';
      case 'Order & Payment': return 'fa-credit-card';
      case 'Return/Refund': return 'fa-rotate-left';
      case 'Marketing': return 'fa-bullhorn';
      case 'General Enquiries': return 'fa-circle-info';
      default: return 'fa-folder';
    }
  };

  return (
    <nav className="divide-y divide-gray-50">
      {allOptions.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`w-full text-left px-4 py-3 text-sm flex items-center gap-3 transition-colors ${
            selected === cat 
              ? 'bg-orange-50 text-orange-600 font-semibold border-r-4 border-orange-500' 
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <i className={`fa-solid ${getIcon(cat)} w-5 text-center`}></i>
          {cat}
        </button>
      ))}
    </nav>
  );
};
