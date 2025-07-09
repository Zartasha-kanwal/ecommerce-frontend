import React from "react";
import data_product from "../Assets/data";
import Item from "../Items/Item";

export default function RelatedProduct() {
  return (
    <div className="flex flex-col items-center gap-4 px-4 py-10">
      <h1 className="text-[#171717] text-3xl sm:text-4xl lg:text-[50px] font-semibold text-center">
        Related Products
      </h1>

      <hr className="w-32 sm:w-48 h-[6px] rounded-[10px] bg-[#252525]" />

      {/* Responsive Product Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 w-full max-w-[1200px]">
        {data_product.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
}
