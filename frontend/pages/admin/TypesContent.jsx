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
  Plus, Trash2, FileX, Edit3
} from "lucide-react";
import "react-toastify/dist/ReactToastify.css";
import AdminHeader from "./AdminHeader";
import { toast, ToastContainer } from "react-toastify";
import { API_URL } from "../url";

export default function TypesContent() {
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

  // type add
  // Add car type
  const [carTypes, setCarTypes] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.warning("Name is required");
      return;
    }
    try {
      const res = await axios.post(`${API_URL}/cartypes/add`, {
        name,
        description,
      });
      toast.success("Car type added!");
      setName("");
      setDescription("");
      toast.success("Car Type added successfully!");
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (err) {
      toast.error(err.response?.data?.error || "Error adding car type");
    }
  };


  // Fetch car types
  const fetchCarTypes = async () => {
    try {
      const res = await axios.get(`${API_URL}/cartypes`);
      setCarTypes(res.data.data);
    } catch (err) {
      toast.error("Failed to fetch car types");
    }
  };

  useEffect(() => {
    fetchCarTypes();
  }, []);


  const [activeTimeframe, setActiveTimeframe] = useState("6 Months");

  const toggleSidebar = (section) => {
    setSidebarExpanded((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };



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
    { name: "Type", icon: Car, path: "/admin/TypesContent",  },
    { name: "Location", icon: MapPin, path: "/admin/location" },
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
        {/* Left - Table/List */}
        <div className="w-2/3 bg-white border border-gray-200 rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Car Types</h2>
          {carTypes.length === 0 ? (
            <div className="text-gray-500 flex items-center gap-2">
              <FileX /> No car types available.
            </div>
          ) : (
            <table className="w-full text-sm text-left text-gray-700">
              <thead className="bg-gray-50 border-b text-xs uppercase font-medium">
                <tr>
                  <th className="py-3 px-4">#</th>
                  <th className="py-3 px-4">Name</th>
                  <th className="py-3 px-4">Description</th>
                  <th className="py-3 px-4">Created</th>
                  <th className="py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {carTypes.map((type, idx) => (
                  <tr key={type._id} className="border-b hover:bg-gray-50">
                    <td className="py-2 px-4">{idx + 1}</td>
                    <td className="py-2 px-4 font-semibold text-gray-800">
                      {type.name}
                    </td>
                    <td className="py-2 px-4">{type.description || "-"}</td>
                    <td className="py-2 px-4">
                      {new Date(type.createdAt).toLocaleDateString("en-IN")}
                    </td>
                    <td className="py-2 px-4">
                      <td className="py-2 px-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleDelete(type._id)}
                            className="p-2 text-red-600 hover:text-red-800 hover:bg-red-100 rounded-md transition"
                          >
                            <Trash2 size={16} />
                          </button>
                          <button
                            onClick={() => {
                              setEditId(type._id);
                              setName(type.name);
                              setDescription(type.description);
                            }}
                            className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-100 rounded-md transition"
                          >
                            <Edit3 size={16} />
                          </button>
                        </div>
                      </td>

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        {/* Brand List (Tabular View) */}
        <div className="w-1/3 bg-white border border-gray-200 rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Add Car Type</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Type Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. SUV"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="3"
                placeholder="Optional description..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 hover:bg-green-700 transition"
            >
              <Plus size={16} /> Add Type
            </button>
          </form>
        </div>



      </div>

    </div>
  );
}