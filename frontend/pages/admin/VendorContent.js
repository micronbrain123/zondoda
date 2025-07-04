import React, { useState } from 'react';
import { Search, Edit3, Trash2, Plus } from 'lucide-react';

export default function VendorContent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showEntries, setShowEntries] = useState(10);

  const vendors = [
    {
      id: 1,
      registeredAt: '17 Jun 2025',
      name: 'Vendor Ali',
      phone: '01981625638',
      email: 'venali@gmail.com',
      approveStatus: 'Approved'
    },
    {
      id: 2,
      registeredAt: '29 May 2025',
      name: 'Mr Vendor',
      phone: '+8801783465364',
      email: 'vendor@gmail.com',
      approveStatus: 'Approved'
    }
  ];

  const filteredVendors = vendors.filter(vendor =>
    vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vendor.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vendor.phone.includes(searchTerm)
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Vendors List</h2>
        <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-md flex items-center gap-2 text-sm font-medium transition">
          <Plus size={14} />
          Add Vendor
        </button>
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
              <th className="text-left py-3 px-4 font-semibold text-gray-700 uppercase text-xs tracking-wider">Registered At</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 uppercase text-xs tracking-wider">Name</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 uppercase text-xs tracking-wider">Phone</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 uppercase text-xs tracking-wider">Email</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 uppercase text-xs tracking-wider">Approve Status</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 uppercase text-xs tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredVendors.map((vendor, index) => (
              <tr key={vendor.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="py-3 px-4 text-gray-700 text-sm">{vendor.id}</td>
                <td className="py-3 px-4 text-gray-700 text-sm">{vendor.registeredAt}</td>
                <td className="py-3 px-4 text-gray-700 font-medium text-sm">{vendor.name}</td>
                <td className="py-3 px-4 text-gray-700 text-sm">{vendor.phone}</td>
                <td className="py-3 px-4 text-gray-700 text-sm">{vendor.email}</td>
                <td className="py-3 px-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {vendor.approveStatus}
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
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination and Show Entries */}
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
          Showing 1 to {filteredVendors.length} of {filteredVendors.length} entries
        </div>

        <div className="flex items-center gap-1">
          <button
            className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
          >
            Previous
          </button>
          <button className="px-3 py-1 rounded bg-green-600 text-white">
            1
          </button>
          <button
            className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
