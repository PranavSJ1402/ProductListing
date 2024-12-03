import React from "react";

const Footer = () => {
  return (
    <div className="bg-purple-600 text-white py-8 mt-8" id="footer">
      <div className="flex justify-between items-start px-10">
        {/* Left Section */}
        <div className="w-1/3">
          <h3 className="text-white-400 text-3xl font-sans">ShopNest</h3>
          <p className="text-white text-justify mt-2">
            From our store to your home, we are committed to providing a smooth
            and delightful shopping experience.
          </p>
          <div className="flex items-center mt-4">
            <img
              src="/public/facebook_icon.png"
              alt="Facebook"
              className="w-8 h-8 mx-2 cursor-pointer"
            />
            <img
              src="/public/linkedin_icon.png"
              alt="LinkedIn"
              className="w-8 h-8 mx-2 cursor-pointer"
            />
            <img
              src="/public/twitter_icon.png"
              alt="Twitter"
              className="w-8 h-8 mx-2 cursor-pointer"
            />
          </div>
        </div>

        {/* Center Section */}
        <div className="w-1/3 ml-20">
          <h2 className="text-white text-lg mb-2">COMPANY</h2>
          <ul className="list-none p-0 m-0">
            <li className="mb-2 cursor-pointer hover:text-white-400">Home</li>
            <li className="mb-2 cursor-pointer hover:text-white-400">About</li>
            <li className="mb-2 cursor-pointer hover:text-white-400 bold ">
              Delivery
            </li>
            <li className="mb-2 cursor-pointer hover:text-white-400">
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="w-1/3">
          <h2 className="text-white text-lg mb-4">GET IN TOUCH</h2>
          <ul className="list-none p-0 m-0">
            <li className="mb-2">+91 1234567890</li>
            <li className="mb-2">contact@shopnest.com</li>
          </ul>
        </div>
      </div>

      <hr className="border-t border-purple-400 my-6" />

      <p className="text-center text-sm text-white">
        &copy; 2024 ShopNest.com - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
