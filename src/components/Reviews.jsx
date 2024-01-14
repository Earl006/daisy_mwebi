import React, { useState, useEffect } from 'react';
import LeaveReview from './LeaveReview';

const ReviewTile = ({ name, age, review }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
      <div className="flex items-center mb-2">
        <span className="text-lg font-bold">{name}</span>
        <span className="mx-2 text-gray-500">,</span>
        <span className="text-gray-500">{age} years old</span>
      </div>
      <p className="text-gray-700">{review}</p>
    </div>
  );
};

const Reviews = () => {
  const [reviewsData, setReviewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showLeaveReview, setShowLeaveReview] = useState(false);
  
  useEffect(() => {
    fetch('http://localhost/daisy_mwebi/src/assets/reviews.php')
      .then((response) => response.json())
      .then((data) => {
        setReviewsData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching reviews:', error.message);
        console.error('Stack trace:', error.stack);
        setError('Sorry, something went wrong while fetching reviews.');
        setLoading(false);
      });
  }, []);

  const handleLeaveReviewClick = () => {
    setShowLeaveReview(true);
    
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="bg-gray-100 font-sans">
      <div className="text-center mt-8">
        <h1 className="text-center text-3xl mt-8 text-gray-800" id="reviews">
          Reviews and Testimonials
        </h1>
        <div className="h-1.5 w-10 bg-yellow-500 mx-auto mt-4 mb-8" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviewsData.map((review, index) => (
          <ReviewTile key={index} {...review} />
        ))}
        <div className='flex items-center justify-center'>
          <button 
            className="bg-orange-600 text-white py-2 px-4 rounded-full text-white flex justify-center"
            onClick={handleLeaveReviewClick}
          >
            Leave me a Review
          </button>
        </div>
      </div>

      {showLeaveReview && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
          <LeaveReview />
        </div>
      )}
    </div>
  );
};

export default Reviews;