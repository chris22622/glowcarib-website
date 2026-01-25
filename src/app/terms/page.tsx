import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - GlowCarib",
  description: "Read the Terms of Service for using GlowCarib, Jamaica's premier beauty services marketplace.",
};

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-100 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-gray-600">Last updated: January 25, 2026</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg prose-gray">
            
            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg mb-8">
              <p className="text-gray-700 m-0">
                Please read these Terms of Service carefully before using GlowCarib. By accessing or using our platform, you agree to be bound by these terms.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing or using the GlowCarib mobile application and website (collectively, the &quot;Platform&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, you may not access or use the Platform.
            </p>
            <p className="text-gray-600 mb-6">
              GlowCarib is a marketplace platform that connects clients seeking beauty services with independent beauty service providers (&quot;Providers&quot;) in Jamaica. GlowCarib facilitates bookings and payments but is not itself a provider of beauty services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. User Accounts</h2>
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2.1 Account Creation</h3>
            <p className="text-gray-600 mb-4">
              To use certain features of the Platform, you must create an account. You agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Provide accurate, current, and complete information during registration</li>
              <li>Maintain and promptly update your account information</li>
              <li>Keep your password secure and confidential</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2.2 Account Types</h3>
            <p className="text-gray-600 mb-4">
              GlowCarib offers two types of accounts:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li><strong>Client Accounts:</strong> For individuals seeking to book beauty services</li>
              <li><strong>Provider Accounts:</strong> For beauty professionals offering services through the Platform</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Client Responsibilities</h2>
            <p className="text-gray-600 mb-4">As a Client, you agree to:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Provide accurate information when booking services</li>
              <li>Arrive on time for scheduled appointments or provide reasonable notice of cancellation</li>
              <li>Pay for services as agreed through the Platform</li>
              <li>Treat Providers with respect and professionalism</li>
              <li>Provide honest and fair reviews of services received</li>
              <li>Not engage in any fraudulent, abusive, or unlawful behavior</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Provider Responsibilities</h2>
            <p className="text-gray-600 mb-4">As a Provider, you agree to:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Provide accurate information about your services, qualifications, and pricing</li>
              <li>Maintain any required licenses or certifications for your services</li>
              <li>Deliver services as described and booked through the Platform</li>
              <li>Maintain appropriate hygiene and safety standards</li>
              <li>Respond promptly to booking requests and client communications</li>
              <li>Honor confirmed bookings or provide reasonable notice of cancellation</li>
              <li>Treat Clients with respect and professionalism</li>
              <li>Comply with all applicable local laws and regulations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Bookings and Payments</h2>
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5.1 Booking Process</h3>
            <p className="text-gray-600 mb-6">
              When a Client books a service through GlowCarib, they enter into a direct agreement with the Provider. GlowCarib facilitates this transaction but is not a party to the service agreement between Clients and Providers.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5.2 Payment Processing</h3>
            <p className="text-gray-600 mb-4">
              All payments are processed securely through Stripe, our third-party payment processor. By using GlowCarib, you agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Stripe&apos;s terms of service and privacy policy</li>
              <li>Provide valid payment information when booking services</li>
              <li>Authorize charges for booked services</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5.3 Payment Flow</h3>
            <p className="text-gray-600 mb-6">
              When a booking is made, payment is authorized and held securely. Upon successful completion of the service, funds are released to the Provider, less any applicable GlowCarib service fees. Providers receive payouts directly to their registered bank accounts.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5.4 Pricing</h3>
            <p className="text-gray-600 mb-6">
              Providers set their own prices for services. All prices displayed on the Platform are in Jamaican Dollars (JMD) unless otherwise specified. GlowCarib may charge service fees to Clients and/or Providers, which will be clearly disclosed before any transaction.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Cancellations and No-Shows</h2>
            <p className="text-gray-600 mb-4">
              Please refer to our <a href="/refund-policy" className="text-purple-600 hover:underline">Refund and Cancellation Policy</a> for detailed information on:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Client cancellation procedures and fees</li>
              <li>Provider cancellation obligations</li>
              <li>No-show policies</li>
              <li>Refund eligibility and procedures</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Reviews and Ratings</h2>
            <p className="text-gray-600 mb-4">
              Users may leave reviews and ratings for completed services. By submitting a review, you agree that:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Your review reflects your honest opinion and experience</li>
              <li>You will not submit false, misleading, or defamatory content</li>
              <li>GlowCarib may display, modify, or remove reviews at our discretion</li>
              <li>You grant GlowCarib a license to use your review content</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Prohibited Conduct</h2>
            <p className="text-gray-600 mb-4">Users may not:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Harass, abuse, or discriminate against other users</li>
              <li>Submit false or misleading information</li>
              <li>Attempt to circumvent Platform fees or payments</li>
              <li>Use the Platform for any unauthorized commercial purposes</li>
              <li>Interfere with the proper functioning of the Platform</li>
              <li>Create multiple accounts for fraudulent purposes</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Intellectual Property</h2>
            <p className="text-gray-600 mb-6">
              The GlowCarib name, logo, and all related content, features, and functionality are owned by GlowCarib and are protected by copyright, trademark, and other intellectual property laws. You may not use our intellectual property without express written permission.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Disclaimers</h2>
            <p className="text-gray-600 mb-6">
              GlowCarib provides the Platform on an &quot;as is&quot; and &quot;as available&quot; basis. We do not guarantee the quality, safety, or legality of services offered by Providers. We are not responsible for the conduct of any user, and we disclaim all warranties to the fullest extent permitted by law.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Limitation of Liability</h2>
            <p className="text-gray-600 mb-6">
              To the maximum extent permitted by law, GlowCarib shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Platform or any services booked through it.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Dispute Resolution</h2>
            <p className="text-gray-600 mb-6">
              Any disputes between Clients and Providers should first be addressed directly between the parties. GlowCarib may assist in dispute resolution at our discretion but is not obligated to do so. Any disputes with GlowCarib shall be resolved through binding arbitration in accordance with Jamaican law.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Changes to Terms</h2>
            <p className="text-gray-600 mb-6">
              We may modify these Terms at any time. We will notify users of material changes through the Platform or via email. Your continued use of the Platform after changes take effect constitutes acceptance of the modified Terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">14. Termination</h2>
            <p className="text-gray-600 mb-6">
              We may suspend or terminate your account at any time for violation of these Terms or for any other reason at our sole discretion. You may also close your account at any time by contacting us.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">15. Governing Law</h2>
            <p className="text-gray-600 mb-6">
              These Terms are governed by and construed in accordance with the laws of Jamaica. Any legal proceedings shall be conducted in the courts of Jamaica.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">16. Contact Information</h2>
            <p className="text-gray-600 mb-6">
              If you have questions about these Terms, please contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Email:</strong> support@glowcarib.com</p>
              <p className="text-gray-700"><strong>Address:</strong> Kingston, Jamaica</p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
