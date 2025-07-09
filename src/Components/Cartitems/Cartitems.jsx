import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

export default function Cartitems() {
  const {getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);
  return (
    <div className="my-[100px] px-4 lg:px-[170px] overflow-x-auto">
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="text-[#454545] text-[18px] font-semibold whitespace-nowrap border-b border-gray-300 ">
            <th className="text-center px-2">Product</th>
            <th className="text-center px-2">Title</th>
            <th className="text-center px-2">Price</th>
            <th className="text-center px-2">Quantity</th>
            <th className="text-center px-2">Total</th>
            <th className="text-center px-2">Remove</th>
          </tr>
        </thead>
        <tbody>
          {all_product &&
            all_product.map((e) => {
              if (e && e.id && cartItems[e.id] > 0) {
                return (
                  <tr
                    key={e.id}
                    className="text-[17px] border-b border-gray-200"
                  >
                    <td className="py-4">
                      <div className="flex items-center justify-center">
                        <img
                          src={e.image}
                          alt={e.name}
                          className="w-[62px] h-[62px] object-cover"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center justify-center">
                        <span className="max-w-[150px] truncate" title={e.name}>
                          {e.name}
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center justify-center whitespace-nowrap">
                        ${e.new_price}
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center justify-center">
                        <button className="border border-[#ebebeb] bg-white px-4 py-1">
                          {cartItems[e.id]}
                        </button>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center justify-center whitespace-nowrap">
                        ${e.new_price * cartItems[e.id]}
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center justify-center">
                        <img
                          src={remove_icon}
                          alt="Remove"
                          onClick={() => removeFromCart(e.id)}
                          className="w-[15px] cursor-pointer"
                        />
                      </div>
                    </td>
                  </tr>
                );
              }
              return null;
            })}
        </tbody>
      </table>

      <div className="flex flex-col lg:flex-row justify-between gap-[40px] my-[100px] px-4 lg:px-[120px]">
        {/* Cart Totals (Left Side) */}
        <div className="w-full lg:w-[50%] border border-gray-200 rounded-2xl p-6 shadow-sm bg-white">
          <h1 className="text-2xl font-semibold mb-6 text-gray-800">
            Cart Totals
          </h1>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-gray-600">Subtotal</p>
              <p className="font-medium text-gray-800">${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="flex justify-between items-center">
              <p className="text-gray-600">Shipping Fee</p>
              <p className="font-medium text-green-600">Free</p>
            </div>
            <hr />
            <div className="flex justify-between items-center text-lg font-semibold">
              <h3 className="text-gray-800">Total</h3>
              <h3 className="text-gray-900">${getTotalCartAmount()}</h3>
            </div>
          </div>

          <button className="mt-8 w-full h-[58px] bg-[#ff5a5a] hover:bg-[#e04848] transition text-white font-medium rounded-xl shadow">
            Proceed to Checkout
          </button>
        </div>

        {/* Promo Code (Right Side) */}
        <div className="w-full lg:w-[40%] border border-gray-200 rounded-2xl p-6 shadow-sm bg-white h-fit">
          <p className="mb-4 text-gray-700 text-lg">Have a promo code?</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Enter promo code"
              className="w-full sm:flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff5a5a]"
            />
            <button className="w-full sm:w-auto px-6 py-2 bg-[#ff5a5a] hover:bg-[#e04848] transition text-white rounded-xl font-medium">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
