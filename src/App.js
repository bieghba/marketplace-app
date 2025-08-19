import React from "react";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Rent Ready PH</h1>
        <ul className="flex gap-6 text-gray-700">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">Listings</li>
          <li className="hover:text-blue-600 cursor-pointer">About</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-16 bg-blue-100">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Find Your Next Apartment or Condo
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Browse affordable rentals near you with ease.
        </p>

        {/* Search Bar */}
        <div className="bg-white shadow-md rounded-lg flex p-2 w-full max-w-2xl">
          <input
            type="text"
            placeholder="Search by city or area"
            className="flex-1 p-2 outline-none"
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">
            Search
          </button>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="flex-1 p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((id) => (
          <div
            key={id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={`https://picsum.photos/400/250?random=${id}`}
              alt="apartment"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Modern Apartment {id}</h3>
              <p className="text-gray-600 mt-2">2 Bed • 1 Bath • 60 sqm</p>
              <p className="text-blue-600 font-bold mt-2">₱25,000 / month</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
                View Details
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>© 2025 RentSpace. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
