import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Pendaftaran Akun</h1>
      <p className="text-center mb-6">Yuk, daftarkan akunmu sekarang juga!</p>
      <form>
        <div className="mb-4">
          <label htmlFor="fullName" className="block mb-2">Nama Lengkap</label>
          <input type="text" id="fullName" className="w-full px-3 py-2 border rounded-md" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">E-Mail</label>
          <input type="email" id="email" className="w-full px-3 py-2 border rounded-md" required />
        </div>
        <div className="mb-4">
          <label htmlFor="gender" className="block mb-2">Jenis Kelamin</label>
          <select id="gender" className="w-full px-3 py-2 border rounded-md">
            <option value="">Pilih Jenis Kelamin</option>
            <option value="male">Pria</option>
            <option value="female">Wanita</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block mb-2">No. Hp</label>
          <div className="flex">
            <span className="inline-flex items-center px-3 text-gray-500 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md">
              +62
            </span>
            <input type="tel" id="phone" className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md" required />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2">Kata Sandi</label>
          <input type="password" id="password" className="w-full px-3 py-2 border rounded-md" required />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block mb-2">Konfirmasi Kata Sandi</label>
          <input type="password" id="confirmPassword" className="w-full px-3 py-2 border rounded-md" required />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Daftar</button>
      </form>
      <div className="mt-6 text-center">
        <Link to="/login" className="text-blue-600 hover:underline">Masuk</Link>
      </div>
      <div className="mt-6">
        <p className="text-center mb-2">atau</p>
        <button className="w-full bg-white border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-50">
          Daftar dengan Google
        </button>
      </div>
    </div>
  );
};

export default Register;