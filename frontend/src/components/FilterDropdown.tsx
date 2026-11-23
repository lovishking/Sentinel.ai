import React from 'react';

interface FilterDropdownProps {
  label: string;
  options: { label: string; value: string }[];
  selectedValue: string;
  onSelect: (val: string) => void;
}

/**
 * Dropdown filter menu for incident criteria
 */
export default function FilterDropdown({ label, options, selectedValue, onSelect }: FilterDropdownProps) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="text-gray-400">{label}:</span>
      <select
        value={selectedValue}
        onChange={(e) => onSelect(e.target.value)}
        className="bg-[#14161f] border border-[#2d3748] rounded-lg px-3 py-1.5 text-gray-200 focus:outline-none focus:border-indigo-500 transition-colors text-sm"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
