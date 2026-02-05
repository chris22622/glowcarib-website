import { Metadata } from "next";
import DownloadButtons, { DownloadButtonsCTA } from "@/components/DownloadButtons";
import AppScreenshots from "@/components/AppScreenshots";

export const metadata: Metadata = {
  title: "Download the App - GlowCarib",
  description:
    "Download GlowCarib for iOS and Android. Book beauty services across Jamaica with ease - hair, nails, makeup, barbers, and more.",
  openGraph: {
    title: "Download GlowCarib - Jamaica's Beauty App",
    description: "Book beauty services across Jamaica in one tap.",
    url: "https://www.glowcarib.com/app",
  },
};

export default function AppPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-hero text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Get the GlowCarib App
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Book beauty services across Jamaica with ease. Find trusted
            professionals, schedule appointments, and pay securely - all in one
            app.
          </p>
          <DownloadButtons variant="hero" />
        </div>
      </section>

      {/* Screenshots Gallery */}
      <AppScreenshots />

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed for both clients and beauty
              professionals
            </p>
          </div>

          {/* For Clients */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-purple-600 mb-8">
              For Clients
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🔍",
                  title: "Smart Search",
                  desc: "Find beauty professionals by service type, location, ratings, or price",
                },
                {
                  icon: "📍",
                  title: "Map View",
                  desc: "See all providers near you on an interactive map",
                },
                {
                  icon: "📅",
                  title: "Easy Booking",
                  desc: "Book appointments in seconds with real-time availability",
                },
                {
                  icon: "💬",
                  title: "In-App Messaging",
                  desc: "Chat directly with providers before and after booking",
                },
                {
                  icon: "💳",
                  title: "Secure Payments",
                  desc: "Pay safely with Stripe - your payment info is protected",
                },
                {
                  icon: "⭐",
                  title: "Reviews & Ratings",
                  desc: "Read honest reviews and share your experience",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* For Providers */}
          <div>
            <h3 className="text-2xl font-bold text-center text-teal-600 mb-8">
              For Providers
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "📊",
                  title: "Business Dashboard",
                  desc: "Track bookings, revenue, and client activity at a glance",
                },
                {
                  icon: "📆",
                  title: "Calendar Management",
                  desc: "Set your availability and block off personal time",
                },
                {
                  icon: "👥",
                  title: "Client List",
                  desc: "Manage your client relationships and booking history",
                },
                {
                  icon: "💰",
                  title: "Direct Payouts",
                  desc: "Get paid directly to your bank account after services",
                },
                {
                  icon: "📸",
                  title: "Portfolio Gallery",
                  desc: "Showcase your best work to attract new clients",
                },
                {
                  icon: "🔔",
                  title: "Smart Notifications",
                  desc: "Never miss a booking request or message",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-teal-100"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "Is the app free to download?",
                a: "Yes! GlowCarib is completely free to download and use for clients. Providers can list their services for free as well.",
              },
              {
                q: "How do payments work?",
                a: "All payments are processed securely through Stripe. Clients can pay with any major credit or debit card. Providers receive payouts directly to their bank account after services are completed.",
              },
              {
                q: "Is my personal information safe?",
                a: "Absolutely. We use bank-level encryption to protect your data. Your payment information is never stored on our servers - it's handled securely by Stripe.",
              },
              {
                q: "What if I need to cancel a booking?",
                a: "You can cancel bookings through the app. Cancellation policies vary by provider, so check the specific terms before booking.",
              },
              {
                q: "How do I become a provider on GlowCarib?",
                a: "Simply download the app and sign up as a provider. You'll be able to create your profile, add services with pricing, set your availability, and start accepting bookings.",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Glow?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of Jamaicans discovering the best beauty services on
            the island.
          </p>
          <DownloadButtonsCTA />
        </div>
      </section>
    </>
  );
}
