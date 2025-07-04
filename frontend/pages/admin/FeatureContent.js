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
  Search, Edit3, Trash2, Plus, X
} from "lucide-react";
import AdminHeader from "./AdminHeader";
import { toast,ToastContainer } from "react-toastify";
import { API_URL } from "../url";

export default function FeatureContent() {
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
      setTimeout(()=>{
        router.push("/admin/login");
      },1000)
    }
  };


const [searchTerm, setSearchTerm] = useState('');
  const [showEntries, setShowEntries] = useState(10);
  const [showNoData, setShowNoData] = useState(false);
  const [showForm, setShowForm] = useState(false);

const [features, setFeatures] = useState([]);
const [loading, setLoading] = useState(true);


const fetchFeatures = async () => {
  try {
    const response = await axios.get(`${API_URL}/features`); // Update baseURL if needed
    setFeatures(response.data.features);
  } catch (error) {
    console.error("Failed to fetch features:", error);
  } finally {
    setLoading(false);
  }
};
useEffect(() => {
  fetchFeatures();
}, []);

const filteredFeatures = features.filter((feature) =>
  feature.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
  feature.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
  feature.price?.toString().toLowerCase().includes(searchTerm.toLowerCase())
);


  const displayFeatures = showNoData ? [] : filteredFeatures.slice(0, showEntries);

const handleAddFeature = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  const newFeature = {
    name: formData.get("name"),
    description: formData.get("description"),
    price: parseFloat(formData.get("price")),
  };

  try {
    const response = await axios.post(`${API_URL}/features/add`, newFeature); // Update if baseURL differs
    const savedFeature = response.data;

    setFeatures([savedFeature, ...features]);
    e.target.reset(); // clear form
    setShowForm(false);
    toast.success("Feature added successfully!");
    setTimeout(()=>{
      window.location.reload(); // reload the page to see the new feature
    }, 1000);
  } catch (error) {
    console.error("Error adding feature:", error);
    toast.error("Something went wrong while adding the feature!");
  }
};

  const NoDataState = () => (
    <tr>
      <td colSpan="5" className="py-16 text-center">
        <div className="flex flex-col items-center justify-center text-gray-400">
          <p className="text-lg font-medium text-gray-500">No Data</p>
        </div>
      </td>
    </tr>
  );





  const router = useRouter();
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
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200" style={{width:"100%"}}>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Features List</h2>
        <button
          onClick={() => setShowForm(prev => !prev)}
          className="bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-md flex items-center gap-2 text-sm font-medium transition"
        >
          {showForm ? <X size={16} /> : <Plus size={16} />}
          {showForm ? 'Close' : 'Add Feature'}
        </button>
      </div>

      {/* Inline Form */}
      {showForm && (
        <form onSubmit={handleAddFeature} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 bg-gray-50 border border-green-100 p-6 rounded-lg shadow-inner transition-all">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Feature Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Description</label>
            <input
              type="text"
              name="description"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Price</label>
            <input
              type="number"
              name="price"
              step="0.01"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          <div className="md:col-span-3 flex justify-end mt-4">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded-md transition"
            >
              Add Feature
            </button>
          </div>
        </form>
      )}

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse rounded-lg overflow-hidden">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 uppercase text-xs tracking-wider">#</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 uppercase text-xs tracking-wider">Name</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 uppercase text-xs tracking-wider">Description</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 uppercase text-xs tracking-wider">Price</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 uppercase text-xs tracking-wider">Action</th>
            </tr>
          </thead>
     <tbody>
  {loading ? (
    <tr>
      <td colSpan="5" className="py-8 text-center text-gray-500">Loading...</td>
    </tr>
  ) : displayFeatures.length === 0 ? (
    <tr>
      <td colSpan="5" className="py-8 text-center text-gray-400">No Data</td>
    </tr>
  ) : (
    displayFeatures.map((feature, index) => (
      <tr key={feature._id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
        <td className="py-3 px-4 text-gray-700 text-sm">{index + 1}</td>
        <td className="py-3 px-4 text-gray-700 font-medium text-sm">{feature.name}</td>
        <td className="py-3 px-4 text-gray-700 text-sm">{feature.description}</td>
        <td className="py-3 px-4 text-gray-700 text-sm">₹{parseFloat(feature.price).toFixed(2)}</td>
        <td className="py-3 px-4">
          <div className="flex gap-2">
            <button className="p-2 text-green-600 hover:bg-green-100 rounded-md transition-colors">
              <Edit3 size={16} />
            </button>
            <button className="p-2 text-red-600 hover:bg-red-100 rounded-md transition-colors">
              <Trash2 size={16} />
            </button>
          </div>
        </td>
      </tr>
    ))
  )}
</tbody>

        </table>
      </div>

      {/* Pagination and Show Entries */}
      <div className="flex justify-between items-center mt-6 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <span>Show</span>
          <select
            value={showEntries}
            onChange={(e) => setShowEntries(Number(e.target.value))}
            className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <span>entries</span>
        </div>

        <div className="text-gray-600">
          {displayFeatures.length === 0
            ? 'Showing 0 to 0 of 0 entries'
            : `Showing 1 to ${displayFeatures.length} of ${displayFeatures.length} entries`}
        </div>

        <div className="flex items-center gap-1">
          <button
            className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 transition-colors disabled:opacity-50"
            disabled={displayFeatures.length === 0}
          >
            Previous
          </button>
          <button
            className={`px-3 py-1 rounded ${
              displayFeatures.length === 0
                ? 'bg-gray-300 text-gray-500'
                : 'bg-green-600 text-white'
            }`}
          >
            1
          </button>
          <button
            className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 transition-colors disabled:opacity-50"
            disabled={displayFeatures.length === 0}
          >
            Next
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}