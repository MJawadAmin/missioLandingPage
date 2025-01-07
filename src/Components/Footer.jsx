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
      <div className="absolute top-0 lg:top-[-10px] rounded-xl left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col w-[90%] sm:w-[700px] lg:w-[1100px] h-auto lg:h-[242px] bg-[rgb(2,100,126)] py-8 px-4">
        <div className="absolute bottom-0 right-0 lg:block hidden">
          <img src={HandHeart} alt="" />
        </div>
        <div className="ml-8 sm:ml-16 lg:ml-28">
          <h2 className="text-white text-xl lg:text-4xl mb-4">Subscribe to our Newsletter</h2>
          <div className="flex w-full">
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-full sm:w-[450px] lg:w-[503px] h-[40px] lg:h-[70px] px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <button className="px-6 py-2 bg-white text-teal-700 font-semibold rounded-r-md hover:bg-gray-200">
              Send
            </button>
          </div>
        </div>
      </div>

      <div className="absolute top-28 left-0">
        <img src={TopLeft} alt="Top Left Decoration" className="w-[80px] sm:w-[120px] lg:w-auto" />
      </div>
      <div className="absolute top-32 right-0">
        <img src={TopRight} alt="Top Right Decoration" className="w-[80px] sm:w-[120px] lg:w-auto" />
      </div>
      <div className="absolute bottom-0 left-0">
        <img src={BottomRight} alt="Bottom Right Decoration" className="w-[80px] sm:w-[120px] lg:w-auto" />
      </div>
      <div className="absolute bottom-0 right-0">
        <img src={BottomLeft} alt="Bottom Left Decoration" className="w-[80px] sm:w-[120px] lg:w-auto" />
      </div>

      {/* Footer Content */}
      <div className=" w-full flex  justify-between  px-6 pt-48 lg:px-32 items-center">
        {/* Left Section */}
        <div className="w-full flex flex-row  lg:w-full">
            <div className="bg-transparent flex items-center gap-4 mb-4 flex-col lg:w-1/4 ">
              <img src={Missio} alt="Logo" className="w-[120px] sm:w-[150px] lg:w-auto" />
             <div className=''>
              <p className="text-sm">
          Missio exists to empower small and medium-sized organizations by providing innovative, intuitive software solutions that simplify donor engagement
          </p>           
           </div>
          </div>
         
          {/* Middle Section */}
        <div className="flex flex-col lg:flex-row  lg:ml-44  justify-between  w-full ">
          {/* Links */}
          <div className=" ">
            <h2 className="font-bold mb-4 text-2xl">Our Links</h2>
            <ul className="space-y-2">
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
          <div className="w-full lg:ml-44 ">
            <h2 className="font-bold mb-4">Socials</h2>
            <ul className="space-y-2">
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
<div className="w-full lg:ml-44 ">
            <h2 className="font-bold mb-4 text-center lg:text-left">Address</h2>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-2">
                <span>
                  <img src={LocationImage} alt="" />
                </span>
                373 Broadway Suite B17, New York, New York 10013
              </li>
              <li className="flex items-start gap-2">
                <span className="material-icons-outlined">
                  <img src={Email} alt="" />
                </span>
                missio@missio.io
              </li>
              <li className="flex items-start gap-2">
                <span className="material-icons-outlined">
                  <img src={Call} alt="" />
                </span>
                (844) 568-0941
              </li>
            </ul>
          </div>
        </div>

       

          
        </div>
      </div>
    </div>
  );
};

export default Footer;
