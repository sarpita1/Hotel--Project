import React from "react";

const Loader = () => {
    return (
      <div className="flex justify-center items-center h-screen">
        <div
          className="animate-spin rounded-full h-16 w-16 border-4 border-t-purple-500 border-r-blue-500 border-b-green-500 border-l-yellow-500"
          style={{ animationDuration: "1.5s" }}
        ></div>
        <p className="ml-4 text-gray-700 font-semibold">Loading hotels...</p>
      </div>
    );
  };

export default Loader;