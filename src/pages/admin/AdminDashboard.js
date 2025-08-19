import React from "react";

function AdminDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <h2 className="text-xl font-semibold">Manage Listings</h2>
      <p>Approve or remove listings here.</p>
      <h2 className="text-xl font-semibold mt-4">Manage Users</h2>
      <p>Ban or promote users here.</p>
    </div>
  );
}
export default AdminDashboard;
