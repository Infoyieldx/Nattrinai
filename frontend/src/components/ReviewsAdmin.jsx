import React, { useState, useEffect } from "react";
import { Star, Trash2 } from "lucide-react";

const mockReviews = [
  {
    id: 1,
    product: "Organic Apples",
    user: "John Doe",
    rating: 5,
    comment: "Great quality and fresh!",
    date: "2025-08-01",
  },
  {
    id: 2,
    product: "Whole Wheat Bread",
    user: "Jane Smith",
    rating: 4,
    comment: "Tasty but a bit dry.",
    date: "2025-08-03",
  },
];

const ReviewsAdmin = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Replace with API call in production
    setReviews(mockReviews);
  }, []);

  const handleDelete = (id) => {
    setReviews(reviews.filter((r) => r.id !== id));
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Product Reviews</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Product</th>
              <th className="px-4 py-2 text-left">User</th>
              <th className="px-4 py-2 text-left">Rating</th>
              <th className="px-4 py-2 text-left">Comment</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <tr key={review.id} className="border-t">
                <td className="px-4 py-2">{review.product}</td>
                <td className="px-4 py-2">{review.user}</td>
                <td className="px-4 py-2 flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                      fill={i < review.rating ? "#facc15" : "none"}
                    />
                  ))}
                </td>
                <td className="px-4 py-2">{review.comment}</td>
                <td className="px-4 py-2">{review.date}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleDelete(review.id)}
                    className="text-red-500 hover:text-red-700"
                    title="Delete Review"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
            {reviews.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center py-6 text-gray-500">
                  No reviews found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReviewsAdmin;
