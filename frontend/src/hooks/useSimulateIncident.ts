import { useMutation, useQueryClient } from '@tanstack/react-query';
import { simulateIncident } from '@/lib/api';
import toast from 'react-hot-toast';

/**
 * Mutation hook for triggering AI incident investigation simulation
 */
export function useSimulateIncident() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: simulateIncident,
    onSuccess: () => {
      toast.success('Incident simulated and AI investigation triggered');
      queryClient.invalidateQueries({ queryKey: ['incidents'] });
    },
    onError: () => {
      toast.error('Failed to trigger incident simulation');
    },
  });
}
