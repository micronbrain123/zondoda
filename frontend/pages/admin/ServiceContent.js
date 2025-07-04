import React, { useState } from 'react';
import { Search, Edit3, Trash2, Plus, ImageIcon, Cog } from 'lucide-react';

export default function ServiceContent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showEntries, setShowEntries] = useState(10);
  const [showNoData, setShowNoData] = useState(false);

  const services = [
    {
      id: 1,
      name: 'Car Wash',
      description: 'Complete exterior and interior cleaning',
      icon: <Cog size={18} />
    },
    {
      id: 2,
      name: 'Engine Check',
      description: 'Full engine diagnostics and inspection',
      icon: <Cog size={18} />
    }
  ];

  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayServices = showNoData ? [] : filteredServices;

  const NoDataState = () => (
    <tr>
      <td colSpan="6" className="py-16 text-center">
        <p className="text-lg font-medium text-gray-500">No Data</p>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Service List</h2>
        <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-md flex items-center gap-2 text-sm font-medium transition">
          <Plus size={14} />
          Add Service
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative max-w-md w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse rounded-lg overflow-hidden">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-700 uppercase tracking-wider">#</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-700 uppercase tracking-wider">Icon</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-700 uppercase tracking-wider">Image</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-700 uppercase tracking-wider">Name</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-700 uppercase tracking-wider">Description</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-700 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody>
            {displayServices.length === 0 ? (
              <NoDataState />
            ) : (
              displayServices.map((service, index) => (
                <tr key={service.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 text-sm text-gray-700">{index + 1}</td>
                  <td className="py-3 px-4 text-sm text-gray-700">{service.icon}</td>
                  <td className="py-3 px-4">
                    <div className="w-10 h-10 rounded bg-gray-300 flex items-center justify-center">
                      <ImageIcon size={20} className="text-gray-500" />
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm font-medium text-gray-800">{service.name}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{service.description}</td>
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

        <div>
          {displayServices.length === 0
            ? 'Showing 0 to 0 of 0 entries'
            : `Showing 1 to ${displayServices.length} of ${displayServices.length} entries`}
        </div>

        <div className="flex items-center gap-1">
          <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50" disabled={displayServices.length === 0}>
            Previous
          </button>
          <button className={`px-3 py-1 rounded ${displayServices.length === 0 ? 'bg-gray-300 text-gray-500' : 'bg-green-600 text-white'}`}>
            1
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50" disabled={displayServices.length === 0}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
