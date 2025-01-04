import React from "react";
import Gather from '../assets/gathher.png'
import Donation from '../assets/donation.png'

const About = () => {
  return (
    <section className="bg-white py-10 px-6 lg:px-20 flex flex-col lg:flex-row items-center lg:items-start">
      {/* Left Side - Image and Experience Box */}
      <div className="relative w-full lg:w-1/2">
        <img
          src={Gather}// Replace with your image URL
          alt="Volunteers working"
          className="rounded-lg shadow-lg w-full"
        />
        <div className="absolute top-6 left-6 bg-teal-600 text-white px-4 py-2 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">20+</h3>
          <p className="text-sm">Years of experience</p>
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="mt-8 lg:mt-0 lg:ml-12 w-full lg:w-1/2">
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
        <div className="mt-6 flex space-x-4">
          <a
            href="#"
            className="bg-teal-600 text-white px-6 py-3 rounded-md shadow hover:bg-teal-700"
          >
            Read more
          </a>
          <a
            href="#"
            className="border border-teal-600 text-teal-600 px-6 py-3 rounded-md shadow hover:bg-teal-50"
          >
            View Services
          </a>
        </div>

        {/* Volunteer Image */}
        <div className="mt-8">
          <img
            src={Donation} // Replace with your image URL
            alt="Volunteer"
            className="rounded-md shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
