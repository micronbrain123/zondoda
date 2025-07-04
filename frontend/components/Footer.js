import Link from 'next/link';
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Car } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#182219] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Logo"
                width={140}
                height={95}
                className="cursor-pointer drop-shadow-sm transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </Link>
          </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner for reliable, affordable, and premium car rental services. 
              Experience comfort and convenience on every journey.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/cars" className="text-gray-300 hover:text-white transition-colors">
                  Our Fleet
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/cars" className="text-gray-300 hover:text-white transition-colors">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services/self-drive" className="text-gray-300 hover:text-white transition-colors">
                  Self Drive Cars
                </Link>
              </li>
              <li>
                <Link href="/services/chauffeur" className="text-gray-300 hover:text-white transition-colors">
                  Chauffeur Service
                </Link>
              </li>
              <li>
                <Link href="/services/corporate" className="text-gray-300 hover:text-white transition-colors">
                  Corporate Rentals
                </Link>
              </li>
              <li>
                <Link href="/services/wedding" className="text-gray-300 hover:text-white transition-colors">
                  Wedding Cars
                </Link>
              </li>
              <li>
                <Link href="/services/airport" className="text-gray-300 hover:text-white transition-colors">
                  Airport Transfers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  123 Business Street,<br />
                  City Center, State 110001<br />
                  India
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+91 98765 43210</p>
                  <p className="text-gray-300">+91 98765 43211</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">info@zondoda.com</p>
                  <p className="text-gray-300">support@zondoda.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div>
              <h4 className="text-lg font-semibold text-green-400 mb-2">Subscribe to Our Newsletter</h4>
              <p className="text-gray-300">Get updates on new cars, special offers, and travel tips.</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-800 text-white rounded-l-lg border border-gray-600 focus:outline-none focus:border-green-400 flex-1 md:w-64"
              />
              <button className="px-6 py-2 bg-green-600 text-white rounded-r-lg hover:bg-green-700 transition-colors font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 CarRental. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/refund" className="text-gray-400 hover:text-white transition-colors">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;