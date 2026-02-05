"use client";

import { config, isPlayStoreAvailable, isAppStoreAvailable, hasAnyStoreAvailable } from "@/config/app";

interface DownloadButtonsProps {
  variant?: "hero" | "cta";
  showWaitlist?: boolean;
  className?: string;
}

export default function DownloadButtons({
  variant = "hero",
  showWaitlist = true,
  className = "",
}: DownloadButtonsProps) {
  const playStoreAvailable = isPlayStoreAvailable();
  const appStoreAvailable = isAppStoreAvailable();
  const anyStoreAvailable = hasAnyStoreAvailable();

  // Style variants
  const primaryStyles =
    variant === "hero"
      ? "bg-white text-purple-700 hover:bg-purple-50"
      : "bg-white text-gray-900 hover:bg-gray-100";

  const secondaryStyles =
    variant === "hero"
      ? "bg-white/20 backdrop-blur text-white hover:bg-white/30 border border-white/30"
      : "bg-gray-800 text-white hover:bg-gray-700";

  // Coming Soon mode - no stores available
  if (!anyStoreAvailable && showWaitlist) {
    return (
      <div className={`flex flex-col items-center gap-4 ${className}`}>
        <div className="text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-amber-100 text-amber-800 font-medium text-sm mb-4">
            Coming Soon to iOS &amp; Android
          </span>
        </div>
        {config.WAITLIST_URL ? (
          <a
            href={config.WAITLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${primaryStyles} px-8 py-4 rounded-full font-semibold text-lg transition-colors inline-flex items-center justify-center gap-2`}
          >
            Join the Waitlist
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        ) : (
          <p className={variant === "hero" ? "text-lg text-purple-100" : "text-lg text-gray-400"}>
            Sign up to be notified when we launch!
          </p>
        )}
      </div>
    );
  }

  // Stores available - show download buttons
  return (
    <div className={`flex flex-col sm:flex-row gap-4 justify-center ${className}`}>
      {/* iOS Button */}
      <a
        href={appStoreAvailable ? config.APP_STORE_URL : "#download"}
        target={appStoreAvailable ? "_blank" : undefined}
        rel={appStoreAvailable ? "noopener noreferrer" : undefined}
        className={`${primaryStyles} px-8 py-4 rounded-full font-semibold text-lg transition-colors inline-flex items-center justify-center gap-2`}
      >
        <AppleIcon />
        {appStoreAvailable ? "Download for iOS" : "iOS Coming Soon"}
      </a>

      {/* Android Button */}
      <a
        href={playStoreAvailable ? config.PLAY_STORE_URL : "#download"}
        target={playStoreAvailable ? "_blank" : undefined}
        rel={playStoreAvailable ? "noopener noreferrer" : undefined}
        className={`${secondaryStyles} px-8 py-4 rounded-full font-semibold text-lg transition-colors inline-flex items-center justify-center gap-2`}
      >
        <PlayStoreIcon />
        {playStoreAvailable ? "Get on Google Play" : "Android Coming Soon"}
      </a>
    </div>
  );
}

// CTA-style download buttons for dark backgrounds
export function DownloadButtonsCTA({ className = "" }: { className?: string }) {
  const playStoreAvailable = isPlayStoreAvailable();
  const appStoreAvailable = isAppStoreAvailable();
  const anyStoreAvailable = hasAnyStoreAvailable();

  if (!anyStoreAvailable) {
    return (
      <div className={`flex flex-col items-center gap-4 ${className}`}>
        <span className="inline-block px-4 py-2 rounded-full bg-amber-500/20 text-amber-300 font-medium text-sm">
          Coming Soon to iOS &amp; Android
        </span>
        {config.WAITLIST_URL && (
          <a
            href={config.WAITLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
          >
            Join the Waitlist
          </a>
        )}
      </div>
    );
  }

  return (
    <div className={`flex flex-col sm:flex-row gap-4 justify-center ${className}`}>
      {/* iOS Button */}
      <a
        href={appStoreAvailable ? config.APP_STORE_URL : "#download"}
        target={appStoreAvailable ? "_blank" : undefined}
        rel={appStoreAvailable ? "noopener noreferrer" : undefined}
        className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold inline-flex items-center justify-center gap-3 hover:bg-gray-100 transition-colors"
      >
        <AppleIcon className="w-8 h-8" />
        <div className="text-left">
          <div className="text-xs text-gray-500">
            {appStoreAvailable ? "Download on the" : "Coming to"}
          </div>
          <div className="text-lg font-bold">App Store</div>
        </div>
      </a>

      {/* Android Button */}
      <a
        href={playStoreAvailable ? config.PLAY_STORE_URL : "#download"}
        target={playStoreAvailable ? "_blank" : undefined}
        rel={playStoreAvailable ? "noopener noreferrer" : undefined}
        className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold inline-flex items-center justify-center gap-3 hover:bg-gray-100 transition-colors"
      >
        <PlayStoreIcon className="w-8 h-8" />
        <div className="text-left">
          <div className="text-xs text-gray-500">
            {playStoreAvailable ? "Get it on" : "Coming to"}
          </div>
          <div className="text-lg font-bold">Google Play</div>
        </div>
      </a>
    </div>
  );
}

// SVG Icons
function AppleIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}

function PlayStoreIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
    </svg>
  );
}
