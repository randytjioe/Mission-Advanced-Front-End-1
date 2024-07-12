import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">VideoBelajar</Link>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-16 md:top-0 left-0 right-0 bg-white md:bg-transparent shadow-md md:shadow-none`}>
          <ul className="flex flex-col md:flex-row md:space-x-4 p-4 md:p-0">
            <li><Link to="/courses" className="block py-2 text-gray-600 hover:text-blue-600">Courses</Link></li>
            {user ? (
              <>
                <li><Link to="/profile" className="block py-2 text-gray-600 hover:text-blue-600">Profile</Link></li>
                <li><button onClick={logout} className="block w-full text-left py-2 text-gray-600 hover:text-blue-600">Logout</button></li>
              </>
            ) : (
              <>
                <li><Link to="/login" className="block py-2 text-gray-600 hover:text-blue-600">Login</Link></li>
                <li><Link to="/register" className="block py-2 text-gray-600 hover:text-blue-600">Register</Link></li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;