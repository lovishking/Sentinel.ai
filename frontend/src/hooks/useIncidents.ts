import { useQuery } from '@tanstack/react-query';
import { getIncidents } from '@/lib/api';
import { Incident } from '@/types/incident';

/**
 * Custom React hook to fetch and cache all production incidents
 */
export function useIncidents() {
  return useQuery<Incident[]>({
    queryKey: ['incidents'],
    queryFn: getIncidents,
  });
}
