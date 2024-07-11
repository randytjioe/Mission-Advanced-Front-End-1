import React, { useState, useEffect } from 'react';
import CourseCard from '../components/CourseCard';
import CategoryFilter from '../components/CategoryFilter';
import { getCourses } from '../services/api';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const categories = ['all', 'digital-teknologi', 'pemasaran', 'manajemen-bisnis', 'pengembangan-diri', 'desain'];

  useEffect(() => {
    const fetchCourses = async () => {
      const fetchedCourses = await getCourses(selectedCategory);
      setCourses(fetchedCourses);
    };
    fetchCourses();
  }, [selectedCategory]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Koleksi Video Pembelajaran</h1>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseList;