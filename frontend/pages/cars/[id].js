import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Star, Users, Settings, Fuel, Calendar, MapPin, Phone, Mail, Shield, Award, Clock } from 'lucide-react';

// Sample car data - replace with your actual data
  const cars = [
    {
      name: "Luxury Sedan",
      desc: "Perfect for business trips and comfort",
      price: 2500,
      priceText: "₹2,500/day",
      images: [
        "/assets/cars/luxury-sedan.jpg",
        "/assets/cars/luxury-sedan-2.jpg",
        "/assets/cars/luxury-sedan-3.jpg",
        "/assets/cars/luxury-sedan-4.jpg"
      ],
      tag: "Automatic • 5 Seater",
      vehicleType: "Sedan",
      transmission: "Automatic",
      seats: 5,

      description: "Experience ultimate comfort and luxury with our premium sedan. Perfect for business meetings, airport transfers, or special occasions. This vehicle combines elegance with performance.",

      features: [
        "Automatic Transmission",
        "Leather Seats",
        "Air Conditioning",
        "GPS Navigation",
        "Bluetooth Connectivity",
        "Premium Sound System",
        "Sunroof",
        "Parking Sensors",
        "Cruise Control",
        "Heated Seats"
      ],

      specifications: {
        "Vehicle Type": "Sedan",
        "Transmission": "Automatic",
        "Fuel Type": "Petrol",
        "Seating Capacity": "5 Persons",
        "Engine": "2.0L Turbocharged",
        "Mileage": "15 km/l",
        "Year": "2023",
        "Color": "Pearl White"
      },

      vendor: {
        name: "Premium Car Rentals",
        rating: 4.9,
        phone: "+91 98765 43210",
        email: "info@premiumcars.com"
      },

      location: "Mumbai, Maharashtra"
    },

    {
      name: "SUV Adventure",
      desc: "Great for family trips and adventures",
      price: 3200,
      priceText: "₹3,200/day",
      images: [
        "/assets/cars/suv-adventure.png"
      ],
      tag: "Manual • 7 Seater",
      vehicleType: "SUV",
      transmission: "Manual",
      seats: 7,

      description: `Designed for comfort and durability, the SUV Adventure is perfect for family trips and off-road excursions. With spacious seating for seven and advanced safety features, it offers a reliable and enjoyable driving experience on any terrain.`,

      features: [
        "Manual Transmission",
        "7 Seater Capacity",
        "All-Wheel Drive (AWD)",
        "Air Conditioning",
        "Roof Rack",
        "Bluetooth Connectivity",
        "Rearview Camera",
        "Cruise Control",
        "ABS Brakes",
        "Multiple Airbags"
      ],

      specifications: {
        "Vehicle Type": "SUV",
        "Transmission": "Manual",
        "Fuel Type": "Diesel",
        "Seating Capacity": "7 Persons",
        "Engine": "2.5L Turbo Diesel",
        "Mileage": "12 km/l",
        "Year": "2022",
        "Color": "Metallic Grey"
      },

      vendor: {
        name: "Adventure Rentals",
        rating: 4.7,
        phone: "+91 91234 56789",
        email: "contact@adventurerentals.com"
      },

      location: "Goa, India"
    },

    {
      name: "Sports Car",
      desc: "For thrill seekers and speed lovers",
      price: 5000,
      priceText: "₹5,000/day",
      images: [
        "/assets/cars/sports-car.jpeg"
      ],
      tag: "Automatic • 2 Seater",
      vehicleType: "Sports",
      transmission: "Automatic",
      seats: 2,

      description: `Experience adrenaline-pumping performance and sleek design with this Sports Car. Perfect for speed enthusiasts, it offers powerful acceleration, precision handling, and luxurious interiors for a thrilling drive.`,

      features: [
        "Automatic Transmission",
        "2 Seater Capacity",
        "Turbocharged Engine",
        "Leather Seats",
        "Advanced Aerodynamics",
        "Bluetooth & USB Connectivity",
        "Premium Sound System",
        "Rear Parking Sensors",
        "Cruise Control",
        "LED Headlights"
      ],

      specifications: {
        "Vehicle Type": "Sports",
        "Transmission": "Automatic",
        "Fuel Type": "Petrol",
        "Seating Capacity": "2 Persons",
        "Engine": "3.0L Twin-Turbo V6",
        "Mileage": "10 km/l",
        "Year": "2023",
        "Color": "Glossy Red"
      },

      vendor: {
        name: "Elite Wheels",
        rating: 4.9,
        phone: "+91 99887 66554",
        email: "support@elitewheels.com"
      },

      location: "Bangalore, Karnataka"
    },

    {
      name: "Compact Hatchback",
      desc: "Ideal for city driving and easy parking",
      price: 1500,
      priceText: "₹1,500/day",
      images: [
        "/assets/cars/compact-hatchback.jpeg"
      ],
      tag: "Manual • 4 Seater",
      vehicleType: "Hatchback",
      transmission: "Manual",
      seats: 4,

      description: `Perfect for urban commuters, this Compact Hatchback offers excellent fuel efficiency, easy maneuverability, and a comfortable interior. Ideal for daily drives, quick errands, and tight parking spaces.`,

      features: [
        "Manual Transmission",
        "4 Seater Capacity",
        "Air Conditioning",
        "Power Steering",
        "Bluetooth Connectivity",
        "USB Port",
        "Central Locking",
        "Compact Design",
        "Rear Defogger",
        "Fuel Efficient Engine"
      ],

      specifications: {
        "Vehicle Type": "Hatchback",
        "Transmission": "Manual",
        "Fuel Type": "Petrol",
        "Seating Capacity": "4 Persons",
        "Engine": "1.2L 4-Cylinder",
        "Mileage": "18 km/l",
        "Year": "2022",
        "Color": "Metallic Silver"
      },

      vendor: {
        name: "CityRide Rentals",
        rating: 4.7,
        phone: "+91 98765 43211",
        email: "contact@cityriderentals.com"
      },

      location: "Delhi, India"
    },

    {
      name: "Executive SUV",
      desc: "Comfortable and spacious for family road trips",
      price: 3500,
      priceText: "₹3,500/day",
      images: [
        "/assets/cars/executive-suv.webp"
      ],
      tag: "Automatic • 7 Seater",
      vehicleType: "SUV",
      transmission: "Automatic",
      seats: 7,

      description: `Ideal for family outings and long journeys, the Executive SUV offers a smooth ride with ample space for passengers and luggage. Equipped with advanced safety features and premium interiors, it ensures comfort and convenience on the road.`,

      features: [
        "Automatic Transmission",
        "7 Seater Capacity",
        "Air Conditioning",
        "Leather Seats",
        "Bluetooth Connectivity",
        "Rear Camera",
        "Cruise Control",
        "Parking Sensors",
        "Sunroof",
        "ABS & Airbags"
      ],

      specifications: {
        "Vehicle Type": "SUV",
        "Transmission": "Automatic",
        "Fuel Type": "Diesel",
        "Seating Capacity": "7 Persons",
        "Engine": "2.2L Turbo Diesel",
        "Mileage": "14 km/l",
        "Year": "2024",
        "Color": "Deep Blue"
      },

      vendor: {
        name: "Premium Auto Rentals",
        rating: 4.8,
        phone: "+91 98765 43212",
        email: "info@premiumautorentals.com"
      },

      location: "Bangalore, Karnataka"
    },

    {
      name: "Convertible Coupe",
      desc: "Feel the wind in style and performance",
      price: 4800,
      priceText: "₹4,800/day",
      images: [
        "/assets/cars/convertible-coupe.jpg"
      ],
      tag: "Automatic • 2 Seater",
      vehicleType: "Sports",
      transmission: "Automatic",
      seats: 2,

      description: `Experience the thrill of open-air driving with the Convertible Coupe. This sleek sports car combines powerful performance with stylish design, perfect for those who want to enjoy every twist and turn in ultimate comfort.`,

      features: [
        "Automatic Transmission",
        "2 Seater Capacity",
        "Convertible Roof",
        "Leather Upholstery",
        "Bluetooth Connectivity",
        "Premium Sound System",
        "Sport-tuned Suspension",
        "Rear Parking Sensors",
        "Cruise Control",
        "ABS & Airbags"
      ],

      specifications: {
        "Vehicle Type": "Sports",
        "Transmission": "Automatic",
        "Fuel Type": "Petrol",
        "Seating Capacity": "2 Persons",
        "Engine": "3.0L V6 Turbo",
        "Mileage": "12 km/l",
        "Year": "2023",
        "Color": "Red"
      },

      vendor: {
        name: "Elite Sports Rentals",
        rating: 4.9,
        phone: "+91 91234 56789",
        email: "contact@elitesportsrentals.com"
      },

      location: "Delhi, India"
    },

    {
      name: "Electric Hatch",
      desc: "Eco-friendly and efficient for daily use",
      price: 2200,
      priceText: "₹2,200/day",
      images: [
        "/assets/cars/electric-hatch.webp"
      ],
      tag: "Automatic • 5 Seater",
      vehicleType: "Hatchback",
      transmission: "Automatic",
      seats: 5,

      description: `The Electric Hatch is a modern, eco-conscious vehicle designed for urban living. With zero emissions and compact size, it's perfect for city commutes and weekend getaways, offering a smooth and silent ride.`,

      features: [
        "Automatic Transmission",
        "5 Seater Capacity",
        "Electric Motor",
        "Regenerative Braking",
        "Touchscreen Infotainment",
        "Bluetooth & USB Connectivity",
        "Rear Camera",
        "Climate Control",
        "Keyless Entry",
        "Safety Airbags"
      ],

      specifications: {
        "Vehicle Type": "Hatchback",
        "Transmission": "Automatic",
        "Fuel Type": "Electric",
        "Seating Capacity": "5 Persons",
        "Battery Range": "350 km",
        "Charging Time": "6 hours (fast charge)",
        "Year": "2024",
        "Color": "Metallic Blue"
      },

      vendor: {
        name: "Green Wheels Rentals",
        rating: 4.8,
        phone: "+91 98765 12345",
        email: "support@greenwheels.com"
      },

      location: "Bangalore, Karnataka"
    },

    {
      name: "Off-Road Beast",
      desc: "Built for tough terrain and adventure",
      price: 4000,
      priceText: "₹4,000/day",
      images: [
        "/assets/cars/offroad-beast.jpg"
      ],
      tag: "Manual • 5 Seater",
      vehicleType: "SUV",
      transmission: "Manual",
      seats: 5,

      description: `The Off-Road Beast is your ultimate companion for rugged terrains and outdoor adventures. Equipped with powerful 4x4 capabilities, high ground clearance, and durable suspension, it conquers dirt roads, rocky paths, and muddy trails with ease.`,

      features: [
        "Manual Transmission",
        "5 Seater Capacity",
        "4x4 Drive",
        "Hill Descent Control",
        "All-Terrain Tires",
        "Skid Plates",
        "Roof Rack",
        "Tow Hitch",
        "LED Headlights",
        "Off-Road Suspension"
      ],

      specifications: {
        "Vehicle Type": "SUV",
        "Transmission": "Manual",
        "Fuel Type": "Diesel",
        "Seating Capacity": "5 Persons",
        "Engine": "3.0L Turbo Diesel",
        "Mileage": "12 km/l",
        "Year": "2023",
        "Color": "Matte Black"
      },

      vendor: {
        name: "Adventure Rentals",
        rating: 4.7,
        phone: "+91 91234 56789",
        email: "contact@adventurerentals.com"
      },

      location: "Goa"
    },

    {
      name: "Classic Sedan",
      desc: "Smooth and reliable for everyday travel",
      price: 2000,
      priceText: "₹2,000/day",
      images: [
        "/assets/cars/classic-sedan.jpeg"
      ],
      tag: "Manual • 5 Seater",
      vehicleType: "Sedan",
      transmission: "Manual",
      seats: 5,

      description: `The Classic Sedan offers a smooth and comfortable ride, perfect for daily commutes and family trips. Its timeless design combined with reliable performance makes it a dependable choice for all occasions.`,

      features: [
        "Manual Transmission",
        "5 Seater Capacity",
        "Air Conditioning",
        "Power Windows",
        "AM/FM Radio",
        "Cruise Control",
        "Anti-lock Braking System (ABS)",
        "Central Locking",
        "Rear Defogger",
        "Adjustable Seats"
      ],

      specifications: {
        "Vehicle Type": "Sedan",
        "Transmission": "Manual",
        "Fuel Type": "Petrol",
        "Seating Capacity": "5 Persons",
        "Engine": "1.8L Inline-4",
        "Mileage": "16 km/l",
        "Year": "2022",
        "Color": "Silver"
      },

      vendor: {
        name: "Reliable Rentals",
        rating: 4.6,
        phone: "+91 99876 54321",
        email: "support@reliablerentals.com"
      },

      location: "Bangalore"
    },
  ];

export default function CarDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const [selectedImage, setSelectedImage] = useState(0);
  const [bookingData, setBookingData] = useState({
    pickupDate: '',
    returnDate: '',
    pickupTime: '10:00',
    returnTime: '10:00'
  });

  

  const [car, setCar] = useState(null);

  useEffect(() => {
    if (id) {
      const slugify = (str) => str.toLowerCase().replace(/\s+/g, '-');
      const foundCar = cars.find(c => slugify(c.name) === id);
      setCar(foundCar);
      setSelectedImage(0);
    }
  }, [id]);

  if (!car) {
    return (
        <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">Car Not Found</h1>
            <p className="text-gray-600 mb-4">We couldn’t find the car you’re looking for.</p>
            <button
            onClick={() => router.push('/cars')}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
            Back to Cars
            </button>
        </div>
        </div>
    );
    }

  const handleBooking = () => {
    if (!bookingData.pickupDate || !bookingData.returnDate) {
      alert('Please select pickup and return dates');
      return;
    }
    alert(`Booking ${car.name} from ${bookingData.pickupDate} to ${bookingData.returnDate}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/cars" passHref>
              <button className="text-gray-600 hover:text-gray-800">
                ← Back to Cars
              </button>
            </Link>
            <h1 className="text-2xl font-bold text-gray-800">{car.name}</h1>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="font-semibold">{car.rating}</span>
              <span className="text-gray-500">({car.reviews} reviews)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section - Images and Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            {car.images && car.images.length > 0 && (
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <div className="aspect-video bg-gray-100 relative">
                    <Image
                        src={car.images[selectedImage]}
                        alt={car.name}
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                    </div>
                    <div className="p-4">
                    <div className="flex gap-2 overflow-x-auto">
                        {car.images.map((img, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedImage(index)}
                            className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 ${
                            selectedImage === index ? 'border-blue-500' : 'border-gray-200'
                            }`}
                        >
                            <div className="relative w-full h-full">
                            <Image
                                src={img}
                                alt={`${car.name} image ${index + 1}`}
                                layout="fill"
                                objectFit="cover"
                            />
                            </div>
                        </button>
                        ))}
                    </div>
                    </div>
                </div>
            )}

            {/* Description */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">About this car</h2>
              <p className="text-gray-600 leading-relaxed">{car.description}</p>
            </div>

            {/* Features */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Features & Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {car?.features?.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {car?.specifications && Object.entries(car.specifications).map(([key, value]) => (                  
                  <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">{key}</span>
                    <span className="font-medium text-gray-800">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Vendor Info */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Rental Partner</h2>
              <div className="flex items-start gap-4">
                {car.vendor && car.vendor.name && (
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {car.vendor.name.charAt(0)}
                  </div>
                )}
                {car.vendor && (
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{car.vendor.name}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="font-medium">{car.vendor.rating}</span>
                      <span className="text-gray-500">• Verified Partner</span>
                    </div>
                    <div className="flex flex-col gap-1 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span>{car.vendor.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span>{car.vendor.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{car.location}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Section - Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold text-gray-800">₹{car.price}</span>
                  <span className="text-lg text-gray-500">/day</span>
                  {car.originalPrice > car.price && (
                    <span className="text-sm text-gray-400 line-through">₹{car.originalPrice}</span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <Shield className="w-4 h-4" />
                  <span>Free cancellation</span>
                </div>
              </div>

              {/* Booking Form */}
              <div className="space-y-4 mb-6">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Pickup Date
                    </label>
                    <input
                      type="date"
                      value={bookingData.pickupDate}
                      onChange={(e) => setBookingData({...bookingData, pickupDate: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Return Date
                    </label>
                    <input
                      type="date"
                      value={bookingData.returnDate}
                      onChange={(e) => setBookingData({...bookingData, returnDate: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Pickup Time
                    </label>
                    <select
                      value={bookingData.pickupTime}
                      onChange={(e) => setBookingData({...bookingData, pickupTime: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="09:00">09:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="13:00">01:00 PM</option>
                      <option value="14:00">02:00 PM</option>
                      <option value="15:00">03:00 PM</option>
                      <option value="16:00">04:00 PM</option>
                      <option value="17:00">05:00 PM</option>
                      <option value="18:00">06:00 PM</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Return Time
                    </label>
                    <select
                      value={bookingData.returnTime}
                      onChange={(e) => setBookingData({...bookingData, returnTime: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="09:00">09:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="13:00">01:00 PM</option>
                      <option value="14:00">02:00 PM</option>
                      <option value="15:00">03:00 PM</option>
                      <option value="16:00">04:00 PM</option>
                      <option value="17:00">05:00 PM</option>
                      <option value="18:00">06:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4 mb-6 text-center">
                <div className="flex flex-col items-center p-3 bg-blue-50 rounded-lg">
                  <Award className="w-6 h-6 text-blue-600 mb-1" />
                  <span className="text-xs text-blue-800 font-medium">Best Price</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-green-50 rounded-lg">
                  <Clock className="w-6 h-6 text-green-600 mb-1" />
                  <span className="text-xs text-green-800 font-medium">24/7 Support</span>
                </div>
              </div>

              {/* Book Now Button */}
              <Link href={`/cars/rent?car=${id}`}>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
                  Book Now - ₹{car.price}/day
                </button>
              </Link>
              <p className="text-xs text-gray-500 text-center mt-3">
                Free cancellation up to 24 hours before pickup
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}