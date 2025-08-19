import React from "react";
import { Link } from "react-router-dom";

function SellerDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Seller Dashboard</h1>
      <Link to="/seller/add-listing" className="bg-blue-500 text-white px-4 py-2 rounded">
        + Add New Listing
      </Link>
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Your Listings</h2>
        {/* Later: map over seller’s listings from backend */}
        <p>No listings yet.</p>
      </div>
    </div>
  );
}
export default SellerDashboard;
