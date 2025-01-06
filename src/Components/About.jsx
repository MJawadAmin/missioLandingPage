import React from "react";
import Gather from "../assets/gathher.png";
import Donation from "../assets/donation.png";
import SideImage from "../assets/shape3 2.png";
import bottomImage from "../assets/shape1 1.png";

const About = () => {
  return (
    <div className="bg-white mt-10 px-6 lg:px-20 flex flex-col lg:flex-row items-center lg:items-start">
      {/* Left Side - Image and Experience Box */}
      <div className="lg:w-1/2 lg:mr-10 lg:flex justify-center lg:justify-start">
        <div className="relative w-[280px] sm:w-[360px] lg:w-[487.07px] h-[280px] sm:h-[360px] lg:h-[487.07px] border-2 border-[rgb(2,100,126)] rounded-3xl transform rotate-[-14deg]">
          {/* Child container */}
          <div className="absolute inset-0 transform rotate-[14deg] flex items-center w-full justify-center">
            <div>
              <img
                src={bottomImage}
                alt=""
                className="absolute left-0 bottom-0 w-20 sm:w-32 lg:w-auto"
              />
            </div>
            <div className="absolute w-full h-[95%]  ">
              {/* Image */}
              <img
                src={Gather}
                alt="Volunteers working"
                className="rounded-3xl shadow-lg w-full h-full"
              />

              {/* Text content */}
              <div className="absolute top-40 sm:top-48 lg:top-72 left-[-10px] sm:left-[-20px] lg:left-[-30px] bg-[rgb(2,100,126)] text-white border-white rounded-md border-4 px-4 py-2 w-[120px] sm:w-[140px] lg:w-[164px] h-[100px] sm:h-[110px] lg:h-[131px] shadow-md text-center">
                <h3 className="text-lg sm:text-xl font-bold mt-2 sm:mt-3">20+</h3>
                <p className="text-xs sm:text-sm">
                  Years <br /> of experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="mt-8 lg:mt-0 lg:ml-20 w-full lg:w-1/2 relative ">
        <div className="absolute justify-start lg:right-4 hidden lg:block  ">
          <img src={SideImage} alt="" className="w-20  lg:w-auto" />
        </div>
        <h2 className="text-teal-600 font-semibold text-sm sm:text-base">
          About Missio
        </h2>
        <h1 className="text-gray-900 text-2xl sm:text-3xl font-bold leading-snug mt-2">
          Missio Powering Purpose <br /> Expanding Impact
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mt-4">
          Missio exists to empower small and medium-sized organizations by
          providing innovative, intuitive software solutions that simplify donor
          engagement, streamline operations, and amplify the reach of every
          mission. Our purpose is to equip organizations with the tools they
          need to create lasting impact, foster community, and drive positive
          change.
        </p>

        {/* Buttons */}
        <div className="mt-6 items-center justify-center flex flex-col sm:flex-row">
          <a
            href="#"
            className="bg-[rgb(2,100,126)] mb-4 sm:mb-0 w-[160px] sm:w-[200px] h-[50px] sm:h-[69px] rounded-full text-gray-100 flex justify-center items-center shadow hover:bg-teal-700 text-sm sm:text-base font-semibold"
          >
            Read more
          </a>
          <a
            href="#"
            className="border border-teal-600 w-[160px] sm:w-[200px] h-[50px] sm:h-[69px] rounded-full flex justify-center items-center shadow hover:bg-teal-700 text-sm sm:text-base font-semibold"
          >
            View Services
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
