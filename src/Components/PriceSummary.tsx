
import { CheckCircle } from "lucide-react";
import { useRouter } from "next/router";

export default function PriceSummary({price,checkIn,checkOut,guests,rooms,hotel}:any) {
    const router = useRouter();

  const handleCheckout = () => {
    router.push({
      pathname: "/checkout",
      query: {
        hotel: JSON.stringify(hotel),
        checkIn,
        checkOut,
        guests,
        rooms
      },
    });

  }
  return (
    <div className="p-6 w-full bg-white shadow-md rounded-lg border">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Price Summary</h2>
        <a href="#" className="text-blue-500 text-sm">View Full Breakup</a>
      </div>
      <div className="space-y-2 border-b pb-3">
        <div className="flex justify-between text-gray-700">
          <span>Day Use</span>
          <span className="font-medium">₹{price}</span>
        </div>
        {/* <div className="flex justify-between text-gray-700">
          <span>Total Discount</span>
          <span className="text-green-600">-₹728</span>
        </div> */}
        {/* <div className="flex items-center text-green-600 text-sm">
          <CheckCircle className="h-4 w-4 mr-1" />
          <span className="font-medium">GETSETGO applied</span>
        </div> */}
      </div>
      {/* <div className="space-y-2 border-b py-3">
        <div className="flex justify-between text-gray-700">
          <span>Price after Discount</span>
          <span className="font-medium">₹2,272</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Taxes & Service Fees</span>
          <span className="font-medium">₹903</span>
        </div>
      </div> */}
      <div className="flex justify-between text-lg font-bold py-3">
        <span>Total Amount to be paid</span>
        <span>₹{price}</span>
      </div>
      <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded-md flex justify-center items-center" onClick={handleCheckout}>
        Book Now
      </button>
    </div>
  );
}
