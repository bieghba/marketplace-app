import { Link } from "react-router-dom";
import rentals from "../data/rentals";

export default function Listings() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Available Listings</h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {rentals.map((rental) => (
          <div
            key={rental.id}
            className="bg-white rounded-2xl shadow hover:shadow-lg overflow-hidden transition"
          >
            <img
              src={rental.img}
              alt={rental.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800">{rental.title}</h2>
              <p className="text-gray-600">{rental.location}</p>
              <p className="text-blue-600 font-bold mt-2">{rental.price}</p>
              <Link
                to={`/listings/${rental.id}`}
                className="mt-4 block w-full bg-blue-600 text-center text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
