import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement newsletter subscription logic
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Mau Belajar Lebih Banyak?</h2>
        <p className="text-center mb-8">
          Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik hariesok.id
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex">
          <input
            type="email"
            placeholder="Masukkan Emailmu"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-l-full border-2 border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
          <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-r-full hover:bg-blue-600">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;