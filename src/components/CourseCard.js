import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-4">{course.description}</p>
        <div className="flex items-center mb-4">
          <img src={course.instructor.avatar} alt={course.instructor.name} className="w-10 h-10 rounded-full mr-2" />
          <span>{course.instructor.name}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-blue-500 font-bold">Rp {course.price.toLocaleString()}</span>
          <Link to={`/courses/${course.id}`} className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">Lihat Kelas</Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;