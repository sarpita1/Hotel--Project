import React from 'react';
import ViewDetails from '@/Components/ViewDetails';
import GuestDetails from '@/Components/GuestDetails';
import PriceSummary from '@/Components/PriceSummary';
import Offers from '@/Components/Offers';
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { format } from "date-fns";

export default function ViewDetailsPage() {
  const searchParams = useSearchParams();
  const [hotel, setHotel] = useState<any>(null);
  const [checkIn, setCheckIn] = useState<string | null>(null);
  const [checkOut, setCheckOut] = useState<string | null>(null);
  const [guests, setGuests] = useState<string | null>(null);
  const [rooms, setRooms] = useState<string | null>(null);

  useEffect(() => {
    // Extract query parameters
    const hotelParam = searchParams.get("hotel");
    const checkInParam = searchParams.get("checkIn");
    const checkOutParam = searchParams.get("checkOut");
    const guestsParam = searchParams.get("guests");
    const roomsParam = searchParams.get("rooms");

    if (hotelParam) {
      // Parse the hotel object from the query string
      const parsedHotel = JSON.parse(hotelParam);
      setHotel(parsedHotel);
    }

    setCheckIn(checkInParam);
    setCheckOut(checkOutParam);
    setGuests(guestsParam);
    setRooms(roomsParam);
  }, [searchParams]);

  console.log("first", hotel, checkIn, checkOut, guests, rooms);

  const formattedCheckIn = format(new Date(checkIn ?? "2023-12-31"), "EEE, MMM d, yyyy");
    const formattedCheckOut = format(new Date(checkOut ?? "2024-01-07"), "EEE, MMM d, yyyy");
  return (
    <div className='container mx-auto px-4 bg-gray-50 '>
      <div className='flex flex-col lg:flex-row gap-8'>
        {/* Left Section - 60% Width */}
        <div className='lg:w-4/5 w-full py-4 '>
          <ViewDetails />
          <GuestDetails hotel={hotel}/>
        </div>
        
        {/* Right Section - 40% Width */}
        <div className='lg:w-2/5 w-full  py-4 space-y-3'>
          <PriceSummary price={hotel?.pricePerNight} checkIn={checkIn} checkOut={checkOut} guests={guests} rooms={rooms} hotel={hotel}/>
          {/* <Offers /> */}
        </div>
      </div>
    </div>
  );
}
