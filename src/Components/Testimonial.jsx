import React from 'react';
import Image1 from '../assets/TestimonialImages/Image_1.png';
import Image2 from '../assets/TestimonialImages/Image_2.png';
import Image3 from '../assets/TestimonialImages/Image_3.png';
import MainDivImage1 from '../assets/TestimonialImages/video-4-btn-bg 1.png';
import MainDivImage2 from '../assets/TestimonialImages/star 2.png';
import Vector from '../assets/TestimonialImages/Vector.png'

const Testimonial = () => {
  return (
    <div className="h-[100vh] bg-white flex flex-col py-10 ">
      {/* Header Section */}
      <div className="flex flex-row justify-between px-40">
      <div className=" justify-start items-start">
        <h1 className="text-[rgb(2,100,126)] text-lg font-bold">Testimonial</h1>
        <h2 className="font-semibold text-4xl mt-4">
          What Our Client’s Say’s
        </h2>
      </div>

      {/* Avatar Images */}
      <div className="flex justify-end items-end gap-4 mt-6">
        <img src={Image1} alt="Client 1" className="w-20 h-20 rounded-full" />
        <img src={Image2} alt="Client 2" className="w-20 h-20 rounded-full" />
        <img src={Image3} alt="Client 3" className="w-20 h-20 rounded-full" />
      </div>
      </div>
     

      {/* Testimonial Box */}
      <div className="border border-[rgb(2,100,126)]  rounded-lg mt-10 p-6 w-full mx-auto h-[500px] lg:w-[80%] shadow-lg relative">
        {/* Left Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16">
          <div className="flex-shrink-0">
            <img
              src={MainDivImage1}
              alt="Testimonial"
              className="w-[407px] h-[450px] rounded-lg object-cover"
            />
          </div>

          {/* Right Section */}
          <div className="flex-1 mt-20">
            <div className='flex gap-2'>
            <img src={Vector}></img>
            <img src={Vector}></img>
            </div>
            <br/>
            <p className="text-2xl text-[rgb(4,12,14)]">
              &#8220; It gives you a comfortable environment to overcome your
              Hesitation &#8221;
            </p>
            <p className="mt-4 font-bold">5.0 AVG RATING</p>

            {/* Star Ratings */}
            <div className="flex flex-row gap-3">
              {Array(5).fill(0).map((_, index) => (
              <div
              key={index}
              className="flex gap-2 mt-4 border-2 w-10 h-10 rounded-lg justify-center items-center"
              >
            <img
            src={MainDivImage2}
            alt="Star Rating"
            className="w-8 h-8"
      />
    </div>
  ))}
</div>


            <p className="mt-4 font-bold text-lg">Amit Singhania</p>
            <p className="text-gray-500">CEO Of Missio</p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute bottom-4 right-4 flex gap-4">
          <button className="w-10 h-10 flex justify-center items-center bg-[rgb(2,100,126)] text-white rounded-full">
            &#8592;
          </button>
          <button className="w-10 h-10 flex justify-center items-center bg-[rgb(2,100,126)] text-white rounded-full">
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
