"use client";
import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Advantages from "@/Components/Advantages";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";

type Hotel = {
  name: string;
  address: string;
  pricePerNight: number;
  description: string;
  city: string;
  amenities: string[];
  images: string[];
};

export default function RoomList() {
  const router = useRouter();
  const { hotel, checkIn, checkOut, guests } = router.query;

  // Parse the hotel object from the query parameter
  const selectedHotel: Hotel | null = hotel ? JSON.parse(hotel as string) : null;

  if (!selectedHotel) {
    return <div className="text-center py-8">No hotel selected.</div>;
  }

  const handleBooking = (roomId: any) => {
    router.push(`/checkout?roomId=${roomId}`);
  };

  return (
    <div className="bg-gray-50">
      <Navbar />
      <div className="container mx-auto p-4 flex">
        <div className="flex-1 p-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-4 mt-10 w-full h-fit p-4 rounded-lg shadow-lg">
            <div className="col-span-1 hidden lg:block"></div>
            <div className="col-span-4 mx-auto w-full p-4 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="col-span-2 flex flex-col items-center">
                  <Image
                    src={"/images/room1.jpg"}
                    width={380}
                    height={250}
                    alt="room-main"
                    className="rounded-lg w-full"
                  />
                  <div className="flex flex-wrap justify-center gap-2 mt-2">
                    {selectedHotel.images.map((img, index) => (
                      <Image
                        key={index}
                        src={img}
                        width={65}
                        height={50}
                        alt={`room-thumbnail-${index}`}
                        className="rounded-md shadow-md hover:scale-125 transition-transform duration-300"
                      />
                    ))}
                  </div>
                </div>
                <div className="col-span-3 w-full text-justify">
                  <p className="font-bold text-2xl pl-4">{selectedHotel.name}</p>
                  <p className="pl-4 text-xl">{selectedHotel.address}</p>
                  <div className="flex items-center ml-4 mt-4 flex-wrap">
                    <span className="flex items-center bg-green-500 text-white px-2 py-1 rounded-md">
                      4.5
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4 ml-1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <p className="ml-2 text-sm">(97 Ratings)</p>
                    <p className="mx-2 text-lg">•</p>
                    <p className="text-sm">Very Good</p>
                  </div>
                  <div className="flex flex-wrap gap-4 pl-4 mt-4">
                    {selectedHotel.amenities.map((feature, index) => (
                      <div key={index} className="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                        <p>{feature}</p>
                      </div>
                    ))}
                    <p className="ml-2 text-sm">
                      +{Math.max(0, 5 - selectedHotel.amenities.length)} more
                    </p>
                  </div>
                  <div className="mt-6 flex justify-start pl-4">
                    <button
                      onClick={() => handleBooking(1)} // Replace with actual room ID logic
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Advantages />
      <Footer />
    </div>
  );
}