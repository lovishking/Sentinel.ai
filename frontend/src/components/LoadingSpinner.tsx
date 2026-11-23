import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  label?: string;
}

/**
 * Accessible animated loading indicator
 */
export default function LoadingSpinner({ size = 'md', label = 'Loading...' }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4',
  }[size];

  return (
    <div className="flex flex-col items-center justify-center p-4 gap-3" role="status" aria-live="polite">
      <div
        className={`${sizeClasses} border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin`}
      />
      {label && <span className="text-sm text-gray-400">{label}</span>}
      <span className="sr-only">{label}</span>
    </div>
  );
}
