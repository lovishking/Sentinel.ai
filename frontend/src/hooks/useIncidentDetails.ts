import { useQuery } from '@tanstack/react-query';
import { getIncident } from '@/lib/api';
import { Incident } from '@/types/incident';

/**
 * Custom hook to fetch individual incident details with configurable polling
 */
export function useIncidentDetails(id: string, pollingInterval = 5000) {
  return useQuery<Incident>({
    queryKey: ['incident', id],
    queryFn: () => getIncident(id),
    refetchInterval: pollingInterval,
    enabled: Boolean(id),
  });
}
