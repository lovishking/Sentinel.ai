import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

/**
 * Search input component with glassmorphism styling
 */
export default function SearchBar({ value, onChange, placeholder = 'Search incidents by title or ID...' }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-md">
      <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-[#14161f] border border-[#2d3748] rounded-lg pl-10 pr-4 py-2 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
      />
    </div>
  );
}
