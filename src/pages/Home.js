import React from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '../components/CourseCard';

const Home = () => {
  // Dummy data untuk contoh
  const featuredCourses = [
    {
      id: 1,
      title: "Big 4 Auditor Financial Analyst",
      description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
      instructor: { name: "Jenna Ortega", avatar: "/path/to/avatar.jpg" },
      price: 300000,
      image: "/path/to/course-image.jpg"
    },
    // Tambahkan kursus lainnya di sini
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-4">Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!</h1>
        <p className="mb-8 text-xl">Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.</p>
        <Link to="/courses" className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-600">Temukan Video Course untuk Dipelajari!</Link>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8">Koleksi Video Pembelajaran Unggulan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;