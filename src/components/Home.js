import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!</h1>
      <p className="mb-8">Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.</p>
      <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">Temukan Video Course untuk Dipelajari!</button>
      
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-4">Koleksi Video Pembelajaran Unggulan</h2>
        <p className="mb-8">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
        {/* Add course cards here */}
      </section>
    </div>
  );
};

export default Home;