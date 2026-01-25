import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <span className="text-xl font-bold">
                Glow<span className="text-purple-400">Carib</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Jamaica&apos;s premier beauty services marketplace. Connecting clients with trusted beauty professionals island-wide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-gray-400 hover:text-white transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:support@glowcarib.com" className="hover:text-white transition-colors">
                  support@glowcarib.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Kingston, Jamaica</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} GlowCarib. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">Payments secured by</span>
              <svg className="h-8" viewBox="0 0 60 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.74 16.28L6.09 7.53H3.51L7.3 18.47H10.18L13.97 7.53H11.39L8.74 16.28Z" fill="#6772e5"/>
                <path d="M15.02 7.53L12.4 18.47H14.9L17.52 7.53H15.02Z" fill="#6772e5"/>
                <path d="M25.03 7.28C24.04 7.28 23.24 7.58 22.66 8.14L22.48 7.53H20.3V21.97L22.75 21.44V18.08C23.35 18.53 24.18 18.84 25.17 18.84C27.62 18.84 29.86 16.93 29.86 12.84C29.85 9.17 27.59 7.28 25.03 7.28ZM24.44 16.61C23.73 16.61 23.29 16.37 23 16.02L22.97 10.02C23.29 9.63 23.75 9.4 24.46 9.4C25.7 9.4 26.56 10.79 26.56 12.99C26.56 15.24 25.71 16.61 24.44 16.61Z" fill="#6772e5"/>
                <path d="M37.13 12.97C37.13 9.8 35.55 7.28 32.67 7.28C29.78 7.28 27.92 9.8 27.92 12.95C27.92 16.69 30.13 18.84 33.24 18.84C34.77 18.84 35.94 18.48 36.84 17.97V15.91C35.94 16.38 34.9 16.67 33.58 16.67C32.29 16.67 31.16 16.21 31.01 14.66H37.1C37.1 14.49 37.13 13.47 37.13 12.97ZM30.98 12.75C30.98 11.27 31.85 10.61 32.66 10.61C33.44 10.61 34.27 11.27 34.27 12.75H30.98Z" fill="#6772e5"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
