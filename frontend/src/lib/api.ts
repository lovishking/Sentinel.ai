import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api',
});

export const getIncidents = async () => {
  const { data } = await api.get('/incidents');
  return data;
};

export const getIncident = async (id: string) => {
  const { data } = await api.get(`/incidents/${id}`);
  return data;
};

export const simulateIncident = async (payload: { title: string; description: string; severity: string }) => {
  const { data } = await api.post('/incidents/simulate', payload);
  return data;
};

export default api;
