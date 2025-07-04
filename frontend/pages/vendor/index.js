import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  MapPin,
  Car,
  Tag,
  Mail,
  HelpCircle,
  CreditCard,
  DollarSign,
  ChevronRight,
  ChevronDown,
  Users,
  FileText,
  Settings,
  Ticket,
  Calendar,
  Globe,
} from "lucide-react";
import AdminHeader from "./AdminHeader";
import { toast,ToastContainer } from "react-toastify";

export default function AdminDashboard() {
    const pathname = usePathname();
  const [sidebarExpanded, setSidebarExpanded] = useState({
    banner: false,
    city: false,
    carType: false,
    carBrand: false,
    car: false,
    gallery: false,
    faq: false,
    facility: false,
    coupon: false,
    page: false,
    booking: false,
  });

  const [activeTimeframe, setActiveTimeframe] = useState("6 Months");

  const toggleSidebar = (section) => {
    setSidebarExpanded((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Stats data matching the image
  const statsData = [
    {
      title: "Total Revenue",
      value: "$0",
      icon: <DollarSign className="w-6 h-6" />,
      bgColor: "bg-green-600",
    },
    {
      title: "Total Cars",
      value: "5",
      icon: <Car className="w-6 h-6" />,
      bgColor: "bg-green-600",
    },
    {
      title: "Total Bookings",
      value: "0",
      icon: <Calendar className="w-6 h-6" />,
      bgColor: "bg-green-600",
    },
    {
      title: "Available Cars",
      value: "5",
      icon: <Car className="w-6 h-6" />,
      bgColor: "bg-green-600",
    },
  ];

  // Updated profileData state - removed hardcoded values
  const [profileData, setProfileData] = useState({
    name: "Vendor1",
    email: "vendor@gmail.com",
    phone: "+8801715914997",
    image: "/profile-avatar.png",
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

const sidebarItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/admin" },
  
  
  { name: "Brand", icon: Tag, path: "/admin/BrandsContent", category: "CARS MANAGEMENT" },
  { name: "Type", icon: Car, path: "/admin/TypesContent" },
  { name: "Location", icon: MapPin, path: "/admin/LocationContent" },
  { name: "Extra Feature", icon: Settings, path: "/admin/extra-feature" },
  { name: "Cars", icon: Car, path: "/admin/cars" },
  { name: "Bookings", icon: Calendar, path: "/admin/bookings" },
  { name: "Subscription plans", icon: Ticket, path: "/admin/subscription-plans", category: "SUBSCRIPTIONS" },
  { name: "Subscription History", icon: FileText, path: "/admin/subscription-history" },
  { name: "Payment Method", icon: CreditCard, path: "/admin/payment-method", category: "PAYMENT" },
  { name: "Service", icon: Settings, path: "/admin/service", category: "OTHERS" },
  { name: "Settings", icon: Settings, path: "/admin/settings", category: "SETTINGS" },
  { name: "Languages", icon: Globe, path: "/admin/languages" },
];

  // Mock chart data for demonstration
  const chartMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("adminToken");
      toast.success("Logged out successfully");
      setTimeout(()=>{
        router.push("/admin/login");
      },1000)
    }
  };

  const router = useRouter();
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const adminToken = localStorage.getItem("adminToken");

//       if (!adminToken) {
//         router.push("/admin/login");
//       } else {
//         setLoading(false);
//       }
//     }
//   }, [router]);
//   if (loading) {
//     return <div>Loading...</div>;
//   }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-green-600">
              Dashboard
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1">
{sidebarItems.map((item, index) => (
  <div key={index}>
    {item.category && (
      <div className="px-3 py-2 text-xs font-semibold text-green-600 uppercase tracking-wider">
        {item.category}
      </div>
    )}

    {item.path ? (
      <Link href={item.path}>
        <div
          className={`flex items-center justify-between px-3 py-2 rounded-lg transition-colors cursor-pointer ${
            pathname === item.path
              ? "bg-orange-50 text-green-700 border-r-2 border-green-600"
              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
          }`}
        >
          <div className="flex items-center space-x-3">
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.name}</span>
          </div>
        </div>
      </Link>
    ) : (
      <div className="px-3 py-2 text-gray-400 cursor-not-allowed flex items-center space-x-3">
        <item.icon className="w-5 h-5" />
        <span className="font-medium">{item.name}</span>
      </div>
    )}
  </div>
))}
        </nav>
      </div>
        <ToastContainer/>
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <AdminHeader
          profileData={profileData}
          handleLogout={handleLogout}
          onUpdateProfile={setProfileData}
        />

        {/* Dashboard Content */}
        <main className="flex-1 p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">
                      {stat.title}
                    </p>
                    <p className="text-3xl font-bold text-gray-900">
                      {stat.value}
                    </p>
                  </div>
                  <div
                    className={`p-3 rounded-full ${stat.bgColor}`}
                  >
                    <div className="text-white">
                      {stat.icon}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Earnings Summary */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Earnings Summary
                </h3>
                <div className="flex space-x-2">
                  {["6 Months", "1 Year"].map((period) => (
                    <button
                      key={period}
                      onClick={() =>
                        setActiveTimeframe(period)
                      }
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTimeframe === period
                          ? "bg-green-600 text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                    >
                      {period}
                    </button>
                  ))}
                </div>
              </div>

              {/* Simple chart representation */}
              <div className="h-64 flex items-end justify-between space-x-2">
                {chartMonths.map((month, index) => (
                  <div
                    key={month}
                    className="flex-1 flex flex-col items-center"
                  >
                    <div className="w-full bg-gray-100 rounded-t h-40 mb-2 flex items-end">
                      <div
                        className={`w-full rounded-t transition-all duration-300 ${month === "May"
                            ? "bg-green-600 h-8"
                            : "bg-gray-300 h-2"
                          }`}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500">
                      {month}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Overview */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Booking Overview
                </h3>
                <div className="flex space-x-2">
                  {["6 Months", "1 Year"].map((period) => (
                    <button
                      key={period}
                      onClick={() =>
                        setActiveTimeframe(period)
                      }
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTimeframe === period
                          ? "bg-green-600 text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                    >
                      {period}
                    </button>
                  ))}
                </div>
              </div>

              {/* Simple line chart representation */}
              <div className="h-64 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-px bg-gray-200"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end h-full">
                  {chartMonths.map((month, index) => (
                    <div
                      key={month}
                      className="flex flex-col items-center"
                    >
                      <div
                        className={`w-2 h-2 rounded-full mb-2 ${month === "May"
                            ? "bg-green-600"
                            : "bg-gray-300"
                          }`}
                      ></div>
                      <span className="text-xs text-gray-500">
                        {month}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}