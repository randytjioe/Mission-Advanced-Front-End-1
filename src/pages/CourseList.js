import React, { useState } from 'react';
import CourseCard from '../components/CourseCard';

const CourseList = () => {
  const [courses] = useState([
    // Dummy data, replace with API call later
    {
      id: 1,
      title: "Big 4 Auditor Financial Analyst",
      instructor: "Jenna Ortega",
      instructorTitle: "Senior Accountant di Gojek",
      rating: 3.5,
      reviewCount: 86,
      price: "Rp 300K",
      image: "https://via.placeholder.com/300x200"
    },
    // Add more courses...
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Koleksi Video Pembelajaran Unggulan</h1>
      <p className="text-xl mb-8">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
      <div className="flex mb-8">
        <button className="mr-4 px-4 py-2 bg-blue-600 text-white rounded-md">Filter</button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md">Reset</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseList;