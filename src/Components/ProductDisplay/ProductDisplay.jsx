import React, { useContext } from "react";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

export default function ProductDisplay(props) {
  const { product } = props;
  const {addToCart} = useContext(ShopContext);
  return (
    <div>
      <div className="grid lg:grid-cols-2 grid-cols-1 px-4 lg:px-[70px] py-6 gap-10">
        {/* Left: Thumbnails + Main Image */}
        <div className="flex gap-4">
          {/* Thumbnails */}
          <div className="flex flex-col gap-4">
            {[...Array(4)].map((_, idx) => (
              <img
                key={idx}
                src={product.image}
                alt={`thumb-${idx}`}
                className="w-24 h-[130px] object-cover rounded border"
              />
            ))}
          </div>

          {/* Large Image */}
          <div className="flex items-start">
            <img
              src={product.image}
              alt="main-product"
              className="h-[544px] w-auto object-cover rounded border"
            />
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="flex flex-col gap-4">
          <h1 className="text-[#3d3d3d] text-[24px] lg:text-[30px] font-semibold">
            {product.name}
          </h1>

          <div className="flex items-center gap-2 text-[#1c1c1c] text-sm lg:text-base">
            {[...Array(4)].map((_, idx) => (
              <img key={idx} src={star_icon} alt={`star-${idx}`} />
            ))}
            <img src={star_dull_icon} alt="star-dull" />
            <p>(122)</p>
          </div>

          <div className="flex gap-6 text-lg lg:text-2xl font-bold my-4">
            <div className="text-[#818181] line-through">
              ${product.old_price}
            </div>
            <div className="text-[#ff4141]">${product.new_price}</div>
          </div>

          <p className="text-[#555] text-sm lg:text-base leading-relaxed">
            Experience unmatched comfort and style with our premium cotton
            t-shirt. Designed for everyday wear with a modern, flattering fit.
          </p>

          <div>
            <h2 className="mt-8 text-[#656565] font-semibold text-lg">
              Select Size
            </h2>
            <div className="flex flex-wrap gap-4 my-4">
              {["S", "M", "L", "XL", "2XL"].map((size) => (
                <div
                  key={size}
                  className="py-2 px-4 border border-[#ebebeb] bg-[#fbfbfb] rounded cursor-pointer"
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          <button className="py-3 px-6 text-white bg-[#ff4141] font-semibold w-full sm:w-fit"
          onClick={()=>{
            addToCart(product.id)
          }}>
            Add to Cart
          </button>

          <p className="mt-2 text-sm">
            <span className="font-semibold">Category:</span> Women, T-Shirt,
            Crop-Top
          </p>
          <p className="text-sm">
            <span className="font-semibold">Tags:</span> Modern, Latest
          </p>
        </div>
      </div>
    </div>
  );
}
