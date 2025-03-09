'use client';
import Image from 'next/image';
import React from "react";

const packages = [
  {
    id: 1,
    image: "/images/room3.avif", // Replace with actual image path
    title: "Royal Heritage Haveli Jaipur, Top-Rated Boutique",
    oldPrice: "₹ 21,999",
    newPrice: "₹ 17,999",
    rating: "4.5",
  },
  {
    id: 2,
    image: "/images/room1.jpg",
    title: "Hard Rock Hotel Glamorous Hard Rock Goa",
    oldPrice: "₹ 25,999",
    newPrice: "₹ 24,999",
    rating: "4.8",
  },
  {
    id: 3,
    image: "/images/room2.avif",
    title: "Radisson Jodhpur - Royal Jodhpur Radiance",
    oldPrice: "₹ 16,999",
    newPrice: "₹ 14,499",
    rating: "4.7",
  },
];

const TrendingPackages = () => {
  return (
    <section className="py-12 px-4 bg-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-lg text-gray-600">Our</h2>
        <h1 className="text-3xl font-bold text-gray-800">Trending Packages</h1>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all"
          >
            <Image src={pkg.image} alt={pkg.title} width={400} height={300} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">{pkg.title}</h2>
              <div className="flex justify-between items-center mt-2">
                <div>
                  <p className="text-sm line-through text-gray-500">{pkg.oldPrice}</p>
                  <p className="text-xl font-bold text-orange-600">{pkg.newPrice}</p>
                </div>
                <span className=" text-black text-sm px-3 py-1 rounded-lg">⭐ {pkg.rating}</span>
              </div>
              <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
           Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingPackages;
