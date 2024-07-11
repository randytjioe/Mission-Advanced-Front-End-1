import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/courses?search=${searchTerm}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        placeholder="Cari kursus..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 rounded-l-full border-2 border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-r-full hover:bg-blue-600">
        Cari
      </button>
    </form>
  );
};

export default SearchBar;