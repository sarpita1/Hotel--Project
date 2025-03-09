'use client';

import { useState } from 'react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import Footer2 from '@/Components/Footer2';
import Image from 'next/image';

export default function HotelBookingCheckout() {
  const [rooms, setRooms] = useState([
    { id: 1, name: 'Deluxe Room', price: 120, img: '/images/room12.jpg', quantity: 0 },
    { id: 2, name: 'Suite Room', price: 200, img: '/images/room7.jpg', quantity: 0 },
  ]);

  const [paymentMethod, setPaymentMethod] = useState('card');
  const [upiId, setUpiId] = useState('');
  const [upiProvider, setUpiProvider] = useState('PhonePe');

  const handleQuantityChange = (id:any, delta:any) => {
    setRooms((prevRooms) =>
      prevRooms.map((room) =>
        room.id === id
          ? { ...room, quantity: Math.max(0, room.quantity + delta) } // Minimum quantity is now 0
          : room
      )
    );
  };

  const subtotal = rooms.reduce((sum, room) => sum + room.price * room.quantity, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <>
  <Navbar/>
    <div className="font-sans max-w-4xl mx-auto bg-white p-6 shadow-lg rounded-lg mt-4">
      
      <h2 className="text-2xl font-bold text-gray-800">Your Booking</h2>
      <div className="space-y-6 mt-6">
        {rooms.map((room) => (
          <div key={room.id} className="flex items-center gap-4 border-b pb-4">
            <div className="w-24 h-24 shrink-0 bg-gray-100 p-2 rounded-md">
              <Image src={room.img} alt={room.name} width={96} height={96} className="w-full h-full object-cover rounded-md" />
            </div>
            <div className="w-full">
              <h3 className="text-lg font-semibold text-gray-800">{room.name}</h3>
              <p className="text-sm text-gray-700 font-bold mt-1">Rs {room.price.toFixed(2)}</p>
              <div className="flex items-center gap-4 mt-2">
                <button
                  className="px-3 py-1 border border-gray-300 text-gray-800 rounded-md"
                  onClick={() => handleQuantityChange(room.id, -1)}
                  disabled={room.quantity === 0} // Disable minus button if quantity is 0
                >
                  -
                </button>
                <span className="text-gray-800">{room.quantity}</span>
                <button
                  className="px-3 py-1 border border-gray-300 text-gray-800 rounded-md"
                  onClick={() => handleQuantityChange(room.id, 1)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t pt-4">
        <h2 className="text-2xl font-bold text-gray-800">Payment Details</h2>
        <div className="mt-4">
          <label className="block text-gray-700">Select Payment Method:</label>
          <select
            className="w-full px-4 py-2 border rounded-md mt-2"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="card">Credit/Debit Card</option>
            <option value="upi">UPI Payment</option>
          </select>
        </div>

        {paymentMethod === 'card' && (
          <div className="mt-4 space-y-4">
            <input type="text" placeholder="Card Holder Name" className="w-full px-4 py-2 border rounded-md" />
            <input type="text" placeholder="Card Number" className="w-full px-4 py-2 border rounded-md" />
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="MM/YY" className="w-full px-4 py-2 border rounded-md" />
              <input type="text" placeholder="CVV" className="w-full px-4 py-2 border rounded-md" />
            </div>
          </div>
        )}

        {paymentMethod === 'upi' && (
          <div className="mt-4 space-y-4">
            <label className="block text-gray-700">Select UPI Provider:</label>
            <select
              className="w-full px-4 py-2 border rounded-md"
              value={upiProvider}
              onChange={(e) => setUpiProvider(e.target.value)}
            >
              <option value="PhonePe">PhonePe</option>
              <option value="Paytm">Paytm</option>
              <option value="GPay">Google Pay</option>
            </select>
            <input
              type="text"
              placeholder="Enter UPI ID"
              className="w-full px-4 py-2 border rounded-md"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
            />
          </div>
        )}

        <ul className="mt-6 space-y-2 text-gray-800">
          <li className="flex justify-between">Subtotal <span className="font-bold">Rs {subtotal.toFixed(2)}</span></li>
          <li className="flex justify-between">Tax (10%) <span className="font-bold">Rs {tax.toFixed(2)}</span></li>
          <li className="flex justify-between font-bold text-lg">Total <span>Rs {total.toFixed(2)}</span></li>
        </ul>

        <button className="mt-6 w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" disabled={total === 0}>
          Confirm Booking
        </button>
      </div>
    </div>
    <Footer/>
    <Footer2/>
    </>
  );
}
