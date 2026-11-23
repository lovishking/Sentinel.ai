import React from 'react';
import { Bell, ShieldCheck } from 'lucide-react';

/**
 * Top navigation header displaying system status and alert controls
 */
export default function Navbar() {
  return (
    <header className="h-16 border-b border-[#2d3748] bg-[#14161f]/80 backdrop-blur-md px-8 flex items-center justify-between sticky top-0 z-20">
      <div className="flex items-center gap-3">
        <span className="flex h-2.5 w-2.5 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
        </span>
        <span className="text-sm font-medium text-gray-300">Sentinel Network Operational</span>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-[#1e212b] transition-colors" aria-label="Notifications">
          <Bell size={18} />
        </button>
        <div className="flex items-center gap-2 pl-4 border-l border-[#2d3748]">
          <div className="w-8 h-8 rounded-full bg-indigo-600/30 border border-indigo-500/50 flex items-center justify-center text-indigo-400 text-xs font-bold">
            SRE
          </div>
        </div>
      </div>
    </header>
  );
}
