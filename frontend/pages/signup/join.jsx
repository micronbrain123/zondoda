import { useState } from "react";
import { useRouter } from "next/router";
import Link from 'next/link';
import axios from "axios";
import { toast,ToastContainer } from "react-toastify";
export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);


  
  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!email || !password) {
      toast.error("Both Email and Password Required")
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/api/auth/users/login", {
        email,
        password,
      });

      const { token, user } = response.data;

      // Save token/user in localStorage
      console.log(response.status);
      
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      if(response.status==200){
        toast.success("Login successful!");
      }
      // // Redirect or show success
      setTimeout(() => {
        router.push("/dashboard/user");
      }, 2000); // or window.location.href = "/dashboard";
    } catch (err) {
      console.log(err);
      
      toast.error(err.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-20">
      <div className="w-full max-w-lg bg-white shadow-2xl rounded-2xl p-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#182219] rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor:"green"}}>
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-[#182219] mb-2" style={{color:"green"}}>
            Welcome Back
          </h1>
          <p className="text-gray-500 text-lg" style={{color:"green"}}>
            Sign in to your account to continue
          </p>
        </div>
        <ToastContainer />
        {/* Sign In Form */}
        <form onSubmit={handleSignIn}>
            <div className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block font-semibold text-base text-[#182219]"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-2 border-gray-200 px-4 py-3 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-[#182219] focus:border-transparent transition-all"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block font-semibold text-base text-[#182219]"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-2 border-gray-200 px-4 py-3 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-[#182219] focus:border-transparent transition-all"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-[#182219] border-gray-300 rounded focus:ring-[#182219]"
              />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <a
              href="/forgot-password"
              className="text-sm text-[#182219] hover:text-[#0f150e] font-medium hover:underline transition-colors"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-[#182219] text-white py-3.5 rounded-lg font-semibold text-base hover:bg-[#0f150e] transform hover:scale-[1.02] transition-all duration-200 shadow-lg"
          style={{backgroundColor:"green"}}>
            Sign In
          </button>
        </div>
        </form>

        {/* Divider */}
        <div className="flex items-center my-8">
          <div className="flex-1 border-t border-gray-200"></div>
          <span className="px-4 text-gray-500 text-sm">or</span>
          <div className="flex-1 border-t border-gray-200"></div>
        </div>

        {/* Social Login Options */}
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="text-gray-700 font-medium">Continue with Google</span>
          </button>
          
          <button className="w-full flex items-center justify-center px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
            <svg className="w-5 h-5 mr-3" fill="#1877F2" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span className="text-gray-700 font-medium">Continue with Facebook</span>
          </button>
        </div>

        {/* Sign Up Link */}
        <p className="text-center text-gray-600 mt-8 text-base">
          Don't have an account?{" "}
          <Link
            href="/signup/customer"
            className="text-[#182219] hover:text-[#0f150e] font-semibold hover:underline transition-colors"
          >
            Create one here
          </Link>
        </p>
      </div>
    </div>
  );
}