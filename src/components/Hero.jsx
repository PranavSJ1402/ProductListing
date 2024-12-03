import React from 'react';
import bannerimg from "../../public/New folder/sale.jpeg"

const Hero = () => {
  return (
    <div className="flex items-center justify-between p-6 bg-white-100">

      <div className="flex-1 pl-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
          Winter Sale - Up to <span className='font-bold text-purple-800'>50% </span>Off!
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-6">
          Grab the best deals on electronics, fashion, and more.
        </p>
        <button className="px-8 py-3 bg-purple-600 text-white text-lg font-semibold rounded-lg hover:bg-purple-700 transition-colors">
          Shop Now
        </button>
      </div>
      <div className="flex-1">
        <img
          src={bannerimg}
          alt="Promotional Banner - Winter Sale"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    </div>
  );
}

export default Hero;
