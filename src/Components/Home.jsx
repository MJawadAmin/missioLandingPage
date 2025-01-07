import React, { useState } from "react";
import supportShape1 from "../assets/support-shape-hand-1-1 1.png";
import supportShape2 from "../assets/support-shape-hand-1-2 1.png";
import kids from "../assets/ymr-img-1-min 1@2x.png";
import lady from "../assets/lady.png";
import shape1 from "../assets/shape3 1.png";
import Gather from '../assets/gathher.png'

const Home = () => {
  // Dummy data for carousel
  const carouselData = [
    {
      title: "Count Down to Transforming Your Non-Profit’s Impact – Launching November 20th!",
      description:
        "Unlock the Power of Missio's New 501(c) Solution. Built for Non-Profits Ready for Change.",
      buttonText: "Reserve Your Demo Today",
      image: kids,
      imageShape: shape1,
    },
    {
      title: "Empowering Your Non-Profit Organization with New Solutions",
      description:
        "Our platform offers easy-to-use solutions that help you maximize the impact of your organization.",
      buttonText: "Learn More",
      image: lady,
      imageShape: shape1,
    },
    {
      title: "Get Started with Missio’s New 501(c) Solution",
      description:
        "Join thousands of non-profits utilizing the latest technology to enhance their operations and mission.",
      buttonText: "Get Started Now",
      image: Gather,
      imageShape: shape1,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length
    );
  };

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

      {/* Main Container with Carousel */}
      <div className="bg-[rgb(242,246,247)] flex flex-col w-[95%] lg:h-[634px] mx-auto">
        <div className="container mx-auto px-4 sm:px-8 lg:px-12">
          <div className={`grid gap-10 lg:grid-cols-2 items-center ${currentIndex === 1 ? 'text-center' : ''}`}>
            {/* Text Section */}
            <div className="space-y-6 lg:text-left">
              <h1 className="font-bold text-[30px] sm:text-[35px] lg:text-[45px] leading-tight text-gray-800">
                <span className="bg-[rgb(2,100,126)] text-transparent bg-clip-text">
                  {carouselData[currentIndex].title.split(" ")[0]}{" "}
                </span>{" "}
                {carouselData[currentIndex].title.split(" ").slice(1).join(" ")}
              </h1>
              <p className="text-base sm:text-lg text-gray-600">
                {carouselData[currentIndex].description}
              </p>
              <button className="bg-[rgb(2,100,126)] text-white rounded-full w-[200px] sm:w-[250px] lg:w-[293px] h-[50px] sm:h-[60px] lg:h-[69px] text-sm sm:text-base lg:text-lg font-semibold hover:bg-teal-600">
                {carouselData[currentIndex].buttonText}
              </button>
            </div>

            {/* Images Section */}
            <div className={`mt-10 sm:mt-14 relative flex justify-center lg:block lg:[40%] ${currentIndex === 1 ? 'w-[250px] sm:w-[300px] lg:w-[350px] ' : ''}`}>
              <img
                src={carouselData[currentIndex].image}
                alt="Donate"
                className={`rounded-lg w-[280px] sm:w-[400px] lg:w-auto ${currentIndex === 1 ? 'w-[250px] sm:w-[300px] lg:w-[350px]' : ''}`}
              />
              <div className={`absolute bottom-4 sm:bottom-10 right-10 lg:right-0 ${currentIndex === 1 ? 'right-[50px]' : ''}`}>
                <img
                  src={carouselData[currentIndex].imageShape}
                  alt="Volunteer"
                  className="rounded-lg w-[35px] mr-20 sm:w-[100px] lg:w-auto md: lg:mr-72"
                />
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="lg:absolute bottom-[-100px] left-[36%] flex gap-4 justify-center mt-8">
            <button
              className="w-8 h-8 lg:w-10 lg:h-10 flex justify-center items-center bg-[rgb(2,100,126)] text-white rounded-full"
              onClick={handlePrevious}
            >
              &#8592;
            </button>
            <button
              className="w-8 h-8 lg:w-10 lg:h-10 flex justify-center items-center bg-[rgb(2,100,126)] text-white rounded-full"
              onClick={handleNext}
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
