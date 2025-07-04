import React, { useState } from 'react';
import { Search, Edit3, Trash2 } from 'lucide-react';

export default function BookingsContent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showEntries, setShowEntries] = useState(10);
  const [statusFilter, setStatusFilter] = useState('All');
  const [showNoData, setShowNoData] = useState(false);

  const bookings = [
    {
      id: 1,
      date: '2025-07-01',
      name: 'Alice Johnson',
      owner: 'Car Rentals Inc.',
      carName: 'Toyota Corolla',
      amount: '$100',
      paymentMethod: 'Credit Card',
      status: 'Confirmed',
    },
    {
      id: 2,
      date: '2025-07-02',
      name: 'Bob Smith',
      owner: 'DriveNow',
      carName: 'Honda Civic',
      amount: '$120',
      paymentMethod: 'PayPal',
      status: 'Pending',
    },
    // More bookings...
  ];

  const filteredBookings = bookings.filter((booking) => {
    const matchesStatus =
      statusFilter === 'All' || booking.status === statusFilter;
    const matchesSearch =
      booking.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.carName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.owner.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.paymentMethod.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const displayBookings = showNoData ? [] : filteredBookings;

  const NoDataState = () => (
    <tr>
      <td colSpan="9" className="py-16 text-center">
        <div className="flex flex-col items-center justify-center text-gray-400">
          <p className="text-lg font-medium text-gray-500">No Data</p>
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Bookings List</h2>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Cancelled">Cancelled</option>
          <option value="Completed">Completed</option>
        </select>
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
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse rounded-lg overflow-hidden">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 uppercase text-xs tracking-wider">#</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 uppercase text-xs tracking-wider">Date</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 uppercase text-xs tracking-wider">Name</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 uppercase text-xs tracking-wider">Owner</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 uppercase text-xs tracking-wider">Car Name</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 uppercase text-xs tracking-wider">Amount</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 uppercase text-xs tracking-wider">Payment Method</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 uppercase text-xs tracking-wider">Booking Status</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 uppercase text-xs tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody>
            {displayBookings.length === 0 ? (
              <NoDataState />
            ) : (
              displayBookings.map((booking, index) => (
                <tr key={booking.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 text-sm text-gray-700">{index + 1}</td>
                  <td className="py-3 px-4 text-sm text-gray-700">{booking.date}</td>
                  <td className="py-3 px-4 text-sm text-gray-700">{booking.name}</td>
                  <td className="py-3 px-4 text-sm text-gray-700">{booking.owner}</td>
                  <td className="py-3 px-4 text-sm text-gray-700">{booking.carName}</td>
                  <td className="py-3 px-4 text-sm text-gray-700">{booking.amount}</td>
                  <td className="py-3 px-4 text-sm text-gray-700">{booking.paymentMethod}</td>
                  <td className="py-3 px-4 text-sm">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        booking.status === 'Pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : booking.status === 'Confirmed'
                          ? 'bg-blue-100 text-blue-800'
                          : booking.status === 'Cancelled'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-green-100 text-green-800'
                      }`}
                    >
                      {booking.status}
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

      {/* Pagination */}
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
        <div className="text-gray-600">
          {displayBookings.length === 0
            ? 'Showing 0 to 0 of 0 entries'
            : `Showing 1 to ${displayBookings.length} of ${displayBookings.length} entries`}
        </div>
        <div className="flex items-center gap-1">
          <button
            className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 transition-colors disabled:opacity-50"
            disabled={displayBookings.length === 0}
          >
            Previous
          </button>
          <button
            className={`px-3 py-1 rounded ${
              displayBookings.length === 0
                ? 'bg-gray-300 text-gray-500'
                : 'bg-green-600 text-white'
            }`}
          >
            1
          </button>
          <button
            className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 transition-colors disabled:opacity-50"
            disabled={displayBookings.length === 0}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
