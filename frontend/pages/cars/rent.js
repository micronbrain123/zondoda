import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

// You can later import this from a shared file
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
  },
];

export default function RentPage() {
  const router = useRouter();
  const { car: carSlug } = router.query;

  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    if (carSlug) {
      const foundCar = cars.find(
        (c) =>
          c.name.toLowerCase().replace(/\s+/g, "-") ===
          carSlug.toLowerCase()
      );
      setSelectedCar(foundCar);
    }
  }, [carSlug]);

  if (!selectedCar) return <p className="p-8">Loading car details...</p>;

  return (
    <>
      <div className="pt-4 pl-4">
        <Link href="/cars" passHref>
          <button className="text-gray-600 hover:text-gray-800 text-sm font-medium">
            ← Back to Cars
          </button>
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6">Book Your Ride</h1>

        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col lg:flex-row gap-8">
          {/* Left: Image + Car Info */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full h-64 mb-4">
              <Image
                src={selectedCar.img}
                alt={selectedCar.name}
                fill
                className="object-cover rounded-md"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold">{selectedCar.name}</h2>
              <p className="text-gray-600 mt-2">{selectedCar.desc}</p>
              <p className="text-lg font-semibold mt-4">{selectedCar.priceText}</p>
              <p className="text-sm text-gray-500 mt-1">{selectedCar.tag}</p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-4 border-b pb-2">Rental Information</h3>

            <form className="flex flex-col gap-4">
              {/* Pickup Location */}
              <div>
                <label className="block font-medium mb-1">Pickup Location</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter location manually"
                    className="flex-1 border rounded px-4 py-2"
                  />
                  <button
                    type="button"
                    className="bg-gray-200 hover:bg-gray-300 text-sm px-4 py-2 rounded"
                    onClick={() => alert("Map picker coming soon...")}
                  >
                    Select on Map
                  </button>
                </div>
              </div>

              {/* Drop-off Location */}
              <div>
                <label className="block font-medium mb-1">Drop-off Location</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter location manually"
                    className="flex-1 border rounded px-4 py-2"
                  />
                  <button
                    type="button"
                    className="bg-gray-200 hover:bg-gray-300 text-sm px-4 py-2 rounded"
                    onClick={() => alert("Map picker coming soon...")}
                  >
                    Select on Map
                  </button>
                </div>
              </div>

              {/* Pickup Date */}
              <div>
                <label className="block font-medium mb-1">Pickup Date</label>
                <input
                  type="date"
                  className="border rounded px-4 py-2 w-full"
                />
              </div>

              {/* Return Date */}
              <div>
                <label className="block font-medium mb-1">Return Date</label>
                <input
                  type="date"
                  className="border rounded px-4 py-2 w-full"
                />
              </div>

              {/* Confirm Button */}
              <button
                type="submit"
                className="bg-[#fce148] text-[#182219] py-2.5 rounded-lg font-semibold hover:bg-[#f9db0f]"
              >
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

