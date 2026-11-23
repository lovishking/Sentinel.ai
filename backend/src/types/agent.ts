/**
 * Agent workflow state and configuration types for LangGraph orchestration
 */

export interface AgentWorkflowState {
  incidentId: string;
  context: string;
  analysis: string;
  fixPlan: string;
  patch: string;
  status: 'started' | 'investigated' | 'planned' | 'resolved' | 'failed';
}

export interface AgentRunLog {
  timestamp: string;
  node: string;
  action: string;
  details?: Record<string, unknown>;
}
