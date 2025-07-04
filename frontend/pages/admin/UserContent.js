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
  Search,
  Edit3,
  Trash2,
  Plus,
  User,
  FileX,
} from "lucide-react";
import AdminHeader from "./AdminHeader";
import { toast,ToastContainer } from "react-toastify";
import { API_URL } from "../url";

export default function UsersContent() {
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

  //users list
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showEntries, setShowEntries] = useState(10);
  const [showNoData, setShowNoData] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${API_URL}/users&vendors/users`);
      setUsers(res.data.data);
    } catch (err) {
      console.error('Error fetching users:', err);
    }
  };

  const filteredUsers = users.filter(user =>
    user.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.lastName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.phone?.includes(searchTerm)
  );

  const displayUsers = showNoData ? [] : filteredUsers.slice(0, showEntries);


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
  { name: "Type", icon: Car, path: "/admin/type" },
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

  
  const NoDataState = () => (
    <tr>
      <td colSpan="8" className="py-16 text-center">
        <div className="flex flex-col items-center justify-center text-gray-400">
          <FileX size={64} className="mb-4" />
          <p className="text-lg font-medium text-gray-500">No Data</p>
        </div>
      </td>
    </tr>
  );

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
        <h2 className="text-2xl font-bold text-gray-800">Users List</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setShowNoData(!showNoData)}
            className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1.5 rounded-md text-sm font-medium transition"
          >
            {showNoData ? 'Show Data' : 'Show No Data'}
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-md flex items-center gap-2 text-sm font-medium transition">
            <Plus size={14} />
            Add User
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse rounded-lg overflow-hidden">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              {['#', 'Registered At', 'Image', 'Name', 'Phone', 'Email', 'Status', 'Action'].map((header) => (
                <th key={header} className="text-left py-3 px-4 font-semibold text-gray-700 uppercase text-xs tracking-wider">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {displayUsers.length === 0 ? (
              <NoDataState />
            ) : (
              displayUsers.map((user, index) => (
                <tr key={user._id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 text-gray-700 text-sm">{index + 1}</td>
                  <td className="py-3 px-4 text-gray-700 text-sm">
                    {new Date(user.createdAt).toLocaleDateString('en-IN')}
                  </td>
                  <td className="py-3 px-4">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <User size={20} className="text-gray-500" />
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-700 font-medium text-sm">
                    {user.firstName} {user.lastName}
                  </td>
                  <td className="py-3 px-4 text-gray-700 text-sm">{user.phone}</td>
                  <td className="py-3 px-4 text-gray-700 text-sm">{user.email}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      user.status === 'Verified'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {user.status || 'Not Verified'}
                    </span>
                  </td>
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

      {/* Pagination + Show Entries */}
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
        <div>
          {displayUsers.length === 0
            ? 'Showing 0 to 0 of 0 entries'
            : `Showing 1 to ${displayUsers.length} of ${filteredUsers.length} entries`}
        </div>
        <div className="flex items-center gap-1">
          <button
            className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 transition-colors disabled:opacity-50"
            disabled
          >
            Previous
          </button>
          <button className="px-3 py-1 bg-green-600 text-white rounded">1</button>
          <button
            className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 transition-colors disabled:opacity-50"
            disabled
          >
            Next
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}
