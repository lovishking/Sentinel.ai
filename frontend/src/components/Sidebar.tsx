import Link from 'next/link';
import { Activity, LayoutDashboard, Settings, AlertTriangle, GitPullRequest } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-[#14161f] border-r border-[#2d3748] flex flex-col">
      <div className="p-6">
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent flex items-center gap-2">
          <Activity size={24} className="text-blue-500" />
          Sentinel AI
        </h1>
      </div>
      
      <nav className="flex-1 px-5 space-y-2">
        <Link href="/" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-[#1e212b] transition-colors text-sm text-gray-300 hover:text-white">
          <LayoutDashboard size={18} />
          Dashboard
        </Link>
        <Link href="/incidents" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-[#1e212b] transition-colors text-sm text-gray-300 hover:text-white">
          <AlertTriangle size={18} />
          Incidents
        </Link>
        <Link href="/fixes" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-[#1e212b] transition-colors text-sm text-gray-300 hover:text-white">
          <GitPullRequest size={18} />
          Fixes & PRs
        </Link>
      </nav>

      <div className="p-4 border-t border-[#2d3748]">
        <Link href="/settings" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-[#1e212b] transition-colors text-sm text-gray-300 hover:text-white">
          <Settings size={18} />
          Settings
        </Link>
      </div>
    </div>
  );
}
