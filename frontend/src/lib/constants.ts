/**
 * Shared frontend application constants and configuration thresholds
 */

export const APP_CONFIG = {
  API_BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api',
  POLLING_INTERVAL_MS: 5000,
  DEFAULT_PAGE_SIZE: 10,
  TOAST_DURATION_MS: 4000,
} as const;

export const ROUTES = {
  HOME: '/',
  INCIDENTS: '/incidents',
  FIXES: '/fixes',
  SETTINGS: '/settings',
} as const;
