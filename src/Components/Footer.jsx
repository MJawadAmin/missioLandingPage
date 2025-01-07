import React from 'react';
import Missio from '../assets/1730134236.logo-dark 2.png';
import TopLeft from '../assets/Vector.png';
import TopRight from '../assets/TopRight.png';
import BottomLeft from '../assets/BottomLeft.png';
import BottomRight from '../assets/BottomRight.png';
import LocationImage from '../assets/FooterImages/Near Me.png'
import Email from '../assets/FooterImages/At sign.png'
import Call from '../assets/FooterImages/Phone.png'
import Newsletter from "./Newsletter";


const Footer = () => {
  return (
    <>
  
    <div className="bg-[rgb(0,58,73)] text-white py-10 relative h-auto lg:h-[50vh]">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0">
        <img src={TopLeft} alt="Top Left Decoration" className="w-[80px] sm:w-[120px] lg:w-auto" />
      </div>
      <div className="absolute top-0 right-0">
        <img src={TopRight} alt="Top Right Decoration" className="w-[80px] sm:w-[120px] lg:w-auto" />
      </div>
      <div className="absolute bottom-0 left-0">
        <img src={BottomRight} alt="Bottom Right Decoration" className="w-[80px] sm:w-[120px] lg:w-auto" />
      </div>
      <div className="absolute bottom-0 right-0">
        <img src={BottomLeft} alt="Bottom Left Decoration" className="w-[80px] sm:w-[120px] lg:w-auto" />
      </div>

      {/* Footer Content */}
      <div className="container mx-auto flex flex-wrap justify-between px-6 lg:px-52 gap-20">
        {/* Left Section */}
        <div className="w-full lg:w-1/4">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-transparent flex items-center justify-center">
              <img src={Missio} alt="Logo" className="w-[120px] sm:w-[150px] lg:w-auto" />
            </div>
          </div>
          <p className="text-sm">
          Missio exists to empower small and medium-sized organizations by providing innovative, intuitive software solutions that simplify donor engagement
          </p>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col sm:flex-row w-full lg:w-1/2 justify-between gap-6">
          {/* Links */}
          <div>
            <h2 className="font-bold mb-4">Our Links</h2>
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
          <div>
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
          <div className="w-full lg:w-1/2 lg:ml-32">
          <h2 className="font-bold mb-4 text-center">Address</h2>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-2">
            <span className="material-icons-outlined"><img src={LocationImage} alt="" /></span>
            373 Broadway Suite B17, New York, New York 10013
            </li>
            <li className="flex items-start gap-2">
              <span className="material-icons-outlined"><img src={Email} alt="" /></span>
              missio@missio.io
            </li>
            <li className="flex items-start gap-2">
              <span className="material-icons-outlined"><img src={Call} alt="" /></span>
              (844) 568-0941
            </li>
          </ul>
        </div>
        </div>

        
        
      </div>
    </div>
    </>
  );
};

export default Footer;
