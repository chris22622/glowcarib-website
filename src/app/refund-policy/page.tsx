import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy - GlowCarib",
  description: "Understand GlowCarib's policies on refunds, cancellations, no-shows, and dispute resolution.",
};

export default function RefundPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-100 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Refund & Cancellation Policy</h1>
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
                This policy outlines our procedures for cancellations, refunds, no-shows, and disputes. We strive to be fair to both Clients and Providers while maintaining a reliable marketplace.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Client Cancellations</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1.1 Cancellation Windows</h3>
            <p className="text-gray-600 mb-4">
              Clients may cancel bookings according to the following guidelines:
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="pb-3 text-gray-900">Cancellation Time</th>
                    <th className="pb-3 text-gray-900">Refund Amount</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-100">
                    <td className="py-3">More than 24 hours before appointment</td>
                    <td className="py-3 text-green-600 font-semibold">100% refund</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3">12-24 hours before appointment</td>
                    <td className="py-3 text-amber-600 font-semibold">50% refund</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3">Less than 12 hours before appointment</td>
                    <td className="py-3 text-red-600 font-semibold">No refund</td>
                  </tr>
                  <tr>
                    <td className="py-3">No-show (no cancellation)</td>
                    <td className="py-3 text-red-600 font-semibold">No refund</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1.2 How to Cancel</h3>
            <p className="text-gray-600 mb-4">To cancel a booking:</p>
            <ol className="list-decimal pl-6 text-gray-600 mb-6 space-y-2">
              <li>Open the GlowCarib app</li>
              <li>Go to &quot;My Bookings&quot;</li>
              <li>Select the booking you wish to cancel</li>
              <li>Tap &quot;Cancel Booking&quot; and confirm</li>
            </ol>
            <p className="text-gray-600 mb-6">
              Refunds are processed automatically based on the cancellation window. Refunds typically appear in your account within 5-10 business days.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Provider Cancellations</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2.1 Provider Obligations</h3>
            <p className="text-gray-600 mb-4">
              Providers are expected to honor confirmed bookings. If a Provider must cancel:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>The Client receives a <strong>full refund</strong> regardless of timing</li>
              <li>The Provider should notify the Client as soon as possible</li>
              <li>Frequent cancellations may affect Provider ratings and platform standing</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2.2 How Providers Cancel</h3>
            <p className="text-gray-600 mb-6">
              Providers should cancel through the app by selecting the booking and tapping &quot;Cancel Booking.&quot; They must provide a reason for cancellation. The Client is automatically notified and refunded.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. No-Show Policy</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.1 Client No-Shows</h3>
            <p className="text-gray-600 mb-4">
              If a Client fails to appear for a confirmed booking without cancellation:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>No refund is provided</li>
              <li>The Provider is compensated for their time</li>
              <li>Repeated no-shows may result in account restrictions</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.2 Provider No-Shows</h3>
            <p className="text-gray-600 mb-4">
              If a Provider fails to appear for a confirmed booking:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>The Client receives a <strong>full refund</strong></li>
              <li>The Provider&apos;s account may be flagged or suspended</li>
              <li>Repeated incidents will result in removal from the platform</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Disputes</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4.1 Dispute Process</h3>
            <p className="text-gray-600 mb-4">
              If you have an issue with a completed service:
            </p>
            <ol className="list-decimal pl-6 text-gray-600 mb-6 space-y-2">
              <li><strong>Contact the other party first:</strong> Many issues can be resolved directly between Clients and Providers through in-app messaging</li>
              <li><strong>Submit a dispute:</strong> If direct resolution fails, submit a dispute through the app within 48 hours of the service</li>
              <li><strong>Provide documentation:</strong> Include photos, messages, and a clear description of the issue</li>
              <li><strong>Await review:</strong> Our team will review the dispute and contact both parties</li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4.2 Dispute Resolution</h3>
            <p className="text-gray-600 mb-4">
              GlowCarib will review disputes and make a decision based on:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Evidence provided by both parties</li>
              <li>Platform communication history</li>
              <li>Service description and expectations</li>
              <li>Previous account history</li>
            </ul>
            <p className="text-gray-600 mb-6">
              Possible outcomes include full refund, partial refund, or denial of refund. GlowCarib&apos;s decision is final.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4.3 Dispute Timeframe</h3>
            <p className="text-gray-600 mb-6">
              Disputes must be submitted within <strong>48 hours</strong> of the scheduled service time. Disputes submitted after this window may not be eligible for review.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Exceptional Circumstances</h2>
            <p className="text-gray-600 mb-4">
              We understand that emergencies happen. In cases of:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Medical emergencies</li>
              <li>Natural disasters</li>
              <li>Death in the family</li>
              <li>Other documented emergencies</li>
            </ul>
            <p className="text-gray-600 mb-6">
              Please contact support@glowcarib.com with documentation. We will review cases individually and may waive standard cancellation fees.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Refund Processing</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">6.1 Refund Timeline</h3>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li><strong>Processing time:</strong> Refunds are initiated within 1-2 business days</li>
              <li><strong>Bank processing:</strong> 5-10 business days for funds to appear</li>
              <li><strong>Card refunds:</strong> May take 1-2 billing cycles to appear on statements</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">6.2 Refund Method</h3>
            <p className="text-gray-600 mb-6">
              Refunds are issued to the original payment method used for the booking. We cannot issue refunds to different accounts or payment methods.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Contact Us</h2>
            <p className="text-gray-600 mb-6">
              For questions about this policy or assistance with refunds and disputes:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Email:</strong> support@glowcarib.com</p>
              <p className="text-gray-700 mb-2"><strong>Subject:</strong> Refund/Dispute Inquiry</p>
              <p className="text-gray-700"><strong>Response Time:</strong> Within 24-48 hours</p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
