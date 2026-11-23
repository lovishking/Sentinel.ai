import { getSeverityBadgeClass, getStatusBadgeClass } from '../src/utils/status';

describe('Status Badge Helpers', () => {
  it('should return red styling for critical severity', () => {
    expect(getSeverityBadgeClass('critical')).toContain('text-red-400');
  });

  it('should return green styling for closed status', () => {
    expect(getStatusBadgeClass('closed')).toContain('text-green-400');
  });
});
