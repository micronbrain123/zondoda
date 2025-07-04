import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Link from "next/link";
import { usePathname } from "next/navigation";
import API_URL from "../url";
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
   BadgeDollarSign, Fuel, Gauge, Image as ImageIcon
} from "lucide-react";
import AdminHeader from "./AdminHeader";
import { toast, ToastContainer } from "react-toastify";

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
    name: "Admin",
    email: "admin@gmail.com",
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
    { name: "Vendors", icon: Users, path: "/admin/vendors" },
    { name: "Users", icon: Users, path: "/admin/UserContent", active: true },
    { name: "Brand", icon: Tag, path: "/admin/BrandsContent", category: "CARS MANAGEMENT" },
    { name: "Type", icon: Car, path: "/admin/TypesContent" },
    { name: "Location", icon: MapPin, path: "/admin/LocationContent" },
    { name: "Extra Feature", icon: Settings, path: "/admin/extra-feature" },
    { name: "Cars", icon: Car, path: "/admin/cars" },
    { name: "Bookings", icon: Calendar, path: "/admin/bookings" },
    { name: "Subscription plans", icon: Ticket, path: "/admin/subscription-plans", category: "SUBSCRIPTIONS" },
    { name: "Subscription History", icon: FileText, path: "/admin/subscription-history" },
    { name: "Payment Method", icon: CreditCard, path: "/admin/payment-method", category: "PAYMENT" },
    { name: "Withdraws", icon: DollarSign, path: "/admin/withdraws" },
    { name: "Currency", icon: DollarSign, path: "/admin/currency" },
    { name: "Category", icon: Tag, path: "/admin/blog-category", category: "BLOG" },
    { name: "Blogs", icon: FileText, path: "/admin/blogs" },
    { name: "Testimonial", icon: HelpCircle, path: "/admin/testimonial" },
    { name: "Service", icon: Settings, path: "/admin/service", category: "OTHERS" },
    { name: "News Letter", icon: Mail, path: "/admin/newsletter" },
    { name: "Contacts", icon: Users, path: "/admin/contacts" },
    { name: "Settings", icon: Settings, path: "/admin/settings", category: "SETTINGS" },
    { name: "Languages", icon: Globe, path: "/admin/languages" },
    { name: "Email Settings", icon: Mail, path: "/admin/email-settings" },
    { name: "FAQ", icon: HelpCircle, path: "/admin/faq" },
    { name: "Page Settings", icon: FileText, path: "/admin/page-settings" },
  ];

  // Mock chart data for demonstration
  const chartMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("adminToken");
      toast.success("Logged out successfully");
      setTimeout(() => {
        router.push("/admin/login");
      }, 1000)
    }
  };


    // add locations
    const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await axios.post(`${API_URL}/locations/add`, data);
    toast.success("Location added successfully!");
    e.target.reset();
    setTimeout(()=>{
      window.location.reload();
    },1500)
  } catch (err) {
    toast.error(err.response?.data?.error || "Error adding location");
  }
};


// all locations
const [locations, setLocations] = useState([]);

useEffect(() => {
  const fetchLocations = async () => {
    try {
      const res = await axios.get(`${API_URL}/locations`); // update to match your backend route
      setLocations(res.data.locations);
    } catch (error) {
      console.error("Error fetching locations", error);
      toast.error("Failed to load locations");
    }
  };

  fetchLocations();
}, []);


  const router = useRouter();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const adminToken = localStorage.getItem("adminToken");

      if (!adminToken) {
        router.push("/admin/login");
      } else {
        setLoading(false);
      }
    }
  }, [router]);
  if (loading) {
    return <div>Loading...</div>;
  }

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
                    className={`flex items-center justify-between px-3 py-2 rounded-lg transition-colors cursor-pointer ${pathname === item.path
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
      <ToastContainer />
      {/* Main Content */}
      <div className="flex gap-6" style={{ width: "100%", padding: "70px" }}>
        {/* Left - Location List (Table) */}
        <div className="w-2/3 bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">All Locations</h2>

          {/* Dummy No Data Message */}
          {locations.length === 0 ? (
  <div className="text-gray-500">No locations available.</div>
) : (
  <div className="overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location Name</th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">City</th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">State</th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-100">
        {locations.map((loc, index) => (
          <tr key={loc._id} className="hover:bg-gray-50">
            <td className="px-4 py-3 text-sm text-gray-700">{index + 1}</td>
            <td className="px-4 py-3 text-sm font-medium text-gray-800">{loc.name}</td>
            <td className="px-4 py-3 text-sm text-gray-600">{loc.city}</td>
            <td className="px-4 py-3 text-sm text-gray-600">{loc.state}</td>
            <td className="px-4 py-3 text-sm text-gray-500">
              {new Date(loc.createdAt).toLocaleDateString()}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}

        </div>

        {/* Right - Add Location Form */}
        <div className="w-1/3 bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Add New Location</h2>
          <form className="grid grid-cols-2 gap-4 bg-white shadow-lg rounded-2xl p-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Location Name"
              required
              className="col-span-2 border px-3 py-2 rounded-lg"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              required
              className="border px-3 py-2 rounded-lg"
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              required
              className="border px-3 py-2 rounded-lg"
            />
            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              required
              className="border px-3 py-2 rounded-lg"
            />
            <input
              type="number"
              name="longitude"
              step="0.000001"
              placeholder="Longitude"
              className="border px-3 py-2 rounded-lg"
              id="longitude"
            />
            <input
              type="number"
              name="latitude"
              step="0.000001"
              placeholder="Latitude"
              className="border px-3 py-2 rounded-lg"
              id="latitude"
            />
            <input
              type="text"
              name="mapLink"
              placeholder="Google Maps URL"
              className="col-span-2 border px-3 py-2 rounded-lg"
            />

            {/* Detect GPS Button */}
            <button
              type="button"
              onClick={() => {
                if (navigator.geolocation) {
                  navigator.geolocation.getCurrentPosition(
                    (position) => {
                      document.getElementById("latitude").value = position.coords.latitude.toFixed(6);
                      document.getElementById("longitude").value = position.coords.longitude.toFixed(6);
                      toast.success("GPS Location Fetched!");
                    },
                    (error) => {
                      toast.error("Unable to fetch GPS location.");
                    }
                  );
                } else {
                  toast.error("Geolocation not supported.");
                }
              }}
              className="col-span-2 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Detect GPS Location
            </button>

            <textarea
              name="address"
              placeholder="Full Address"
              required
              className="col-span-2 border px-3 py-2 rounded-lg"
            />
            <button
              type="submit"
              className="col-span-2 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              Add Location
            </button>
          </form>

        </div>
      </div>


    </div>
  );
}