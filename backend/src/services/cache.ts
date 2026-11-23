import { logger } from '../utils/logger';

const memoryCache = new Map<string, { value: unknown; expiry: number }>();

export const cache = {
  get: <T>(key: string): T | null => {
    const item = memoryCache.get(key);
    if (!item || Date.now() > item.expiry) return null;
    return item.value as T;
  },
  set: (key: string, value: unknown, ttlSeconds = 60) => {
    memoryCache.set(key, { value, expiry: Date.now() + ttlSeconds * 1000 });
  },
};
