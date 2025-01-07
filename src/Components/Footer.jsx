import React from 'react';
import Missio from '../assets/1730134236.logo-dark 2.png';
import TopLeft from '../assets/Vector.png';
import TopRight from '../assets/TopRight.png';
import BottomLeft from '../assets/BottomLeft.png';
import BottomRight from '../assets/BottomRight.png';
import LocationImage from '../assets/FooterImages/Near Me.png';
import Email from '../assets/FooterImages/At sign.png';
import Call from '../assets/FooterImages/Phone.png';
import HandHeart from '../assets/FooterImages/HandHeart.png';

const Footer = () => {
  return (
    <div className="bg-[rgb(0,58,73)] text-white relative h-auto lg:h-[80vh]">
      {/* Background Decorations */}
      <div className="absolute top-10 lg:top-[-10px] rounded-xl left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col w-[90%] sm:w-[700px] lg:w-[1100px] h-auto lg:h-[242px] bg-[rgb(2,100,126)] py-8 px-4">
        <div className="absolute bottom-0 right-0 lg:block hidden">
          <img src={HandHeart} alt="" />
        </div>
        <div className="ml-4 sm:ml-8 lg:ml-28">
          <h2 className="text-white text-lg sm:text-xl lg:text-4xl mb-4">Subscribe to our Newsletter</h2>
          <div className="flex  w-full">
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-full sm:w-[300px] md:w-[450px] lg:w-[503px] h-[40px] lg:h-[70px] px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <button className=" px-6 py-2 bg-white text-teal-700 font-semibold rounded-r-md hover:bg-gray-200">
              Send
            </button>
          </div>
        </div>
      </div>

      <div className="absolute top-28 left-0">
        <img src={TopLeft} alt="Top Left Decoration" className="w-[60px] sm:w-[80px] lg:w-auto" />
      </div>
      <div className="absolute top-40 right-8">
        <img src={TopRight} alt="Top Right Decoration" className="w-[60px] sm:w-[80px] lg:w-auto" />
      </div>
      <div className="absolute bottom-0 left-0">
        <img src={BottomRight} alt="Bottom Right Decoration" className="w-[60px] sm:w-[80px] lg:w-auto" />
      </div>
      <div className="absolute bottom-0 right-0">
        <img src={BottomLeft} alt="Bottom Left Decoration" className="w-[60px] sm:w-[80px] lg:w-auto" />
      </div>

      {/* Footer Content */}
      <div className="w-full flex flex-wrap lg:flex-nowrap px-6 sm:px-8 lg:px-28 space-y-8 lg:space-y-0 space-x-0 lg:space-x-28 pt-48">
        {/* Left Section */}
        <div className="flex flex-col items-center lg:items-start space-y-5 w-full lg:w-3/5">
          <img src={Missio} alt="Logo" className="w-[100px] sm:w-[120px] lg:w-auto" />
          <p className="text-center lg:text-left px-4 lg:px-0">
            Missio exists to empower small and medium-sized organizations by providing innovative, intuitive software solutions that simplify donor engagement.
          </p>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col w-full sm:w-1/2 lg:w-1/3 space-y-5">
          <h2 className="text-[24px] sm:text-[28px] lg:text-[32px]">Our Links</h2>
          <ul className="space-y-2 sm:space-y-5">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Our Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Our Team
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="w-full sm:w-1/2 lg:w-1/3 space-y-5">
          <h2 className="text-[24px] sm:text-[28px] lg:text-[32px]">Socials</h2>
          <ul className="space-y-2 sm:space-y-5">
            <li>
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Address Section */}
        <div className="w-full lg:w-1/3 space-y-5">
          <h2 className="text-center lg:text-left text-[24px] sm:text-[28px] lg:text-[32px]">Address</h2>
          <ul className="space-y-5 text-sm">
            <li className="flex items-start gap-3">
              <img src={LocationImage} alt="Location" className="w-[30px] sm:w-[40px] lg:w-[41px]" />
              373 Broadway Suite B17, New York, New York 10013
            </li>
            <li className="flex items-start gap-3">
              <img src={Email} alt="Email" className="w-[30px] sm:w-[40px] lg:w-[44px]" />
              missio@missio.io
            </li>
            <li className="flex items-start gap-3">
              <img src={Call} alt="Phone" className="w-[30px] sm:w-[40px] lg:w-[49px]" />
              (844) 568-0941
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
