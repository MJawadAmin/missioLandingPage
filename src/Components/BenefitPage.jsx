import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import RightImage from '../assets/DonationImages/download1.png';
import SignImage from '../assets/DonationImages/signImage.png';
import ButtomRightImage from '../assets/DonationImages/shape8 1.png';
import { BsCheckCircle } from 'react-icons/bs';
import Volunteer from '../assets/DonationImages/MissiVolunteer.png';
import Rectangular from '../assets/DonationImages/Rectangle 24.png';
import DonateImage from '../assets/DonationImages/download 2.png';
import Donation from '../assets/DonationImages/donation.png';

const BenefitPage = () => {
  return (
    <div className="bg-gray-200">
      {/* Parent container */}
      <div className="relative border h-auto lg:h-screen flex flex-col lg:flex-row">
        {/* RightImage positioned absolutely on the right */}
        <div className="absolute right-0 top-0 hidden lg:block">
          <img src={RightImage} alt="RightImage" className="w-auto h-auto" />
        </div>

        {/* SignImage positioned slightly below */}
        <div className="absolute right-[10px] lg:right-[76px] top-10 lg:top-16 hidden lg:block">
          <img src={SignImage} alt="SignImage" className="w-auto h-auto" />
        </div>

        {/* ButtomRightImage positioned at the bottom-right corner */}
        <div className="absolute bottom-10 right-10 lg:right-20 hidden lg:block">
          <img src={ButtomRightImage} alt="ButtomRightImage" className="w-auto h-auto" />
        </div>

        {/* Main Div Left */}
        <div className="w-full lg:w-1/2 px-6 py-10 lg:px-20 lg:py-20">
          <h1 className="text-[18px] lg:text-[24px] bg-[rgb(2,100,126)] text-transparent bg-clip-text">
            benefits for non-profit
          </h1>
          <h1 className="font-semibold text-[28px] lg:text-[43px]">
            Why Wait? Get Ahead of the Change!
          </h1>
          <p className="text-[18px] lg:text-[21px] mt-4">
            Missio’s understanding of nonprofit needs and focus on mission impact. "Imagine a platform that not only understands your mission but powers it. Missio’s 501(c) software is designed to help you work smarter, not harder."
          </p>

          {/* Benefits List */}
          <div className="mt-6">
            <div className="text-[18px] lg:text-[22px] flex items-center gap-3">
              <BsCheckCircle className="text-[rgb(2,100,126)]" />
              <p>Affordable pricing tailored to nonprofit sizes</p>
            </div>
            <div className="text-[18px] lg:text-[22px] flex items-center gap-3 mt-4">
              <BsCheckCircle className="text-[rgb(2,100,126)]" />
              <p>Top-notch support and onboarding</p>
            </div>
            <div className="text-[18px] lg:text-[22px] flex items-center gap-3 mt-4">
              <BsCheckCircle className="text-[rgb(2,100,126)]" />
              <p>Unlimited records, users, forms, and storage</p>
            </div>
          </div>

          {/* Sign-Up Button */}
          <div className="mt-10">
            <button className="bg-[rgb(2,100,126)] w-full lg:w-[368px] h-[60px] lg:h-[89px] rounded-full text-[18px] lg:text-[22px] text-gray-100">
              Sign Up for Launch Updates
            </button>
          </div>
        </div>

        {/* Main Div Right */}
        <div className="w-full lg:w-1/2 relative mt-10 lg:mt-0">
          {/* Carousel for md devices */}
          <div className="block md:hidden">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              loop
            >
              <SwiperSlide>
                <div className="relative">
                  <img src={Volunteer} alt="Volunteer" className="absolute bottom-0 right-10 w-[250px]" />
                  <img src={Rectangular} alt="Rectangular" className="absolute bottom-0 left-10 w-[250px]" />
                  <img src={DonateImage} alt="DonateImage" className="absolute top-0 right-20 w-[250px]" />
                  <img src={Donation} alt="Donation" className="absolute bottom-10 left-20 w-[200px]" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative">
                  <img src={Volunteer} alt="Volunteer" className="absolute bottom-0 right-10 w-[250px]" />
                  <img src={Rectangular} alt="Rectangular" className="absolute bottom-0 left-10 w-[250px]" />
                  <img src={DonateImage} alt="DonateImage" className="absolute top-0 right-20 w-[250px]" />
                  <img src={Donation} alt="Donation" className="absolute bottom-10 left-20 w-[200px]" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Static images for lg devices */}
          <div className="hidden md:block">
            <div className="absolute bottom-10 lg:bottom-32 right-10 lg:right-40">
              <img src={Volunteer} alt="Volunteer" className="w-[200px] lg:w-[350px] h-[250px] lg:h-[420px]" />
            </div>
            <div className="absolute bottom-10 lg:bottom-32 right-10 lg:right-40">
              <img src={Rectangular} alt="Rectangular" className="w-[200px] lg:w-[350px] h-[250px] lg:h-[420px]" />
            </div>
            <div className="absolute top-10 lg:top-[70px] right-10 lg:right-56">
              <img src={DonateImage} alt="DonateImage" className="w-[200px] lg:w-[350px] h-[250px] lg:h-[420px]" />
            </div>
            <div className="absolute bottom-10 lg:bottom-28 left-10 lg:left-40">
              <img src={Donation} alt="Donation" className="w-[180px] lg:w-[250px] h-[60px] lg:h-[80px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitPage;
