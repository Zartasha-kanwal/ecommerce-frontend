import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { ShopContext } from "../Context/ShopContext";
import drop_down from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Items/Item";

export default function Shopcategory(props) {
  const { all_product } = useContext(ShopContext);

  return (
    <div>
      <div>
        <img src={props.banner} className="block my-8 w-[90%] mx-auto" />

        {/* Sort and Show */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-[90%] mx-auto gap-4 sm:gap-0">
          <p className="text-sm sm:text-base">
            <span className="font-semibold">Showing 1-12</span> out of 36
            products
          </p>
          <div className="flex items-center justify-center gap-1 cursor-pointer py-2 px-4 rounded-full border border-[#888] text-sm sm:text-base">
            Sort by <img src={drop_down} className="h-2 w-4 ml-1" />
          </div>
        </div>

        {/* Product Grid */}

        <div className="my-5 w-[90%] mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 py-16">
          {all_product.map((item, i) => {
            if (props.category === item.category) {
              return (
                <Link to={`/product/${item.id}`} key={i}>
                  <Item
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}
                  />
                </Link>
              );
            } else {
              return null;
            }
          })}
        </div>

        <div className="flex justify-center items-center mx-auto my-10 px-6 py-4 rounded-full bg-[#787878]   lg:text-[18px] font-medium cursor-pointer text-white w-full max-w-[233px]">
          Explore more
        </div>
      </div>
    </div>
  );
}
