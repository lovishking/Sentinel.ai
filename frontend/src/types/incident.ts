/**
 * Frontend incident models and API contracts
 */

export type SeverityLevel = 'low' | 'medium' | 'high' | 'critical';
export type IncidentStatus = 'open' | 'investigating' | 'resolving' | 'closed';

export interface Evidence {
  id: string;
  incidentId: string;
  type: string;
  content: string;
  createdAt: string;
}

export interface AgentRun {
  id: string;
  incidentId: string;
  status: 'running' | 'completed' | 'failed';
  logs: unknown[];
  startedAt: string;
  endedAt?: string | null;
}

export interface Fix {
  id: string;
  incidentId: string;
  description: string;
  patch: string | null;
  status: string;
  prUrl?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface Incident {
  id: string;
  title: string;
  description: string;
  severity: SeverityLevel;
  status: IncidentStatus;
  createdAt: string;
  updatedAt: string;
  evidences?: Evidence[];
  runs?: AgentRun[];
  fixes?: Fix[];
}
