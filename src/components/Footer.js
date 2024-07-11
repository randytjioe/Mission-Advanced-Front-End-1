import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">VideoBelajar</h3>
            <p>Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
            <p>+62-877-7123-1234</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Kategori</h4>
            <ul>
              <li><Link to="/courses?category=digital-teknologi">Digital & Teknologi</Link></li>
              <li><Link to="/courses?category=pemasaran">Pemasaran</Link></li>
              <li><Link to="/courses?category=manajemen-bisnis">Manajemen Bisnis</Link></li>
              <li><Link to="/courses?category=pengembangan-diri">Pengembangan Diri</Link></li>
              <li><Link to="/courses?category=desain">Desain</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Perusahaan</h4>
            <ul>
              <li><Link to="/about">Tentang Kami</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/privacy">Kebijakan Privasi</Link></li>
              <li><Link to="/terms">Ketentuan Layanan</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Komunitas</h4>
            <ul>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/tips">Tips Sukses</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 Gerobak Sayur All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;