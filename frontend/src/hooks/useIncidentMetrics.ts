import { useMemo } from 'react';
import { Incident } from '@/types/incident';

/**
 * Computes statistical metrics across an array of incidents
 */
export function useIncidentMetrics(incidents: Incident[] = []) {
  return useMemo(() => {
    const active = incidents.filter(i => i.status !== 'closed').length;
    const critical = incidents.filter(i => i.severity === 'critical').length;
    const resolved = incidents.filter(i => i.status === 'closed').length;
    return { active, critical, resolved, total: incidents.length };
  }, [incidents]);
}
