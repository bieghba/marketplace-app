import { useParams, Link } from "react-router-dom";
import rentals from "../data/rentals";

export default function ListingDetails() {
  const { id } = useParams();
  const rental = rentals.find((r) => r.id === parseInt(id));

  if (!rental) {
    return <h1 className="text-center mt-20 text-red-600">Listing not found.</h1>;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <img
        src={rental.img}
        alt={rental.title}
        className="w-full h-80 object-cover rounded-2xl shadow"
      />
      <h1 className="text-3xl font-bold mt-6">{rental.title}</h1>
      <p className="text-gray-600">{rental.location}</p>
      <p className="text-blue-600 font-bold text-xl mt-2">{rental.price}</p>
      <p className="mt-4 text-gray-700">{rental.description}</p>

      <Link
        to="/listings"
        className="inline-block mt-6 bg-gray-700 text-white px-5 py-2 rounded-lg hover:bg-gray-800"
      >
        ← Back to Listings
      </Link>
    </div>
  );
}
