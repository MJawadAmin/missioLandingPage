import React from 'react'
import RightImage from '../assets/download1.png'
import SignImage from '../assets/signImage.png'
import ButtomRightImage from '../assets/shape8 1.png'
import { BsCheckCircle } from 'react-icons/bs'

const BenefitPage = () => {
  return (
    <div className="bg-gray-200">
      {/* Parent container with relative positioning */}
      <div className='relative border h-screen'> {/* Added height to ensure absolute positioning works */}
        {/* RightImage positioned absolutely on the right */}
        <div className='absolute right-0 top-0'>
          <img src={RightImage} alt="RightImage" />
        </div>

        {/* SignImage positioned slightly below */}
        <div className='absolute right-[107px] top-28'>
          <img src={SignImage} alt="SignImage" />
        </div>

        {/* ButtomRightImage positioned at the bottom-right corner */}
        <div className='absolute bottom-0 right-0'>
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

<div className='text-[22px] flex'>
<div  className="text-[rgb(2,100,126)]">
      {/* Change the icon color using text-color utility */}
      <BsCheckCircle />
    </div>
Affordable pricing tailored to nonprofit sizes
</div>
<div className='text-[22px] flex'>
<div  className="text-[rgb(2,100,126)]">
      {/* Change the icon color using text-color utility */}
      <BsCheckCircle />
    </div>
Top-notch support and onboarding
</div>
<div className='text-[22px] flex flex-row'>
<div  className="text-[rgb(2,100,126)]">
      {/* Change the icon color using text-color utility */}
      <BsCheckCircle />
    </div>
        <p>{" "}Unlimited records, users, forms, and storage</p>
</div>
<div> 
    <button className="bg-[rgb(2,100,126)] mr-20 w-[368px] h-[89px] rounded-full text-[22px] text-gray-100 mt-10">Sign Up for lauch Updates</button>

    </div>
      </div>

      <div className='w-1/2 justify-end'>
        {/* Add other content here if needed */}
      </div>
      </div>

    
    </div>
  )
}

export default BenefitPage
