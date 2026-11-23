/**
 * Core domain types for Sentinel AI backend incident management
 */

export type IncidentSeverity = 'low' | 'medium' | 'high' | 'critical';
export type IncidentStatus = 'open' | 'investigating' | 'resolving' | 'closed';

export interface IncidentRecord {
  id: string;
  title: string;
  description: string;
  severity: IncidentSeverity;
  status: IncidentStatus;
  createdAt: Date;
  updatedAt: Date;
}

export interface EvidenceRecord {
  id: string;
  incidentId: string;
  type: 'log' | 'metric' | 'stack_trace' | 'user_report';
  content: string;
  createdAt: Date;
}

export interface FixRecord {
  id: string;
  incidentId: string;
  description: string;
  patch: string | null;
  status: 'generated' | 'testing' | 'success' | 'failed' | 'applied';
  prUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
}
