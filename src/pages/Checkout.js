import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { purchaseCourse } from '../services/api/authApi';

const Checkout = () => {
  const { courseId } = useParams();
  const { user } = useAuth();
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePurchase = async () => {
    try {
      await purchaseCourse(user.id, courseId, paymentMethod);
      // Redirect to success page or show success message
    } catch (error) {
      console.error('Purchase failed:', error);
      // Show error message
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Metode Pembayaran</h2>
          <div className="space-y-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="bank_transfer"
                checked={paymentMethod === 'bank_transfer'}
                onChange={() => setPaymentMethod('bank_transfer')}
                className="mr-2"
              />
              Transfer Bank
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="credit_card"
                checked={paymentMethod === 'credit_card'}
                onChange={() => setPaymentMethod('credit_card')}
                className="mr-2"
              />
              Kartu Kredit
            </label>
            {/* Add more payment methods */}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Ringkasan Pesanan</h2>
          {/* Add order summary details */}
          <button
            onClick={handlePurchase}
            className="w-full bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 mt-8"
          >
            Bayar Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;