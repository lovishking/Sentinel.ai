import { formatShortId } from '../src/lib/formatters';

describe('String Formatters', () => {
  it('should truncate uuid to 8 characters', () => {
    const id = '12345678-abcd-ef01-2345-6789abcdef01';
    expect(formatShortId(id)).toBe('12345678');
  });
});
