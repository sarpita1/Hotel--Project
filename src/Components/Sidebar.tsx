import { useState } from "react";

const Sidebar = () => {
  const [price, setPrice] = useState([385, 12382]);

  const handlePriceChange = (index:any, value:any) => {
    setPrice((prev) => {
      const newPrice = [...prev];
      newPrice[index] = Number(value);
      return newPrice;
    });
  };

  return (
    <div className="w-80 p-4 bg-white shadow-lg rounded-lg h-[880px]  overflow-y-auto lg:block hidden fixed lg:relative">
      <h2 className="text-2xl font-bold">Filters</h2>
      <div className="mt-4">
        <h3 className="font-semibold">Popular locations in Gurgaon</h3>
        <input
          type="text"
          placeholder="Search.."
          className="w-full p-2 mt-2 border rounded"
        />
        <div className="flex flex-wrap gap-2 mt-2">
          {["Huda City Center Metro", "Sector 14", "Gurgaon Bus Stand", "Iffco Chowk", "Medanta Hospital"].map(
            (location, index) => (
              <span key={index} className="px-3 py-1 bg-gray-200 rounded-full text-sm">
                {location}
              </span>
            )
          )}
        </div>
        <p className="text-red-500 cursor-pointer mt-2">+ View More</p>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold">Price</h3>
        <div className="flex flex-col gap-2">
          <input
            type="range"
            min="385"
            max="12382"
            value={price[0]}
            onChange={(e) => handlePriceChange(0, e.target.value)}
            className="w-full"
          />
         
        </div>
        <div className="flex justify-between text-gray-700">
          <span>₹{price[0]}</span>
          <span>₹{price[1]}</span>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold">Collections</h3>
        {["Family Glitz Hotelss", "For Group Travellers"].map((collection, index) => (
          <div key={index} className="flex items-center gap-2 mt-2">
            <input type="checkbox" className="form-checkbox" />
            <span>{collection}</span>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <h3 className="font-semibold">Categories</h3>
        {[
          { name: "Glitz Hotels Rooms", desc: "Super affordable stays with essential amenities" },
          { name: "Premium", desc: "Hotels at prime location and premium amenities" },
          { name: "Townhouse", desc: "Your friendly, premium neighbourhood hotel- Serviced by Glitz Hotels" },
          { name: "Flagship", desc: "Affordable hotels at Prime locations- Serviced by Glitz Hotels" },
          { name: "Home", desc: "Villas and apartments with extra space and privacy" },
        ].map((category, index) => (
          <div key={index} className="flex items-start gap-2 mt-2">
            <input type="checkbox" className="form-checkbox" />
            <div>
              <p className="font-medium">{category.name}</p>
              <p className="text-sm text-gray-600">{category.desc}</p>
            </div>
          </div>
        ))}
        <p className="text-red-500 cursor-pointer mt-2">+ View More</p>
      </div>
    </div>
  );
};

export default Sidebar;
