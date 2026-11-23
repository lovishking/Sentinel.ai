import { formatRelativeTime } from '../src/utils/date';

describe('Date Formatting Utils', () => {
  it('should return just now for recent timestamps', () => {
    const nowIso = new Date().toISOString();
    expect(formatRelativeTime(nowIso)).toBe('just now');
  });
});
