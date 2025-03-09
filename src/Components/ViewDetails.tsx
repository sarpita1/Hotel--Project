import { FaMapMarkerAlt, FaUsers } from "react-icons/fa";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { format } from "date-fns";
// import { IoMdCheckmarkCircle } from "react-icons/io";

export default function PropertyInfo() {
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



  const formattedCheckIn = format(new Date(checkIn ?? "2023-12-31"), "EEE, MMM d, yyyy");
    const formattedCheckOut = format(new Date(checkOut ?? "2024-01-07"), "EEE, MMM d, yyyy");

  return (
    <div className="   flex justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full ">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          PROPERTY INFO
        </h2>
        <div className="flex flex-col md:flex-row gap-4">
          <img
            src="images/room1.jpg"
            alt="Hotel Image"
            className="w-full md:w-40 h-32 object-cover rounded-lg"
          />
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-800">
              {hotel?.name ?? "NA"}
            </h3>
            <p className="flex items-center text-gray-600 text-sm mt-1">
              <FaMapMarkerAlt className="mr-2 text-gray-500" />
              {hotel?.address ?? "NA"}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-md">
                4.5/5
              </span>
              <span className="text-gray-600 text-sm">170 Ratings</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-700 mt-4 border-t pt-4">
          <div>
            <p className="font-semibold">Check In</p>
            <p>{formattedCheckIn} - 10 AM</p>
          </div>
          <div>
            <p className="font-semibold">Check Out</p>
            <p>{formattedCheckOut} - 5 PM</p>
          </div>
          <div>
            <p className="font-semibold">Guests</p>
            <p>{guests?? 1} Guests | {rooms?? 1} Room</p>
          </div>
        </div>
        <div className="mt-6 p-4 border rounded-lg bg-gray-50">
          <h4 className="font-semibold text-lg text-gray-800">
            {rooms} Room for {guests} Adults
          </h4>
          <p className="text-green-600 text-sm">
            Great Choice! You are saving ₹{hotel?.pricePerNight}with your booking
          </p>
          <div className="mt-4 text-sm text-gray-700">
            <p className="font-medium">
              1 x Day Use Room 10 AM to 5 PM, Check-in and Check-out on same day
            </p>
            <p className="flex items-center gap-2 mt-2">
              <FaUsers className="text-gray-500" /> {guests} Adults
            </p>
            <p className="mt-1">Room Only</p>
            <p className="text-green-500 mt-1">
              Free Cancellation before {checkIn} 01:59 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
