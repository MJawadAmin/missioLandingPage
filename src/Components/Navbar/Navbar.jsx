import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import Facebook from "../../assets/Facebook F.png";
import Twitter from "../../assets/Twitter.png/";
import Linedin from "../../assets/LinkedIn 2.png";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="flex flex-col">
          {/* Top Bar */}
          <div className="h-auto lg:h-[70px] bg-[#02647E] flex flex-col sm:flex-row items-center text-gray-200 px-4 sm:px-8">
            <h1 className="text-sm sm:text-base sm:ml-[86px] mb-2 sm:mb-0">
              Email: Missio@missio.io
            </h1>
            <h1 className="flex-1 text-center text-base sm:text-2xl">
              Welcome to Missio
            </h1>
            <div className="flex flex-row gap-3 mt-2 sm:mt-0 sm:mr-24 items-center">
              <h1 className="text-sm sm:text-lg">Follow:</h1>
              <a
                href="#"
                className="w-[30px] sm:w-[34px] h-[30px] sm:h-[33.86px] bg-[rgb(75,139,156)] rounded-md flex items-center justify-center"
              >
                <img src={Facebook} alt="Facebook" className="w-[16px] sm:w-[20px] h-[16px] sm:h-[20px]" />
              </a>
              <a
                href="#"
                className="w-[30px] sm:w-[34px] h-[30px] sm:h-[33.86px] bg-[rgb(75,139,156)] rounded-md flex items-center justify-center"
              >
                <img src={Twitter} alt="Twitter" className="w-[16px] sm:w-[20px] h-[16px] sm:h-[20px]" />
              </a>
              <a
                href="#"
                className="w-[30px] sm:w-[34px] h-[30px] sm:h-[33.86px] bg-[rgb(75,139,156)] rounded-md flex items-center justify-center"
              >
                <img src={Linedin} alt="LinkedIn" className="w-[16px] sm:w-[20px] h-[16px] sm:h-[20px]" />
              </a>
            </div>
          </div>

          {/* Main Navbar */}
          <div className="bg-white border-t border-gray-200 h-auto sm:h-[158px] flex flex-col sm:flex-row items-center sm:justify-between px-4 sm:px-8 py-4 relative">
            {/* Logo */}
            <div className="mb-4 sm:mb-0">
              <img src={Logo} alt="Logo" className="w-[180px] sm:w-[240px] h-auto sm:h-[84px] mx-auto sm:ml-[80px]" />
            </div>

            {/* Hamburger Icon */}
            <div className="sm:hidden absolute top-5 right-5">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <HiMenuAlt3 className="text-3xl text-[#02647E]" />
              </button>
            </div>

            {/* Navigation Links */}
            <ul
              className={`${
                isMenuOpen ? "flex" : "hidden"
              } flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 lg:space-x-14 text-sm sm:text-lg sm:block`}
            >
              <li className="hover:text-[#02647E] cursor-pointer">Home</li>
              <li className="hover:text-[#02647E] cursor-pointer">About Us</li>
              <li className="hover:text-[#02647E] cursor-pointer">Solutions</li>
              <li className="hover:text-[#02647E] cursor-pointer">Industries</li>
              <li className="hover:text-[#02647E] cursor-pointer">Blogs</li>
              <li className="hover:text-[#02647E] cursor-pointer">Contact Us</li>
            </ul>

            {/* Button */}
            <div
              className={`${
                isMenuOpen ? "flex" : "hidden"
              } mt-4 sm:mt-0 sm:block`}
            >
              <button className="bg-[rgb(2,100,126)] w-[150px] sm:w-[200px] h-[50px] sm:h-[69px] rounded-full text-gray-100 text-sm sm:text-base font-semibold hover:bg-teal-600">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
