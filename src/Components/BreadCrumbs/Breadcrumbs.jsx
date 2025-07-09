import React from "react";
import arrow_icon from "../Assets/breadcrum_arrow.png";

export default function Breadcrumbs(props) {
  const { product } = props;
  return (
    <div className="flex flex-wrap gap-1 items-center py-4 text-[#5e5e5e] text-sm sm:text-base font-semibold px-4 lg:px-[6rem]">
      <span>HOME</span>
      <img src={arrow_icon} className="h-3 w-3" />
      <span>SHOP</span>
      <img src={arrow_icon} className="h-3 w-3" />
      <span>{product.category}</span>
      <img src={arrow_icon} className="h-3 w-3" />
      <span className="truncate max-w-[150px] sm:max-w-none">
        {product.name}
      </span>
    </div>
  );
}
