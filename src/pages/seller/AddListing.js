import React, { useState } from "react";

function AddListing() {
  const [form, setForm] = useState({ title: "", price: "", description: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Listing submitted:", form);
    // Later: send to backend API
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Add New Listing</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
        <input name="title" placeholder="Title" onChange={handleChange} className="border p-2" />
        <input name="price" type="number" placeholder="Price" onChange={handleChange} className="border p-2" />
        <textarea name="description" placeholder="Description" onChange={handleChange} className="border p-2" />
        <input type="file" />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}
export default AddListing;
