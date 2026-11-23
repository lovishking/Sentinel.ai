import React from 'react';
import { LucideIcon, CheckCircle2 } from 'lucide-react';

interface EmptyStateProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  action?: {
    label: string;
    onClick: () => void;
  };
}

/**
 * Component to present an empty list or clean state visually
 */
export default function EmptyState({
  title,
  description,
  icon: Icon = CheckCircle2,
  action,
}: EmptyStateProps) {
  return (
    <div className="text-center py-12 px-4 flex flex-col items-center justify-center">
      <div className="w-12 h-12 rounded-full bg-gray-800/60 border border-gray-700/60 flex items-center justify-center text-gray-400 mb-3">
        <Icon size={24} />
      </div>
      <h3 className="text-base font-medium text-gray-200">{title}</h3>
      <p className="text-sm text-gray-400 mt-1 max-w-sm">{description}</p>
      {action && (
        <button
          onClick={action.onClick}
          className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors"
        >
          {action.label}
        </button>
      )}
    </div>
  );
}
