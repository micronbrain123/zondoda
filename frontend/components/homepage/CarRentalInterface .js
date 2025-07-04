import React, { useState, useEffect } from "react";
import GoogleMapComponent from "../GoogleMapComponent";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  Search,
  ChevronDown,
  X,
  Target,
} from "lucide-react";

const CarRentalInterface = () => {
  const [pickupDate, setPickupDate] =
    useState("2024-10-01");
  const [returnDate, setReturnDate] =
    useState("2024-10-07");
  const [showLocationModal, setShowLocationModal] =
    useState(false);
  const [activeLocationField, setActiveLocationField] =
    useState("");
  const [pickupLocation, setPickupLocation] =
    useState("New York, USA");
  const [dropoffLocation, setDropoffLocation] =
    useState("Delaware, USA");
  const [selectedLocation, setSelectedLocation] =
    useState("");
  const [mapCenter, setMapCenter] = useState({
    lat: 40.7128,
    lng: -74.006,
  });
  const [userLocation, setUserLocation] = useState(null);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const days = [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
    ];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${days[date.getDay()]}, ${
      months[date.getMonth()]
    } ${String(date.getDate()).padStart(
      2,
      "0"
    )} ${date.getFullYear()}`;
  };

  const openLocationPicker = (field) => {
    setActiveLocationField(field);
    setShowLocationModal(true);
    // Initialize with current location value
    setSelectedLocation(
      field === "pickup" ? pickupLocation : dropoffLocation
    );
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setMapCenter({ lat: latitude, lng: longitude }); // <-- This updates the map center
          setUserLocation({
            lat: latitude,
            lng: longitude,
          });
          setSelectedLocation("Current Location, USA");
        },
        (error) => {
          alert(
            "Unable to get your location. Please select manually."
          );
        }
      );
    } else {
      alert(
        "Geolocation is not supported by this browser."
      );
    }
  };

  const handleLocationConfirm = () => {
    if (selectedLocation) {
      if (activeLocationField === "pickup") {
        setPickupLocation(selectedLocation);
      } else {
        setDropoffLocation(selectedLocation);
      }
      setShowLocationModal(false);
      setSelectedLocation("");
    }
  };

  const handleLocationCancel = () => {
    setShowLocationModal(false);
    setSelectedLocation("");
  };

  const predefinedLocations = [
    "New York, USA",
    "Delaware, USA",
    "Los Angeles, CA",
    "Chicago, IL",
    "Miami, FL",
    "Boston, MA",
    "San Francisco, CA",
    "Seattle, WA",
  ];

  const handleMapClick = ({ lat, lng }) => {
  setMapCenter({ lat, lng });
  setSelectedLocation(`Lat: ${lat.toFixed(4)}, Lng: ${lng.toFixed(4)}`); // simple fallback text

  // OPTIONAL: If you want to reverse geocode this lat/lng to a human-readable address,
  // you’d call Google Maps Geocoding API here and update selectedLocation with the address.
};

  return (
    <div className="">
      <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-xl mt-20 max-w-6xl mx-auto shadow-xl overflow-hidden">
        {/* Car Type Buttons Row */}
        <div className="px-6 pt-6 pb-4">
          <div className="flex gap-2">
            <button className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
              All cars
            </button>
            <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-50">
              New cars
            </button>
            <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-50">
              Used cars
            </button>
          </div>
        </div>

        {/* Main Form Table */}
        <div className="px-6 pb-6">
          <table className="w-full">
            <tbody>
              <tr>
                {/* Pick Up Location */}
                <td className="w-1/5 pr-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-2">
                      Pick Up Location
                    </label>
                    <div className="relative">
                      <div
                        className="flex items-center justify-between w-full px-3 py-2 border border-gray-200 bg-white cursor-pointer hover:bg-gray-50 rounded-lg"
                        onClick={() =>
                          openLocationPicker("pickup")
                        }
                      >
                        <div className="flex items-center gap-2">
                          <MapPin
                            size={16}
                            className="text-gray-400 cursor-pointer hover:text-green-500"
                          />
                          <span className="text-sm text-gray-800">
                            {pickupLocation}
                          </span>
                        </div>
                        <ChevronDown
                          size={16}
                          className="text-gray-400"
                        />
                      </div>
                    </div>
                  </div>
                </td>

                {/* Drop Off Location */}
                <td className="w-1/5 pr-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-2">
                      Drop Off Location
                    </label>
                    <div className="relative">
                      <div
                        className="flex items-center justify-between w-full px-3 py-2 border border-gray-200 bg-white cursor-pointer hover:bg-gray-50 rounded-lg"
                        onClick={() =>
                          openLocationPicker("dropoff")
                        }
                      >
                        <div className="flex items-center gap-2">
                          <MapPin
                            size={16}
                            className="text-gray-400 cursor-pointer hover:text-green-500"
                          />
                          <span className="text-sm text-gray-800">
                            {dropoffLocation}
                          </span>
                        </div>
                        <ChevronDown
                          size={16}
                          className="text-gray-400"
                        />
                      </div>
                    </div>
                  </div>
                </td>

                {/* Pick Up Date & Time */}
                <td className="w-1/5 pr-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-2">
                      Pick Up Date & Time
                    </label>
                    <div className="relative">
                      <div className="flex items-center gap-2 w-full px-3 py-2 border border-gray-200 bg-white rounded-lg">
                        <Calendar
                          size={16}
                          className="text-gray-400"
                        />
                        <input
                          type="date"
                          value={pickupDate}
                          onChange={(e) =>
                            setPickupDate(e.target.value)
                          }
                          className="text-sm text-gray-800 bg-transparent border-0 outline-none cursor-pointer flex-1"
                        />
                      </div>
                    </div>
                  </div>
                </td>

                {/* Return Date & Time */}
                <td className="w-1/5 pr-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-2">
                      Return Date & Time
                    </label>
                    <div className="relative">
                      <div className="flex items-center gap-2 w-full px-3 py-2 border border-gray-200 bg-white rounded-lg">
                        <Calendar
                          size={16}
                          className="text-gray-400"
                        />
                        <input
                          type="date"
                          value={returnDate}
                          onChange={(e) =>
                            setReturnDate(e.target.value)
                          }
                          className="text-sm text-gray-800 bg-transparent border-0 outline-none cursor-pointer flex-1"
                        />
                      </div>
                    </div>
                  </div>
                </td>

                {/* Find a Vehicle Button */}
                <td className="w-1/5">
                  <div className="flex justify-end">
                    <Link href="/cars">
                      <button className="bg-green-500 hover:bg-green-600 text-white font-semibold mt-6 px-6 py-2 rounded-lg text-sm flex items-center gap-2 transition-colors">
                        <Search size={16} />
                        Find a Vehicle
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Need help? link */}
        <div className="absolute top-4 right-6">
          <button className="flex items-center gap-1 text-gray-600 hover:text-gray-800 text-sm">
            <span>👤</span>
            <span>Need help?</span>
          </button>
        </div>
      </div>

      {/* Location Selection Modal */}
      {showLocationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-hidden pb-4">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold">
                Select{" "}
                {activeLocationField === "pickup"
                  ? "Pickup"
                  : "Drop-off"}{" "}
                Location
              </h3>
              <button
                onClick={handleLocationCancel}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <X size={20} />
              </button>
            </div>

            <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
              {/* Current Location Button */}
              <div className="p-4 border-b">
                <button
                  onClick={getCurrentLocation}
                  className={`flex items-center gap-3 w-full p-3 rounded-lg transition-colors ${
                    selectedLocation ===
                    "Current Location, USA"
                      ? "bg-green-100 border border-green-300"
                      : "bg-blue-50 hover:bg-blue-100"
                  }`}
                >
                  <Target
                    size={20}
                    className="text-blue-600"
                  />
                  <div className="text-left">
                    <div className="font-medium text-blue-600">
                      Use Current Location
                    </div>
                    <div className="text-sm text-gray-600">
                      Allow location access to auto-detect
                    </div>
                  </div>
                </button>
              </div>

              {/* Current Location Selected Indicator */}
              {selectedLocation && (
                <div className="p-4 bg-green-50 border-b border-green-200">
                  <div className="flex items-center gap-2">
                    <MapPin
                      size={16}
                      className="text-green-600"
                    />
                    <span className="text-sm font-medium text-green-700">
                      Selected: {selectedLocation}
                    </span>
                  </div>
                </div>
              )}

              {/* Map Area (Simulated) */}
              <div className="h-64 border-b">
                <GoogleMapComponent center={mapCenter} onMapClick={handleMapClick} />
              </div>

              {/* Search and Popular Locations */}
              <div className="p-4">
                <input
                  type="text"
                  placeholder="Search for a location..."
                  value={selectedLocation}
                  onChange={(e) =>
                    setSelectedLocation(e.target.value)
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">
                    Popular Locations
                  </h4>
                  <div className="space-y-1">
                    {predefinedLocations.map(
                      (location, index) => (
                        <button
                          key={index}
                          onClick={() =>
                            setSelectedLocation(location)
                          }
                          className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                            selectedLocation === location
                              ? "bg-green-100 text-green-700 border border-green-300"
                              : "hover:bg-gray-100"
                          }`}
                        >
                          <MapPin
                            size={14}
                            className="inline mr-2 text-gray-400"
                          />
                          {location}
                        </button>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons - Fixed at bottom */}
            <div className="p-4 border-t bg-white">
              <div className="flex gap-3">
                <button
                  onClick={handleLocationCancel}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleLocationConfirm}
                  className={`flex-1 px-4 py-2 rounded-lg ${
                    selectedLocation
                      ? "bg-green-500 text-white hover:bg-green-600"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                  disabled={!selectedLocation}
                >
                  Confirm Location
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarRentalInterface;
