import React from "react";

const FeaturesSection = () => {
  return (
    <section className="bg-teal-800 text-white py-16 px-6 lg:px-20 relative">
      {/* Background Hand Icons */}
      <div className="absolute inset-0 bg-cover bg-no-repeat opacity-10" style={{ backgroundImage: "url('https://via.placeholder.com/800x600')" }}></div>

      {/* Heading Section */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-sm uppercase font-semibold tracking-wide">Core Features</h2>
        <h1 className="text-3xl lg:text-4xl font-bold mt-2">
          Empowering Non-Profits with Tools to Thrive
        </h1>
        <p className="text-lg mt-4">
          Missio's new software empowers 501(c) non-profits to work smarter and expand their reach.
        </p>
      </div>

      {/* Features Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {/* Card 1 */}
        <div className="bg-white text-teal-800 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
          <img
            src="https://via.placeholder.com/50" // Replace with an actual icon
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
            src="https://via.placeholder.com/50" // Replace with an actual icon
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
            src="https://via.placeholder.com/50" // Replace with an actual icon
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
            src="https://via.placeholder.com/50" // Replace with an actual icon
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
          src="https://via.placeholder.com/50" // Replace with an actual heart icon
          alt="Heart Icon"
          className="w-10 h-10 opacity-50"
        />
      </div>
    </section>
  );
};

export default FeaturesSection;
