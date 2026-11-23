'use client';

import React from 'react';
import { GitPullRequest, CheckCircle2, Clock } from 'lucide-react';

export default function FixesPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Automated Fixes & PRs</h1>
        <p className="text-gray-400 mt-1">Review pull requests synthesized autonomously by Sentinel AI.</p>
      </div>

      <div className="glass-panel p-8 rounded-xl text-center space-y-4">
        <GitPullRequest className="mx-auto text-indigo-400" size={40} />
        <h3 className="text-lg font-medium text-gray-200">No pending pull requests for review</h3>
        <p className="text-sm text-gray-500 max-w-md mx-auto">
          When an incident is investigated and resolved by the LangGraph agent, the synthesized code diff patch will appear here.
        </p>
      </div>
    </div>
  );
}
