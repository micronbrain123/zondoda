import React, { useState } from 'react';
import { Search, Edit3, Trash2, Plus, ImageIcon } from 'lucide-react';

export default function CompanyContent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showEntries, setShowEntries] = useState(10);
  const [showNoData, setShowNoData] = useState(false);

  const companies = [
    { id: 1, name: 'ZoomCar', image: null },
    { id: 2, name: 'Drivezy', image: null },
    { id: 3, name: 'Ola Cars', image: null }
  ];

  const filteredCompanies = companies.filter(company =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayCompanies = showNoData ? [] : filteredCompanies;

  const NoDataState = () => (
    <tr>
      <td colSpan="4" className="py-16 text-center">
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
        <h2 className="text-2xl font-bold text-gray-800">Companies List</h2>
        <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-md flex items-center gap-2 text-sm font-medium transition">
          <Plus size={14} />
          Add Company
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
              <th className="text-left py-3 px-4 font-semibold text-gray-700 uppercase text-xs tracking-wider">Name</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 uppercase text-xs tracking-wider">Image</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 uppercase text-xs tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody>
            {displayCompanies.length === 0 ? (
              <NoDataState />
            ) : (
              displayCompanies.map((company, index) => (
                <tr key={company.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 text-sm text-gray-700">{index + 1}</td>
                  <td className="py-3 px-4 text-sm font-medium text-gray-700">{company.name}</td>
                  <td className="py-3 px-4">
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                      <ImageIcon size={20} className="text-gray-500" />
                    </div>
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
        <div>
          {displayCompanies.length === 0
            ? 'Showing 0 to 0 of 0 entries'
            : `Showing 1 to ${displayCompanies.length} of ${displayCompanies.length} entries`}
        </div>
        <div className="flex items-center gap-1">
          <button
            className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 transition-colors disabled:opacity-50"
            disabled={displayCompanies.length === 0}
          >
            Previous
          </button>
          <button
            className={`px-3 py-1 rounded ${
              displayCompanies.length === 0
                ? 'bg-gray-300 text-gray-500'
                : 'bg-green-600 text-white'
            }`}
          >
            1
          </button>
          <button
            className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 transition-colors disabled:opacity-50"
            disabled={displayCompanies.length === 0}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
