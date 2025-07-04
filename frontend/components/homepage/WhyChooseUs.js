import { CheckCircle, Shield, Clock, Users, Star, Headphones } from 'lucide-react';
import Link from 'next/link';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <CheckCircle className="w-12 h-12 text-green-600" />,
      title: "Best Price Guarantee",
      description: "We offer the most competitive rates in the market with no hidden charges. Find a better deal? We'll match it!"
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Fully Insured Vehicles",
      description: "All our vehicles come with comprehensive insurance coverage for your peace of mind during your journey."
    },
    {
      icon: <Clock className="w-12 h-12 text-orange-600" />,
      title: "24/7 Road Assistance",
      description: "Round-the-clock support and emergency roadside assistance wherever you are, whenever you need it."
    },
    {
      icon: <Users className="w-12 h-12 text-purple-600" />,
      title: "Experienced Drivers",
      description: "Professional, licensed drivers with local knowledge to ensure safe and comfortable rides."
    },
    {
      icon: <Star className="w-12 h-12 text-yellow-600" />,
      title: "Premium Fleet",
      description: "Well-maintained, clean vehicles ranging from economy cars to luxury SUVs for every occasion."
    },
    {
      icon: <Headphones className="w-12 h-12 text-indigo-600" />,
      title: "Customer Support",
      description: "Dedicated customer service team available to assist you with bookings, queries, and support."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Service
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference with our premium car rental service. We are committed to 
            providing you with reliable, affordable, and exceptional transportation solutions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-[#182219] rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">5000+</div>
              <div className="text-green-500">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-green-500">Vehicles Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-green-500">Cities Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">4.9</div>
              <div className="text-green-500">Average Rating</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Ready to Book Your Perfect Ride?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us for their transportation needs. 
            Book now and experience the difference!
          </p>
          <Link href="/cars">
            <button className="px-8 py-3 bg-[#182219] text-white rounded-lg hover:bg-[#0f150e] transition-colors font-semibold">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;