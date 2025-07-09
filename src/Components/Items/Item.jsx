import React from "react";

export default function Item(props) {
  return (
    <div>
      <div
        className="hover:scale-105 transition duration-500"
        onClick={() => window.scrollTo(0, 0)} 
      >
        <img src={props.image} alt={props.name} />
        <p className="my-[6px]">{props.name}</p>
        <div className="flex gap-[20px] items-center">
          <div className="text-[#374151] text-[18px] font-semibold ">
            ${props.new_price}
          </div>
          <div className="text-[#8c8c8c] text-[18px] font-medium line-through">
            ${props.old_price}
          </div>
        </div>
      </div>
    </div>
  );
}

