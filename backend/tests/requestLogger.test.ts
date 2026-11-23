import { requestLogger } from '../src/middleware/requestLogger';

describe('RequestLogger Middleware', () => {
  it('should be a valid Express middleware function', () => {
    expect(typeof requestLogger).toBe('function');
    expect(requestLogger.length).toBe(3);
  });
});
