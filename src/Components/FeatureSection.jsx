import React from "react";
import Group1 from '../assets/Group 2.png'
import Group2 from '../assets/Group 3.png'
import Group3 from '../assets/Group 4.png'
import Group4 from '../assets/Group 5.png'
import image1 from '../assets/download.png'
import image2 from '../assets/support-shape-hand-1-2 1.png'
import Heart from '../assets/heartlogo.png'

const FeaturesSection = () => {
  return (
    <div className="bg-[rgb(2,100,126)] text-white py-16  relative">
      {/* Background Hand Icons */}
      <div className="absolute top-0"> 
        <img src={image1}></img> </div>
        <div className="absolute bottom-0 justify-end items-end"> 
        <img src={image2}></img> </div>
        

      {/* Heading Section */}
      <div className="px-20 w-full flex gap-10">
      <div className="mb-12 w-[40%]  justify-start items-start relative z-10">
        <h2 className="text-sm uppercase font-semibold tracking-wide ">Core Features</h2>
        <h1 className="text-3xl lg:text-4xl font-bold mt-2">
          Empowering Non-Profits with Tools to Thrive
        </h1>
        <p className="text-lg mt-4">
          Missio's new software empowers 501(c) non-profits to work smarter and expand their reach.
        </p>
      </div>
      <div className="w-[60%] justify-end items-end relative z-10 ml-72">
        <hr className="bg-[rgb(56,133,153)] w-[536px]"/>
        <p className=" w-[536px] mt-6">
      Missio’s new software empowers 501(c) non-profits to work smarter and expand their reach.
      </p>
      </div>
      </div>

      {/* Features Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10  ml-10">
        {/* Card 1 */}
        <div className="bg-white text-teal-800 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
          <img
            src={Group1} 
            alt="Donor Management"
            className="mb-4"
          />
          <h3 className="text-lg font-bold mb-2">Donor Management</h3>
          <p className="text-sm">
            Strengthen relationships and increase donations.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white text-teal-800 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
          <img
            src={Group2} 
            alt="Event and Fundraising Tools"
            className="mb-4"
          />
          <h3 className="text-lg font-bold mb-2">
            Event And Fundraising Tools
          </h3>
          <p className="text-sm">
            Manage ticketing, memberships, and donations in one place.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white text-teal-800 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
          <img
            src={Group3} 
            alt="Impact Tracking"
            className="mb-4"
          />
          <h3 className="text-lg font-bold mb-2">Impact Tracking</h3>
          <p className="text-sm">
            Measure, analyze, and showcase your achievements.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white text-teal-800 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
          <img
            src={Group4} 
            alt="Automated Compliance"
            className="mb-4"
          />
          <h3 className="text-lg font-bold mb-2">Automated Compliance</h3>
          <p className="text-sm">
            Streamlined reporting with compliance support.
          </p>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="mt-12 flex justify-center space-x-3 relative z-10">
        <div className="w-3 h-3 bg-white rounded-full"></div>
        <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
      </div>

      {/* Heart Icon Bottom-Right */}
      <div className="absolute bottom-4 right-4">
        <img
          src={Heart}
          alt="Heart Icon"
          className="w-16 h-16 "
        />
      </div>
    </div>
  );
};

export default FeaturesSection;
