import React from 'react';
import AckcelImage from '../assets/akcelImage.png';
import HeartImagea from '../assets/HeartImage.png';
import UnityImage from '../assets/UnityImage.png';

const DemoToday = () => {
  return (
    <div className="bg-[rgb(0,58,73)] min-h-[60vh] relative py-20">
      {/* Absolute Images */}
      <div className="absolute left-0 lg:left-16 bottom-0">
        <img src={AckcelImage} alt="Ackcel" className="w-[100px] lg:w-auto" />
      </div>
      <div className="absolute top-10 right-10">
        <img src={HeartImagea} alt="Heart" className="w-[100px] lg:w-auto" />
      </div>
      <div className="absolute bottom-0 right-0">
        <img src={UnityImage} alt="Unity" className="w-[100px] lg:w-auto" />
      </div>

      {/* Content Section */}
      <div className="text-white text-center px-6 lg:px-80">
        <h1 className="text-[24px] lg:text-[30px] font-extrabold ">
          See It to Believe It – Reserve Your Demo Today
        </h1>
        <p className="text-[14px] lg:text-[22px] mt-4">
          Encourage users to experience the platform firsthand and offer perks for signing up early. 
          “The best way to understand the power of Missio is to experience it firsthand. Schedule a 
          free demo and enjoy exclusive perks for early sign-ups!
        </p>
      </div>

      {/* Buttons Section */}
      <div className="flex items-center justify-center mt-8 lg:mt-24">
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-5">
          <button className="bg-white w-[200px] lg:w-[300px] h-[50px] lg:h-[69px]  lg:text-[18px] rounded-full text-black">
          Reserve Your Demo Today
          </button>
          <button className="border-white text-xs lg:text-[18px] border-2 w-[200px] lg:w-[409px] h-[50px] lg:h-[69px] rounded-full text-white">
            Get Launch Updates & Exclusive Perks!
          </button>
        </div>
      </div>
    </div>
  );
};

export default DemoToday;
