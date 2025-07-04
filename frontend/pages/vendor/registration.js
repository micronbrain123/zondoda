import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Lock, Mail } from 'lucide-react';
import axios from "axios";
import { toast,ToastContainer } from 'react-toastify';
import {
  Building,
  User,
  Phone,
  FileText,
  MapPin,
  Landmark,
  Hash,
  Upload,
  IdCard,
} from "lucide-react";

// export function handleLogout() {
//   if (typeof window !== 'undefined') {
//     localStorage.removeItem('adminToken');
//     const router = window.location; 
//     router.href = '/admin/login'; 
//   }
// }

export default function AdminLogin() {


  return (
   <div className="max-w-4xl mx-auto my-10 bg-white shadow-2xl rounded-2xl p-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 flex items-center justify-center gap-2">
        <Building className="w-8 h-8 text-green-600" />
        Vendor Registration
      </h2>

      <form className="grid grid-cols-2 gap-6">
        {/* Business Info */}
        <h3 className="col-span-2 text-xl font-semibold text-gray-700 flex items-center gap-2">
          <Landmark className="text-green-600" />
          Business Information
        </h3>

        <div className="col-span-2 flex items-center gap-2">
          <Building className="text-gray-500" />
          <input
            type="text"
            placeholder="Vendor Name"
            name="vendorName"
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
          />
        </div>

        <div className="col-span-2 flex items-center gap-2">
          <User className="text-gray-500" />
          <input
            type="text"
            placeholder="Vendor Type (Self-owned / Aggregator)"
            name="vendorType"
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
          />
        </div>

        <div className="col-span-2 flex items-start gap-2">
          <MapPin className="mt-2 text-gray-500" />
          <textarea
            placeholder="Full Business Address"
            name="businessAddress"
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
          />
        </div>

        <div className="flex items-center gap-2">
          <MapPin className="text-gray-500" />
          <input
            type="text"
            placeholder="City"
            name="city"
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
          />
        </div>

        <div className="flex items-center gap-2">
          <Landmark className="text-gray-500" />
          <input
            type="text"
            placeholder="State"
            name="state"
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
          />
        </div>

        <div className="col-span-2 flex items-center gap-2">
          <Hash className="text-gray-500" />
          <input
            type="text"
            placeholder="Pincode"
            name="pincode"
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
          />
        </div>

        {/* Owner Info */}
        <h3 className="col-span-2 text-xl font-semibold text-gray-700 flex items-center gap-2 mt-4">
          <User className="text-green-600" />
          Owner Information
        </h3>

        <div className="col-span-2 flex items-center gap-2">
          <User className="text-gray-500" />
          <input
            type="text"
            placeholder="Owner Name"
            name="ownerName"
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
          />
        </div>

        <div className="flex items-center gap-2">
          <Mail className="text-gray-500" />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
          />
        </div>

        <div className="flex items-center gap-2">
          <Phone className="text-gray-500" />
          <input
            type="text"
            placeholder="Phone Number"
            name="phone"
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
          />
        </div>

        <div className="flex items-center gap-2">
          <Lock className="text-gray-500" />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
          />
        </div>

        <div className="flex items-center gap-2">
          <Lock className="text-gray-500" />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
          />
        </div>

        {/* Documents */}
        <h3 className="col-span-2 text-xl font-semibold text-gray-700 flex items-center gap-2 mt-4">
          <FileText className="text-green-600" />
          Legal Documents
        </h3>
        <label className="col-span-2 text-sm text-gray-600">Driving License</label>
        <div className="col-span-2 flex items-center gap-2">
          <Upload className="text-gray-500" />
          <input
            type="file"
            name="drivingLicense"
            multiple
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
          />
        </div>
        <label className="col-span-2 text-sm text-gray-600">Insurance Documents</label>
        <div className="col-span-2 flex items-center gap-2">
          <Upload className="text-gray-500" />
          <input
            type="file"
            name="insuranceDocuments"
            multiple
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
          />
        </div>
 <label className="col-span-2 text-sm text-gray-600">Other Documents</label>
        <div className="col-span-2 flex items-center gap-2">
          <Upload className="text-gray-500" />
          <input
            type="file"
            name="documents"
            multiple
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="col-span-2 bg-green-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-700 transition"
        >
          Register Vendor
        </button>
      </form>
      <p className="text-center text-gray-600 mt-4">
        Already have an account?{" "}
        <a href="/vendor/login" className="text-green-600 hover:underline">
          Login
        </a>
      </p>
    </div>
    
  );
}
