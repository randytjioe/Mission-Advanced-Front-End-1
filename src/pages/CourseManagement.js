import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useNotification } from '../context/NotificationContext';
import { getCourse, updateCourse, createLesson } from '../services/api/courseApi';

const CourseManagement = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const { addNotification } = useNotification();
  const [course, setCourse] = useState(null);
  const [newLesson, setNewLesson] = useState({ title: '', content: '', videoUrl: '' });

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const fetchedCourse = await getCourse(id);
        setCourse(fetchedCourse);
      } catch (error) {
        console.error('Failed to fetch course:', error);
        addNotification('Failed to load course details', 'error');
      }
    };

    fetchCourse();
  }, [id, addNotification]);

  const handleCourseUpdate = async (e) => {
    e.preventDefault();
    try {
      const updatedCourse = await updateCourse(id, course);
      setCourse(updatedCourse);
      addNotification('Course updated successfully', 'success');
    } catch (error) {
      console.error('Failed to update course:', error);
      addNotification('Failed to update course', 'error');
    }
  };

  const handleLessonCreate = async (e) => {
    e.preventDefault();
    try {
      const createdLesson = await createLesson(id, newLesson);
      setCourse({ ...course, lessons: [...course.lessons, createdLesson] });
      setNewLesson({ title: '', content: '', videoUrl: '' });
      addNotification('Lesson created successfully', 'success');
    } catch (error) {
      console.error('Failed to create lesson:', error);
      addNotification('Failed to create lesson', 'error');
    }
  };

  if (!course) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Manage Course: {course.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Course Details</h2>
          <form onSubmit={handleCourseUpdate} className="bg-white shadow rounded-lg p-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                Course Title
              </label>
              <input
                type="text"
                id="title"
                value={course.title}
                onChange={(e) => setCourse({ ...course, title: e.target.value })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Description
              </label>
              <textarea
                id="description"
                value={course.description}
                onChange={(e) => setCourse({ ...course, description: e.target.value })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                Price
              </label>
              <input
                type="number"
                id="price"
                value={course.price}
                onChange={(e) => setCourse({ ...course, price: e.target.value })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Update Course
            </button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Lessons</h2>
          {course.lessons.map((lesson) => (
            <div key={lesson.id} className="bg-white shadow rounded-lg p-4 mb-4">
              <h3 className="text-xl font-semibold">{lesson.title}</h3>
              <p className="text-gray-600">{lesson.content.substring(0, 100)}...</p>
              <a href={lesson.videoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Watch Video
              </a>
            </div>
          ))}
          <h3 className="text-xl font-semibold mb-2">Add New Lesson</h3>
          <form onSubmit={handleLessonCreate} className="bg-white shadow rounded-lg p-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lessonTitle">
                Lesson Title
              </label>
              <input
                type="text"
                id="lessonTitle"
                value={newLesson.title}
                onChange={(e) => setNewLesson({ ...newLesson, title: e.target.value })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lessonContent">
                Content
              </label>
              <textarea
                id="lessonContent"
                value={newLesson.content}
                onChange={(e) => setNewLesson({ ...newLesson, content: e.target.value })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="videoUrl">
                Video URL
              </label>
              <input
                type="url"
                id="videoUrl"
                value={newLesson.videoUrl}
                onChange={(e) => setNewLesson({ ...newLesson, videoUrl: e.target.value })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Lesson
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CourseManagement;