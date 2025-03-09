import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import BookNow from '@/Components/BookNow';
import ChooseRoom from "@/Components/ChooseRoom";
import AboutRoom from "@/Components/AboutRoom";


type Hotel = {
  name: string;
  address: string;
  pricePerNight: number;
  description: string;
  city: string;
  amenities: string[];
  images: string[];
};

export default function View() {
  const [selectedRoom, setSelectedRoom] = useState(null);
    const searchParams = useSearchParams();
    const [hotel, setHotel] = useState< any>(null);
    const [checkIn, setCheckIn] = useState<string | null>(null);
    const [checkOut, setCheckOut] = useState<string | null>(null);
    const [guests, setGuests] = useState<string | null>(null);

   useEffect(() => {
      // Extract query parameters
      const hotelParam = searchParams.get("hotel");
      const checkInParam = searchParams.get("checkIn");
      const checkOutParam = searchParams.get("checkOut");
      const guestsParam = searchParams.get("guests");
  
      if (hotelParam) {
        // Parse the hotel object from the query string
        const parsedHotel = JSON.parse(hotelParam);
        console.log("parsedHotel", parsedHotel);
        setHotel(parsedHotel);
      }
  
      setCheckIn(checkInParam);
      setCheckOut(checkOutParam);
      setGuests(guestsParam);
    }, [searchParams]);
  

  const rooms = [
    {
      id: 1,
      name: "Deluxe Room",
      images: ["/images/room10.jpg", "/images/room7.jpg", "/images/room10.jpg"],
      price: "$50/night",
    },
  ]; // <-- Ensure the array declaration ends properly

console.log(hotel)
  return (
    <>
      <Navbar />

      <div className="bg-gray-200 text-black ">
        <main className="container mx-auto">
          <div className="w-full">
            {/* {hotel.map((room:any) => ( */}
              <div key={hotel?._id} className="bg-white p-4 rounded-lg shadow-lg w-full">
                <Swiper
                  navigation={true}
                  loop={true}
                  modules={[Navigation, Autoplay]}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  className="rounded-lg w-full h-96"
                >
                  {hotel?.images?.map((image:any, index:any) => (
                    <SwiperSlide key={index} className="w-full h-full flex items-center justify-center">
                      <div className="relative w-full h-96">
                        <Image
                          src={image}
                          alt={`${hotel.name} image ${index + 1}`}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
            
              
              </div>
            {/* ))} */}
          </div>
        </main>

      
      </div>
      <>
  <div className="container mx-auto flex flex-col md:flex-row min-h-screen bg-white">
    {/* Left Section (60%) */}
    <div className="md:w-3/5 w-full flex flex-col">
      <AboutRoom hotel={hotel}/>
      <ChooseRoom />
    </div>

    {/* Right Section (40%) - Book Now */}
    <div className="md:w-2/5 w-full flex">
      <div className="w-full flex-grow">
        <BookNow />
      </div>
    </div>
  </div>
  <Footer />
</>



    </>
  );
}
