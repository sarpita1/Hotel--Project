import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const destinations = [
  {
    image: "/images/room7.jpg", // Replace with actual image path
    title: "MUMBAI FROM DELHI",
    price: "₹ 5,999",
  },
  {
    image: "/images/room1.jpg", // Replace with actual image path
    title: "GOA FROM DELHI",
    price: "₹ 8,999",
  },
  {
    image: "/images/room10.jpg", // Replace with actual image path
    title: "KERALA FROM DELHI",
    price: "₹ 9,999",
  },
];

const DestinationsCarousel = () => {
  const router = useRouter();

  const handleBookNow = (destination:any) => {
    router.push({
      pathname: "/checkout",
      query: { destination: destination.title, price: destination.price },
    });
  };

  return (
    <div className="w-full py-10 px-5 max-w-5xl mx-auto text-center">
      <h2 className="text-xl md:text-3xl font-semibold mb-6">Top Destinations in India</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((destination, index) => (
          <div key={index} className="bg-white shadow-lg rounded-2xl overflow-hidden">
            <Image
                             src={destination.image}
                              alt={destination.title}
                              width={200}
                              height={150}
                              className="w-full h-60 object-cover" 
                            />
            {/* <img src={destination.image} alt={destination.title} className="w-full h-60 object-cover" /> */}
            <div className="p-4">
              <h3 className="text-lg font-semibold">{destination.title}</h3>
              <p className="text-gray-600">{destination.price}</p>
              <button
                onClick={() => handleBookNow(destination)}
                className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationsCarousel;
