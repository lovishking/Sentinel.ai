'use client';

import React, { useState } from 'react';
import { useIncidents } from '@/hooks/useIncidents';
import SearchBar from '@/components/SearchBar';
import FilterDropdown from '@/components/FilterDropdown';
import StatusBadge from '@/components/StatusBadge';
import EmptyState from '@/components/EmptyState';
import LoadingSpinner from '@/components/LoadingSpinner';
import Link from 'next/link';

export default function IncidentsPage() {
  const { data: incidents = [], isLoading } = useIncidents();
  const [search, setSearch] = useState('');
  const [severityFilter, setSeverityFilter] = useState('all');

  const filtered = incidents.filter(i => {
    const matchesSearch = i.title.toLowerCase().includes(search.toLowerCase());
    const matchesSeverity = severityFilter === 'all' || i.severity === severityFilter;
    return matchesSearch && matchesSeverity;
  });

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Incident Archive</h1>
        <p className="text-gray-400 mt-1">Audit log of all past and ongoing alerts.</p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <SearchBar value={search} onChange={setSearch} />
        <FilterDropdown
          label="Severity"
          options={[
            { label: 'All Severities', value: 'all' },
            { label: 'Critical', value: 'critical' },
            { label: 'High', value: 'high' },
            { label: 'Medium', value: 'medium' },
            { label: 'Low', value: 'low' },
          ]}
          selectedValue={severityFilter}
          onSelect={setSeverityFilter}
        />
      </div>

      {isLoading ? (
        <LoadingSpinner label="Loading incidents archive..." />
      ) : filtered.length === 0 ? (
        <EmptyState title="No matching incidents" description="Try adjusting your search or severity filters." />
      ) : (
        <div className="glass-panel rounded-xl overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-[#14161f] border-b border-[#2d3748]">
              <tr>
                <th className="p-4 text-xs font-semibold text-gray-400">Incident</th>
                <th className="p-4 text-xs font-semibold text-gray-400">Severity</th>
                <th className="p-4 text-xs font-semibold text-gray-400">Status</th>
                <th className="p-4 text-xs font-semibold text-gray-400">Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(inc => (
                <tr key={inc.id} className="border-b border-[#2d3748] hover:bg-[#1e212b] transition-colors">
                  <td className="p-4 font-medium text-gray-200">{inc.title}</td>
                  <td className="p-4"><StatusBadge type="severity" value={inc.severity} /></td>
                  <td className="p-4"><StatusBadge type="status" value={inc.status} /></td>
                  <td className="p-4">
                    <Link href={`/incidents/${inc.id}`} className="text-indigo-400 hover:text-indigo-300 text-sm">
                      View details →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
