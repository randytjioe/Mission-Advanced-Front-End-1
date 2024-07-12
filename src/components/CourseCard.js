import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src={course.image} alt={course.title} />
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2">{course.title}</h3>
        <p className="text-gray-700 text-base mb-2">{course.instructor}</p>
        <div className="flex items-center mb-2">
          <span className="text-yellow-500 mr-1">★</span>
          <span>{course.rating}</span>
          <span className="text-gray-600 ml-1">({course.reviewCount} reviews)</span>
        </div>
        <p className="text-gray-900 font-bold">Rp {course.price}</p>
        <Link 
          to={`/course/${course.id}`} 
          className="mt-4 block text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          View Course
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;