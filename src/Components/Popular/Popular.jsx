import React, { useEffect, useState } from "react";
import Item from "../Items/Item";
import { API_BASE_URL } from "../../config";

export default function Popular() {

 const [popularProducts,setPopularProducts]=useState([]);


useEffect(() => {
  fetch(`${API_BASE_URL}popularinwomen`)
    .then((response) => response.json())
    .then((data) => setPopularProducts(data))
    .catch((err) => {
      console.error("Fetch error:", err);
    });
}, []);




  return (
    <div className="flex flex-col items-center gap-[10px]  mt-9 lg:mt-0">
      <h1 className="text-[#171717] lg:text-[50px] text-[35px] whitespace-nowrap font-semibold">Popular in women</h1>
      <hr className="lg:w-[20%] md:w-[30%] w-[40%] xl:w-[10%]  h-[6px]  rounded-[10px] bg-[#252525]"></hr>
      <div className="mt-[50px] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[30px] lg:px-[7rem] px-[3rem] cursor-pointer">
        {popularProducts.map((product, i) => {
          return (
            <Item
              key={i}
              id={product.id}
              name={product.name}
              image={product.image}
              new_price={product.new_price}
              old_price={product.old_price}
            />
          );
        })}
      </div>
    </div>
  );
}
