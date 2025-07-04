// components/homepage/FeaturedCars.js

import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";

const cars = [
  {
    name: "Luxury Sedan",
    desc: "Perfect for business trips and comfort",
    price: 2500,
    priceText: "₹2,500/day",
    image: "/assets/cars/luxury-sedan.jpg",
  },
  {
    name: "SUV Adventure",
    desc: "Great for family trips and adventures",
    price: 3200,
    priceText: "₹3,200/day",
    image: "/assets/cars/suv-adventure.png",
  },
  {
    name: "Convertible Coupe",
    desc: "Feel the wind in style and performance",
    price: 4800,
    priceText: "₹4,800/day",
    image: "/assets/cars/convertible-coupe.jpg",
  },
  {
    name: "Sports Car",
    desc: "For thrill seekers and speed lovers",
    price: 5000,
    priceText: "₹5,000/day",
    image: "/assets/cars/sports-car.jpeg",
  },
  {
    name: "Compact Hatchback",
    desc: "Ideal for city driving and easy parking",
    price: 1500,
    priceText: "₹1,500/day",
    image: "/assets/cars/compact-hatchback.jpeg",
  },
  {
    name: "Executive SUV",
    desc: "Comfortable and spacious for family road trips",
    price: 3500,
    priceText: "₹3,500/day",
    image: "/assets/cars/executive-suv.webp",
  },
];

const slugify = (str) =>
  str.toLowerCase().replace(/\s+/g, "-");

export default function FeaturedCars() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-[#182219] mb-4">
              {" "}
              Featured Cars{" "}
            </h2>
            <div className="flex items-center justify-between">
              <p className="flex-1 text-xl text-[#182219]">
                Discover our most sought-after vehicles
              </p>
              <Link href="/cars" passHref>
                <span className="inline-flex items-center text-[#182219] font-medium hover:underline cursor-pointer">
                  View All
                  <ArrowRight className="ml-2 w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cars.map((car) => {
            const id = slugify(car.name);
            return (
              <div
                key={id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition duration-200"
              >
                <div className="relative h-52 w-full rounded-t-xl overflow-hidden">
                  <Image
                    src={car.image}
                    alt={car.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {car.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    {car.desc}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[#182219] font-bold">
                      {car.priceText}
                    </span>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-medium">
                        4.8
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/cars/${id}`} passHref>
                      <button className="flex-1 px-4 py-2 text-sm font-medium border border-gray-300 rounded-lg hover:bg-gray-100 transition">
                        View Details
                      </button>
                    </Link>
                    <Link
                      href={`/cars/rent?car=${id}`}
                      passHref
                    >
                      <button className="flex-1 px-4 py-2 text-sm font-medium bg-black text-white rounded-lg hover:bg-gray-900 transition">
                        Rent Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
