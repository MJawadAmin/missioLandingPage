import React from 'react'
import AckcelImage from '../assets/akcelImage.png'
import HeartImagea from '../assets/HeartImage.png'
import UnityImage from '../assets/UnityImage.png'

const DemoToday = () => {
  return (
    <div className='bg-[rgb(2,100,126)] h-[60vh] relative'>
{/* Absolute Image */}
<div className='absolute left-5 bottom-0 '>
<img src={AckcelImage} alt="" />
</div>
<div className='absolute top-10 right-10'>
  <img src={HeartImagea} alt="" />
</div>
<div className='absolute bottom-0 right-0'>
  <img src={UnityImage} alt="" />
</div>


      <div  className=' text-white  text-center px-96'>
      <h1 className='text-[38px] text-bold'>See It to Believe It – Reserve Your Demo Today</h1>
      <p className=' text-22px '>Encourage users to experience the platform firsthand and offer perks for signing up early.“The best way to understand the power of Missio is to experience it firsthand. Schedule a free demo and enjoy exclusive perks for early sign-ups!</p>
      </div>
      <div className='flex items-center justify-center'>
        <div className='flex py-24 '> 
    <button className="bg-white mr-20 w-[300px] h-[69px] rounded-full text-black">Schedule Demo</button>
    
    <button className="border-white border-2 mr-20 w-[409px] h-[69px] rounded-full text-white">Get Launch Updates & Exclusive Perks!</button>
    </div>
    </div>
  
    
    </div>
  )
}

export default DemoToday
