import React from "react";
import Gather from '../assets/gathher.png'
import Donation from '../assets/donation.png'

const About = () => {
  return (
    <div className="bg-white mt-10  px-6 lg:px-20 flex flex-col lg:flex-row items-center lg:items-start">
      {/* Left Side - Image and Experience Box */}
      <div className="lg:w-1/2 lg:mr-10">
      <div className="relative w-[487.07px] h-[487.07px] border-2 border-[rgb(2,100,126)] rounded-3xl transform rotate-[-14deg]">
  {/* Child container */}
  <div className="absolute inset-0 transform rotate-[14deg] flex items-center justify-center">
    <div className="relative w-full h-[95%]">
      {/* Image */}
      <img
        src={Gather} // Replace with your image URL
        alt="Volunteers working"
        className="rounded-3xl shadow-lg w-full h-full"
      />

      {/* Text content */}
      <div className="absolute top-72 left-[-30px] bg-[rgb(2,100,126)] text-white border-white rounded-md border-4 px-4 py-2 w-[164px] h-[131px] shadow-md txet-center">
        <h3 className="text-xl font-bold text-center mt-3 ">20+</h3>
        <p className="text-sm text-center">Years <br/> of experience</p>
      </div>
      </div>
    </div>
  </div>
</div>



      {/* Right Side - Content */}
      <div className="mt-8 lg:mt-0 lg:ml-44 w-full lg:w-1/2">
        <h2 className="text-teal-600 font-semibold text-sm">About Missio</h2>
        <h1 className="text-gray-900 text-3xl font-bold leading-snug mt-2">
          Missio Powering Purpose <br /> Expanding Impact
        </h1>
        <p className="text-gray-600 text-lg mt-4">
          Missio exists to empower small and medium-sized organizations by
          providing innovative, intuitive software solutions that simplify donor
          engagement, streamline operations, and amplify the reach of every
          mission. Our purpose is to equip organizations with the tools they
          need to create lasting impact, foster community, and drive positive
          change.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex">
          <a
            href="#"
            className="bg-[rgb(2,100,126)] mr-20 w-[200px] h-[69px] rounded-full text-gray-100 flex justify-center items-center shadow hover:bg-teal-700"
          >
            Read more
          </a>
          <a
            href="#"
            className="border border-teal-600  mr-20 w-[200px] h-[69px] rounded-full flex justify-center items-center shadow hover:bg-teal-700"
          >
            View Services
          </a>
        </div>

        {/* Volunteer Image */}
        <div className="justify-end items-end mt-12 mb-0 ml-96">
          <img
            src={Donation} // Replace with your image URL
            alt="Volunteer"
            className="rounded-md shadow-md "
          />
        </div>
      </div>
    </div>
  );
};

export default About;
