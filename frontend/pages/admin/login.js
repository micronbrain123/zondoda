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
import API_URL from '../url'; // Adjust the path as necessary
export default function AdminLogin() {
  const router= useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(`${API_URL}/auth/admin/login`, {
        email,
        password,
      });

      // Save token in localStorage (or cookies)
      localStorage.setItem("adminToken", res.data.token);
      localStorage.setItem("admin", JSON.stringify(res.data.admin));
      toast.success("Admin Login successful!");
      // Navigate to admin dashboard
      setTimeout(()=>{
        router.push("/admin");
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.message || "Admin Login failed");
      toast.error(err.response?.data?.message || "Admin Login failed");
      console.error("Login error:", err);
    }
  };
  console.log(API_URL);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Admin Login</h2>
        {error && (
          <div className="bg-red-100 text-red-600 text-sm px-3 py-2 rounded mb-4">
            {error}
          </div>
        )}
        <ToastContainer />
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <div className="flex items-center border border-gray-300 rounded px-3 py-2 mt-1">
              {/* <FaEnvelope className="text-gray-400 mr-2" /> */}
              <input
                type="email"
                name='email'
                className="w-full focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@example.com"
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
        </form>
      </div>
    </div>
  );
}
