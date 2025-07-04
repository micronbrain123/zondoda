'use client';
import Link from 'next/link';

import React, { useState } from 'react';
import {
  Eye, EyeOff, Car, User, Mail, Phone, Lock, MapPin, Building2, CheckCircle
} from 'lucide-react';

export default function VendorSignUp() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    businessName: '',
    businessAddress: '',
    city: '',
    state: '',
    zipCode: '',
    licenseNumber: '',
    termsAccepted: false,
    marketingEmails: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.password || formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!formData.businessName.trim()) newErrors.businessName = 'Business name is required';
    if (!formData.businessAddress.trim()) newErrors.businessAddress = 'Business address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.zipCode.trim()) newErrors.zipCode = 'ZIP code is required';
    if (!formData.licenseNumber.trim()) newErrors.licenseNumber = 'License number is required';
    if (!formData.termsAccepted) newErrors.termsAccepted = 'You must accept the terms and conditions';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      console.log('Vendor Form Submitted:', formData);
      setIsSubmitting(false);
      alert('Vendor account created! Please verify your email.');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-amber-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-green-600 p-3 rounded-full">
                <Building2 className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Become a Vendor
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our marketplace to list and rent your cars to thousands of customers
            </p>
          </div>

          {/* Features */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-6 mb-8 text-white">
            <div className="grid md:grid-cols-3 gap-4 text-center">
              {[
                'List Unlimited Vehicles',
                'Monthly Rental Flexibility',
                'Dedicated Vendor Support'
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 space-y-6">
            {/* Basic Info */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-900">
                <User className="w-6 h-6 text-green-600" />
                Basic Information
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-xl ${
                      errors.fullName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter full name"
                  />
                  {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Business Name *</label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-xl ${
                      errors.businessName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Your registered business name"
                  />
                  {errors.businessName && <p className="text-red-500 text-sm mt-1">{errors.businessName}</p>}
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-900">
                <Phone className="w-6 h-6 text-green-600" />
                Contact Information
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-xl ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your email"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-xl ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Your contact number"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
              </div>
            </div>

            {/* Security */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-900">
                <Lock className="w-6 h-6 text-green-600" />
                Security
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {['password', 'confirmPassword'].map((field, i) => (
                  <div key={field}>
                    <label className="block text-sm font-medium mb-2 text-gray-700">
                      {field === 'password' ? 'Password *' : 'Confirm Password *'}
                    </label>
                    <div className="relative">
                      <input
                        type={
                          field === 'password'
                            ? showPassword
                              ? 'text'
                              : 'password'
                            : showConfirmPassword
                              ? 'text'
                              : 'password'
                        }
                        name={field}
                        value={formData[field]}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 pr-12 border rounded-xl ${
                          errors[field] ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder={field === 'password' ? 'Create password' : 'Re-enter password'}
                      />
                      <button
                        type="button"
                        onClick={() =>
                          field === 'password'
                            ? setShowPassword(!showPassword)
                            : setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      >
                        {((field === 'password' && showPassword) || (field === 'confirmPassword' && showConfirmPassword))
                          ? <EyeOff className="w-5 h-5" />
                          : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                    {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field]}</p>}
                  </div>
                ))}
              </div>
            </div>

            {/* Address */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-900">
                <MapPin className="w-6 h-6 text-green-600" />
                Business Address
              </h2>
              <div className="space-y-6">
                <input
                  type="text"
                  name="businessAddress"
                  value={formData.businessAddress}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-xl ${
                    errors.businessAddress ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Street address"
                />
                {errors.businessAddress && <p className="text-red-500 text-sm mt-1">{errors.businessAddress}</p>}
                <div className="grid md:grid-cols-3 gap-6">
                  {['city', 'state', 'zipCode'].map((field) => (
                    <div key={field}>
                      <input
                        type="text"
                        name={field}
                        value={formData[field]}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-xl ${
                          errors[field] ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder={`Enter ${field}`}
                      />
                      {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field]}</p>}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* License & Terms */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Business License Number *</label>
              <input
                type="text"
                name="licenseNumber"
                value={formData.licenseNumber}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-xl ${
                  errors.licenseNumber ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter business license number"
              />
              {errors.licenseNumber && <p className="text-red-500 text-sm mt-1">{errors.licenseNumber}</p>}
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleInputChange}
                  className="mt-1 w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
                />
                <label className="text-sm text-gray-700">
                  I agree to the <Link href="/terms" className="text-green-600 underline">Terms</Link> and <Link href="/privacy" className="text-green-600 underline">Privacy Policy</Link> *
                </label>
              </div>
              {errors.termsAccepted && <p className="text-red-500 text-sm mt-1">{errors.termsAccepted}</p>}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="marketingEmails"
                  checked={formData.marketingEmails}
                  onChange={handleInputChange}
                  className="mt-1 w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
                />
                <label className="text-sm text-gray-700">
                  I would like to receive vendor tips and offers
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-green-700 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50"
            >
              {isSubmitting ? 'Creating Vendor Account...' : 'Create Vendor Account'}
            </button>

            <div className="text-center pt-4 border-t border-gray-200">
              <p className="text-gray-600">
                Already a vendor?{' '}
                <a href="#" className="text-green-600 hover:text-green-700 font-medium underline">
                  Sign in here
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
