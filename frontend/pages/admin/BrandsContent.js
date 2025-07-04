import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {API_URL,IMAGE_URL} from "../url";
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
  Plus, Trash2
} from "lucide-react";
import "react-toastify/dist/ReactToastify.css";
import AdminHeader from "./AdminHeader";
import { toast, ToastContainer } from "react-toastify";

export default function BrandsContent() {
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

  // brands add
  const [brandname, setbrandname] = useState("");
const [logoUrl, setlogoUrl] = useState(null);

const handleBrandSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("brandname", brandname);
  formData.append("logoUrl", logoUrl);

  try {
    const res = await axios.post(`${API_URL}/brands/add`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    if (res.data.success) {
      toast.success("Brand added successfully!");
      setbrandname("");
      setlogoUrl(null);
      setTimeout(()=>{
        window.location.reload();
      },1500);
    }
  } catch (error) {
    toast.error("Error adding brand.");
    console.error(error);
  }
};

// fetch all brands
  const [brandName, setBrandName] = useState("");
  const [logoFile, setLogoFile] = useState(null);
  const [brands, setBrands] = useState([]);

  // Fetch brands from API
  const fetchBrands = async () => {
    try {
      const res = await axios.get(`${API_URL}/brands`);
      if (res.data.success) {
        setBrands(res.data.brands);
      }
    } catch (err) {
      console.error("Failed to fetch brands", err);
    }
  };

  useEffect(() => {
    fetchBrands();
  }, []);

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
 <div className="flex gap-6" style={{width:"100%",padding:"70px"}}>
  {/* Left - Table/List */}
{/* Brand List (Tabular View) */}
<div className="w-2/3 bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
  <h2 className="text-2xl font-bold text-gray-800 mb-4">All Brands</h2>

  {brands.length === 0 ? (
    <div className="text-gray-500">No brands available.</div>
  ) : (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Logo</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Brand Name</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {brands.map((brand, index) => (
            <tr key={brand._id} className="hover:bg-gray-50">
              <td className="px-4 py-3 text-sm text-gray-700">{index + 1}</td>
              <td className="px-4 py-3">
                <img
                  src={`${IMAGE_URL}${brand.logoUrl}`}
                  alt={brand.brandname}
                  className="h-10 w-10 object-contain"
                />
              </td>
              <td className="px-4 py-3 text-sm font-medium text-gray-800">{brand.brandname}</td>
              <td className="px-4 py-3 text-sm text-gray-500">
                {new Date(brand.createdAt).toLocaleDateString("en-IN")}
              </td>
              <td className="px-4 py-3">
                <div className="flex gap-2">
                  <button
                    className="px-2 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded-md"
                    onClick={() => alert(`Edit ${brand.brandname}`)} // Replace with actual edit logic
                  >
                    Edit
                  </button>
                  <button
                    className="px-2 py-1 text-sm text-red-600 hover:bg-red-50 rounded-md"
                    onClick={() => alert(`Delete ${brand.brandname}`)} // Replace with actual delete logic
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )}
</div>


  {/* Right - Add Brand Form */}
  <div className="w-1/3 bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">Add New Brand</h2>
<form onSubmit={handleBrandSubmit} className="space-y-4">
  <div>
    <label className="block text-sm font-medium text-gray-700">Brand Name</label>
    <input
      type="text"
      name="brandname"
      value={brandname}
      onChange={(e) => setbrandname(e.target.value)}
      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
    />
  </div>
  <div>
    <label className="block text-sm font-medium text-gray-700">Brand Logo</label>
    <input
      type="file"
      name="logoUrl"
      accept="image/*"
      onChange={(e) => setlogoUrl(e.target.files[0])}
      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
    />
  </div>
  <button
    type="submit"
    className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
  >
    Add Brand
  </button>
</form>
  </div>
</div>

    </div>
  );
}