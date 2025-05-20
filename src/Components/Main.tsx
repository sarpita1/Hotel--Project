"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useBooking } from "@/context/BookingContext";

export default function Main() {
  const router = useRouter();
  const { city, setCity, checkIn, setCheckIn, checkOut, setCheckOut, guests, setGuests, rooms, setRooms } = useBooking();
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    // City validation
    if (!city.trim()) {
      newErrors.city = "City is required";
    }

    // Check-in validation
    if (!checkIn) {
      newErrors.checkIn = "Check-in date is required";
    } else if (new Date(checkIn) < new Date()) {
      newErrors.checkIn = "Check-in date cannot be in the past";
    }

    // Check-out validation
    if (!checkOut) {
      newErrors.checkOut = "Check-out date is required";
    } else if (new Date(checkOut) <= new Date(checkIn)) {
      newErrors.checkOut = "Check-out date must be after check-in date";
    }
    
    // Guests validation
    if (!guests || guests <= 0) {
      newErrors.guests = "Number of guests must be greater than 0";
    }

    // Rooms validation
    if (!rooms || rooms <= 0) {
      newErrors.rooms = "Number of rooms must be greater than 0";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSearch = () => {
    if (validateForm()) {
      router.push("/find-hotels");
    }
  };

  return (
    <>
      <div className="hero relative">
        <div className="relative w-full h-64 md:h-96 flex items-center justify-center">
          <Image
            src="/images/room12.jpg"
            alt="banner"
            className="object-cover w-full h-full rounded-md"
            width={1300}
            height={500}
          />
        </div>

        {/* Search Box Over Image */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/80 p-6 rounded-lg shadow-lg w-11/12 md:w-9/12">
          <h1 className="text-black text-2xl md:text-4xl font-bold text-center">
            Over 100+ hotels and homes across 5+ countries
          </h1>
          <div className="flex justify-center mt-6">
            <div className="grid grid-cols-1 md:grid-cols-7 w-full gap-2">
              {/* City Input */}
              <div className="col-span-2">
                <input
                  type="text"
                  className={`w-full p-3 border rounded-md ${
                    errors.city ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
              </div>

              {/* Check-in Input */}
              <div className="col-span-1">
                <input
                  type="text"
                  className={`w-full p-3 border rounded-md ${
                    errors.checkIn ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Check-in"
                  
                  value={checkIn}
                  min={new Date().toISOString().split("T")[0]} // Disable past dates
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
                  onChange={(e) => setCheckIn(e.target.value)}
                />
                {errors.checkIn && <p className="text-red-500 text-sm mt-1">{errors.checkIn}</p>}
              </div>

              {/* Check-out Input */}
              <div className="col-span-1">
                <input
                  type="text"
                  className={`w-full p-3 border rounded-md ${
                    errors.checkOut ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Check-out"
                  value={checkOut}
                  min={checkIn || new Date().toISOString().split("T")[0]} // Disable dates before check-in
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
                  onChange={(e) => setCheckOut(e.target.value)}
                />
                {errors.checkOut && <p className="text-red-500 text-sm mt-1">{errors.checkOut}</p>}
              </div>

              {/* Guests Input */}
              <div className="col-span-1">
                <input
                  type="number"
                  className={`w-full p-3 border rounded-md ${
                    errors.guests ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Guests"
                  value={guests}
                  min="1"
                  onChange={(e) => setGuests(Number(e.target.value))}
                />
                {errors.guests && <p className="text-red-500 text-sm mt-1">{errors.guests}</p>}
              </div>

              {/* Rooms Input */}
              <div className="col-span-1">
                <input
                  type="number"
                  className={`w-full p-3 border rounded-md ${
                    errors.rooms ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Rooms"
                  value={rooms}
                  min="1"
                  onChange={(e) => setRooms(Number(e.target.value))}
                />
                {errors.rooms && <p className="text-red-500 text-sm mt-1">{errors.rooms}</p>}
              </div>

              {/* Search Button */}
              <div className="col-span-1">
                <button
                  className={`w-full bg-green-500 text-white p-3 rounded-md hover:bg-green-600 transition ${
                    Object.keys(errors).length > 0 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  onClick={handleSearch}
                  disabled={Object.keys(errors).length > 0}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the component remains the same */}
      <div className="py-10 flex flex-col items-center gap-6">
        <Image
          src="/images/banner2.jpg"
          alt="banner2"
          width={1300}
          height={700}
          className="rounded-md shadow-lg"
        />
      </div>

      <div className="flex flex-col items-center py-10 bg-gray-200 text-black text-center rounded-md shadow-lg mx-4">
        <p className="text-lg font-semibold">Get access to exclusive deals</p>
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <input
            type="email"
            className="p-3 border border-gray-300 rounded-md w-72"
            placeholder="Enter your email"
          />
          <button className="bg-orange-600 text-white p-3 rounded-md w-40 hover:bg-orange-700 transition">
            Notify Me
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 p-6 md:p-20 bg-gray-100 shadow-lg">
        <Image
          src="/images/banner2.jpg"
          width={700}
          height={500}
          alt="banner4"
          className="rounded-md"
          loading="lazy"
        />
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold">
            There&apos;s an Glitz Hotels around. Always.
          </h1>
          <p className="text-gray-500 mt-4">
            More Destinations. More Ease. More Affordable.
          </p>
          <div className="flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start gap-6 mt-6">
            <div>
              <p className="text-2xl md:text-3xl font-bold">35+</p>
              <p className="text-gray-500">Countries</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold">174,000+</p>
              <p className="text-gray-500">Hotels & Homes</p>
            </div>
          </div>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-6">
            <li>
              <a href="#" className="text-blue-500">
                Indonesia
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500">
                Malaysia
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500">
                Denmark
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500">
                US
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500">
                UK
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500">
                Netherlands
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}