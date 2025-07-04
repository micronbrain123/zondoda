import Image from 'next/image';
import Link from 'next/link'; 

export default function PopularVehicles() {
  const popularCars = [
    {
      id: 1,
      name: "Toyota Camry",
      type: "Sedan",
      price: "₹2,200/day",
      rating: 4.8,
    //   features: ["AC", "Bluetooth", "GPS"],
      image: "/assets/cars/toyota-camry.jpg",
      popular: true
    },
    {
      id: 2,
      name: "Mahindra Scorpio",
      type: "SUV",
      price: "₹3,500/day",
      rating: 4.6,
    //   features: ["4WD", "7 Seater", "AC"],
      image: "/assets/cars/mahindra-scorpio.jpg",
      popular: true
    },
    {
      id: 3,
      name: "Honda City",
      type: "Sedan",
      price: "₹1,800/day",
      rating: 4.7,
    //   features: ["Fuel Efficient", "AC", "Music System"],
      image: "/assets/cars/honda-city.webp",
      popular: false
    },
    {
      id: 4,
      name: "Hyundai Creta",
      type: "Compact SUV",
      price: "₹2,800/day",
      rating: 4.9,
    //   features: ["Sunroof", "AC", "Smart Features"],
      image: "/assets/cars/hyundai-creta.jpg",
      popular: true
    },
    {
    id: 5,
    name: "Maruti Swift",
    type: "Hatchback",
    price: "₹1,500/day",
    rating: 4.5,
    // features: ["Fuel Efficient", "Compact", "AC"],
    image: "/assets/cars/maruti-swift.webp",
    popular: true
  },
  {
    id: 6,
    name: "Tata Nexon",
    type: "Compact SUV",
    price: "₹2,400/day",
    rating: 4.6,
    // features: ["Electric Available", "Safety Features", "AC"],
    image: "/assets/cars/tata-nexon.webp",
    popular: false
  }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12">
            <h2 className="text-4xl font-bold text-[#182219] mb-4">
                Featured Vehicles
            </h2>
            <div className="flex items-center justify-between">
                <p className="text-xl text-[#182219]">
                    Discover our most sought-after vehicles
                </p>
                <Link href="/cars">
                  <button className="ml-4 px-4 py-2 bg-[#182219] text-white rounded hover:bg-[#0f150e] transition">
                    View All Vehicles →
                  </button>
                </Link>
            </div>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularCars.map((car) => (
            <div key={car.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
              
              {/* Popular Badge */}
              {/* {car.popular && (
                <div className="absolute top-4 right-4 bg-[#fce148] text-[#182219] px-3 py-1 rounded-full text-xs font-bold z-10">
                  POPULAR
                </div>
              )} */}

              {/* Car Image */}
              <div className="h-48 relative">
                <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
               </div>

              {/* Car Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-[#182219]">{car.name}</h3>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{car.type}</span>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  <span className="text-[#fce148]">⭐</span>
                  <span className="text-sm font-medium text-gray-700 ml-1">{car.rating}</span>
                </div>

                {/* Features */}
                {/* <div className="flex flex-wrap gap-1 mb-4">
                  {car.features.map((feature, index) => (
                    <span key={index} className="text-xs bg-[#91ab3e] text-white px-2 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div> */}

                {/* Price & Button */}
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-[#182219]">{car.price}</span>
                  <button className="bg-[#182219] hover:bg-[#2a3428] text-white px-2 py-1 rounded-lg transition-colors font-medium">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {/* <div className="text-center mt-12">
          <button className="bg-[#182219] hover:bg-[#65301c] text-[#fce148] px-8 py-3 rounded-lg font-semibold transition-colors text-lg">
            View All Vehicles →
          </button>
        </div> */}
      </div>
    </section>
  );
}