import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import { format } from "date-fns";
import { useRouter } from "next/router";



const BookingCard = ({ checkIn, checkOut, guests, hotel,rooms }: any) => {
  const router = useRouter();
  const [isBooked, setIsBooked] = useState(false);



  const formattedCheckIn = format(new Date(checkIn ?? "2023-12-31"), "EEE, MMM d, yyyy");
  const formattedCheckOut = format(new Date(checkOut ?? "2024-01-07"), "EEE, MMM d, yyyy");

  const handleBooking = () => {

    // console.log("Selected hotel: booking",checkIn, checkOut, guests,rooms);
    router.push({
      pathname: "/viewdetails",
      query: {
        hotel: JSON.stringify(hotel),
        checkIn,
        checkOut,
        guests,
        rooms
      },
    });

    // setIsBooked(true);
  };
  return (
    <div className="flex justify-center items-center min-h-screen  p-4">
      <div className="max-w-md w-full bg-white p-6 rounded-2xl shadow-lg h-screen justify-center items-center">
        {isBooked ? (
          <div className="text-center flex flex-col items-center pt-52">
            <CheckCircle className="text-green-500 w-16 h-16 mx-auto" />
            <h2 className="text-2xl font-bold text-gray-800 mt-4 ">
              Your room has been successfully booked!
            </h2>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-gray-800">
            ₹{hotel?.pricePerNight?? 'NA'}
              {/* <span className="line-through text-gray-500 text-lg">₹4612</span>{" "} */}
              {/* <span className="text-yellow-500 text-lg">73% off</span> */}
            </h2>
            {/* <p className="text-gray-600 text-sm">+ taxes & fees: ₹219</p> */}

            <div className="border rounded-lg p-4 mt-4">
              <p className="font-medium">
                {formattedCheckIn?? 'NA'} - {formattedCheckOut?? 'NA'}
              </p>
              <p className="text-gray-600 text-sm">{rooms ??1} Room, {guests??1 } Guest</p>
            </div>

            {/* <div className="border rounded-lg p-4 mt-4 flex justify-between items-center">
              <p className="font-medium">Classic</p>
              <button className="text-red-500">✏️</button>
            </div>

            <div className="border rounded-lg p-4 mt-4 flex justify-between items-center bg-green-100">
              <p className="text-green-700 font-medium">-₹1792</p>
            </div>

            <div className="mt-4 flex justify-between">
              <p className="text-gray-600">Your savings</p>
              <p className="font-medium">₹1792</p>
            </div> */}

            <div className="mt-2 flex justify-between">
              <p className="text-gray-600">Total price</p>
              <p className="font-bold text-lg">₹{hotel?.pricePerNight*rooms}</p>
            </div>

            <button
              className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-bold text-lg"
              onClick={handleBooking}
            >
              Continue to Book
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default BookingCard;