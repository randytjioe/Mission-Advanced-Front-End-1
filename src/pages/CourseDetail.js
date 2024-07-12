import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { course, loading, error } from '../hooks/useCourses';
import { useAuth } from '../contexts/AuthContext';
import { enrollCourse } from '../services/api/courseApi';
import { getReviews } from '../services/api/reviewApi';
import ReviewForm from '../components/ReviewForm';

const CourseDetail = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const fetchedReviews = await getReviews(id);
        setReviews(fetchedReviews);
      } catch (error) {
        console.error('Failed to fetch reviews:', error);
      }
    };

    fetchReviews();
  }, [id]);

  const handleReviewAdded = async () => {
    // Refetch reviews after a new review is added
    const updatedReviews = await getReviews(id);
    setReviews(updatedReviews);
  };

  const handleEnroll = async () => {
    // if (!user) {
    //   // Redirect to login page
    //   history.push('/login');
    //   return;
    // }

    try {
      await enrollCourse(user.id, course.id);
      alert('Successfully enrolled in the course!');
      // Optionally, update the UI to reflect enrollment
    } catch (error) {
      console.error('Failed to enroll:', error);
      alert('Failed to enroll in the course. Please try again.');
    }
  };


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* ... existing course details ... */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
        {reviews.map((review) => (
          <div key={review.id} className="bg-white shadow rounded-lg p-4 mb-4">
            <div className="flex items-center mb-2">
              <span className="text-yellow-500 mr-1">★</span>
              <span>{review.rating}</span>
            </div>
            <p className="text-gray-700">{review.comment}</p>
            <p className="text-sm text-gray-500 mt-2">By {review.userName}</p>
          </div>
        ))}
        {user && <ReviewForm courseId={id} onReviewAdded={handleReviewAdded} />}
      </section>
    </div>
  );
};

export default CourseDetail;