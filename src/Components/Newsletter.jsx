import React from "react";

const Newsletter = () => {
  return (
    <div className="flex flex-col  bg-teal-700 py-20 px-4 w-[60%] mx-auto rounded-xl  lg:mt-10">
      <h2 className="text-white text-xl font-bold mb-4">Subscribe to our Newsletter</h2>
      <div className="flex w-full max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your Email"
          className="w-full px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
        <button className="px-6 py-2 bg-white text-teal-700 font-semibold rounded-r-md hover:bg-gray-200">
          Send
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
