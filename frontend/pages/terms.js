import Head from 'next/head';
import Link from 'next/link';

const TermsAndConditions = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - CarRental</title>
        <meta name="description" content="CarRental Privacy Policy - Learn how we collect, use, and protect your personal information." />
      </Head>

      {/* Modal Overlay */}
        <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="prose max-w-none">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
                <p className="text-sm text-gray-600 mb-6">
                  <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
                </p>

                <section className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h3>
                  <p className="text-gray-700 leading-relaxed">
                    By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement. 
                    If you do not agree to abide by the above, please do not use this service.
                  </p>
                </section>

                <section className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Use License</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Permission is granted to temporarily download one copy of the materials on this website for personal, 
                    non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose or for any public display</li>
                    <li>Attempt to reverse engineer any software contained on the website</li>
                    <li>Remove any copyright or other proprietary notations from the materials</li>
                  </ul>
                </section>

                <section className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">3. User Accounts</h3>
                  <p className="text-gray-700 leading-relaxed">
                    When you create an account with us, you must provide information that is accurate, complete, and current at all times. 
                    You are responsible for safeguarding the password and for all activities that occur under your account.
                  </p>
                </section>

                <section className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">4. Prohibited Uses</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">You may not use our service:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>For any unlawful purpose or to solicit others to take unlawful actions</li>
                    <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                    <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                    <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                    <li>To submit false or misleading information</li>
                    <li>To upload or transmit viruses or any other type of malicious code</li>
                  </ul>
                </section>

                <section className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">5. Content</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our service allows you to post, link, store, share and otherwise make available certain information, text, graphics, 
                    videos, or other material. You are responsible for the content that you post to the service, including its legality, 
                    reliability, and appropriateness.
                  </p>
                </section>

                <section className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">6. Privacy Policy</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our service.
                  </p>
                </section>

                <section className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">7. Disclaimer</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied, 
                    and hereby disclaim and negate all other warranties including without limitation, implied warranties or conditions of merchantability, 
                    fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                  </p>
                </section>

                <section className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">8. Limitations</h3>
                  <p className="text-gray-700 leading-relaxed">
                    In no event shall our company or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, 
                    or due to business interruption) arising out of the use or inability to use the materials on this website, 
                    even if we or our authorized representative has been notified orally or in writing of the possibility of such damage.
                  </p>
                </section>

                <section className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">9. Modifications</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by 
                    the then current version of these terms of service.
                  </p>
                </section>

                <section className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">10. Contact Information</h3>
                  <p className="text-gray-700 leading-relaxed">
                    If you have any questions about these Terms and Conditions, please contact us at info@zondoda.com.
                  </p>
                </section>
              </div>
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

export default TermsAndConditions;