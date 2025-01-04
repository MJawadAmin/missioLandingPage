import React from 'react'
import Image1 from '../assets/TestimonialImages/Image_1.png'
import Image2 from '../assets/TestimonialImages/Image_2.png'
import Image3 from '../assets/TestimonialImages/Image_3.png'

const Testimonial = () => {
  return (
    <div className='h-[100vh] bg-white'>
        <div className='p-20 ml-14'>
        <h1 className='bg-[rgb(2,100,126)] text-transparent bg-clip-text'> Testimonial </h1>
        <h1 className='font-semibold text-[40px] w-[800px]'> 
        What Our Client’s Say’s</h1>
        <div className='flex flex-row gap-4 justify-end items-end '>
        <img src={Image1} alt="" />
        <img src={Image2} alt="" />
        <img src={Image3} alt="" />

        </div>
        </div>
      
    </div>
  )
}

export default Testimonial
