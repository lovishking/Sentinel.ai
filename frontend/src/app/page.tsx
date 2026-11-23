'use client';

import { useQuery, useMutation } from '@tanstack/react-query';
import { getIncidents, simulateIncident } from '@/lib/api';
import { motion } from 'framer-motion';
import { Activity, ShieldAlert, CheckCircle2, Clock } from 'lucide-react';
import toast from 'react-hot-toast';
import Link from 'next/link';
import MetricCard from '@/components/MetricCard';
import EmptyState from '@/components/EmptyState';

export default function Dashboard() {
  const { data: incidents = [], refetch } = useQuery({
    queryKey: ['incidents'],
    queryFn: getIncidents,
  });

  const simMutation = useMutation({
    mutationFn: simulateIncident,
    onSuccess: () => {
      toast.success('Incident simulated and AI investigation started');
      refetch();
    },
    onError: () => {
      toast.error('Failed to simulate incident');
    }
  });

  const handleSimulate = () => {
    simMutation.mutate({
      title: 'Database Connection Pool Exhaustion',
      description: 'The production PostgreSQL database is rejecting connections due to max_connections limit reached. Affected service: payment-gateway.',
      severity: 'critical',
    });
  };

  const metrics = [
    { label: 'Active Incidents', value: incidents.filter((i: any) => i.status !== 'closed').length, icon: Activity, color: 'text-blue-500' },
    { label: 'Critical Alerts', value: incidents.filter((i: any) => i.severity === 'critical').length, icon: ShieldAlert, color: 'text-red-500' },
    { label: 'Resolved (24h)', value: incidents.filter((i: any) => i.status === 'closed').length, icon: CheckCircle2, color: 'text-green-500' },
    { label: 'Avg MTTR', value: '14m', icon: Clock, color: 'text-purple-500' },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">System Status</h1>
          <p className="text-gray-400 mt-1">Autonomous AI Responder active and monitoring.</p>
        </div>
        <button
          onClick={handleSimulate}
          disabled={simMutation.isPending}
          className="bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-[#0a0a0f] text-white px-4 py-2 rounded-lg font-medium transition-all disabled:opacity-50 flex items-center gap-2 cursor-pointer shadow-lg shadow-indigo-500/20" aria-label="Simulate production incident alert"
        >
          {simMutation.isPending ? 'Simulating...' : 'Simulate Incident'}
        </button>
      </div>

      {/* Metrics Summary Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {metrics.map((m, i) => (
          <MetricCard
            key={m.label}
            label={m.label}
            value={m.value}
            icon={m.icon}
            color={m.color}
            index={i}
          />
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Recent Incidents</h2>
        <div className="glass-panel rounded-xl overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#2d3748] bg-[#14161f]">
                <th className="p-4 text-sm font-medium text-gray-400">Incident</th>
                <th className="p-4 text-sm font-medium text-gray-400">Severity</th>
                <th className="p-4 text-sm font-medium text-gray-400">Status</th>
                <th className="p-4 text-sm font-medium text-gray-400">Time</th>
                <th className="p-4 text-sm font-medium text-gray-400">Action</th>
              </tr>
            </thead>
            <tbody>
              {incidents.length === 0 && (
                <tr>
                  <td colSpan={5}>
                    <EmptyState
                      title="All systems operational"
                      description="No active incidents reported. The autonomous responder is listening for alerts."
                    />
                  </td>
                </tr>
              )}
              {incidents.map((incident: any) => (
                <tr key={incident.id} className="border-b border-[#2d3748] hover:bg-[#1e212b] transition-colors">
                  <td className="p-4 font-medium text-gray-200">{incident.title}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      incident.severity === 'critical' ? 'bg-red-500/20 text-red-400' :
                      incident.severity === 'high' ? 'bg-orange-500/20 text-orange-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {incident.severity.toUpperCase()}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      incident.status === 'open' ? 'bg-yellow-500/20 text-yellow-400' :
                      incident.status === 'resolving' ? 'bg-indigo-500/20 text-indigo-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {incident.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-gray-400">
                    {new Date(incident.createdAt).toLocaleTimeString()}
                  </td>
                  <td className="p-4">
                    <Link href={`/incidents/${incident.id}`} className="text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors">
                      View Investigation →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
