import axios from 'axios';
import { Incident } from '@/types/incident';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api',
});

/**
 * Fetches all incidents
 */
export const getIncidents = async (): Promise<Incident[]> => {
  const { data } = await api.get('/incidents');
  return data;
};

export const getIncident = async (id: string): Promise<Incident> => {
  const { data } = await api.get(`/incidents/${id}`);
  return data;
};

export const simulateIncident = async (payload: { title: string; description: string; severity: string }) => {
  const { data } = await api.post('/incidents/simulate', payload);
  return data;
};


/**
 * Updates the status of an active incident
 */
export const updateIncidentStatus = async (id: string, status: string): Promise<Incident> => {
  const { data } = await api.patch(`/incidents/${id}/status`, { status });
  return data;
};

/**
 * Dismisses or deletes an incident record
 */
export const deleteIncident = async (id: string): Promise<{ success: boolean }> => {
  const { data } = await api.delete(`/incidents/${id}`);
  return data;
};

export default api;
