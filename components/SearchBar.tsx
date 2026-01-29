import React from 'react';

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <div className="relative group w-full max-w-2xl">
      <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
        <i className="fa-solid fa-magnifying-glass text-gray-400 dark:text-gray-500 group-focus-within:text-blue-600 transition-colors text-lg"></i>
      </div>
      <input
        type="text"
        className="block w-full pl-12 pr-10 py-3.5 bg-white dark:bg-[#303134] rounded-full shadow-sm hover:shadow-md focus:shadow-md border border-transparent hover:border-transparent focus:border-transparent focus:ring-0 transition-all text-gray-700 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-500 text-base"
        placeholder="Search for spiels..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
        >
          <i className="fa-solid fa-xmark text-lg"></i>
        </button>
      )}
    </div>
  );
};