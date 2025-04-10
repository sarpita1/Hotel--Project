'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import Footer2 from '@/Components/Footer2';
import { useSearchParams } from 'next/navigation';

export default function HotelBookingCheckout() {
  const searchParams = useSearchParams();
  const [hotel, setHotel] = useState<any>(null);
  const [checkIn, setCheckIn] = useState<string | null>(null);
  const [checkOut, setCheckOut] = useState<string | null>(null);
  const [guests, setGuests] = useState<string | null>(null);
  const [rooms, setRooms] = useState<string | null>(null);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [upiId, setUpiId] = useState('');
  const [upiProvider, setUpiProvider] = useState('PhonePe');

  useEffect(() => {
    const hotelParam = searchParams.get("hotel");
    const checkInParam = searchParams.get("checkIn");
    const checkOutParam = searchParams.get("checkOut");
    const guestsParam = searchParams.get("guests");
    const roomsParam = searchParams.get("rooms");

    if (hotelParam) {
      const parsedHotel = JSON.parse(hotelParam);
      setHotel(parsedHotel);
    }

    setCheckIn(checkInParam);
    setCheckOut(checkOutParam);
    setGuests(guestsParam);
    setRooms(roomsParam);
  }, [searchParams]);

  const total = hotel?.pricePerNight || 0;

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const res = await loadRazorpayScript();
  
    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }
  
    const options = {
      key: process.env.paymentGatewayKey, // Your Razorpay Key ID
      amount: 2 * 100, // Amount is in paise (e.g., 1000 paise = ₹10)
      currency: 'INR',
      name: 'Hotel Booking',
      description: 'Payment for Hotel Booking',
      image: '/images/logo.jpg', // Your logo URL
      handler: async function (response: any) {
        const transactionId = response.razorpay_payment_id;
  
        // Prepare data to save
        const paymentData = {
          hotel,
          checkIn,
          checkOut,
          guests,
          rooms,
          paymentMethod,
          upiId,
          upiProvider,
          transactionId,
          amount: total,
        };
  
        try {
          // Call the API to save payment details
          const apiResponse = await fetch('/api/savePayment', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(paymentData),
          });
  
          if (apiResponse.ok) {
            alert(`Payment successful! Transaction ID: ${transactionId}`);
            // Redirect or show a success message
          } else {
            alert('Failed to save payment details. Please contact support.');
          }
        } catch (error) {
          console.error('Error saving payment details:', error);
          alert('An error occurred while saving payment details.');
        }
      },
      prefill: {
        name: 'John Doe', // Prefill customer name
        email: 'john.doe@example.com', // Prefill customer email
        contact: '9999999999', // Prefill customer phone number
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#3399cc',
      },
    };
  
    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  return (
    <>
      <Navbar />
      <div className="font-sans max-w-4xl mx-auto bg-white p-6 shadow-lg rounded-lg mt-4">
        <h2 className="text-2xl font-bold text-gray-800">Your Booking</h2>
        <div className="space-y-6 mt-6"></div>

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
            <li className="flex justify-between font-bold text-lg">Total <span>Rs {total.toFixed(2)}</span></li>
          </ul>

          <button
            className="mt-6 w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            onClick={handlePayment}
            disabled={total === 0}
          >
            Confirm Booking
          </button>
        </div>
      </div>
      <Footer />
      <Footer2 />
    </>
  );
}