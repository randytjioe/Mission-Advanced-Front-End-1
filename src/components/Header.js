import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">VideoBelajar</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/courses" className="hover:text-blue-500">Kategori</Link></li>
            {user ? (
              <>
                <li><Link to="/profile" className="hover:text-blue-500">{user.name}</Link></li>
                <li><button onClick={logout} className="hover:text-blue-500">Keluar</button></li>
              </>
            ) : (
              <>
                <li><Link to="/login" className="hover:text-blue-500">Masuk</Link></li>
                <li><Link to="/register" className="hover:text-blue-500">Daftar</Link></li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;