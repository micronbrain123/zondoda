import React, { useState } from 'react';
import { Search, Edit3, Trash2, Plus } from 'lucide-react';

export default function SubscriptionPlanContent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showEntries, setShowEntries] = useState(10);
  const [showNoData, setShowNoData] = useState(false);

  const plans = [
    {
      id: 1,
      name: 'Basic',
      price: '$10',
      days: 30,
      features: 'Limited Support, Basic Analytics',
      carLimit: 2,
      status: 'Active',
    },
    {
      id: 2,
      name: 'Premium',
      price: '$25',
      days: 60,
      features: 'Priority Support, Advanced Analytics',
      carLimit: 10,
      status: 'Inactive',
    },
  ];

  const filteredPlans = plans.filter(plan =>
    plan.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayPlans = showNoData ? [] : filteredPlans;

  const NoDataState = () => (
    <tr>
      <td colSpan="8" className="py-16 text-center">
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
        <h2 className="text-2xl font-bold text-gray-800">Subscription Plans</h2>
        <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-md flex items-center gap-2 text-sm font-medium transition">
          <Plus size={14} />
          Add Plan
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
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-700 uppercase tracking-wider">Name</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-700 uppercase tracking-wider">Price</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-700 uppercase tracking-wider">Days</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-700 uppercase tracking-wider">Features</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-700 uppercase tracking-wider">Car Limit</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-700 uppercase tracking-wider">Status</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-700 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody>
            {displayPlans.length === 0 ? (
              <NoDataState />
            ) : (
              displayPlans.map((plan, index) => (
                <tr key={plan.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 text-sm text-gray-700">{index + 1}</td>
                  <td className="py-3 px-4 text-sm text-gray-700 font-medium">{plan.name}</td>
                  <td className="py-3 px-4 text-sm text-gray-700">{plan.price}</td>
                  <td className="py-3 px-4 text-sm text-gray-700">{plan.days}</td>
                  <td className="py-3 px-4 text-sm text-gray-700">{plan.features}</td>
                  <td className="py-3 px-4 text-sm text-gray-700">{plan.carLimit}</td>
                  <td className="py-3 px-4 text-sm">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${plan.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {plan.status}
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
          {displayPlans.length === 0
            ? 'Showing 0 to 0 of 0 entries'
            : `Showing 1 to ${displayPlans.length} of ${displayPlans.length} entries`}
        </div>
        <div className="flex items-center gap-1">
          <button
            className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 transition-colors disabled:opacity-50"
            disabled={displayPlans.length === 0}
          >
            Previous
          </button>
          <button
            className={`px-3 py-1 rounded ${
              displayPlans.length === 0 ? 'bg-gray-300 text-gray-500' : 'bg-green-600 text-white'
            }`}
          >
            1
          </button>
          <button
            className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 transition-colors disabled:opacity-50"
            disabled={displayPlans.length === 0}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
