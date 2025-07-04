import Link from 'next/link';
import { User, Search, Calendar, CreditCard, RefreshCw, UserCheck, Star, Headphones, Building, BarChart3, Wallet, Settings } from 'lucide-react';

const Features = () => {
  const customerFeatures = [
    {
      icon: <User className="w-8 h-8 text-blue-500" />,
      title: "Easy Registration",
      description: "Quick sign-up with email/phone or social login. License verification for self-drive rentals."
    },
    {
      icon: <Search className="w-8 h-8 text-green-500" />,
      title: "Advanced Search",
      description: "Filter by vehicle type, price, location, fuel type. Sort by ratings and availability."
    },
    {
      icon: <Calendar className="w-8 h-8 text-purple-500" />,
      title: "Flexible Rentals",
      description: "Hourly, daily, weekly rentals. Monthly subscriptions with unlimited swaps available."
    },
    {
      icon: <CreditCard className="w-8 h-8 text-orange-500" />,
      title: "Secure Payments",
      description: "Multiple payment options with secure gateway. Refundable security deposit system."
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-indigo-500" />,
      title: "Vehicle Swap",
      description: "Swap vehicles anytime during subscription. Easy return process with inspection."
    },
    {
      icon: <UserCheck className="w-8 h-8 text-red-500" />,
      title: "Driver Services",
      description: "Hire verified drivers hourly/daily. Add authorized drivers with tracking & ratings."
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: "Reviews & Ratings",
      description: "Rate vehicles, vendors, and drivers. Complete customer feedback system."
    },
    {
      icon: <Headphones className="w-8 h-8 text-pink-500" />,
      title: "24/7 Support",
      description: "Round-the-clock chat/call support. Comprehensive FAQ & help center."
    }
  ];

  const vendorFeatures = [
    {
      icon: <Building className="w-8 h-8 text-blue-600" />,
      title: "Vendor Registration",
      description: "Business verification and license validation. Fleet listing approval process."
    },
    {
      icon: <Settings className="w-8 h-8 text-green-600" />,
      title: "Fleet Management",
      description: "Add/edit vehicles, set dynamic pricing, manage availability & blackout dates."
    },
    {
      icon: <Wallet className="w-8 h-8 text-purple-600" />,
      title: "Earnings & Payouts",
      description: "View bookings, automated payout system, commission tracking and management."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-600" />,
      title: "Analytics & Reports",
      description: "Revenue reports, booking history, customer behavior insights and analytics."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Platform Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive features designed for both customers and vendors to ensure 
            a seamless car rental experience.
          </p>
        </div>

        {/* Customer Features */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-center text-gray-900 mb-12">
            For Customers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {customerFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h4 className=  "text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vendor Features */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-center text-gray-900 mb-12">
            For Vendors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {vendorFeatures.map((feature, index) => (
              <div key={index} className="bg-[#182219] rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-gray-300 text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-green-600 to-slate-600 rounded-2xl p-8 my-10 text-white">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Join thousands of satisfied customers and vendors on our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup/customer">
              <button className="px-8 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start as Customer
              </button>
            </Link>
            <Link href="/signup/vendor">
              <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-slate-700 transition-colors">
                Become a Vendor
              </button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;