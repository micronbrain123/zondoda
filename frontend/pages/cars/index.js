import { useState } from "react";
import Image from "next/image";
import { useRouter } from 'next/router';

export default function Cars() {
  const router = useRouter();
  const [filters, setFilters] = useState({
    vehicleTypes: [],
    transmission: "",
    seats: "",
    maxPrice: 10000,
  });

  // Toggle vehicle type in filters
  const toggleVehicleType = (type) => {
    setFilters((prev) => {
      const hasType = prev.vehicleTypes.includes(type);
      return {
        ...prev,
        vehicleTypes: hasType
          ? prev.vehicleTypes.filter((t) => t !== type)
          : [...prev.vehicleTypes, type],
      };
    });
  };

  // Handle rent now action
  const handleRentNow = (car) => {
  const slug = car.name.toLowerCase().replace(/\s+/g, '-');
    router.push(`/cars/rent?car=${slug}`);
  };

  // Handle view details action
  const handleViewDetails = (car) => {
    router.push(`/cars/${car.id || car.name.replace(/\s+/g, '-').toLowerCase()}`);
  };

   // Sample car data
  const cars = [
    {
      name: "Luxury Sedan",
      desc: "Perfect for business trips and comfort",
      price: 2500,
      priceText: "₹2,500/day",
      img: "/assets/cars/luxury-sedan.jpg",
      tag: "Automatic • 5 Seater",
      vehicleType: "Sedan",
      transmission: "Automatic",
      seats: 5,
    },
    {
      name: "SUV Adventure",
      desc: "Great for family trips and adventures",
      price: 3200,
      priceText: "₹3,200/day",
      img: "/assets/cars/suv-adventure.png",
      tag: "Manual • 7 Seater",
      vehicleType: "SUV",
      transmission: "Manual",
      seats: 7,
    },
    {
      name: "Sports Car",
      desc: "For thrill seekers and speed lovers",
      price: 5000,
      priceText: "₹5,000/day",
      img: "/assets/cars/sports-car.jpeg",
      tag: "Automatic • 2 Seater",
      vehicleType: "Sports",
      transmission: "Automatic",
      seats: 2,
    },
    {
      name: "Compact Hatchback",
      desc: "Ideal for city driving and easy parking",
      price: 1500,
      priceText: "₹1,500/day",
      img: "/assets/cars/compact-hatchback.jpeg",
      tag: "Manual • 4 Seater",
      vehicleType: "Hatchback",
      transmission: "Manual",
      seats: 4,
    },
    {
      name: "Executive SUV",
      desc: "Comfortable and spacious for family road trips",
      price: 3500,
      priceText: "₹3,500/day",
      img: "/assets/cars/executive-suv.webp",
      tag: "Automatic • 7 Seater",
      vehicleType: "SUV",
      transmission: "Automatic",
      seats: 7,
    },
    {
      name: "Convertible Coupe",
      desc: "Feel the wind in style and performance",
      price: 4800,
      priceText: "₹4,800/day",
      img: "/assets/cars/convertible-coupe.jpg",
      tag: "Automatic • 2 Seater",
      vehicleType: "Sports",
      transmission: "Automatic",
      seats: 2,
    },
    {
      name: "Electric Hatch",
      desc: "Eco-friendly and efficient for daily use",
      price: 2200,
      priceText: "₹2,200/day",
      img: "/assets/cars/electric-hatch.webp",
      tag: "Automatic • 5 Seater",
      vehicleType: "Hatchback",
      transmission: "Automatic",
      seats: 5,
    },
    {
      name: "Off-Road Beast",
      desc: "Built for tough terrain and adventure",
      price: 4000,
      priceText: "₹4,000/day",
      img: "/assets/cars/offroad-beast.jpg",
      tag: "Manual • 5 Seater",
      vehicleType: "SUV",
      transmission: "Manual",
      seats: 5,
    },
    {
      name: "Classic Sedan",
      desc: "Smooth and reliable for everyday travel",
      price: 2000,
      priceText: "₹2,000/day",
      img: "/assets/cars/classic-sedan.jpeg",
      tag: "Manual • 5 Seater",
      vehicleType: "Sedan",
      transmission: "Manual",
      seats: 5,
    }
  ];

  // Filter cars based on selected filters
  const filteredCars = cars.filter((car) => {
    if (
      filters.vehicleTypes.length > 0 &&
      !filters.vehicleTypes.includes(car.vehicleType)
    ) {
      return false;
    }
    if (filters.transmission && filters.transmission !== car.transmission) {
      return false;
    }
    if (filters.seats && Number(filters.seats) !== car.seats) {
      return false;
    }
    if (car.price > filters.maxPrice) {
      return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-[#fafafa] py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Filter Sidebar */}
        <aside className="w-full lg:w-1/4 bg-white rounded-lg shadow p-6 lg:sticky lg:top-6 h-fit">
          <h2 className="text-2xl font-semibold mb-6">Filter Cars</h2>

          {/* Vehicle Type */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Vehicle Type</h3>
            {["Sedan", "SUV", "Sports"].map((type) => (
              <label key={type} className="flex items-center space-x-2 mb-1">
                <input
                  type="checkbox"
                  checked={filters.vehicleTypes.includes(type)}
                  onChange={() => toggleVehicleType(type)}
                  className="form-checkbox"
                />
                <span>{type}</span>
              </label>
            ))}
          </div>

          {/* Transmission */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Transmission</h3>
            {["Automatic", "Manual"].map((trans) => (
              <label key={trans} className="flex items-center space-x-2 mb-1">
                <input
                  type="radio"
                  name="transmission"
                  value={trans}
                  checked={filters.transmission === trans}
                  onChange={() =>
                    setFilters({ ...filters, transmission: trans })
                  }
                  className="form-radio"
                />
                <span>{trans}</span>
              </label>
            ))}
            <label className="flex items-center space-x-2 mt-1">
              <input
                type="radio"
                name="transmission"
                value=""
                checked={filters.transmission === ""}
                onChange={() => setFilters({ ...filters, transmission: "" })}
                className="form-radio"
              />
              <span>Any</span>
            </label>
          </div>

          {/* Seats */}
          <div className="mb-6">
            <label className="block font-semibold mb-2" htmlFor="seats">
              Seats
            </label>
            <select
              id="seats"
              value={filters.seats}
              onChange={(e) => setFilters({ ...filters, seats: e.target.value })}
              className="w-full border rounded px-3 py-2"
            >
              <option value="">Any</option>
              <option value="2">2</option>
              <option value="5">5</option>
              <option value="7">7</option>
            </select>
          </div>

          {/* Max Price */}
          <div className="mb-6">
            <label htmlFor="maxPrice" className="font-semibold mb-2 block">
              Max Price (₹)
            </label>
            <input
              id="maxPrice"
              type="range"
              min="1000"
              max="6000"
              step="100"
              value={filters.maxPrice}
              onChange={(e) =>
                setFilters({ ...filters, maxPrice: +e.target.value })
              }
              className="w-full"
            />
            <div className="text-right mt-1 font-semibold">₹{filters.maxPrice}</div>
          </div>

          {/* Clear Filters Button */}
          <button
            onClick={() =>
              setFilters({
                vehicleTypes: [],
                transmission: "",
                seats: "",
                maxPrice: 6000,
              })
            }
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded"
          >
            Clear Filters
          </button>
        </aside>

        {/* Cars Grid */}
        <section className="flex-1">
          <h1 className="text-5xl font-bold mb-12 text-center drop-shadow-md">
            Explore Our Cars
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredCars.length === 0 ? (
              <p className="text-center col-span-full text-gray-600">
                No cars match your filters.
              </p>
            ) : (
              filteredCars.map((car, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 overflow-hidden"
                >
                  <div className="relative w-full h-52">
                    <Image
                      src={car.img}
                      alt={car.name}
                      fill
                      className="object-cover rounded-t-xl"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority={index === 0}
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-2xl font-bold text-[#182219]">
                        {car.name}
                      </h3>
                      <span className="text-xl font-bold text-[#182219]">
                        {car.priceText}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{car.desc}</p>
                    <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium mb-4">
                      {car.tag}
                    </span>
                    <div className="flex gap-3 mt-4">
                      <button 
                        onClick={() => handleViewDetails(car)}
                        className="flex-1 bg-white border-2 border-[#182219] text-[#182219] py-2.5 rounded-lg text-sm font-semibold hover:bg-[#182219] hover:text-white transition-all duration-200"
                      >
                        View Details
                      </button>
                      <button 
                        onClick={() => handleRentNow(car)}
                        className="flex-1 bg-[#fce148] text-[#182219] py-2.5 rounded-lg text-sm font-semibold hover:bg-[#f9db0f] hover:shadow-md transition-all duration-200"
                      >
                        Rent Now
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
}