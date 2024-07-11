import React, { useContext, useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { getUserCourses } from '../services/api/authApi';

const UserProfile = () => {
  const { user } = useAuth();
  const [userCourses, setUserCourses] = useState([]);

  useEffect(() => {
    const fetchUserCourses = async () => {
      if (user) {
        const courses = await getUserCourses(user.id);
        setUserCourses(courses);
      }
    };
    fetchUserCourses();
  }, [user]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Profil Saya</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="bg-white shadow-md rounded-lg p-6">
            <img src={user.avatar} alt={user.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-center mb-2">{user.name}</h2>
            <p className="text-center text-gray-600 mb-4">{user.email}</p>
            <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">Edit Profil</button>
          </div>
        </div>
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Kursus Saya</h2>
          {userCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {userCourses.map(course => (
                <div key={course.id} className="bg-white shadow-md rounded-lg p-4">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-2">Progres: {course.progress}%</p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${course.progress}%` }}></div>
                  </div>
                  <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">Lanjutkan Belajar</button>
                </div>
              ))}
            </div>
          ) : (
            <p>Anda belum mengikuti kursus apapun.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;