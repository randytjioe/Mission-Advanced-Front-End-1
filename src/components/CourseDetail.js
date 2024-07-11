import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCourseById } from '../services/api';

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      const fetchedCourse = await getCourseById(id);
      setCourse(fetchedCourse);
    };
    fetchCourse();
  }, [id]);

  if (!course) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <div className="mb-8">
        <img src={course.image} alt={course.title} className="w-full h-64 object-cover rounded-lg" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Deskripsi</h2>
          <p className="mb-8">{course.description}</p>
          <h2 className="text-2xl font-semibold mb-4">Apa yang akan Anda pelajari</h2>
          <ul className="list-disc list-inside mb-8">
            {course.learningOutcomes.map((outcome, index) => (
              <li key={index}>{outcome}</li>
            ))}
          </ul>
        </div>
        <div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Informasi Kursus</h3>
            <p className="mb-2"><strong>Instruktur:</strong> {course.instructor.name}</p>
            <p className="mb-2"><strong>Durasi:</strong> {course.duration}</p>
            <p className="mb-4"><strong>Level:</strong> {course.level}</p>
            <p className="text-2xl font-bold mb-4">Rp {course.price.toLocaleString()}</p>
            <button className="w-full bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600">Daftar Sekarang</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;