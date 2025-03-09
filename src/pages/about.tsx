import React from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";


export default function AboutUs() {
    return (
        <>
        <Navbar/>
       
      <div className="min-h-screen bg-cover bg-center flex flex-col items-center py-10 px-4 md:px-10 lg:px-20" style={{ backgroundImage: "url('images/room9.avif')" }}>
        <div className="w-full max-w-4xl bg-white bg-opacity-90 shadow-lg rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            About Us
          </h1>
          <p className="text-gray-600 text-center text-base sm:text-lg md:text-xl mb-6">
            Welcome to <span className="font-semibold">StayEase</span>, your trusted partner in finding the perfect stay. Whether you're looking for luxury, budget-friendly, or boutique hotels, we've got you covered.
          </p>
          
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mt-6 mb-2">Our Mission</h2>
          <p className="text-gray-600 text-base sm:text-lg mb-4">
            We aim to make hotel booking seamless, convenient, and affordable for travelers worldwide. Our platform connects you with thousands of verified hotels, ensuring you get the best stay experience.
          </p>
          
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mt-6 mb-2">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 text-base sm:text-lg">
            <li>Curated selection of hotels for every budget</li>
            <li>Secure and hassle-free booking experience</li>
            <li>24/7 customer support to assist you</li>
            <li>Exclusive deals and discounts</li>
          </ul>
          
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mt-6 mb-2">Contact Us</h2>
          <p className="text-gray-600 text-base sm:text-lg mb-4">
            Have questions or need assistance? Reach out to our support team at <a href="mailto:support@stayease.com" className="text-blue-600 underline">support@stayease.com</a> or call us at <a href="tel:+1234567890" className="text-blue-600 underline">+1 234 567 890</a>.
          </p>
        </div>
      </div>
      <Footer/>
      </>
    );
  }
  