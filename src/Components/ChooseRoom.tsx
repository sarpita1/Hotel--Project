import { CheckCircle } from "lucide-react";
import Image from "next/image";

export default function RoomCard() {
  return (
    <div className="w-full  mx-auto border-none rounded-lg shadow-md p-4 bg-white">
      <h2 className=" text-2xl font-extrabold">Choose your room</h2>
      <div className="mt-3 border rounded-lg overflow-hidden">
        <div className="bg-gray-600 px-4 py-1 flex items-center text-sm font-medium">
          <span className="text-yellow-600">⭐ SELECTED CATEGORY</span>
        </div>
        <div className="p-4 flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-bold flex items-center gap-1">
              Classic <CheckCircle className="text-green-600" size={18} />
            </h3>
            <p className="text-sm text-gray-600">Room size: 9 sqm</p>
            <div className="flex items-center gap-4 mt-2 text-gray-600">
              <div className="flex items-center gap-1">
                <span className="text-sm">❄️ AC</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-sm">🖥️ TV</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-32 h-24 overflow-hidden rounded-md border">
          <Image
      src="/images/room1.jpg" // Update this with your image path
      alt="Room Image"
      width={500} // Set appropriate width
      height={300} // Set appropriate height
      className="w-full h-full object-cover"
    />
          </div>
        </div>
        <div className="p-4 border-t flex flex-col md:flex-row justify-between items-center gap-2">
          <div>
            <p className="text-xl font-bold text-gray-800">
              ₹1218 <span className="line-through text-gray-400 text-sm">₹4612</span>
            </p>
            <p className="text-xs text-gray-500">+ ₹219 taxes & fee</p>
          </div>
          <button className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-lg text-sm font-semibold border border-green-600 w-full md:w-auto">
            ✅ SELECTED
          </button>
        </div>
      </div>
    </div>
  );
}
