import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Group1 from "../assets/Group 2.png";
import Group2 from "../assets/Group 3.png";
import Group3 from "../assets/Group 4.png";
import Group4 from "../assets/Group 5.png";
import image1 from "../assets/download.png";
import image2 from "../assets/support-shape-hand-1-2 1.png";
import Heart from "../assets/heartlogo.png";

const FeaturesSection = () => {
  return (
    <div className="bg-[rgb(2,100,126)] text-white py-16 relative">
      {/* Background Hand Icons */}
      <div className="absolute top-0">
        <img src={image1} alt="Background Icon 1" className="w-[100px] sm:w-[150px] lg:w-auto" />
      </div>
      <div className="absolute bottom-0 left-0">
        <img src={image2} alt="Background Icon 2" className="w-[100px] sm:w-[150px] lg:w-auto" />
      </div>

      {/* Heading Section */}
      <div className="px-6 lg:px-20 flex flex-col lg:flex-row justify-between gap-10 relative z-10">
        <div className="mb-12 w-full lg:w-[35%]">
          <h2 className="text-sm uppercase font-semibold tracking-wide">Core Features</h2>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2">
            Empowering Non-Profits with Tools to Thrive
          </h1>
          
        </div>
        <div className="w-full lg:w-[35%] mt-4 lg:mr-16 lg:mt-0">
          <hr className="bg-[rgb(56,133,153)] w-full lg:w-[536px]" />
          <p className="mt-6 text-sm sm:text-base lg:text-[22px] lg:w-[536px]">
            Missio’s new software empowers 501(c) non-profits to work smarter and expand their reach.
          </p>
        </div>
      </div>

      {/* Features Carousel */}
      <div className="relative z-10 px-6 lg:px-10 mt-10 mb-28">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {/* Card 1 */}
          <SwiperSlide>
            <div className="bg-white text-teal-800 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <img src={Group1} alt="Donor Management" className="mb-4 w-16 sm:w-20 lg:w-auto" />
              <h3 className="text-lg font-bold mb-2">Donor Management</h3>
              <p className="text-sm">Strengthen relationships and increase donations.</p>
            </div>
          </SwiperSlide>

          {/* Card 2 */}
          <SwiperSlide>
            <div className="bg-white text-teal-800 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <img src={Group2} alt="Event and Fundraising Tools" className="mb-4 w-16 sm:w-20 lg:w-auto" />
              <h3 className="text-lg font-bold mb-2">Event And Fundraising Tools</h3>
              <p className="text-sm">Manage ticketing, memberships, and donations in one place.</p>
            </div>
          </SwiperSlide>

          {/* Card 3 */}
          <SwiperSlide>
            <div className="bg-white text-teal-800 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <img src={Group3} alt="Impact Tracking" className="mb-4 w-16 sm:w-20 lg:w-auto" />
              <h3 className="text-lg font-bold mb-2">Impact Tracking</h3>
              <p className="text-sm">Measure, analyze, and showcase your achievements.</p>
            </div>
          </SwiperSlide>

          {/* Card 4 */}
          <SwiperSlide>
            <div className="bg-white text-teal-800 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <img src={Group4} alt="Automated Compliance" className="mb-4 w-16 sm:w-20 lg:w-auto" />
              <h3 className="text-lg font-bold mb-2">Automated Compliance</h3>
              <p className="text-sm">Streamlined reporting with compliance support and reporting with compliance support.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white text-teal-800 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <img src={Group1} alt="Donor Management" className="mb-4 w-16 sm:w-20 lg:w-auto" />
              <h3 className="text-lg font-bold mb-2">Donor Management</h3>
              <p className="text-sm">Strengthen relationships and increase donations.</p>
            </div>
          </SwiperSlide> <SwiperSlide>
            <div className="bg-white text-teal-800 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <img src={Group1} alt="Donor Management" className="mb-4 w-16 sm:w-20 lg:w-auto" />
              <h3 className="text-lg font-bold mb-2">Donor Management</h3>
              <p className="text-sm">Strengthen relationships and increase donations.</p>
            </div>
          </SwiperSlide> <SwiperSlide>
            <div className="bg-white text-teal-800 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <img src={Group1} alt="Donor Management" className="mb-4 w-16 sm:w-20 lg:w-auto" />
              <h3 className="text-lg font-bold mb-2">Donor Management</h3>
              <p className="text-sm">Strengthen relationships and increase donations.</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Heart Icon Bottom-Right */}
      <div className="absolute bottom-4 right-4">
        <img src={Heart} alt="Heart Icon" className="w-12 sm:w-16 lg:w-16 h-auto" />
      </div>
    </div>
  );
};

export default FeaturesSection;
