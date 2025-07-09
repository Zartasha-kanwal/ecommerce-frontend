import React from "react";

export default function DiscriptionBox() {
  return (
    <div className="my-10 px-4 lg:px-20">
      {/* Tabs */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="text-sm sm:text-base font-semibold h-[50px] sm:h-[60px] px-6 flex items-center justify-center border border-[#d0d0d0] rounded">
          Description
        </div>
        <div className="bg-[#fbfbfb] text-[#555] text-sm sm:text-base font-semibold h-[50px] sm:h-[60px] px-6 flex items-center justify-center ">
          Reviews (122)
        </div>
      </div>

      {/* Description Text */}
      <div className="flex flex-col gap-[25px] border border-[#D0D0D0] p-[48px] pb-[70px] text-sm sm:text-base space-y-4 leading-relaxed">
        <p>
          Discover a seamless shopping experience with our modern e-commerce
          platform. Browse a wide range of products with real-time pricing and
          secure checkout. Enjoy responsive design across all devices for easy,
          on-the-go shopping. Fast delivery, easy returns, and 24/7
          support—everything you need, online.
        </p>
        <p>
          Whether you're browsing fashion or electronics, enjoy a smooth
          interface across all devices— plus easy returns and 24/7 support to
          shop with confidence.
        </p>
      </div>
    </div>
  );
}
