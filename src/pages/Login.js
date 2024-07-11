import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Masuk ke Akun</h1>
      <p className="text-center mb-6">Yuk, lanjutin belajarmu di videobelajar.</p>
      <form>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">E-Mail</label>
          <input type="email" id="email" className="w-full px-3 py-2 border rounded-md" required />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2">Kata Sandi</label>
          <input type="password" id="password" className="w-full px-3 py-2 border rounded-md" required />
        </div>
        <div className="mb-4 text-right">
          <Link to="/forgot-password" className="text-blue-600 hover:underline">Lupa Password?</Link>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Masuk</button>
      </form>
      <div className="mt-6 text-center">
        <Link to="/register" className="text-blue-600 hover:underline">Daftar</Link>
      </div>
      <div className="mt-6">
        <p className="text-center mb-2">atau</p>
        <button className="w-full bg-white border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-50">
          Masuk dengan Google
        </button>
      </div>
    </div>
  );
};

export default Login;