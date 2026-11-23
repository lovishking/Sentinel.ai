import React from 'react';

/**
 * Loading skeleton placeholder for dashboard metric cards
 */
export default function SkeletonCard() {
  return (
    <div className="glass-panel p-6 rounded-xl animate-pulse flex items-start justify-between">
      <div className="space-y-3 w-2/3">
        <div className="h-4 bg-gray-700/50 rounded w-1/2"></div>
        <div className="h-8 bg-gray-700/50 rounded w-3/4"></div>
      </div>
      <div className="w-12 h-12 bg-gray-700/50 rounded-lg"></div>
    </div>
  );
}
