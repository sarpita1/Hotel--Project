'use client';

import Image from 'next/image';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

const RoomCategory = () => {
  const roomCategories = [
    { name: 'Deluxe Room', description: 'Spacious and luxurious.', image: '/images/room10.jpg' },
    { name: 'Suite', description: 'Ultimate comfort and elegance.', image: '/images/room10.jpg' },
    { name: 'Standard Room', description: 'Cozy and affordable.', image: '/images/room10.jpg' },
  ];

  return (
    <>
      <Navbar />
      <div className="relative w-full min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-4 py-12 md:py-20 lg:py-24" style={{ backgroundImage: "url('/images/room10.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto text-white text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Explore Our Room Categories</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roomCategories.map((room, index) => (
              <div key={index} className="bg-white bg-opacity-20 p-6 rounded-2xl shadow-lg backdrop-blur-md transition-transform transform hover:scale-105">
                <Image 
                  src={room.image} 
                  alt={room.name} 
                  width={300} 
                  height={200} 
                  className="w-full h-40 object-cover rounded-xl" 
                />
                <h2 className="text-lg sm:text-xl font-semibold mt-4">{room.name}</h2>
                <p className="text-sm mt-2">{room.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RoomCategory;
