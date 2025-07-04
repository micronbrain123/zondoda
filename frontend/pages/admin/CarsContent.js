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
  CarFront,

  Fuel,


  Gauge,

  ImageIcon,
} from "lucide-react";
import AdminHeader from "./AdminHeader";
import { toast, ToastContainer } from "react-toastify";
import API_URL from "../url";

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



  // Updated profileData state - removed hardcoded values
  const [profileData, setProfileData] = useState({
    name: "Admin",
    email: "admin@gmail.com",
    phone: "+8801715914997",
    image: "/profile-avatar.png",
  });

  // cars fetched
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 5;

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await axios.get(`${API_URL}/cars`);
        setCars(res.data.cars);
      } catch (error) {
        console.error("Failed to fetch cars:", error);
      }
    };
    fetchCars();
  }, []);

  // Pagination Logic
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);
  const totalPages = Math.ceil(cars.length / carsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

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
      <div className="flex-1 flex flex-col">
        <AdminHeader
          profileData={profileData}
          handleLogout={handleLogout}
          onUpdateProfile={setProfileData}
        />

        {/* Dashboard Content */}
        <main className="flex-1 p-6">
          {/* Stats Grid */}
          <div className="p-8 max-w-7xl mx-auto" style={{ width: "100%" }}>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Car Listings</h2>
            <div className="overflow-x-auto shadow rounded-xl">
              <Link
                href="/admin/Add-Car"
                className="inline-block bg-green-500 text-white px-4 py-2 rounded-md"
              >
                Add New Car
              </Link>
              <div className="p-6 bg-gray-100 min-h-screen">
                <h1 className="text-2xl font-bold mb-4">Car List</h1>
                <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                  <table className="min-w-full text-sm text-left text-gray-700">
                    <thead className="bg-gray-200 uppercase text-xs font-semibold">
                      <tr>
                        <th className="px-4 py-3">#</th>
                        <th className="px-4 py-3">Title</th>
                        <th className="px-4 py-3">Brand</th>
                        <th className="px-4 py-3">Type</th>
                        <th className="px-4 py-3">Fuel</th>
                        <th className="px-4 py-3">Seats</th>
                        <th className="px-4 py-3">Transmission</th>
                        <th className="px-4 py-3">Price/Day</th>
                        <th className="px-4 py-3">Pickup</th>
                        <th className="px-4 py-3">Drop</th>
                        <th className="px-4 py-3">Features</th>
                        <th className="px-4 py-3">Main Image</th>
                        <th className="px-4 py-3">Actions</th>

                      </tr>
                    </thead>
                    <tbody>
                      {cars.map((car, index) => (
                        <tr key={car._id} className="border-b">
                          <td className="px-4 py-2">{index + 1}</td>
                          <td className="px-4 py-2">{car.title}</td>
                          <td className="px-4 py-2">{car.brand}</td>
                          <td className="px-4 py-2">{car.carType}</td>
                          <td className="px-4 py-2">{car.fuelType}</td>
                          <td className="px-4 py-2">{car.seats}</td>
                          <td className="px-4 py-2">{car.transmission}</td>
                          <td className="px-4 py-2">₹{car.price?.perDay}</td>
                          <td className="px-4 py-2">{car.pickupLocation}</td>
                          <td className="px-4 py-2">{car.dropLocation}</td>
                          <td className="px-4 py-2">
                            {Object.entries(car.features)
                              .filter(([_, value]) => value)
                              .map(([key]) => key)
                              .join(", ")}
                          </td>
                          <td className="px-4 py-2">
                            <img
                              src={`${API_URL}/${car.mainImage.replace(/\\/g, "/")}`}
                              alt={car.title}
                              className="h-10 w-16 object-contain rounded-md"
                            />
                          </td>
                          <td className="px-4 py-2">
                            <div className="flex flex-wrap gap-2">
                              <a
                                href={`/admin/cars/${car._id}`}
                                className="text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded text-xs"
                              >
                                View
                              </a>
                              <a
                                href={`/admin/cars/edit/${car._id}`}
                                className="text-white bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded text-xs"
                              >
                                Edit
                              </a>
                              <button
                                className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-xs"

                              >
                                Delete
                              </button>
                              <button
                                className="text-white bg-green-500 hover:bg-green-600 px-3 py-1 rounded text-xs"

                              >
                                Approve
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

              </div>
            </div>


          </div>
          {/* Pagination Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-md ${currentPage === 1 ? "bg-gray-300" : "bg-blue-500 text-white"
                }`}
            >
              Prev
            </button>
            <span className="font-semibold text-gray-700">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-md ${currentPage === totalPages ? "bg-gray-300" : "bg-blue-500 text-white"
                }`}
            >
              Next
            </button>
          </div>

        </main>
      </div>
    </div>
  );
}