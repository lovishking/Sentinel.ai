import React from 'react';
import { getSeverityBadgeClass, getStatusBadgeClass } from '@/utils/status';

interface StatusBadgeProps {
  type: 'severity' | 'status';
  value: string;
}

/**
 * Reusable visual badge component for incident severity or operational status
 */
export default function StatusBadge({ type, value }: StatusBadgeProps) {
  const badgeClass = type === 'severity' 
    ? getSeverityBadgeClass(value) 
    : getStatusBadgeClass(value);

  return (
    <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full uppercase tracking-wider ${badgeClass}`}>
      {value}
    </span>
  );
}
