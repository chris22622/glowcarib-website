/**
 * App Configuration
 *
 * WHERE TO SET PLAY STORE URL:
 * - For development: Edit .env.local in the project root
 * - For production: Edit .env.production or set env vars on hosting
 *
 * Example:
 * NEXT_PUBLIC_PLAY_STORE_URL=https://play.google.com/store/apps/details?id=com.caribglow.app
 */

export const config = {
  // Google Play Store URL - leave empty for "Coming Soon" mode
  PLAY_STORE_URL: process.env.NEXT_PUBLIC_PLAY_STORE_URL || '',

  // Apple App Store URL - leave empty for "Coming Soon" mode
  APP_STORE_URL: process.env.NEXT_PUBLIC_APP_STORE_URL || '',

  // Waitlist/signup URL (Google Form, Typeform, etc.)
  WAITLIST_URL: process.env.NEXT_PUBLIC_WAITLIST_URL || '',

  // Contact email
  CONTACT_EMAIL: 'support@glowcarib.com',
};

// Helper functions
export const isPlayStoreAvailable = (): boolean => !!config.PLAY_STORE_URL;
export const isAppStoreAvailable = (): boolean => !!config.APP_STORE_URL;
export const hasAnyStoreAvailable = (): boolean => isPlayStoreAvailable() || isAppStoreAvailable();
