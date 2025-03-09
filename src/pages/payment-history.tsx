'use client';

import { useState } from 'react';
import { FaMoneyBillWave, FaRegCalendarAlt, FaHotel } from 'react-icons/fa';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

export default function BookingSummary() {
  const [bookings] = useState([
    { id: 1, hotel: 'Sunset Paradise', checkIn: '2024-03-10', checkOut: '2024-03-15', amount: '$500', status: 'Confirmed' },
    { id: 2, hotel: 'City Lights Hotel', checkIn: '2024-04-05', checkOut: '2024-04-10', amount: '$650', status: 'Pending' },
    { id: 3, hotel: 'Ocean Breeze Inn', checkIn: '2024-05-12', checkOut: '2024-05-18', amount: '$800', status: 'Cancelled' },
  ]);

  return (
<>
<Navbar/>

    <div className="relative min-h-screen w-full flex justify-center items-center bg-cover bg-center bg-no-repeat p-4 md:p-6" style={{ backgroundImage: "url('images/room10.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative bg-white bg-opacity-90 shadow-xl rounded-2xl p-4 sm:p-6 md:p-8 max-w-3xl w-full overflow-x-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 text-center mb-4 md:mb-6">Booking Summary</h2>
        <div className="overflow-x-auto rounded-xl shadow-md">
          <table className="w-full border-collapse bg-white text-xs sm:text-sm md:text-base">
            <thead>
              <tr className="bg-blue-600 text-white text-left">
                <th className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4">Hotel</th>
                <th className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4">Check-In</th>
                <th className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4">Check-Out</th>
                <th className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4">Amount</th>
                <th className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={booking.id} className={`text-gray-800 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                  <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 flex items-center space-x-2 font-medium text-gray-900">
                    <FaHotel className="text-blue-500" /> <span>{booking.hotel}</span>
                  </td>
                  <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700">{booking.checkIn}</td>
                  <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700">{booking.checkOut}</td>
                  <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700">{booking.amount}</td>
                  <td className={`px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 font-semibold ${booking.status === 'Confirmed' ? 'text-green-600' : booking.status === 'Pending' ? 'text-yellow-600' : 'text-red-600'}`}>{booking.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
