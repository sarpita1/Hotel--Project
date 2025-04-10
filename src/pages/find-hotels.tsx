
import Navbar from '@/Components/Navbar'
import Booking from '@/Components/HotelList'
import Footer from '@/Components/Footer'
import Footer2 from '@/Components/Footer2'
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import HotelList from '@/Components/HotelList';

export default function booking() {
  //  const router = useRouter();
    // const { city, checkIn, checkOut, guests }:any = router.query;
    // const [hotels, setHotels] = useState([]);
    // const [loading, setLoading] = useState(true);
    // //console.log("cityvvvv",city)
  return (
    <div>
        <Navbar/>
        <HotelList/>
        <Footer/>
        <Footer2/>
    </div>
  )
}
