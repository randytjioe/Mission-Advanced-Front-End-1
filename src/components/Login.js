import React from 'react';

const Login = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Masuk ke Akun</h2>
      <form className="max-w-md">
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">E-Mail</label>
          <input type="email" id="email" className="w-full px-3 py-2 border rounded" required />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2">Kata Sandi</label>
          <input type="password" id="password" className="w-full px-3 py-2 border rounded" required />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">Masuk</button>
      </form>
    </div>
  );
};

export default Login;