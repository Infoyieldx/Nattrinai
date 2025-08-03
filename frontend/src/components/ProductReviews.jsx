// src/components/ProductReviews.jsx
import { useState } from 'react';

const ProductReviews = ({ 
  product, 
  reviews, 
  setReviews, 
  sortOption, 
  setSortOption,
  showAllReviews,
  setShowAllReviews,
  helpfulClicked,
  setHelpfulClicked
}) => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);
  const [reviewImages, setReviewImages] = useState([]);

  const submitReview = (e) => {
    e.preventDefault();
    const newReview = {
      id: Date.now(),
      name,
      comment,
      rating,
      images: reviewImages,
      createdAt: new Date().toISOString(),
      verifiedPurchase: Math.random() > 0.3,
      helpfulCount: 0
    };
    const updated = [...reviews, newReview];
    setReviews(updated);
    localStorage.setItem(`reviews-${product.id}`, JSON.stringify(updated));
    setName('');
    setComment('');
    setRating(5);
    setReviewImages([]);
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + reviewImages.length > 5) {
      alert('You can upload maximum 5 images');
      return;
    }
    
    const newImages = files.map(file => ({
      id: Date.now() + Math.random(),
      url: URL.createObjectURL(file)
    }));
    
    setReviewImages([...reviewImages, ...newImages]);
  };

  const removeImage = (id) => {
    setReviewImages(reviewImages.filter(img => img.id !== id));
  };

  const markHelpful = (reviewId) => {
    if (helpfulClicked[reviewId]) return;
    
    const updatedReviews = reviews.map(review => {
      if (review.id === reviewId) {
        return { ...review, helpfulCount: review.helpfulCount + 1 };
      }
      return review;
    });
    
    setReviews(updatedReviews);
    setHelpfulClicked({ ...helpfulClicked, [reviewId]: true });
    localStorage.setItem(`reviews-${product.id}`, JSON.stringify(updatedReviews));
  };

  const getSortedReviews = () => {
    let sorted = [...reviews];
    
    switch(sortOption) {
      case 'recent':
        return sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      case 'highest':
        return sorted.sort((a, b) => b.rating - a.rating);
      case 'lowest':
        return sorted.sort((a, b) => a.rating - b.rating);
      case 'helpful':
        return sorted.sort((a, b) => b.helpfulCount - a.helpfulCount);
      default:
        return sorted;
    }
  };

const calculateRatingDistribution = () => {
  const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  reviews.forEach(review => {
    distribution[review.rating]++;
  });
  return distribution;
};

const ratingDistribution = calculateRatingDistribution();
const averageRating = reviews?.length > 0 
  ? (reviews.reduce((sum, review) => sum + (review?.rating || 0), 0) / reviews.length)
  : 0;
const totalReviews = reviews.length;

  return (
    <div className="border-t pt-6">
      <h2 className="text-2xl font-bold text-[#3D3F24] mb-6">Customer Reviews</h2>
      
      {/* Rating Summary */}
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-[#3D3F24]">
              {averageRating.toFixed(1)}
            </div>
            <div className="flex justify-center mt-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-6 h-6 ${i < Math.floor(averageRating) ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="text-sm text-gray-500 mt-1">
              {totalReviews} {totalReviews === 1 ? 'review' : 'reviews'}
            </div>
          </div>
          
          <div className="flex-1">
            {[5, 4, 3, 2, 1].map((stars) => (
              <div key={stars} className="flex items-center mb-2">
                <div className="w-10 text-sm font-medium text-gray-600">
                  {stars} star
                </div>
                <div className="flex-1 mx-2">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-yellow-400 h-2.5 rounded-full"
                      style={{
                        width: `${(ratingDistribution[stars] / totalReviews) * 100}%`
                      }}
                    ></div>
                  </div>
                </div>
                <div className="w-10 text-right text-sm text-gray-500">
                  {ratingDistribution[stars]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Review Form */}
      <div className="border rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold text-[#3D3F24] mb-4">Write a Review</h3>
        <form onSubmit={submitReview} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Rating
            </label>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className="focus:outline-none"
                >
                  <svg
                    className={`w-8 h-8 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
              className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-[#4A5A2A] focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Review
            </label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Share your experience with this product"
              required
              rows="4"
              className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-[#4A5A2A] focus:border-transparent"
            ></textarea>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Add Photos (Optional)
            </label>
            <div className="flex flex-wrap gap-2 mb-2">
              {reviewImages.map((img) => (
                <div key={img.id} className="relative">
                  <img
                    src={img.url}
                    alt="Review"
                    className="w-16 h-16 object-cover rounded"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(img.id)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
            <input
              type="file"
              onChange={handleImageUpload}
              accept="image/*"
              multiple
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-[#4A5A2A] file:text-white
                hover:file:bg-[#3D3F24]"
            />
            <p className="text-xs text-gray-500 mt-1">You can upload up to 5 images</p>
          </div>
          
          <button
            type="submit"
            className="bg-[#4A5A2A] text-white px-6 py-3 rounded-md hover:bg-[#3D3F24] font-medium w-full"
          >
            Submit Review
          </button>
        </form>
      </div>

      {/* Review Sorting */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-[#3D3F24]">
          {totalReviews} {totalReviews === 1 ? 'Review' : 'Reviews'}
        </h3>
        <div className="flex items-center">
          <label htmlFor="sort" className="text-sm text-gray-600 mr-2">
            Sort by:
          </label>
          <select
            id="sort"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border rounded-md px-3 py-1 text-sm focus:ring-2 focus:ring-[#4A5A2A] focus:border-transparent"
          >
            <option value="recent">Most Recent</option>
            <option value="highest">Highest Rating</option>
            <option value="lowest">Lowest Rating</option>
            <option value="helpful">Most Helpful</option>
          </select>
        </div>
      </div>

      {/* Display Reviews */}
      {reviews.length === 0 ? (
        <div className="text-center py-8">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">No reviews yet</h3>
          <p className="mt-1 text-sm text-gray-500">
            Be the first to review this product.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {(showAllReviews ? getSortedReviews() : getSortedReviews().slice(0, 3)).map((review) => (
            <div
              key={review.id}
              className="border-b pb-6 last:border-b-0 last:pb-0"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-300">
                    <span className="text-sm font-medium text-gray-600">
                      {review.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">
                        {review.name}
                      </h4>
                      {review.verifiedPurchase && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 ml-2">
                          Verified Purchase
                        </span>
                      )}
                    </div>
                    <div className="flex items-center">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-1 text-sm text-gray-500">
                    {new Date(review.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <div className="mt-2 text-sm text-gray-700">
                    {review.comment}
                  </div>
                  
                  {review.images && review.images.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {review.images.map((img, idx) => (
                        <img
                          key={idx}
                          src={img.url}
                          alt="Review"
                          className="w-20 h-20 object-cover rounded cursor-pointer hover:opacity-75"
                        />
                      ))}
                    </div>
                  )}
                  
                  <div className="mt-3 flex items-center">
                    <button
                      onClick={() => markHelpful(review.id)}
                      className={`text-xs font-medium ${helpfulClicked[review.id] ? 'text-[#4A5A2A]' : 'text-gray-500 hover:text-[#4A5A2A]'}`}
                    >
                      Helpful ({review.helpfulCount})
                    </button>
                    <span className="mx-2 text-gray-300">•</span>
                    <button className="text-xs font-medium text-gray-500 hover:text-[#4A5A2A]">
                      Report
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {reviews.length > 3 && (
            <div className="text-center">
              <button
                onClick={() => setShowAllReviews(!showAllReviews)}
                className="text-sm font-medium text-[#4A5A2A] hover:text-[#3D3F24]"
              >
                {showAllReviews ? 'Show fewer reviews' : `View all ${reviews.length} reviews`}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductReviews;