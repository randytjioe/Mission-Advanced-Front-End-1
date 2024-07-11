import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetail = () => {
  const { id } = useParams();
  // Dummy data, replace with API call later
  const course = {
    id,
    title: "Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager",
    price: "Rp 250K",
    originalPrice: "Rp 500K",
    discount: "50%",
    instructor: "Gregorius Edrik Lawanto",
    instructorTitle: "Senior Talent Acquisition di WingsGroup",
    rating: 3.5,
    reviewCount: 86,
    description: "Foundations of User Experience (UX) Design adalah yang pertama dari rangkaian tujuh kursus yang akan membekali Anda dengan keterampilan yang dibutuhkan untuk melamar pekerjaan tingkat pemula dalam desain pengalaman pengguna..."
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
        <p className="text-lg mb-4">{course.description}</p>
        <div className="flex items-center mb-4">
          <span className="text-3xl font-bold text-blue-600 mr-4">{course.price}</span>
          <span className="text-xl line-through text-gray-500 mr-4">{course.originalPrice}</span>
          <span className="bg-red-500 text-white px-2 py-1 rounded-md">Diskon {course.discount}</span>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">Beli Sekarang</button>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Belajar bersama Tutor Profesional</h2>
        <div className="flex items-center">
          <img src="https://via.placeholder.com/100" alt={course.instructor} className="rounded-full mr-4" />
          <div>
            <h3 className="text-xl font-bold">{course.instructor}</h3>
            <p>{course.instructorTitle}</p>
          </div>
        </div>
      </div>
      {/* Add more sections as needed */}
    </div>
  );
};

export default CourseDetail;