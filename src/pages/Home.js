import React from "react";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Find Your Next Apartment or Condo
        </h1>
        <p className="text-lg mb-6">
          RentReadyPH makes it easy to discover and rent spaces across the
          Philippines.
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto flex bg-white rounded-lg shadow-lg overflow-hidden">
          <input
            type="text"
            placeholder="Search by city or location..."
            className="flex-1 p-3 text-gray-700 outline-none"
          />
          <button className="bg-blue-700 px-6 text-white font-semibold hover:bg-blue-800">
            Search
          </button>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-8 text-gray-800 text-center">
          Featured Rentals
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Condo"
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold">Modern Condo in Makati</h3>
              <p className="text-gray-600">₱25,000 / month</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1590490360182-c33d57733427"
              alt="Apartment"
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold">2BR Apartment in Quezon City</h3>
              <p className="text-gray-600">₱18,000 / month</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1599427303058-f04cbcf4756f"
              alt="Studio"
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold">Studio Unit in BGC</h3>
              <p className="text-gray-600">₱30,000 / month</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
