# Incident Response Standard Operating Procedure (SOP)

## Severity Definitions
- **Critical**: Customer facing outage or database failure. Requires immediate autonomous patch synthesis.
- **High**: Degraded performance or high error rate across non-critical services.
- **Medium**: Isolated transient errors with automatic retry recovery.
- **Low**: Informational warning thresholds.

## Escalation Path
1. Sentinel AI triggers automated investigation.
2. Fix patch synthesized within MTTR target (< 15m).
3. On-call SRE reviews generated pull request.
