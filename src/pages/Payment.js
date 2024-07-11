import React from 'react';

const Payment = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Pilih Metode</h1>
        <div className="flex">
          <div className="w-3 h-3 bg-blue-600 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-md p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Metode Pembayaran</h2>
        <div className="space-y-4">
          <button className="w-full text-left px-4 py-2 border rounded-md hover:bg-gray-50">Transfer Bank</button>
          <button className="w-full text-left px-4 py-2 border rounded-md hover:bg-gray-50">E-Wallet</button>
          <button className="w-full text-left px-4 py-2 border rounded-md hover:bg-gray-50">Kartu Kredit/Debit</button>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-md p-6">
        <h2 className="text-xl font-bold mb-4">Ringkasan Pesanan</h2>
        <div className="flex justify-between mb-2">
          <span>Total Harga (1 barang)</span>
          <span>Rp 767.500</span>
        </div>
        <div className="flex justify-between mb-4">
          <span>Biaya Admin</span>
          <span>Rp 7.000</span>
        </div>
        <div className="flex justify-between font-bold">
          <span>Total Pembayaran</span>
          <span>Rp 774.500</span>
        </div>
      </div>
      <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 mt-8">Beli Sekarang</button>
    </div>
  );
};

export default Payment;