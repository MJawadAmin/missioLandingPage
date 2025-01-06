import React from "react";
import Gather from "../assets/gathher.png";
import Donation from "../assets/donation.png";
import SideImage from "../assets/shape3 2.png";
import bottomImage from "../assets/shape1 1.png";

const About = () => {
  return (
    <div className="bg-white mt-10 px-6 lg:px-20 flex flex-col lg:flex-row items-center lg:items-start">
      {/* Left Side - Image and Experience Box */}
      <div className="lg:w-1/2  lg:flex justify-center lg:justify-start relative pb-28">
      <div>
              <img
                src={bottomImage}
                alt=""
                className="absolute left-0 bottom-14 lg:bottom-32 w-20 sm:w-32 lg:w-auto"
              />
            </div>
        <div className="absolute ml-10 lg:ml-[96px] mt-12  w-[250px] sm:w-[350px] lg:w-[450.07px] h-[250px] sm:h-[350px] lg:h-[450.07px] border-2 border-[rgb(2,100,126)] rounded-3xl transform rotate-[-14deg]">
          </div>
          <div className="relative w-full mt-10 md:ml-0 lg:ml-8  ">
              {/* Image */}
              <img
                src={Gather}
                alt="Volunteers working"
                className="rounded-3xl shadow-lg w-full h-[95%]"
              />

              {/* Text content */}
              <div className="absolute top-40 sm:top-48 lg:top-60 left-[-10px] sm:left-[-20px] lg:left-[-40px] bg-[rgb(2,100,126)] text-white border-white rounded-md border-4 px-4 py-2 w-[120px] sm:w-[140px] lg:w-[164px] h-[100px] sm:h-[110px] lg:h-[131px] shadow-md text-center">
                <h3 className="text-lg sm:text-xl font-bold mt-2 sm:mt-3">20+</h3>
                <p className="text-xs sm:text-sm">
                  Years <br /> of experience
                </p>
              </div>
            </div>
          {/* Child container */}
          <div className="absolute inset-0 transform rotate-[14deg] flex items-center w-full justify-center">
            
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
        <h1 className=" font-bold mt-2 text-gray-900 text-2xl sm:text-3xl " style={{ lineHeight: '1.8' }} >
          Missio Powering Purpose <br /> Expanding Impact
        </h1>
        <br/>
        <h2 className=" font-semibold text-2xl sm:text-base">
        Your Mission Our Technology
        </h2>
        <p className="text-gray-600 text-xl lg:mr-[120px] sm:text-lg mt-4" style={{lineHeight: '1.7'}}>
          Missio exists to empower small and medium-sized organizations by
          providing innovative, intuitive software solutions that simplify donor
          engagement, streamline operations, and amplify the reach of every
          mission. Our purpose is to equip organizations with the tools they
          need to create lasting impact, foster community, and drive positive
          change.
        </p>

        {/* Buttons */}
        <div className="mt-6 mb-10 lg:mb-0 gap-4 flex flex-col sm:flex-row  lg:justify-normal justify-center lg:items-start items-center">
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
