"use client";

import Image from "next/image";
import { useState } from "react";

// Screenshot data - update this array when adding new screenshots
const screenshots = [
  { src: "/screenshots/app-01.png", alt: "CaribGlow Welcome", caption: "Welcome to CaribGlow" },
  { src: "/screenshots/app-02.png", alt: "Explore Providers", caption: "Discover beauty providers" },
  { src: "/screenshots/app-03.png", alt: "Provider Profile", caption: "View stunning portfolios" },
  { src: "/screenshots/app-04.png", alt: "Service Details", caption: "Browse services & pricing" },
  { src: "/screenshots/app-05.png", alt: "Book Appointment", caption: "Book in seconds" },
  { src: "/screenshots/app-06.png", alt: "Your Bookings", caption: "Manage appointments" },
  { src: "/screenshots/app-07.png", alt: "Messages", caption: "Chat with providers" },
  { src: "/screenshots/app-08.png", alt: "Provider Dashboard", caption: "Manage your business" },
  { src: "/screenshots/app-09.png", alt: "Provider Schedule", caption: "View your calendar" },
];

export default function AppScreenshots() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section
      className="section-padding bg-gradient-to-b from-purple-50 to-white"
      id="app-preview"
    >
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See CaribGlow in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the beautiful, intuitive interface designed for
            Jamaica&apos;s beauty community
          </p>
        </div>

        {/* Main Featured Screenshot in Phone Frame */}
        <div className="max-w-sm md:max-w-md lg:max-w-lg mx-auto mb-8">
          <div className="relative aspect-[9/19.5] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-gray-900 bg-gray-900">
            <Image
              src={screenshots[selectedIndex].src}
              alt={screenshots[selectedIndex].alt}
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-center text-gray-600 mt-4 font-medium">
            {screenshots[selectedIndex].caption}
          </p>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center gap-3 md:gap-4 flex-wrap">
          {screenshots.map((screenshot, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`relative w-14 h-28 md:w-16 md:h-32 rounded-xl overflow-hidden border-2 transition-all ${
                selectedIndex === index
                  ? "border-purple-600 shadow-lg scale-105"
                  : "border-gray-200 hover:border-purple-300"
              }`}
              aria-label={`View ${screenshot.alt}`}
            >
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>

        {/* Navigation Dots for Mobile */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {screenshots.map((_, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                selectedIndex === index
                  ? "bg-purple-600 w-6"
                  : "bg-gray-300"
              }`}
              aria-label={`Go to screenshot ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Compact version for the /app page
export function AppScreenshotsCompact() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="py-8">
      {/* Main Screenshot */}
      <div className="max-w-[280px] mx-auto mb-6">
        <div className="relative aspect-[9/19.5] rounded-[1.5rem] overflow-hidden shadow-xl border-4 border-gray-900 bg-gray-900">
          <Image
            src={screenshots[selectedIndex].src}
            alt={screenshots[selectedIndex].alt}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex justify-center gap-2 flex-wrap">
        {screenshots.map((screenshot, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`relative w-10 h-20 rounded-lg overflow-hidden border transition-all ${
              selectedIndex === index
                ? "border-purple-600 shadow-md"
                : "border-gray-200"
            }`}
          >
            <Image
              src={screenshot.src}
              alt={screenshot.alt}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
