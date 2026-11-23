import React from 'react';

interface DiffViewerProps {
  diff: string;
}

/**
 * Syntax highlighted code diff viewer with line coloring
 */
export default function DiffViewer({ diff }: DiffViewerProps) {
  const lines = diff.split('\n');

  return (
    <pre className="font-mono text-xs leading-relaxed overflow-x-auto p-4 bg-[#0d0e15] text-gray-300 rounded-lg">
      {lines.map((line, idx) => {
        let lineStyle = 'text-gray-300';
        let bgStyle = 'transparent';

        if (line.startsWith('+') && !line.startsWith('+++')) {
          lineStyle = 'text-green-400';
          bgStyle = 'rgba(34, 197, 94, 0.1)';
        } else if (line.startsWith('-') && !line.startsWith('---')) {
          lineStyle = 'text-red-400';
          bgStyle = 'rgba(239, 68, 68, 0.1)';
        } else if (line.startsWith('@')) {
          lineStyle = 'text-purple-400';
        }

        return (
          <div key={idx} style={{ backgroundColor: bgStyle }} className={`px-2 py-0.5 rounded ${lineStyle}`}>
            {line || ' '}
          </div>
        );
      })}
    </pre>
  );
}
