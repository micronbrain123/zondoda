import React from 'react';
import Link from 'next/link';
import { Car, Users, Calendar, MapPin, Shield, Star, Clock, Zap } from 'lucide-react';

export default function AboutPage() {
  const features = [
    {
      icon: <Car className="w-8 h-8 text-blue-600" />,
      title: "Multiple Vendors",
      description: "Access vehicles from trusted car owners and rental agencies in one platform"
    },
    {
      icon: <Calendar className="w-8 h-8 text-green-600" />,
      title: "Flexible Rentals",
      description: "Monthly subscriptions with vehicle swap options to match your changing needs"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Driver Services",
      description: "Optional professional driver services for a complete hands-free experience"
    },
    {
      icon: <MapPin className="w-8 h-8 text-red-600" />,
      title: "Real-time Tracking",
      description: "Live vehicle tracking and booking management for peace of mind"
    },
    {
      icon: <Shield className="w-8 h-8 text-indigo-600" />,
      title: "Secure Payments",
      description: "Seamless and secure payment processing with multiple options"
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-600" />,
      title: "Review System",
      description: "Transparent reviews and ratings to help you make informed decisions"
    }
  ];

  const stats = [
    { number: "1000+", label: "Vehicles Available" },
    { number: "500+", label: "Trusted Vendors" },
    { number: "10k+", label: "Happy Customers" },
    { number: "24/7", label: "Customer Support" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-600 via-emerald-600 to-green-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Revolutionizing Car Rentals
            </h1>
            <p className="text-xl md:text-lg mb-8 text-green-100 max-w-3xl mx-auto leading-relaxed">
              The ultimate multivendor marketplace connecting you with the perfect vehicle, 
              flexible terms, and professional drivers when you need them.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Clock className="w-5 h-5" />
                <span>Monthly Subscriptions</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Zap className="w-5 h-5" />
                <span>Vehicle Swaps</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Users className="w-5 h-5" />
                <span>Driver Services</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We're transforming the car rental industry by creating a comprehensive marketplace 
              that offers unparalleled flexibility, choice, and convenience. Our platform empowers 
              both vehicle owners and renters with innovative solutions that adapt to modern mobility needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Why We're Different</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Multivendor Ecosystem</h4>
                    <p className="text-gray-600">Connect with multiple car owners and rental agencies, giving you access to the largest vehicle inventory in your area.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Subscription Flexibility</h4>
                    <p className="text-gray-600">Monthly subscriptions with the unique ability to swap vehicles based on your changing needs and preferences.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Complete Service</h4>
                    <p className="text-gray-600">Optional professional driver services ensure you have a complete mobility solution, whether you prefer to drive or be driven.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 h-80 flex items-center justify-center">
              <div className="text-center">
                <Car className="w-24 h-24 text-blue-600 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Scalable Platform</h4>
                <p className="text-gray-600">Built to grow with demand and adapt to future mobility trends</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Platform Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for a seamless car rental experience, all in one place
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Platform Impact
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Numbers that showcase our growing community and commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-green-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
            The Future of Mobility
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-12">
            We envision a world where accessing reliable transportation is as easy as a few taps on your phone. 
            Our platform is designed to scale with the evolving needs of modern urban mobility, offering sustainable, 
            flexible, and affordable solutions that benefit both vehicle owners and renters.
          </p>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-10 underline decoration-green-600 underline-offset-4">
              Our Commitment
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 underline">Innovation</h4>
                <p className="text-gray-600">Continuously improving our platform with cutting-edge technology and user feedback.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 underline">Trust</h4>
                <p className="text-gray-600">Building a secure, transparent marketplace where all parties can transact with confidence.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 underline">Community</h4>
                <p className="text-gray-600">Creating a thriving ecosystem that benefits vehicle owners, renters, and drivers alike.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-green-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed">
            Join thousands of satisfied customers who have discovered a better way to rent vehicles. 
            Whether you need a car for a day, a month, or longer, we have the perfect solution for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup/customer">
              <button className="bg-white text-gray-900 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                Start Renting Today
              </button>
            </Link>
            <Link href="/signup/vendor">
              <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-gray-900 transition-colors duration-300">
                Become a Vendor
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}