import React from 'react';
import Facebook from '../../assets/Facebook F.png'
import Twitter from'../../assets/Twitter.png/'
import Linedin from '../../assets/LinkedIn 2.png'
import Logo from '../../assets/logo.png'





const Navbar = () => {
  return (
    <>
    <nav>
        <div className=" flex flex-col">
       <div className=" h-[70px] bg-[#02647E] flex flex-row items-center text-gray-200">
        <h1 className='ml-[86px]'>Email: Missio@missio.io</h1>
        <h1 className="flex-1 text-center text-2xl">Welcome to Missio</h1>
        <div className='flex flex-row  gap-3 mr-24 items-center'>
             <h1 className='text-lg'> Follow:</h1>
            
            <a
  href=""
  className="w-[34px] h-[33.86px] bg-[rgb(75,139,156)] rounded-md flex items-center justify-center"
>
  <img src={Facebook} alt="" className="w-[20px] h-[20px]" />
</a>

<a
  href=""
  className="w-[34px] h-[33.86px] bg-[rgb(75,139,156)] rounded-md flex items-center justify-center"
>
  <img src={Twitter} alt="" className="w-[20px] h-[20px]" />
</a>
<a
  href=""
  className="w-[34px] h-[33.86px] bg-[rgb(75,139,156)] rounded-md flex items-center justify-center"
>
  <img src={Linedin} alt="" className="w-[20px] h-[20px]" />
</a>

        </div>
       </div>




<div className=" bg-[rgb(255,255,255)] border-black h-[158px] flex flex-row items-center justify-between  ">
    <div className="">
    <img src={Logo} alt=""  className='w-[240px] h-[84px] ml-[80px] justify-center '/>
    </div>
    <div className=" flex items-center ">
    <ul className="flex items-center justify-center text-lg space-x-14">
        <li className="">Home</li>
        <li className="">About Us</li>
        <li className="">Solutions</li>
        <li className="">Industries</li>
        <li className="">Blogs</li>
        <li className="">Contact Us</li>
    </ul>
   
    </div>
    <div> 
    <button className="bg-[rgb(2,100,126)] mr-20 w-[200px] h-[69px] rounded-full text-gray-100">Schedule Demo</button>

    </div>
 
</div>

        </div>
    </nav>
    </>
  );
};

export default Navbar;
