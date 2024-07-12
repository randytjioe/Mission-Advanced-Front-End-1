import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { getUserCourses } from '../services/api/userApi';
import CourseProgress from '../components/CourseProgress';

const Profile = () => {
    const { user } = useAuth();
  const [userCourses, setUserCourses] = useState([]);

  useEffect(() => {
    const fetchUserCourses = async () => {
      try {
        const courses = await getUserCourses(user.id);
        setUserCourses(courses);
      } catch (error) {
        console.error('Failed to fetch user courses:', error);
      }
    };

    fetchUserCourses();
  }, [user.id]);


  return (
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Profile</h1>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">User Information</h3>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Full name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.name}</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Email address</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.email}</dd>
            </div>
          </dl>
        </div>
      </div>
      <h2 className="text-2xl font-bold mt-8 mb-4">Enrolled Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {userCourses.map((course) => (
          <div key={course.id} className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Progress: {course.progress}%</span>
              <a href={`/course/${course.id}`} className="text-blue-500 hover:underline">Continue</a>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-bold mt-8 mb-4">Enrolled Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {userCourses.map((course) => (
          <div key={course.id} className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <CourseProgress progress={course.progress} />
            <div className="mt-4 flex justify-between items-center">
              <a href={`/course/${course.id}`} className="text-blue-500 hover:underline">Continue</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;