import React from "react";
import supportShape1 from "../assets/support-shape-hand-1-1 1.png";
import supportShape2 from "../assets/support-shape-hand-1-2 1.png";
import kids from "../assets/ymr-img-1-min 1@2x.png";
import lady from "../assets/lady.png";
import shape1 from "../assets/shape3 1.png";

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center min-h-screen lg:mt-[-25px]">
      {/* Top Left Decorative Shape */}
      <div className="absolute top-48 left-4">
        <img
          src={supportShape1}
          alt="Support Shape 1"
          className="w-[120px] h-[100px] sm:w-[150px] sm:h-[130px] lg:w-[193px] lg:h-[159px]"
        />
      </div>

      {/* Bottom Left Decorative Shape */}
      <div className="absolute bottom-[-120px] left-4">
        <img
          src={supportShape2}
          alt="Support Shape 2"
          className="w-[100px] h-[50px] sm:w-[150px] sm:h-[130px] lg:w-[200px] lg:h-[130px] lg:ml-6"
        />
      </div>

      {/* Main Container */}
      <div className="bg-[rgb(242,246,247)] flex flex-col w-[95%] lg:h-[634px] mx-auto">
        <div className="container mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            {/* Text Section */}
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="font-bold text-[30px] sm:text-[35px] lg:text-[45px] leading-tight text-gray-800">
                <span className="bg-[rgb(2,100,126)] text-transparent bg-clip-text">
                  Count Down
                </span>{" "}
                to Transforming Your{" "}
                <span className="bg-[rgb(2,100,126)] text-transparent bg-clip-text">
                  Non
                </span>
                -
                <span className="bg-[rgb(2,100,126)] text-transparent bg-clip-text">
                  Profit’s
                </span>{" "}
                Impact – Launching{" "}
                <span className="bg-[rgb(2,100,126)] text-transparent bg-clip-text">
                  November 20th!
                </span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600">
                Unlock the Power of Missio's New 501(c) Solution. Built for
                Non-Profits Ready for Change.
              </p>
              <button className="bg-[rgb(2,100,126)] text-white rounded-full w-[200px] sm:w-[250px] lg:w-[293px] h-[50px] sm:h-[60px] lg:h-[69px] text-sm sm:text-base lg:text-lg font-semibold hover:bg-teal-600">
                Reserve Your Demo Today
              </button>
            </div>

            {/* Images Section */}
            <div className="mt-10 sm:mt-14 relative flex justify-center  lg:block lg:[40%]">
              <img
                src={kids}
                alt="Donate"
                className="rounded-lg w-[280px] sm:w-[400px] lg:w-auto"
              />
              <div className="absolute bottom-4 sm:bottom-10 right-10 lg:right-0">
                <img
                  src={shape1}
                  alt="Volunteer"
                  className="rounded-lg w-[80px] sm:w-[100px] lg:w-auto lg:mr-72"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
