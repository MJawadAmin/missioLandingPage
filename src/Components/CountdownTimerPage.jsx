import React from 'react'
import Image1 from '../assets/dottedArrowImage.png'
import Image2 from '../assets/download2.png'
import Image3 from '../assets/UnityImage.png'

const CountdownTimerPage = () => {
  return (
    <div className='bg-[#FBF8EF] h-[100vh] relative'>
        {/* absolute Images */}
        <div className='absolute bottom-0 '>
            <img src={Image1} alt="" />
        </div>
        
        <div className='absolute top-0 right-0'>
            <img src={Image2} alt="" />
        </div>
        
        <div className='absolute bottom-0 right-0'>
            <img src={Image3} alt="" />
        </div>


        <div className='p-20 ml-14'>
            <h1 className='bg-[rgb(2,100,126)] text-transparent bg-clip-text'>  Countdown Timer</h1>
            <h1 className='font-semibold text-[40px] w-[800px]'> Dynamic countdown leading to Black Friday midnight.</h1>
            <p className='text-[24px] '>until we reveal a smarter way to manage and amplify your mission.</p>
        </div>
        <div className='w-[1265px] h-[126px]  mx-auto flex  justify-between   px-7 rounded-lg gap-[1px]'>
            <div className='text-white text-xl bg-[rgb(2,100,126)]  w-full h-full rounded-l-lg flex justify-center items-center'>
                13 Days
            </div>
            <div className='text-white text-xl bg-[rgb(2,100,126)]  w-full h-full flex justify-center items-center'>
                13 Hours
            </div>
            <div className='text-white text-xl bg-[rgb(2,100,126)]  w-full h-full flex justify-center items-center'>
                13 Minutes
            </div>
            <div className='text-white text-xl bg-[rgb(2,100,126)]  w-full h-full rounded-r-lg flex justify-center items-center'>
                13 Seconds
            </div>
          

        </div>
      
        <div className='flex felx-row justify-between items-center px-40 p-6'>
      <div className=' w-[300px] h-[200px] border-[rgb(2,100,126)] bg-white border-2 rounded-lg flex flex-col justify-center items-center '>
        <h1 className='text-[40px]'>
            Day 1
        </h1>
        <p className='text-[15px] px-8'>Unlock a New Era of Donor Engagement! </p>
      </div>
      <div className='w-[300px] h-[200px] border-[rgb(2,100,126)] bg-white border-2 rounded-lg flex flex-col justify-center items-center'>
        <h1 className='text-[40px]'>Day 2</h1>
        <p className='text-[15px] px-8'>
        Boost Your Efficiency and Free Up More Time for Your Mission!
        </p>
      </div>
      <div className=' w-[300px] h-[200px] border-[rgb(2,100,126)] bg-white border-2 rounded-lg flex flex-col justify-center items-center'>
        <h1 className='text-[40px]'>Day 3</h1>
        <p className='text-[15px] px-8'>
        Last Chance to Be First in Line!
        </p>
      </div>


    </div>

    </div>
  )
}

export default CountdownTimerPage
