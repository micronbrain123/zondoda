import Image from "next/image";

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#f9f9f9] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 text-[#182219] drop-shadow-sm">
          Latest Blog Posts
        </h1>
        <p className="max-w-3xl mx-auto text-center text-gray-600 text-lg mb-8">
          Welcome to our Zondoda Insights hub — your go-to destination for expert tips, travel guides, car maintenance advice, and the latest industry trends. Whether you're planning a weekend road trip or exploring long-term rental options, our blog has something for every traveler.
        </p>

        {/* Featured Blog Post */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
          <div className="relative w-full h-72">
            <Image
              src="/assets/blog/img9.jpg" 
              alt="Why Renting Is the Future of Driving"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8">
            <h2 className="text-3xl font-bold text-[#182219] mb-2">
              Why Renting Is the Future of Driving
            </h2>
            <p className="text-gray-600 mb-4">
              In today's fast-paced world, car ownership is no longer the only — or even the smartest — way to stay mobile. With rising fuel prices, insurance premiums, and maintenance costs, owning a car can quickly become more of a burden than a benefit. That’s where car rentals and subscriptions come in. These flexible alternatives allow drivers to access a wide range of vehicles — from luxury sedans to rugged SUVs — without the long-term commitment of ownership.
              <br /><br />
              Monthly rental plans, short-term leases, and even on-demand driver services are making it easier than ever to drive the perfect car for every occasion. Whether you need a car for a weekend getaway or a month-long business assignment, modern rental platforms give you the freedom to choose, swap, and upgrade your ride based on your needs. As cities become smarter and people more mobility-conscious, renting is quickly emerging as the future of urban transportation.
            </p>
            <button className="bg-[#fce148] text-[#182219] px-6 py-2 rounded-md hover:bg-[#e6c600] hover:text-white transition">
              Read Full Story
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Blog Post 1 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src="/assets/blog/img1.jpeg"
                alt="Best Cars for Long Trips"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#182219] mb-2">Best Cars for Long Trips</h3>
              <p className="text-gray-600 mb-4">
                Discover the most comfortable and reliable cars for your next adventure...
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Dec 15, 2024</span>
                <button className="bg-[#fce148] text-[#182219] px-4 py-2 rounded-md hover:bg-[#e6c600] hover:text-white transition">
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src="/assets/blog/img2.png"
                alt="Car Maintenance Tips"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#182219] mb-2">Car Maintenance Tips</h3>
              <p className="text-gray-600 mb-4">
                Keep your rental car in perfect condition with these simple tips...
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Dec 10, 2024</span>
                <button className="bg-[#fce148] text-[#182219] px-4 py-2 rounded-md hover:bg-[#e6c600] hover:text-white transition">
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src="/assets/blog/img3.jpeg"
                alt="Travel Destinations in UK"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#182219] mb-2">Travel Destinations in UK</h3>
              <p className="text-gray-600 mb-4">
                Explore the beautiful places you can visit with our rental cars...
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Dec 5, 2024</span>
                <button className="bg-[#fce148] text-[#182219] px-4 py-2 rounded-md hover:bg-[#e6c600] hover:text-white transition">
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* Blog Post 4 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src="/assets/blog/img4.jpg"
                alt="Weekend Getaways Near Kolkata"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#182219] mb-2">Weekend Getaways Near Kolkata</h3>
              <p className="text-gray-600 mb-4">
                Unwind with scenic drives to peaceful destinations just hours from the city.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Jan 12, 2025</span>
                <button className="bg-[#fce148] text-[#182219] px-4 py-2 rounded-md hover:bg-[#e6c600] hover:text-white transition">
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* Blog Post 5 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src="/assets/blog/img5.webp"
                alt="Monthly Subscriptions vs Daily Rentals"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#182219] mb-2">Monthly Subscriptions vs Daily Rentals</h3>
              <p className="text-gray-600 mb-4">
                Short-term or long-term rental? Learn which is better for your budget and needs.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Dec 28, 2024</span>
                <button className="bg-[#fce148] text-[#182219] px-4 py-2 rounded-md hover:bg-[#e6c600] hover:text-white transition">
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* Blog Post 6 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src="/assets/blog/img6.webp"
                alt="How to Choose the Right Rental Car"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#182219] mb-2">How to Choose the Right Rental Car</h3>
              <p className="text-gray-600 mb-4">
                SUV or Sedan? Fuel type? Seating? Here's how to pick the right car every time.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Jan 5, 2025</span>
                <button className="bg-[#fce148] text-[#182219] px-4 py-2 rounded-md hover:bg-[#e6c600] hover:text-white transition">
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* Blog Post 7 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src="/assets/blog/img7.webp"
                alt="What to Check Before You Rent a Car"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#182219] mb-2">What to Check Before You Rent a Car</h3>
              <p className="text-gray-600 mb-4">
                Don’t skip this checklist before accepting your rental – avoid surprises later.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Nov 20, 2024</span>
                <button className="bg-[#fce148] text-[#182219] px-4 py-2 rounded-md hover:bg-[#e6c600] hover:text-white transition">
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* Blog Post 8 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src="/assets/blog/img8.jpg"
                alt="Top Road Trip Routes in India"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#182219] mb-2">Top Road Trip Routes in India</h3>
              <p className="text-gray-600 mb-4">
                Love long drives? Here are some stunning highways to explore by rental car.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Dec 1, 2024</span>
                <button className="bg-[#fce148] text-[#182219] px-4 py-2 rounded-md hover:bg-[#e6c600] hover:text-white transition">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
