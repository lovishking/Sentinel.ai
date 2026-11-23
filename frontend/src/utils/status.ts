/**
 * Badge styling utility mappings for incident severities and operational statuses
 */

export function getSeverityBadgeClass(severity: string): string {
  switch (severity?.toLowerCase()) {
    case 'critical':
      return 'bg-red-500/20 text-red-400 border border-red-500/30';
    case 'high':
      return 'bg-orange-500/20 text-orange-400 border border-orange-500/30';
    case 'medium':
      return 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30';
    case 'low':
    default:
      return 'bg-blue-500/20 text-blue-400 border border-blue-500/30';
  }
}

export function getStatusBadgeClass(status: string): string {
  switch (status?.toLowerCase()) {
    case 'closed':
      return 'bg-green-500/20 text-green-400 border border-green-500/30';
    case 'resolving':
      return 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30';
    case 'investigating':
      return 'bg-purple-500/20 text-purple-400 border border-purple-500/30';
    case 'open':
    default:
      return 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30';
  }
}
