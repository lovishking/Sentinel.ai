import Link from 'next/link';
import { ShieldAlert } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center p-8 text-center space-y-4">
      <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-full text-red-400">
        <ShieldAlert size={48} />
      </div>
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-gray-400 max-w-sm">The route you requested does not exist or may have been relocated.</p>
      <Link
        href="/"
        className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors"
      >
        Return to Dashboard
      </Link>
    </div>
  );
}
