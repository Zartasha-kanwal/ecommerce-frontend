import React from "react";
import exclusive_img from "../Assets/exclusive_image.png";

export default function Offers() {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 items-center w-[80%] px-4 lg:px-[30px]  mx-auto lg:mt-[7rem] mt-[4rem] bg-[linear-gradient(180deg,_#fde1ff_0%,_#e1ffea22_60%)]">
      <div className="flex flex-col justify-center py-7">
        <h1 className="text-[#171717] 2xl:text-[80px] lg:text-[70px] text-[40px] font-semibold">
          Exclusive
        </h1>
        <h1 className="text-[#171717] 2xl:text-[80px] lg:text-[70px] text-[40px] font-semibold lg:whitespace-nowrap ">
          Offers for you
        </h1>
        <p className="text-[#171717] text-[22px] font-semibold">
          Only on best sellers product
        </p>
        <div>
          <button className="px-11 md:px-16 lg:px-[80px] py-3 whitespace-nowrap flex items-center justify-center rounded-[35px] bg-[#ff4141] text-white text-[18px] lg:text-[20px] font-medium mt-[30px] cursor-pointer">
            Check now
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center lg:px-[50px]">
        <img
          src={exclusive_img}
          className="w-full max-w-[400px] object-contain"
        />
      </div>
    </div>
  );
}
