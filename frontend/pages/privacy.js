import Head from 'next/head';
import Link from 'next/link';

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - Zondoda</title>
        <meta name="description" content="Zondoda Privacy Policy - Learn how we collect, use, and protect your personal information." />
      </Head>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-600 text-lg">
              Last updated: June 26, 2025
            </p>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <p className="text-blue-800">
                At Zondoda, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
            
            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">Personal Information</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Name, email address, and phone number</li>
                <li>Driver's license information and verification documents</li>
                <li>Payment information (credit/debit card details)</li>
                <li>Address and location data</li>
                <li>Profile photos and identification documents</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">Usage Information</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Vehicle rental history and preferences</li>
                <li>Website and app usage data</li>
                <li>Device information and IP addresses</li>
                <li>GPS location data (when using our mobile app)</li>
                <li>Communication records with customer support</li>
              </ul>
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Service Provision:</strong> Processing bookings, managing rentals, and providing customer support</li>
                <li><strong>Identity Verification:</strong> Verifying driver's licenses and conducting background checks</li>
                <li><strong>Payment Processing:</strong> Processing payments and managing billing</li>
                <li><strong>Communication:</strong> Sending booking confirmations, updates, and promotional offers</li>
                <li><strong>Safety & Security:</strong> Ensuring platform safety and preventing fraudulent activities</li>
                <li><strong>Improvement:</strong> Analyzing usage patterns to improve our services</li>
                <li><strong>Legal Compliance:</strong> Complying with legal obligations and regulations</li>
              </ul>
            </section>

            {/* Information Sharing */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Information Sharing</h2>
              <p className="text-gray-700 mb-4">We may share your information in the following circumstances:</p>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">With Vendors</h3>
              <p className="text-gray-700 mb-4">We share necessary booking and contact information with car owners/rental agencies to facilitate your rental.</p>

              <h3 className="text-xl font-medium text-gray-800 mb-3">Service Providers</h3>
              <p className="text-gray-700 mb-4">We work with trusted third-party providers for payment processing, background checks, insurance, and technical services.</p>

              <h3 className="text-xl font-medium text-gray-800 mb-3">Legal Requirements</h3>
              <p className="text-gray-700 mb-4">We may disclose information when required by law, court orders, or to protect our rights and safety.</p>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
              <p className="text-gray-700 mb-4">We implement robust security measures to protect your information:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>SSL encryption for all data transmission</li>
                <li>Secure payment processing with PCI DSS compliance</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and employee training</li>
                <li>Data backup and recovery procedures</li>
              </ul>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Your Rights</h2>
              <p className="text-gray-700 mb-4">You have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Access:</strong> Request copies of your personal data</li>
                <li><strong>Rectification:</strong> Request correction of inaccurate information</li>
                <li><strong>Erasure:</strong> Request deletion of your personal data</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Objection:</strong> Object to processing of your personal data</li>
                <li><strong>Withdrawal:</strong> Withdraw consent for data processing</li>
              </ul>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cookies and Tracking</h2>
              <p className="text-gray-700 mb-4">We use cookies and similar technologies to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Remember your preferences and login status</li>
                <li>Analyze website traffic and user behavior</li>
                <li>Provide personalized content and advertisements</li>
                <li>Improve website functionality and user experience</li>
              </ul>
              <p className="text-gray-700 mt-4">You can control cookie settings through your browser preferences.</p>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Data Retention</h2>
              <p className="text-gray-700">
                We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. Typically, we retain data for 7 years after account closure or last activity, unless longer retention is required by law.
              </p>
            </section>

            {/* International Transfers */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. International Data Transfers</h2>
              <p className="text-gray-700">
                Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your data in accordance with applicable data protection laws.
              </p>
            </section>

            {/* Updates */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Policy Updates</h2>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last updated" date. Your continued use of our services after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700"><strong>Email:</strong> info@zondoda.com</p>
                <p className="text-gray-700"><strong>Phone:</strong> +91 98765 43210</p>
                <p className="text-gray-700"><strong>Address:</strong> 123 Business Street, City Center, State 110001, India</p>
                <p className="text-gray-700 mt-2"><strong>Data Protection Officer:</strong> dpo@zondoda.com</p>
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

export default PrivacyPolicy;