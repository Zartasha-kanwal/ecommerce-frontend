import React from 'react'

export default function NewsLetter() {
  return (
   <div className="mt-14">
  <div className="w-[90%] lg:w-[65%] mx-auto flex flex-col items-center justify-center bg-[linear-gradient(180deg,_#fde1ff_0%,_#e1ffea22_60%)] gap-6 lg:gap-[30px] py-12 px-6 lg:px-[80px] mb-[100px] rounded-2xl cursor-default">
    
    <h1 className="text-[#454545] text-[26px] lg:text-[55px] font-semibold text-center">
      Get Exclusive offers on your Email
    </h1>
    
    <p className="text-[#454545] text-[16px] lg:text-[20px] text-center">
      Subscribe to our newsletter and stay updated
    </p>
    
    <div className="flex flex-col lg:flex-row items-center justify-between bg-white w-full lg:w-[730px] border border-[#e3e3e3] px-4 py-4 lg:py-0 lg:h-[70px] rounded-2xl lg:rounded-[80px] gap-4 lg:gap-0">
      <input
        type="email"
        placeholder="Your Email Id"
        className="w-full border-none outline-none text-[#616161] text-[16px] lg:ml-6"
      />
      <button className="w-full lg:w-auto py-3 px-8 lg:px-[80px] bg-black text-white text-[16px] rounded-full">
        Subscribe
      </button>
    </div>
    
  </div>
</div>

  )
}
