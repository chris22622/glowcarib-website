import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - GlowCarib",
  description: "Learn about GlowCarib, Jamaica's premier beauty services marketplace connecting clients with trusted beauty professionals across the island.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-primary text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About GlowCarib</h1>
            <p className="text-xl text-purple-100">
              Empowering Jamaica&apos;s beauty industry through technology and trust
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  GlowCarib was founded with a simple vision: to make quality beauty services accessible to every Jamaican, while empowering local beauty professionals to grow their businesses.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We believe that everyone deserves to look and feel their best, and that talented beauty professionals deserve a platform that helps them reach more clients and earn a fair income.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-teal-50 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                      <span className="text-2xl">🇯🇲</span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Jamaica-Focused</div>
                      <div className="text-gray-600">Built for Jamaicans, by Jamaicans</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                      <span className="text-2xl">✨</span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Quality First</div>
                      <div className="text-gray-600">Verified professionals only</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                      <span className="text-2xl">🤝</span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Community Driven</div>
                      <div className="text-gray-600">Supporting local businesses</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* What We Do */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What We Do</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="card">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">For Clients</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-purple-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Discover verified beauty professionals across Jamaica</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-purple-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Book appointments instantly with real-time availability</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-purple-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Pay securely through the app with buyer protection</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-purple-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Read authentic reviews from real customers</span>
                    </li>
                  </ul>
                </div>
                <div className="card">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">For Providers</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-teal-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Reach new clients across Jamaica effortlessly</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-teal-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Manage bookings and availability with ease</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-teal-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Get paid directly to your bank account</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-teal-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Build your reputation with verified reviews</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Market Served */}
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Market</h2>
              <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-8">
                GlowCarib operates exclusively in Jamaica, serving all 14 parishes from Kingston to Negril. We understand the unique needs of the Jamaican beauty market and are committed to supporting local professionals and clients.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-purple-600">14</div>
                  <div className="text-gray-600">Parishes Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600">500+</div>
                  <div className="text-gray-600">Beauty Professionals</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600">7</div>
                  <div className="text-gray-600">Service Categories</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600">JMD</div>
                  <div className="text-gray-600">Local Currency</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
