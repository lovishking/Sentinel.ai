import React from 'react';

/**
 * Loading skeleton placeholder for incidents table rows
 */
export default function SkeletonTable({ rows = 5 }: { rows?: number }) {
  return (
    <div className="w-full space-y-3 p-4">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="h-12 bg-gray-800/40 rounded-lg animate-pulse"></div>
      ))}
    </div>
  );
}
