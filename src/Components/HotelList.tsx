"use client";
import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
import { useRouter } from "next/router";
import Image from "next/image";
import { useBooking } from "@/context/BookingContext";
import Loader from "./Common/Loader";

type Hotel = {
  name: string;
  address: string;
  pricePerNight: number;
  description: string;
  city: string;
  amenities: string[];
  images: string[];
  roomsAvailable: number;
};

export default function HotelList() {
  const router = useRouter();
  const { city, checkIn, checkOut, guests, rooms } = useBooking();
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);

  // Helper function to determine the MIME type based on the base64 string
  const getMimeType = (base64: any) => {
    if (base64.startsWith("/9j/")) {
      return "image/jpeg"; // JPEG
    } else if (base64.startsWith("iVBORw0KGgo")) {
      return "image/png"; // PNG
    } else if (base64.startsWith("R0lGODlh")) {
      return "image/gif"; // GIF
    } else if (base64.startsWith("UklGRg")) {
      return "image/webp"; // WebP
    } else if (base64.startsWith("PHN2Zy")) {
      return "image/svg+xml"; // SVG
    } else {
      return "image/jpeg"; // Default to JPEG if unknown
    }
  };

  useEffect(() => {
    if (city) {
      const fetchHotels = async () => {
        try {
          const response = await fetch(
            `http://localhost:3000/api/hotels?city=${encodeURIComponent(city)}`
          );
          const data = await response.json();
          setHotels(data);
        } catch (error) {
          console.error("Error fetching hotels:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchHotels();
    }
  }, [city]);

  const handleRoomSelection = (hotel: Hotel) => {
    //console.log("Selected hotel: booking", checkIn, checkOut, guests, rooms);
    router.push({
      pathname: "/view",
      query: {
        hotel: JSON.stringify(hotel),
        checkIn,
        checkOut,
        guests,
        rooms,
      },
    });
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-6xl mx-auto py-8">
        <h2 className="text-xl font-semibold text-gray-800">
          {city}: {hotels.length} properties found
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
          {hotels.map((hotel, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-4 rounded-lg flex flex-col sm:flex-row gap-4"
            >
              <div className="w-full sm:w-48">
                {/* Dynamically determine the MIME type based on the image data */}
                <Image
                  src={`data:${getMimeType(hotel.images[0])};base64,${
                    hotel.images[0]
                  }`} // Use the correct MIME type
                  alt={hotel.name}
                  width={200}
                  height={150}
                  className="rounded-lg object-cover w-full h-32 sm:h-full"
                  unoptimized
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900">
                  {hotel?.name}
                </h3>
                <p className="text-gray-600">{hotel.address}</p>
                <div className="flex flex-wrap gap-2 mt-2 text-green-600 text-sm">
                  {hotel.amenities.map((amenity, idx) => (
                    <span
                      key={idx}
                      className="bg-green-100 px-2 py-1 rounded-md"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
                <div className="mt-2 text-gray-500 line-through">
                  ₹{hotel?.pricePerNight}
                </div>
                <div className="text-lg font-bold text-orange-500">
                  ₹{hotel?.pricePerNight}
                </div>
                <button
                  className="mt-3 bg-orange-500 text-white px-4 py-2 rounded-md w-full sm:w-auto mr-2"
                  onClick={() => handleRoomSelection(hotel)} // Pass the hotel object
                >
                  View Details
                </button>

                <button
                  className={`mt-3 px-4 py-2 rounded-md w-full sm:w-auto ${
                    hotel?.roomsAvailable > 0
                      ? "bg-green-500 hover:bg-green-600" // Green for available rooms
                      : "bg-gray-400 cursor-not-allowed" // Gray for no rooms
                  } text-white`}
                  onClick={() =>
                    hotel?.roomsAvailable > 0 && handleRoomSelection(hotel)
                  } // Only allow click if rooms are available
                  disabled={hotel?.roomsAvailable <= 0} // Disable button if no rooms are available
                >
                  {hotel?.roomsAvailable > 0
                    ? "Book Room"
                    : "Rooms Not Available"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
