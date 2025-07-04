import { useState } from "react";

export default function Bookings() {
  const [search, setSearch] = useState("");

  const bookings = [
    {
      date: "2025-06-28",
      image: "/assets/cars/car1.jpg",
      title: "Toyota Corolla 2022",
      paymentMethod: "Credit Card",
      status: "Paid",
    },
    {
      date: "2025-06-25",
      image: "/assets/cars/car2.jpg",
      title: "Honda Civic 2023",
      paymentMethod: "PayPal",
      status: "Pending",
    },
  ];

  return (
    <div className="bg-[#1a231a] rounded-lg p-6 text-white">
      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search bookings..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-[#344434] px-4 py-2 rounded border border-gray-600 w-1/3 focus:outline-none focus:ring focus:border-green-600"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-gray-700">
              <th className="py-2">Date</th>
              <th className="py-2">Car Image</th>
              <th className="py-2">Title</th>
              <th className="py-2">Payment Method</th>
              <th className="py-2">Payment Status</th>
              <th className="py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b, i) => (
              <tr key={i} className="border-b border-gray-800 hover:bg-gray-800">
                <td className="py-3">{b.date}</td>
                <td className="py-3">
                  <img src={b.image} alt="Car" className="w-16 h-10 object-cover rounded" />
                </td>
                <td className="py-3">{b.title}</td>
                <td className="py-3">{b.paymentMethod}</td>
                <td className="py-3">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    b.status === "Paid" ? "bg-green-600" : "bg-yellow-600"
                  }`}>
                    {b.status}
                  </span>
                </td>
                <td className="py-3">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6 text-sm text-gray-300">
        <span>Showing 1 to {bookings.length} of 10 entries</span>
        <div className="space-x-2">
          <button className="px-3 py-1 bg-[#344434] rounded hover:bg-gray-500">Previous</button>
          <button className="px-3 py-1 bg-[#344434] rounded hover:bg-gray-500">Next</button>
        </div>
      </div>
    </div>
  );
}
