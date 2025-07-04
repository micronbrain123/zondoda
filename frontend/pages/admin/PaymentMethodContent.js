import React, { useState } from 'react';
import { Search, Edit3, Trash2, Plus, CreditCard } from 'lucide-react';

export default function PaymentMethodContent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showEntries, setShowEntries] = useState(10);
  const [showNoData, setShowNoData] = useState(false);

  const paymentMethods = [
    { id: 1, name: 'Stripe', type: 'Online', image: null },
    { id: 2, name: 'PayPal', type: 'Online', image: null },
    { id: 3, name: 'Cash', type: 'Offline', image: null }
  ];

  const filtered = paymentMethods.filter(pm =>
    pm.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pm.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayList = showNoData ? [] : filtered;

  const NoDataState = () => (
    <tr>
      <td colSpan="5" className="py-16 text-center">
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
        <h2 className="text-2xl font-bold text-gray-800">Payment Methods</h2>
        <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-md flex items-center gap-2 text-sm font-medium transition">
          <Plus size={14} />
          Add Payment Method
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
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-700 uppercase tracking-wider">#</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-700 uppercase tracking-wider">Image</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-700 uppercase tracking-wider">Name</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-700 uppercase tracking-wider">Type</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-700 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody>
            {displayList.length === 0 ? (
              <NoDataState />
            ) : (
              displayList.map((method, index) => (
                <tr key={method.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 text-sm text-gray-700">{index + 1}</td>
                  <td className="py-3 px-4">
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                      <CreditCard size={20} className="text-gray-500" />
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700 font-medium">{method.name}</td>
                  <td className="py-3 px-4 text-sm text-gray-700">{method.type}</td>
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
          {displayList.length === 0
            ? 'Showing 0 to 0 of 0 entries'
            : `Showing 1 to ${displayList.length} of ${displayList.length} entries`}
        </div>

        <div className="flex items-center gap-1">
          <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50" disabled={displayList.length === 0}>
            Previous
          </button>
          <button className={`px-3 py-1 rounded ${displayList.length === 0 ? 'bg-gray-300 text-gray-500' : 'bg-green-600 text-white'}`}>
            1
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50" disabled={displayList.length === 0}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
