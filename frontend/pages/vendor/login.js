import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Lock, Mail } from 'lucide-react';
import axios from "axios";
import { toast,ToastContainer } from 'react-toastify';
// export function handleLogout() {
//   if (typeof window !== 'undefined') {
//     localStorage.removeItem('adminToken');
//     const router = window.location; 
//     router.href = '/admin/login'; 
//   }
// }

export default function VendorLogin() {


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Vendor Login</h2>
        {/* {error && (
          <div className="bg-red-100 text-red-600 text-sm px-3 py-2 rounded mb-4">
            {error}
          </div>
        )} */}
        <ToastContainer />
        <form  className="space-y-5">
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <div className="flex items-center border border-gray-300 rounded px-3 py-2 mt-1">
              {/* <FaEnvelope className="text-gray-400 mr-2" /> */}
              <input
                type="email"
                name='email'
                className="w-full focus:outline-none"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                placeholder="vendor1@example.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Password</label>
            <div className="flex items-center border border-gray-300 rounded px-3 py-2 mt-1">
              {/* <FaLock className="text-gray-400 mr-2" /> */}
              <input
                type="password"
                name='password'
                className="w-full focus:outline-none"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <button
         
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded"
          >
            Login
          </button>
            <p className="text-sm text-center text-gray-600 mt-4">
                Don't have an account? <a href="/vendor/register" className="text-green-600 hover:underline">Register</a>
            </p>
        </form>
      </div>
    </div>
  );
}
