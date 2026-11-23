'use client';

import React, { useEffect } from 'react';
import { AlertOctagon } from 'lucide-react';

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error('Unhandled route error caught:', error);
  }, [error]);

  return (
    <div className="h-screen flex flex-col items-center justify-center p-8 text-center space-y-4">
      <AlertOctagon className="text-red-400" size={48} />
      <h2 className="text-2xl font-bold">System Runtime Error</h2>
      <p className="text-gray-400 max-w-md">{error.message || 'An unexpected failure occurred while loading this view.'}</p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors"
      >
        Attempt Recovery
      </button>
    </div>
  );
}
