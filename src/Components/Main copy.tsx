"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useBooking } from "@/context/BookingContext";

export default function Main() {
  const router = useRouter();
  const { city, setCity, checkIn, setCheckIn, checkOut, setCheckOut, guests, setGuests ,rooms, setRooms} = useBooking();

  const handleSearch = () => {
    // Navigate to the booking page without query parameters
    router.push("/booking");
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

          {/* <div className="bg-red-500 text-white p-4">Test Tailwind</div> */}

          <div className="flex justify-center mt-6">
            <div className="grid grid-cols-1 md:grid-cols-7 w-full">
              <input
                type="text"
                className="col-span-2 p-3 border"
                placeholder="Enter City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <input
                type="text"
                className="col-span-1 p-3 border"
                placeholder="Check-in"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
              />
              <input
                type="text"
                className="col-span-1 p-3 border"
                placeholder="Check-out"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
              />
              <input
                type="number"
                className="col-span-1 p-3 border"
                placeholder="Guests"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
              />

              <input
                type="number"
                className="col-span-1 p-3 border"
                placeholder="Rooms"
                value={rooms}
                onChange={(e) => setRooms(Number(e.target.value))}
              />
              <button
                className="col-span-1 bg-green-500 text-white p-3 hover:bg-green-600 transition"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className="py-10 flex flex-col items-center gap-6">
        <Image
          src="/images/banner2.jpg"
          alt="banner2"
          width={700}
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
