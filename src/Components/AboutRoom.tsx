import { Star, CheckCircle } from "lucide-react";

export default function HotelCard({hotel}:any) {

 
  return (
    <div className=" mx-auto p-6 bg-white  shadow-lg border w-full sm:p-8 md:p-10">
      <h1 className="text-2xl font-bold text-gray-900 text-center sm:text-left">
        {/* Super Townhouse Sector 38 Gurgaon Near Medanta */}
        {hotel?.name}
      </h1>
      <p className="text-gray-500 text-sm text-center sm:text-left">
        {/* Guru Haridas Marg, Sector 38, Near Medanta Hospital, Subhash Chowk Corporate Office, Gurgaon */}
      {hotel?.address}
      </p>

      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-3">
        <div className="bg-gray-200 px-3 py-1 rounded-md text-xs font-medium flex items-center">
          <CheckCircle className="w-4 h-4 text-gray-600 mr-1" /> Company-Serviced
        </div>
        {/* <div className="bg-black text-white px-3 py-1 rounded-md text-xs font-medium">
          WIZARD MEMBER
        </div> */}
      </div>

      <div className="mt-2 text-gray-700 text-sm text-center sm:text-left">
        <span className="font-semibold">5.0</span> • Check-in rating › Delightful experience
      </div>

      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-4">
        <div className="bg-green-600 text-white px-3 py-1 rounded-md text-sm flex items-center gap-1">
          <Star className="w-4 h-4" /> 4.5
        </div>
        <span className="text-gray-600 text-sm">509 Ratings</span>
      </div>

      <button className="mt-4 bg-orange-100 text-orange-600 px-4 py-2 rounded-md text-sm font-medium w-full sm:w-auto">
        Company Serviced
      </button>

      <h2 className="mt-6 text-lg font-semibold text-center sm:text-left">Amenities</h2>
      <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-2 text-gray-600 text-sm">
        {hotel?.amenities?.map((amenity:any, idx:any) => (
        // <div className="flex items-center gap-1 line-through">{amenity}</div>
        <div className="flex items-center gap-1">{amenity}</div>
        // <div className="flex items-center gap-1">TV</div>
        ))}
      </div>

      <button className="mt-2 text-red-600 text-sm font-medium w-full sm:w-auto">
        Show More
      </button>

      <h2 className="mt-6 text-lg font-semibold text-center sm:text-left">About this Glitz</h2>
      <p className="text-gray-600 text-sm text-center sm:text-left">
        Affordable hotel at prime location.
      </p>
    </div>
  );
}