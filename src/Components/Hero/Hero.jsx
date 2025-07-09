import React from "react";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_img from "../Assets/hero_image.png";

export default function Hero() {
  return (
    <div>
      <div className="grid lg:grid-cols-2 grid-cols-1  bg-[linear-gradient(180deg,_#fde1ff,_#e1ffea22_60%)]">
        <div className="flex items-center justify-center flex-col gap-[20px] cursor-default py-7 lg:py-0  ">
          <h1 className="text-[#090909] text-[26px] font-semibold ">
            NEW ARRIVALS ONLY
          </h1>
          <div >
            <div className="flex items-center gap-[20px]">
              <p className="text-[#171717] lg:text-[50px] text-[40px] font-bold">new</p>
              <img src={hand_icon} alt="hand-icon" className="w-[105px]" />
            </div>
            <p className="text-[#171717] lg:text-[50px] text-[40px] font-bold">Collections</p>
            <p className="text-[#171717] lg:text-[50px] text-[40px] font-bold">for everyone</p>
          </div>
          <div className="flex justify-center items-center gap-[15px] lg:px-[60px] px-[35px] lg:py-[20px] py-[16px] cursor-pointer rounded-[75px] mt-[30px] bg-[#ff4141] text-white text-[22px]  font-medium">
             <div>Latest Collection</div>
             <img src={arrow_icon} alt="arrow icon" />
          </div>
        </div>

        <div className="flex items-center justify-center lg:p-20 ">
          <img src={hero_img} className="object-cover " />
        </div>
      </div>
    </div>
  );
}
