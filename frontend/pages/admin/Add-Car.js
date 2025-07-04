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
    BadgeDollarSign,
    Fuel,
    Gauge,
    Image as ImageIcon,
} from "lucide-react";
import AdminHeader from "./AdminHeader";
import { toast, ToastContainer } from "react-toastify";
import API_URL from '../url'; 
export default function AddCar() {
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

    //dynamic fetching
   const [formData, setFormData] = useState({});
  const [brands, setBrands] = useState([]);
  const [carTypes, setCarTypes] = useState([]);
  const [locations, setLocations] = useState([]);
  const [mainImage, setMainImage] = useState(null);
  const [additionalImages, setAdditionalImages] = useState([]);
  const [documents, setDocuments] = useState({
    insuranceDocument: null,
    permitDocument: null
  });

  // Fetch dropdown data
  useEffect(() => {
    const fetchDropdowns = async () => {
      try {
        const [brandRes, typeRes, locRes] = await Promise.all([
          axios.get(`${API_URL}/brands`),
          axios.get(`${API_URL}/cartypes`),
          axios.get(`${API_URL}/locations`)
        ]);
        setBrands(brandRes.data.brands);
        setCarTypes(typeRes.data.data);
        setLocations(locRes.data.locations);
      } catch (err) {
        toast.error("Failed to load form data");
      }
    };
    fetchDropdowns();
  }, []);

  // Handle text input
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // For features (checkboxes)
    if (name.startsWith("features.")) {
      const featureKey = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        features: {
          ...prev.features,
          [featureKey]: checked
        }
      }));
    }
    // For nested price
    else if (name.startsWith("price.")) {
      const priceKey = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        price: {
          ...prev.price,
          [priceKey]: value
        }
      }));
    }
    // Normal input
    else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // File handlers
  const handleMainImageChange = (e) => setMainImage(e.target.files[0]);
  const handleAdditionalImagesChange = (e) => setAdditionalImages([...e.target.files]);
  const handleDocumentChange = (e) => {
    const { name, files } = e.target;
    setDocuments((prev) => ({ ...prev, [name]: files[0] }));
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();

    // Append simple fields
    for (let key in formData) {
      if (typeof formData[key] === "object") {
        form.append(key, JSON.stringify(formData[key]));
      } else {
        form.append(key, formData[key]);
      }
    }

    // Files
    if (mainImage) form.append("mainImage", mainImage);
    additionalImages.forEach((file) => form.append("additionalImages", file));
    if (documents.insuranceDocument) form.append("insuranceDocument", documents.insuranceDocument);
    if (documents.permitDocument) form.append("permitDocument", documents.permitDocument);

    try {
      const res = await axios.post(`${API_URL}/cars/create`, form, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      toast.success("Car added successfully!");
      setTimeout(()=>{
        router.push("/admin/CarsContent");
      },1200)
    } catch (err) {
      console.error(err);
      toast.error("Error adding car");
    }
  };




    const sidebarItems = [
        { name: "Dashboard", icon: LayoutDashboard, path: "/admin" },
        { name: "Vendors", icon: Users, path: "/admin/vendors" },
        { name: "Users", icon: Users, path: "/admin/UserContent", active: true },
        { name: "Brand", icon: Tag, path: "/admin/BrandsContent", category: "CARS MANAGEMENT" },
        { name: "Type", icon: Car, path: "/admin/TypesContent" },
        { name: "Location", icon: MapPin, path: "/admin/LocationContent" },
        { name: "Extra Feature", icon: Settings, path: "/admin/extra-feature" },
        { name: "Cars", icon: Car, path: "/admin/CarsContent" },
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
            <div style={{ width: "100%", padding: "90px" }} className="">

                <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-2 gap-6 bg-white p-10 rounded-2xl shadow-2xl max-w-7xl mx-auto"
                >
                    {/* Title */}
                    <div className="col-span-2">
                        <label className="flex items-center gap-2 text-base font-semibold text-gray-800 mb-2">
                            <Car size={20} /> Title
                        </label>
                        <input
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            type="text"
                            name="title"
                            placeholder="Enter Title"
                            onChange={handleChange}
                        />
                    </div>

                    {/* Description */}
                    <div className="col-span-2">
                        <label className="text-base font-semibold text-gray-800 mb-2 block">Description</label>
                        <input
                            className="w-full border border-gray-300 rounded-lg px-4 py-2"
                            type="text"
                            name="description"
                            placeholder="Enter Description"
                            onChange={handleChange}
                        />
                    </div>

                    {/* Basic Info */}
                    {[
                        { label: "Color", name: "color", type: "text" },
                        { label: "Engine Size", name: "engineSize", type: "text" },
                        { label: "Year", name: "year", type: "number" },
                        { label: "Model", name: "model", type: "text" },
                        { label: "Fuel Type", name: "fuelType", type: "text" },
                        { label: "Transmission", name: "transmission", type: "text" },
                        { label: "Seats", name: "seats", type: "number" },
                        { label: "Mileage", name: "mileage", type: "number" },
                        { label: "Doors", name: "doors", type: "number" },
                    ].map((field) => (
                        <div key={field.name}>
                            <label className="text-sm font-semibold text-gray-700 mb-2 block">{field.label}</label>
                            <input
                                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                type={field.type}
                                name={field.name}
                                placeholder={field.label}
                                onChange={handleChange}
                            />
                        </div>
                    ))}

                    {/* Brand */}
                    <div>
                        <label className="text-sm font-semibold text-gray-700 mb-2 block">Brand</label>
                        <select
                            className="w-full border border-gray-300 rounded-lg px-4 py-2"
                            name="brand"
                            onChange={handleChange}
                        >
                            <option value="">Select Brand</option>
                            {brands.map((brand) => (
                                <option key={brand._id} value={brand.brandname}>
                                    {brand.brandname}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Car Type */}
                    <div>
                        <label className="text-sm font-semibold text-gray-700 mb-2 block">Car Type</label>
                        <select
                            className="w-full border border-gray-300 rounded-lg px-4 py-2"
                            name="carType"
                            onChange={handleChange}
                        >
                            <option value="">Select Car Type</option>
                            {carTypes.map((type) => (
                                <option key={type._id} value={type.name}>
                                    {type.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Price Section */}
                    {[
                        { label: "Per Day Price", name: "price.perDay" },
                        { label: "Per Week Price", name: "price.perWeek" },
                        { label: "Per Month Price", name: "price.perMonth" },
                    ].map((price) => (
                        <div key={price.name}>
                            <label className="text-sm font-semibold text-gray-700 mb-2 block">{price.label}</label>
                            <input
                                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                type="number"
                                name={price.name}
                                placeholder={price.label}
                                onChange={handleChange}
                            />
                        </div>
                    ))}

                    {/* Pickup / Drop */}
                    {[
                        { label: "Pickup Location", name: "pickupLocation" },
                        { label: "Drop Location", name: "dropLocation" },
                    ].map((loc) => (
                        <div key={loc.name}>
                            <label className="text-sm font-semibold text-gray-700 mb-2 block">{loc.label}</label>
                            <select
                                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                name={loc.name}
                                onChange={handleChange}
                            >
                                <option value="">{loc.label}</option>
                                {locations.map((l) => (
                                    <option key={l._id} value={l.name}>
                                        {l.name} ({l.city})
                                    </option>
                                ))}
                            </select>
                        </div>
                    ))}

                    {/* Registration Number */}
                    <div className="col-span-2">
                        <label className="text-sm font-semibold text-gray-700 mb-2 block">Registration Number</label>
                        <input
                            className="w-full border border-gray-300 rounded-lg px-4 py-2"
                            type="text"
                            name="registrationNumber"
                            placeholder="Registration Number"
                            onChange={handleChange}
                        />
                    </div>

                    {/* Features */}
                    <div className="col-span-2">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Features</label>
                        <div className="grid grid-cols-4 gap-4">
                            {[
                                "airConditioning",
                                "gps",
                                "bluetooth",
                                "usb",
                                "musicSystem",
                                "parkingSensors",
                                "rearCamera",
                            ].map((feature) => (
                                <label key={feature} className="flex items-center gap-2 text-sm capitalize">
                                    <input type="checkbox" name={`features.${feature}`} onChange={handleChange} />
                                    <Settings size={16} /> {feature.replace(/([A-Z])/g, " $1")}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* File Uploads */}
                    {[
                        { label: "Main Image", name: "mainImage", multiple: false },
                        { label: "Additional Images", name: "additionalImages", multiple: true },
                        { label: "Insurance Document", name: "insuranceDocument", multiple: false },
                        { label: "Permit Document", name: "permitDocument", multiple: false },
                    ].map((file) => (
                        <div key={file.name} className="col-span-2">
                            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-1">
                                <FileText size={16} /> {file.label}
                            </label>
                            <input
                                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                type="file"
                                name={file.name}
                                accept="image/*,application/pdf"
                                multiple={file.multiple}
                                onChange={
                                    file.name.includes("Image")
                                        ? file.multiple
                                            ? handleAdditionalImagesChange
                                            : handleMainImageChange
                                        : handleMainImageChange
                                }
                            />
                        </div>
                    ))}

                    <button
                        type="submit"
                        className="col-span-2 bg-gradient-to-r from-green-500 to-green-600 text-white text-lg font-semibold py-3 rounded-xl hover:from-green-600 hover:to-green-700 transition"
                    >
                        Add Car
                    </button>
                </form>

            </div>
        </div>
    );
}