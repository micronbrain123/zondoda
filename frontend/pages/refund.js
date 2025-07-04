import Head from 'next/head';
import Link from 'next/link';

const RefundPolicy = () => {
  return (
    <>
      <Head>
        <title>Refund Policy - Zondoda</title>
        <meta name="description" content="Zondoda Refund Policy - Understand our cancellation and refund terms for car rentals." />
      </Head>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Refund Policy</h1>
            <p className="text-gray-600 text-lg">
              Last updated: June 26, 2025
            </p>
            <div className="mt-4 p-4 bg-green-50 rounded-lg">
              <p className="text-green-800">
                We understand that plans can change. Our refund policy is designed to be fair and transparent while protecting both customers and vendors.
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
            
            {/* General Policy */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. General Refund Policy</h2>
              <p className="text-gray-700 mb-4">
                Refunds are processed based on the timing of your cancellation and the type of booking. We aim to process all eligible refunds within 5-7 business days.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 font-medium">
                  Important: Refund eligibility depends on cancellation timing, vendor policies, and booking type.
                </p>
              </div>
            </section>

            {/* Cancellation Timeline */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Cancellation Timeline & Refunds</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">More than 24 Hours Before Pickup</h3>
                  <ul className="list-disc pl-4 space-y-1 text-gray-700">
                    <li><strong>Full Refund:</strong> 100% refund of rental charges</li>
                    <li><strong>Security Deposit:</strong> Fully refundable</li>
                    <li><strong>Processing Fee:</strong> ₹50 convenience fee may apply</li>
                  </ul>
                </div>

                <div className="border-l-4 border-yellow-500 pl-6">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">6-24 Hours Before Pickup</h3>
                  <ul className="list-disc pl-4 space-y-1 text-gray-700">
                    <li><strong>Partial Refund:</strong> 75% refund of rental charges</li>
                    <li><strong>Security Deposit:</strong> Fully refundable</li>
                    <li><strong>Cancellation Fee:</strong> 25% of booking amount</li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">2-6 Hours Before Pickup</h3>
                  <ul className="list-disc pl-4 space-y-1 text-gray-700">
                    <li><strong>Limited Refund:</strong> 50% refund of rental charges</li>
                    <li><strong>Security Deposit:</strong> Fully refundable</li>
                    <li><strong>Cancellation Fee:</strong> 50% of booking amount</li>
                  </ul>
                </div>

                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Less than 2 Hours or No-Show</h3>
                  <ul className="list-disc pl-4 space-y-1 text-gray-700">
                    <li><strong>No Refund:</strong> 0% refund of rental charges</li>
                    <li><strong>Security Deposit:</strong> May be forfeited</li>
                    <li><strong>Full Charge:</strong> 100% booking amount charged</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Special Circumstances */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Special Circumstances</h2>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">Full Refund Eligible</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Vehicle breakdown or unavailability due to vendor issues</li>
                <li>Medical emergencies (with valid documentation)</li>
                <li>Natural disasters or government-imposed restrictions</li>
                <li>Vendor cancellation or service failure</li>
                <li>Significant vehicle condition issues upon pickup</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">Modified Refund Terms</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Weather Conditions:</strong> 75% refund for severe weather warnings</li>
                <li><strong>Flight Delays:</strong> Case-by-case evaluation with proof</li>
                <li><strong>Personal Emergencies:</strong> 50% refund with documentation</li>
              </ul>
            </section>

            {/* Subscription Plans */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Monthly Subscription Refunds</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Monthly Plans</h3>
                  <ul className="list-disc pl-4 space-y-1 text-gray-700">
                    <li>Cancelled within 3 days: Full refund</li>
                    <li>Cancelled within 7 days: 80% refund</li>
                    <li>After 7 days: Prorated refund for unused period</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Pay-as-you-go</h3>
                  <p className="text-gray-700">Standard cancellation policy applies to each individual booking.</p>
                </div>
              </div>
            </section>

            {/* Security Deposit */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Security Deposit Refunds</h2>
              <p className="text-gray-700 mb-4">Security deposits are typically refunded within 3-5 business days after vehicle return, subject to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Vehicle Inspection:</strong> No damage or excessive wear</li>
                <li><strong>Fuel Policy:</strong> Vehicle returned with agreed fuel level</li>
                <li><strong>Cleanliness:</strong> Interior in acceptable condition</li>
                <li><strong>Traffic Violations:</strong> No pending challans or tickets</li>
                <li><strong>Late Return:</strong> No additional charges incurred</li>
              </ul>
              
              <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                <p className="text-yellow-800">
                  <strong>Note:</strong> Deposits may be partially or fully retained for damages, excessive cleaning, traffic violations, or late returns.
                </p>
              </div>
            </section>

            {/* Refund Process */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Refund Process</h2>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">How to Request a Refund</h3>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
                <li>Log into your account and navigate to booking history</li>
                <li>Select the booking you want to cancel</li>
                <li>Click "Cancel Booking" and provide reason</li>
                <li>Submit cancellation request</li>
                <li>Receive confirmation email with refund details</li>
              </ol>

              <h3 className="text-xl font-medium text-gray-800 mb-3">Processing Timeline</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Credit/Debit Cards:</strong> 5-7 business days</li>
                <li><strong>Digital Wallets:</strong> 2-3 business days</li>
                <li><strong>Bank Transfers:</strong> 3-5 business days</li>
                <li><strong>UPI Payments:</strong> 1-2 business days</li>
              </ul>
            </section>

            {/* Vendor Cancellations */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Vendor Cancellations</h2>
              <p className="text-gray-700 mb-4">If a vendor cancels your booking:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Full Refund:</strong> 100% refund regardless of timing</li>
                <li><strong>Compensation:</strong> Additional ₹500 credit to your account</li>
                <li><strong>Alternative Vehicle:</strong> We'll help find a replacement</li>
                <li><strong>Priority Support:</strong> Dedicated assistance for rebooking</li>
              </ul>
            </section>

            {/* Exceptions */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Non-Refundable Situations</h2>
              <div className="bg-red-50 p-4 rounded-lg">
                <ul className="list-disc pl-4 space-y-2 text-red-800">
                  <li>Violation of terms and conditions</li>
                  <li>Fraudulent bookings or payment disputes</li>
                  <li>Vehicle misuse or unauthorized modifications</li>
                  <li>Completion of rental period (no partial refunds)</li>
                  <li>Third-party service fees (tolls, parking, fuel)</li>
                </ul>
              </div>
            </section>

            {/* Dispute Resolution */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Dispute Resolution</h2>
              <p className="text-gray-700 mb-4">If you disagree with a refund decision:</p>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                <li>Contact our customer support within 7 days</li>
                <li>Provide relevant documentation and evidence</li>
                <li>Allow 3-5 business days for review</li>
                <li>Escalate to management if unsatisfied</li>
                <li>Final resolution within 10 business days</li>
              </ol>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact for Refunds</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Customer Support:</strong> support@zondoda.com</p>
                <p className="text-gray-700 mb-2"><strong>Refund Helpline:</strong> +91 98765 43212</p>
                <p className="text-gray-700 mb-2"><strong>Hours:</strong> 24/7 for urgent matters</p>
                <p className="text-gray-700"><strong>Live Chat:</strong> Available on website and app</p>
              </div>
            </section>

          </div>

          {/* Navigation */}
          <div className="mt-8 text-center">
            <Link href="/" className="inline-flex items-center px-6 py-3 bg-[#182219] text-white rounded-lg hover:bg-[#0f150e] transition-colors">
              ← Back to Home
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default RefundPolicy;