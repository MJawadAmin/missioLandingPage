import React, { useState } from 'react';
import Image1 from '../assets/TestimonialImages/Image_1.png';
import Image2 from '../assets/TestimonialImages/Image_2.png';
import Image3 from '../assets/TestimonialImages/Image_3.png';
import MainDivImage1 from '../assets/TestimonialImages/video-4-btn-bg 1.png';
import MainDivImage2 from '../assets/TestimonialImages/star 2.png';
import Vector from '../assets/TestimonialImages/Vector.png';

const Testimonial = () => {
  const testimonials = [
    {
      image: Image1,
      name: 'Amit Singhania',
      position: 'CEO Of Missio',
      quote: 'It gives you a comfortable environment to overcome your hesitation.',
      rating: 5,
    },
    {
      image: Image2,
      name: 'Jane Doe',
      position: 'Product Manager',
      quote: 'This platform helped me connect with my team effectively.',
      rating: 5,
    },
    {
      image: Image3,
      name: 'John Smith',
      position: 'Software Engineer',
      quote: 'An amazing experience with excellent results!',
      rating: 5,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="h-auto lg:h-[100vh] bg-white flex flex-col py-10 lg:py-14 px-6 lg:px-40">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-6">
        <div className="text-center lg:text-left">
          <h1 className="text-[rgb(2,100,126)] text-lg font-bold">Testimonial</h1>
          <h2 className="font-semibold text-2xl lg:text-4xl mt-4">
            What Our Client’s Say’s
          </h2>
        </div>

        {/* Avatar Images */}
        <div className="flex justify-center lg:justify-end items-center gap-4">
          {testimonials.map((testimonial, index) => (
            <img
              key={index}
              src={testimonial.image}
              alt={`Client ${index + 1}`}
              className={`w-16 h-16 lg:w-16 lg:h-16 rounded-full cursor-pointer ${
                activeIndex === index ? 'ring-2 ring-[rgb(2,100,126)]' : ''
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Testimonial Carousel */}
      <div className="border border-[rgb(2,100,126)] rounded-lg mt-10 p-6 w-full lg:w-[100%] mx-auto shadow-lg relative">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">
          {/* Left Section */}
          <div className="flex-shrink-0">
            <img
              src={MainDivImage1}
              alt="Testimonial"
              className="w-full lg:w-[350px] h-auto lg:h-[390px] rounded-lg object-cover"
            />
          </div>

          {/* Right Section */}
          <div className="flex-1 text-center lg:text-left mt-6 lg:mt-20">
            <div className="flex justify-center lg:justify-start gap-2">
              <img src={Vector} alt="Vector Icon" />
              <img src={Vector} alt="Vector Icon" />
            </div>
            <br />
            <p className="text-lg lg:text-2xl text-[rgb(4,12,14)]">
              &#8220; {testimonials[activeIndex].quote} &#8221;
            </p>
            <p className="mt-4 font-bold">5.0 AVG RATING</p>

            {/* Star Ratings */}
            <div className="flex justify-center lg:justify-start gap-3">
              {Array(testimonials[activeIndex].rating)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={index}
                    className="flex gap-2 mt-4 border-2 w-8 h-8 lg:w-10 lg:h-10 rounded-lg justify-center items-center"
                  >
                    <img
                      src={MainDivImage2}
                      alt="Star Rating"
                      className="w-6 h-6 lg:w-8 lg:h-8"
                    />
                  </div>
                ))}
            </div>

            <p className="mt-4 font-bold text-lg">{testimonials[activeIndex].name}</p>
            <p className="text-gray-500">{testimonials[activeIndex].position}</p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="lg:absolute bottom-10 right-28 flex gap-4 justify-center mt-8">
          <button
            className="w-8 h-8 lg:w-10 lg:h-10 flex justify-center items-center bg-[rgb(2,100,126)] text-white rounded-full"
            onClick={handlePrev}
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
  );
};

export default Testimonial;
