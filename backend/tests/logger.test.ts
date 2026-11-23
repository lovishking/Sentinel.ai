import { logger } from '../src/utils/logger';

describe('Logger Utility', () => {
  it('should define info, warn, and error methods', () => {
    expect(typeof logger.info).toBe('function');
    expect(typeof logger.warn).toBe('function');
    expect(typeof logger.error).toBe('function');
  });
});
