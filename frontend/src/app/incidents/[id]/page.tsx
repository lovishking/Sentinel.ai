'use client';

import { useQuery } from '@tanstack/react-query';
import { getIncident } from '@/lib/api';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { AlertTriangle, Terminal, Code2, Play, GitPullRequest, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function IncidentDetails() {
  const { id } = useParams();
  const { data: incident, isLoading } = useQuery({
    queryKey: ['incident', id],
    queryFn: () => getIncident(id as string),
    refetchInterval: 5000, // Poll for updates during active investigation
  });

  if (isLoading) {
    return <div className="p-8 text-center text-gray-400">Loading investigation...</div>;
  }

  if (!incident) {
    return <div className="p-8 text-center text-red-400">Incident not found.</div>;
  }

  const latestRun = incident.runs?.[0];
  const activeFix = incident.fixes?.[0];

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">
      <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">
        ← Back to Dashboard
      </Link>

      <div className="glass-panel p-6 rounded-xl flex items-start justify-between border-t-4 border-red-500">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-2xl font-bold">{incident.title}</h1>
            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-500/20 text-red-400">
              {incident.severity.toUpperCase()}
            </span>
            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-indigo-500/20 text-indigo-400">
              {incident.status.toUpperCase()}
            </span>
          </div>
          <p className="text-gray-400">{incident.description}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">Reported at</p>
          <p className="text-sm font-medium">{new Date(incident.createdAt).toLocaleString()}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: AI Workflow */}
        <div className="lg:col-span-1 space-y-6">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Terminal className="text-blue-400" /> AI Investigation
          </h2>
          
          <div className="glass-panel rounded-xl p-6 relative">
            <div className="absolute left-[31px] top-10 bottom-10 w-0.5 bg-[#2d3748]"></div>
            
            <div className="space-y-8 relative">
              {[
                { label: 'Incident Detected', status: 'done', icon: AlertTriangle, desc: 'Payload received and parsed' },
                { label: 'Agent: Investigation', status: latestRun ? 'done' : 'waiting', icon: Terminal, desc: 'Analyzing stack traces & logs' },
                { label: 'Agent: Root Cause Analysis', status: latestRun?.status === 'completed' ? 'done' : 'running', icon: CheckCircle, desc: 'Identifying failure points' },
                { label: 'Agent: Fix Generation', status: activeFix ? 'done' : 'waiting', icon: Code2, desc: 'Synthesizing code patch' },
                { label: 'Apply & Test', status: activeFix ? 'running' : 'waiting', icon: Play, desc: 'Running in sandbox environment' },
                { label: 'Create Pull Request', status: activeFix?.prUrl ? 'done' : 'waiting', icon: GitPullRequest, desc: 'Pushing to GitHub' }
              ].map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 z-10 ${
                    step.status === 'done' ? 'bg-green-500/20 text-green-400 border border-green-500/50' :
                    step.status === 'running' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/50 animate-pulse' :
                    'bg-[#1a1d27] text-gray-500 border border-[#2d3748]'
                  }`}>
                    <step.icon size={18} />
                  </div>
                  <div>
                    <h3 className={`font-medium ${step.status === 'waiting' ? 'text-gray-500' : 'text-gray-200'}`}>
                      {step.label}
                    </h3>
                    <p className="text-sm text-gray-500">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Code Patch & Details */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Code2 className="text-purple-400" /> Proposed Fix
          </h2>

          <div className="glass-panel rounded-xl overflow-hidden flex flex-col h-[500px]">
            {activeFix ? (
              <>
                <div className="p-4 border-b border-[#2d3748] bg-[#14161f]">
                  <p className="text-sm font-medium text-gray-300">Generated Patch: {activeFix.id}</p>
                  <p className="text-xs text-gray-500 mt-1">{activeFix.description}</p>
                </div>
                <div className="flex-1 p-4 overflow-auto bg-[#0d0e15]">
                  <pre className="text-sm text-green-400 font-mono">
                    <code>{activeFix.patch}</code>
                  </pre>
                </div>
                <div className="p-4 border-t border-[#2d3748] bg-[#14161f] flex justify-end gap-3">
                  <button className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                    Reject Fix
                  </button>
                  <button className="px-4 py-2 text-sm font-medium bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors shadow-lg shadow-indigo-500/20">
                    Approve & Merge
                  </button>
                </div>
              </>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-gray-500 p-8 text-center space-y-4">
                <Terminal size={48} className="text-gray-700" />
                <p>AI Agents are currently analyzing the incident.<br/>A code patch will appear here once generated.</p>
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
