import React from 'react';
import Image1 from '../assets/dottedArrowImage.png';
import Image2 from '../assets/download2.png';
import Image3 from '../assets/UnityImage.png';

const CountdownTimerPage = () => {
  return (
    <div className="bg-[#FBF8EF] min-h-screen relative">
      {/* Absolute Images */}
      <div className="absolute bottom-0">
        <img src={Image1} alt="Dotted Arrow" className="w-[150px] lg:w-auto" />
      </div>

      <div className="absolute top-0 right-0">
        <img src={Image2} alt="Top Image" className="w-[150px] lg:w-auto" />
      </div>

      <div className="absolute bottom-0 right-0">
        <img src={Image3} alt="Unity Image" className="w-[150px] lg:w-auto" />
      </div>

      {/* Countdown Timer Content */}
      <div className="p-6 lg:p-20 ml-4 lg:ml-14">
        <h1 className="bg-[rgb(2,100,126)] text-transparent bg-clip-text text-lg lg:text-2xl">
          Countdown Timer
        </h1>
        <h1 className="font-semibold text-[24px] lg:text-[40px] lg:w-[800px]">
          Dynamic countdown leading to Black Friday midnight.
        </h1>
        <p className="text-[16px] lg:text-[24px]">
          until we reveal a smarter way to manage and amplify your mission.
        </p>
      </div>

      {/* Countdown Timer */}
      <div className="w-full max-w-[1265px] mx-auto flex flex-wrap justify-between items-center px-4 lg:px-7 rounded-lg gap-[1px]">
        <div className="text-white text-sm lg:text-xl bg-[rgb(2,100,126)] flex-1 h-[60px] lg:h-[126px] flex justify-center items-center rounded-l-lg">
          13 Days
        </div>
        <div className="text-white text-sm lg:text-xl bg-[rgb(2,100,126)] flex-1 h-[60px] lg:h-[126px] flex justify-center items-center">
          13 Hours
        </div>
        <div className="text-white text-sm lg:text-xl bg-[rgb(2,100,126)] flex-1 h-[60px] lg:h-[126px] flex justify-center items-center">
          13 Minutes
        </div>
        <div className="text-white text-sm lg:text-xl bg-[rgb(2,100,126)] flex-1 h-[60px] lg:h-[126px] flex justify-center items-center rounded-r-lg">
          13 Seconds
        </div>
      </div>

      {/* Days Content */}
      <div className="flex flex-wrap justify-center lg:justify-between items-center px-4 lg:px-40 py-6 gap-4">
        <div className="w-[90%] max-w-[300px] h-[200px] border-[rgb(2,100,126)] bg-white border-2 rounded-lg flex flex-col justify-center items-center">
          <h1 className="text-[24px] lg:text-[40px]">Day 1</h1>
          <p className="text-[12px] lg:text-[15px] px-4 lg:px-8">
            Unlock a New Era of Donor Engagement!
          </p>
        </div>
        <div className="w-[90%] max-w-[300px] h-[200px] border-[rgb(2,100,126)] bg-white border-2 rounded-lg flex flex-col justify-center items-center">
          <h1 className="text-[24px] lg:text-[40px]">Day 2</h1>
          <p className="text-[12px] lg:text-[15px] px-4 lg:px-8">
            Boost Your Efficiency and Free Up More Time for Your Mission!
          </p>
        </div>
        <div className="w-[90%] max-w-[300px] h-[200px] border-[rgb(2,100,126)] bg-white border-2 rounded-lg flex flex-col justify-center items-center">
          <h1 className="text-[24px] lg:text-[40px]">Day 3</h1>
          <p className="text-[12px] lg:text-[15px] px-4 lg:px-8">
            Last Chance to Be First in Line!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimerPage;
