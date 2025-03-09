import React from "react";

const SkaabaAdvantages: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 md:px-12 lg:px-24">
      <div className="text-center mb-10">
        <p className="text-gray-600">Your Advantages</p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">Why Choose Glitz Hotels</h2>
        <div className="w-16 h-1 bg-yellow-500 mx-auto mt-3"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <div className="flex items-start space-x-4">
          <span className="text-purple-600 text-3xl">🛡️</span>
          <div>
            <h3 className="text-lg font-semibold">Easy and reliable online transactions</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <span className="text-purple-600 text-3xl">📡</span>
          <div>
            <h3 className="text-lg font-semibold">Real-time booking</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <span className="text-yellow-500 text-3xl">💳</span>
          <div>
            <h3 className="text-lg font-semibold">Price match guarantee</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <span className="text-yellow-500 text-3xl">🏢</span>
          <div>
            <h3 className="text-lg font-semibold">More than 2000+ company partners</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkaabaAdvantages;
