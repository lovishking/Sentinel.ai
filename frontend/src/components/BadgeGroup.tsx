import React from 'react';
import StatusBadge from './StatusBadge';

interface BadgeGroupProps {
  severity: string;
  status: string;
}

/**
 * Groups severity and operational status badges with standard spacing
 */
export default function BadgeGroup({ severity, status }: BadgeGroupProps) {
  return (
    <div className="flex items-center gap-2">
      <StatusBadge type="severity" value={severity} />
      <StatusBadge type="status" value={status} />
    </div>
  );
}
