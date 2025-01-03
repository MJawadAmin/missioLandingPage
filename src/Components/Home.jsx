import React from "react";
import supportShape1 from "../assets/support-shape-hand-1-1 1.png";
import supportShape2 from "../assets/support-shape-hand-1-2 1.png";
import kids from '../assets/ymr-img-1-min 1@2x.png'
import lady from '../assets/lady.png'
import shape1 from "../assets/shape3 1.png";
// import shap2 from '../assets/shape1 1.png'

const Home = () => {
  return (
<div className="flex justify-center items-center min-h-screen">
<div className="bg-[rgb(242,246,247)] relative flex flex-col justify-center w-[95%] items-center ml-auto">
      {/* Decorative Shapes */}
      <div className="absolute top-10 left-10">
        <img
          src={supportShape1}
          alt="Support Shape 1"
          className="w-[193px] h-[159px]"
        />
      </div>
      <div className="absolute bottom-10 left-0 ml-3">
  <img
    src={supportShape2}
    alt="Support Shape 2"
    className="w-[193px] h-[159px]"
  />
</div>


      {/* Content Section */}
      <div className="container mx-auto px-4 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <div className="space-y-6">
            <h1 className="font-extrabold text-[45px] leading-tight text-gray-800">
              <span className="bg-[rgb(2,100,126)] text-transparent bg-clip-text">
                Count Down
              </span>{" "}
              to Transforming Your{" "}
              <span className="bg-[rgb(2,100,126)] text-transparent bg-clip-text">
                Non
              </span>
              -<span className="bg-[rgb(2,100,126)] text-transparent bg-clip-text">
                Profit’s
              </span>{" "}
              Impact – Launching{" "}
              <span className="bg-[rgb(2,100,126)] text-transparent bg-clip-text">
                November 20th!
              </span>
            </h1>
            <p className="text-lg text-gray-600">
              Unlock the Power of Missio's New 501(c) Solution. Built for
              Non-Profits Ready for Change.
            </p>
            <button className="bg-[rgb(2,100,126)] text-white rounded-full w-[293px] h-[69px] text-lg font-semibold hover:bg-teal-600">
              Reserve Your Demo Today
            </button>
          </div>

          {/* Images Section */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <img
                src={kids}
                alt="Donate"
                className="rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <img
                src={lady}
                alt="Kids"
                className="rounded-lg"
              />
              <img
                src={shape1}
                alt="Volunteer"
                className="rounded-lg"
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
