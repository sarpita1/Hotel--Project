import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export default function Home() {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const rooms = [
    {
      id: 1,
      name: "Deluxe Room",
      images: ["/images/room10.jpg", "/images/room2.avif", "/images/room3.avif"],
      price: "$50/night",
    },
  ];

  return (
    <>
    <Navbar/>
   
    <div className="bg-gray-200 text-black min-h-6/12">
      <main className="container mx-auto p-4">
        <h2 className="text-xl font-semibold mb-4">Available Rooms</h2>
        <div className="w-full">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white p-4 rounded-lg shadow-lg w-full">
              <Swiper navigation={true} modules={[Navigation]} className="rounded-lg w-full h-96">
                {room.images.map((image, index) => (
                  <SwiperSlide key={index} className="w-full h-full flex items-center justify-center">
                    <div className="relative w-full h-96">
                      <Image
                        src={image}
                        alt={`${room.name} image ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <h3 className="text-lg font-bold mt-2">{room.name}</h3>
              <p className="text-gray-700">{room.price}</p>
              <button
                onClick={() => setSelectedRoom(room)}
                className="mt-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </main>
      {selectedRoom && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-lg font-bold">Booking {selectedRoom.name}</h2>
            <p className="text-gray-700">Price: {selectedRoom.price}</p>
            <button
              onClick={() => setSelectedRoom(null)}
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
}
