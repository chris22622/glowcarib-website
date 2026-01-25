import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - GlowCarib",
  description: "Learn how GlowCarib collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-100 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
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
                At GlowCarib, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1.1 Personal Information You Provide</h3>
            <p className="text-gray-600 mb-4">When you create an account or use our services, we may collect:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li><strong>Account Information:</strong> Name, email address, phone number, password</li>
              <li><strong>Profile Information:</strong> Profile photo, bio, location, service preferences</li>
              <li><strong>Provider Information:</strong> Business name, service descriptions, pricing, qualifications, portfolio photos</li>
              <li><strong>Communication Data:</strong> Messages exchanged through the platform</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1.2 Payment Information</h3>
            <p className="text-gray-600 mb-6">
              Payment processing is handled by Stripe, our third-party payment processor. GlowCarib does not directly collect or store your full credit card numbers or bank account details. Stripe may collect payment information including card numbers, bank account information, and billing addresses in accordance with their privacy policy.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1.3 Automatically Collected Information</h3>
            <p className="text-gray-600 mb-4">When you use our platform, we automatically collect:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li><strong>Device Information:</strong> Device type, operating system, unique device identifiers</li>
              <li><strong>Usage Data:</strong> Pages visited, features used, time spent on the platform</li>
              <li><strong>Location Data:</strong> General location based on IP address; precise location if you enable location services</li>
              <li><strong>Log Data:</strong> IP address, browser type, access times, referring URLs</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We use collected information to:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Create and manage your account</li>
              <li>Facilitate bookings between Clients and Providers</li>
              <li>Process payments and prevent fraud</li>
              <li>Send booking confirmations, reminders, and notifications</li>
              <li>Enable communication between users</li>
              <li>Provide customer support</li>
              <li>Improve and personalize our services</li>
              <li>Analyze usage patterns and trends</li>
              <li>Ensure platform security and prevent abuse</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. How We Share Your Information</h2>
            <p className="text-gray-600 mb-4">We may share your information with:</p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.1 Other Users</h3>
            <p className="text-gray-600 mb-6">
              When you book a service, your name and contact information may be shared with the Provider. Provider profiles, including business information and reviews, are visible to other users.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.2 Service Providers</h3>
            <p className="text-gray-600 mb-4">We work with third-party service providers who help us operate our platform:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li><strong>Stripe:</strong> Payment processing and fraud prevention</li>
              <li><strong>Cloud Hosting:</strong> Data storage and server infrastructure</li>
              <li><strong>Analytics:</strong> Usage analysis and performance monitoring</li>
              <li><strong>Communication Services:</strong> Email and push notification delivery</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.3 Legal Requirements</h3>
            <p className="text-gray-600 mb-6">
              We may disclose information when required by law, court order, or government regulation, or when we believe disclosure is necessary to protect our rights, prevent fraud, or ensure user safety.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Data Security</h2>
            <p className="text-gray-600 mb-4">We implement appropriate security measures to protect your information, including:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Secure authentication systems</li>
              <li>Regular security assessments</li>
              <li>Access controls and employee training</li>
            </ul>
            <p className="text-gray-600 mb-6">
              However, no method of transmission over the Internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Your Rights and Choices</h2>
            <p className="text-gray-600 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li><strong>Access:</strong> Request a copy of your personal information</li>
              <li><strong>Correction:</strong> Update or correct inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your account and associated data</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
              <li><strong>Location:</strong> Disable location services through your device settings</li>
            </ul>
            <p className="text-gray-600 mb-6">
              To exercise these rights, please contact us at support@glowcarib.com.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Data Retention</h2>
            <p className="text-gray-600 mb-6">
              We retain your personal information for as long as your account is active or as needed to provide services. We may retain certain information as required by law or for legitimate business purposes, such as resolving disputes and enforcing our agreements.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Children&apos;s Privacy</h2>
            <p className="text-gray-600 mb-6">
              GlowCarib is not intended for users under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete it.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. International Data Transfers</h2>
            <p className="text-gray-600 mb-6">
              Your information may be transferred to and processed in countries other than Jamaica where our service providers are located. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Third-Party Links</h2>
            <p className="text-gray-600 mb-6">
              Our platform may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Changes to This Policy</h2>
            <p className="text-gray-600 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of material changes by posting the new policy on our platform and updating the &quot;Last updated&quot; date. Your continued use of the platform after changes take effect constitutes acceptance of the updated policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Contact Us</h2>
            <p className="text-gray-600 mb-6">
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Email:</strong> support@glowcarib.com</p>
              <p className="text-gray-700 mb-2"><strong>Subject Line:</strong> Privacy Inquiry</p>
              <p className="text-gray-700"><strong>Address:</strong> Kingston, Jamaica</p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
