"use client";

import { useState } from "react";

export default function TermsAndConditions() {
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center" 
         style={{ backgroundImage: "url('images/room10.jpg')" }}>
      
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content Box */}
      <div className="relative max-w-3xl w-full bg-white bg-opacity-90 p-6 md:p-10 rounded-2xl shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">
          Terms & Conditions
        </h1>

        <div className="h-60 overflow-y-auto text-gray-700 text-sm md:text-base px-2 md:px-4">
          <p className="mb-4">
            Welcome to our hotel booking service. By using our website, you agree to the following terms and conditions. Please read them carefully.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>All bookings require full payment at the time of reservation.</li>
            <li>Cancellations made within 24 hours of check-in are non-refundable.</li>
            <li>Guests must provide valid identification upon check-in.</li>
            <li>Pets are not allowed unless specified in the booking.</li>
            <li>Smoking is prohibited inside hotel rooms.</li>
            <li>The hotel is not responsible for lost or stolen items.</li>
          </ul>
          <p className="mt-4">
            By proceeding with your booking, you acknowledge that you have read and agreed to these terms.
          </p>
        </div>

        {/* Accept Button */}
        <div className="mt-6 text-center">
          <button
            className={`px-6 py-3 rounded-full text-white font-semibold text-lg transition ${
              accepted ? "bg-green-600" : "bg-blue-600 hover:bg-blue-700"
            }`}
            onClick={() => setAccepted(true)}
          >
            {accepted ? "Accepted ✅" : "Accept & Continue"}
          </button>
        </div>
      </div>
    </div>
  );
}
