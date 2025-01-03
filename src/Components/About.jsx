import React from 'react';

function AboutMissio() {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center"> 
      <div className="flex-grow w-full"> 
        <img 
          src="/images/missio-logo.svg" // Replace with the actual logo path
          alt="Missio Logo" 
          className="w-40 h-auto mb-4" 
        />
      </div>

      <div className="flex-shrink-0 w-full text-center">
        <h2 className="text-2xl font-bold mb-2">Missio Powering Purpose</h2>
        <h3 className="text-xl font-bold mb-4">Expanding Impact</h3>
      </div>

      <div className="flex-shrink-0 w-full text-center">
        <p className="text-lg mb-4">Your Mission, Our Technology</p>
      </div>

      <div className="flex-shrink-0 w-full text-center">
        <p className="text-lg mb-6">
          Missio exists to empower small and medium-sized organizations by providing innovative, intuitive software solutions that simplify donor engagement, streamline operations, and amplify the reach of every mission. Our purpose is to equip organizations with the tools they need to create lasting impact, foster community, and drive positive change.
        </p>
      </div>

      <div className="flex-shrink-0 w-full flex justify-between items-center">
        <div className="flex items-center">
          <span className="font-bold text-2xl mr-2">20+</span>
          <span className="text-lg">Years of Experience</span>
        </div>
        <div className="flex space-x-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Read More
          </button>
          <button className="border border-gray-300 hover:border-gray-500 text-gray-700 font-bold py-2 px-4 rounded">
            View Services
          </button>
        </div>
      </div>

      <div className="flex-shrink-0 w-full mt-8"> 
        <img 
          src="/images/volunteer-image.jpg" // Replace with the actual image path
          alt="Volunteer Image" 
          className="w-full rounded-lg" 
        />
      </div>
    </div>
  );
}

export default AboutMissio;