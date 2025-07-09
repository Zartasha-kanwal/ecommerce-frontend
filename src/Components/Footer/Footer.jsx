import React from "react";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintrest_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

export default function Footer() {
  return (
   <div className="flex flex-col items-center justify-center gap-10 px-4 lg:px-0">
  {/* Logo Section */}
  <div className="flex items-center justify-center gap-4">
    <img src={footer_logo} className="w-10 h-auto lg:w-auto" />
    <p className="text-[#383838] text-2xl lg:text-[46px] font-bold">SHOPPER</p>
  </div>

  {/* Navigation Links */}
  <ul className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12 text-[#252525] text-base lg:text-[20px]">
    <li className="cursor-pointer">Company</li>
    <li className="cursor-pointer">Products</li>
    <li className="cursor-pointer">Offices</li>
    <li className="cursor-pointer">About</li>
    <li className="cursor-pointer">Contact</li>
  </ul>

  {/* Social Icons */}
  <div className="flex gap-4">
    <div className="p-2 bg-[#fbfbfb] border border-[#ebebeb]">
      <img src={instagram_icon} className="w-5 h-5" />
    </div>
    <div className="p-2 bg-[#fbfbfb] border border-[#ebebeb]">
      <img src={pintrest_icon} className="w-5 h-5" />
    </div>
    <div className="p-2 bg-[#fbfbfb] border border-[#ebebeb]">
      <img src={whatsapp_icon} className="w-5 h-5" />
    </div>
  </div>

  {/* Footer Bottom */}
  <div className="flex flex-col items-center gap-6 w-full mb-8 text-[#1a1a1a] text-xs lg:text-[20px]">
    <hr className="w-[80%] border-none rounded-[10px] h-[3px] bg-[#c7c7c7]" />
    <p className="text-center">Copyright © 2025 - All rights Reserved</p>
  </div>
</div>

  );
}
