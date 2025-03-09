import React from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";





export default function PrivacyPolicy() {
    return (
        <>
        <Navbar/>
       
      <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center" 
        style={{ backgroundImage: "url('images/room10.jpg')" }}>
  
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  
        {/* Content Container */}
        <div className="relative z-10 max-w-4xl p-8 bg-white bg-opacity-80 shadow-xl rounded-xl text-gray-900">
          <h1 className="text-3xl font-bold mb-4 text-center">Privacy Policy</h1>
          <p className="mb-4">
            Welcome to our Privacy Policy page. Your privacy is critically important to us.
          </p>
          <h2 className="text-xl font-semibold mt-4">1. Information We Collect</h2>
          <p className="mb-4">
            We collect various types of information to improve our services, including personal details, usage data, and cookies.
          </p>
          <h2 className="text-xl font-semibold mt-4">2. How We Use Your Information</h2>
          <p className="mb-4">
            The collected data helps us enhance your experience, provide customer support, and improve security.
          </p>
          <h2 className="text-xl font-semibold mt-4">3. Data Protection</h2>
          <p className="mb-4">
            We prioritize your security by implementing industry-standard protection methods.
          </p>
          <h2 className="text-xl font-semibold mt-4">4. Your Rights</h2>
          <p className="mb-4">
            You have the right to access, modify, or delete your personal data upon request.
          </p>
          <h2 className="text-xl font-semibold mt-4">5. Updates</h2>
          <p className="mb-4">
            This policy may change from time to time, and we will notify you of significant updates.
          </p>
          <p className="text-center mt-6 text-gray-600">
            Last updated: February 2025
          </p>
        </div>
      </div>
      <Footer/>
      </>
    );
  }
  