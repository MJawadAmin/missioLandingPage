import React from 'react'
import RightImage from '../assets/DonationImages/download1.png'
import SignImage from '../assets/DonationImages/signImage.png'
import ButtomRightImage from '../assets/DonationImages/shape8 1.png'
import { BsCheckCircle } from 'react-icons/bs'
import Volunteer from '../assets/DonationImages/MissiVolunteer.png'
import Rectangular from '../assets/DonationImages/Rectangle 24.png'
import DonateImage from '../assets/DonationImages/download 2.png'
import Donation from '../assets/DonationImages/donation.png'

const BenefitPage = () => {
  return (
    <div className="bg-gray-200">
      {/* Parent container with relative positioning */}
      <div className='relative border h-screen flex flex-row'> {/* Added height to ensure absolute positioning works */}
        {/* RightImage positioned absolutely on the right */}
        <div className='absolute right-0 top-0'>
          <img src={RightImage} alt="RightImage" />
        </div>

        {/* SignImage positioned slightly below */}
        <div className='absolute right-[76px] top-16'>
          <img src={SignImage} alt="SignImage" />
        </div>

        {/* ButtomRightImage positioned at the bottom-right corner */}
        <div className='absolute bottom-10 right-20'>
          <img src={ButtomRightImage} alt="ButtomRightImage" />
        </div>
          {/*Main Div Right */}
      <div className='w-1/2 justify-start px-20 py-20'>
        <h1 className="text-[24px] bg-[rgb(2,100,126)] text-transparent bg-clip-text">
        benefits for non-profit
        </h1>
        <h1 className='font-semibold text-[43px]'>Why Wait? Get Ahead of the Change!</h1>
        <p className='text-[21px]'>Missio’s understanding of nonprofit needs and focus
 on mission impact. "Imagine a platform that not only
 understands your mission but powers it. Missio’s 
501(c) software is designed to help you work 
smarter, not harder</p>

<div className='text-[22px] flex  gap-5 items-center'>
<div  className="text-[rgb(2,100,126)]">
      {/* Change the icon color using text-color utility */}
      <BsCheckCircle />
    </div>
Affordable pricing tailored to nonprofit sizes
</div>
<div className='text-[22px] flex gap-5 items-center'>
<div  className="text-[rgb(2,100,126)] gap-5 ">
      {/* Change the icon color using text-color utility */}
      <BsCheckCircle />
    </div>
Top-notch support and onboarding
</div>
<div className='text-[22px] flex  items-center gap-5 '>
<div  className="text-[rgb(2,100,126)]">
      {/* Change the icon color using text-color utility */}
      <BsCheckCircle />
    </div>
        <p> Unlimited records, users, forms, and storage </p>
</div>
<div> 
    <button className="bg-[rgb(2,100,126)] mr-20 w-[368px] h-[89px] rounded-full text-[22px] text-gray-100 mt-10">Sign Up for lauch Updates</button>

    </div>
      </div>
     
     {/*   Main Div 2 */}
      <div className='w-1/2 justify-end relative'>
      
      <div className='absolute bottom-32 right-40'>
        <img src={Volunteer} className='w-[350px] h-[420px]'>
        </img>
      </div>
      <div className='absolute bottom-32 right-40'>
        <img src={Rectangular} className='w-[350px] h-[420px]'>
        </img>
      </div>
      <div className='absolute top-[70px] right-56'>
        <img src={DonateImage} className='w-[350px] h-[420px]'></img>

      </div>
      <div className='absolute bottom-28 left-40'>
        <img src={Donation} alt="" className='h-[80px] w-[250px]' />

      </div>

      


      </div>
      </div>

    
    </div>
  )
}

export default BenefitPage
