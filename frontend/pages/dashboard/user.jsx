import { useState, useEffect } from "react";
import Link from "next/link";
import AccountSettings from "./AccountSettings";
import Bookings from "./Bookings";
import ChangePassword from "./ChangePassword";
import UpdateProfilePicture from "./UpdateProfilePicture";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { toast,ToastContainer } from "react-toastify";
export default function UserDashboard() {
  const [profileData, setProfileData] = useState({});
  const [activePage, setActivePage] = useState("account");
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/auth/users/profile", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setProfileData(res.data.user);
      } catch (err) {
        console.error("Failed to fetch profile", err);
      }
    };
    fetchProfile();
  }, []);


     // logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("You have been logged out successfully!");
    setTimeout(()=>{
      window.location.href = "/signup/join";
    },2000)
  }

  // // prevent login if token is not present
useEffect(() => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (!token || !user) {
      toast.error("You need to log in first!");
      window.location.href = "/signup/join";
    }
  }
}, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <ToastContainer />
      <header className="bg-white shadow-sm px-6 py-4">
        <div className="flex justify-end items-center space-x-4">
          
            <button className="flex items-center space-x-2 text-red-600 hover:text-red-800" onClick={handleLogout}>
              <ArrowRightOnRectangleIcon className="h-5 w-5" />
              <span>Logout</span>
            </button>
          
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            {/* <img
              src={profileData.image}
              alt="Profile"
              className="w-8 h-8 rounded-full"
            /> */}
          </div>
        </div>
      </header>

      <div className="flex max-w-7xl mx-auto pb-20">
        {/* Sidebar */}
        <div className="w-80 bg-[#1a231a] min-h-screen">
          {/* Profile Section */}
          <div className="p-6 border-b border-gray-700">
            <div className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 rounded-2xl p-6 shadow-lg flex items-center gap-4 text-white">
              {/* User Icon */}
              <div className="bg-white bg-opacity-20 rounded-full p-4 flex items-center justify-center">
                <svg xmlns="https://tse2.mm.bing.net/th/id/OIP.qOSjSxoUNci9aPL9spX_eQHaHa?pid=Api&P=0&h=180" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A4 4 0 017.5 16h9a4 4 0 012.379.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>

              {/* Welcome Text */}
              <div>
                <h2 className="text-2xl font-bold leading-tight">
                  Welcome, <span className="capitalize">{profileData.firstName} {profileData.lastName}</span>
                </h2>
                <div className="flex items-center gap-2 mt-1 text-sm">
                  {/* Email Icon */}
                  <svg xmlns="https://tse2.mm.bing.net/th/id/OIP.qOSjSxoUNci9aPL9spX_eQHaHa?pid=Api&P=0&h=180" className="h-4 w-4 text-white opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m0 0l4-4m0 4l4 4M4 6h16M4 6a2 2 0 00-2 2v8a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2" />
                  </svg>
                  <span className="opacity-90">{profileData.email}</span>
                </div>
              </div>
            </div>
            {/* <div className="bg-gray-700 rounded-lg w-full h-40 mx-auto overflow-hidden">
              <img
                src={profileData.image}
                alt="Profile"
                className="w-full h-full object-cover rounded-lg"
              />
            </div> */}
          </div>

          {/* Menu Items */}
          <div className="p-4">
            <div className="space-y-2">
              {/* Account Setting */}
              <button
                onClick={() => setActivePage("account")}
                className={`w-full text-left px-4 py-3 rounded flex items-center space-x-3 ${activePage === "account"
                    ? "bg-green-600 text-white"
                    : "text-gray-300 hover:bg-gray-700"
                  }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  />
                </svg>
                <span>Account Setting</span>
              </button>

              {/* Bookings */}
              <button
                onClick={() => setActivePage("bookings")}
                className={`w-full text-left px-4 py-3 rounded flex items-center space-x-3 ${activePage === "bookings"
                    ? "bg-green-600 text-white"
                    : "text-gray-300 hover:bg-gray-700"
                  }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Bookings</span>
              </button>

              {/* Change Password */}
              <button
                onClick={() => setActivePage("password")}
                className={`w-full text-left px-4 py-3 rounded flex items-center space-x-3 ${activePage === "password"
                    ? "bg-green-600 text-white"
                    : "text-gray-300 hover:bg-gray-700"
                  }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  />
                </svg>
                <span>Change Password</span>
              </button>
            </div>

            {/* Update Profile Picture */}
            <button
              onClick={() => setActivePage("profilepic")}
              className={`w-full text-left px-4 py-3 rounded flex items-center space-x-3 ${activePage === "profilepic"
                  ? "bg-green-600 text-white"
                  : "text-gray-300 hover:bg-gray-700"
                }`}
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm4 3a3 3 0 116 0 3 3 0 01-6 0zm10 10H2V5h2.586l2.707 2.707a1 1 0 001.414 0L11 3h5v12z"
                />
              </svg>
              <span>Update Profile Picture</span>
            </button>

            <div className="mt-8 pt-4 border-t border-gray-700">
             
                <button className="w-full text-left text-gray-300 px-4 py-3 rounded hover:bg-gray-700" onClick={handleLogout}>
                  Sign Out
                </button>
              
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 bg-[#344434]">
          <h1 className="text-2xl text-white font-bold mb-8">
            {activePage === "account"
              ? "Account Settings"
              : activePage === "bookings"
                ? "My Bookings"
                : activePage === "password"
                  ? "Change Password"
                  : ""}
          </h1>

          {activePage === "account" && (
            <div className="flex-1 bg-[#344434]">
              <AccountSettings />
            </div>
          )}

          {activePage === "bookings" && (
            <div className="text-white">
              <Bookings />
            </div>
          )}

          {activePage === "password" && (
            <div className="text-white">
              <ChangePassword />
            </div>
          )}

          {activePage === "profilepic" && (
            <div className="text-white">
              <UpdateProfilePicture />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
