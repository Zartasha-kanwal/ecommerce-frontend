import React, { useContext, useState } from "react";
import logo from "../Assets/logo.png";
import cart_logo from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

export default function Navbar() {
  const [menu, setMenu] = useState("shop");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);
  return (
    <>
      {/* Navbar for large screens */}
      <div className="hidden lg:flex justify-around p-[16px] shadow-black sticky top-0 z-40 bg-white">
        <div className="flex items-center gap-[10px]">
          <img src={logo} alt="nav-logo" />
          <p className="text-[#171717] text-[38px] font-semibold">SHOPPER</p>
        </div>

        <ul className="flex items-center gap-[50px] text-[#626262] text-[ 20px] font-medium cursor-pointer">
          <li
            className="flex flex-col justify-center gap-[3px] items-center"
            onClick={() => {
              setMenu("shop");
            }}
          >
            <Link to="/"> Shop</Link>
            {menu === "shop" ? (
              <hr className="border-none w-[80%]  h-[3px] rounded-[10px] bg-[#FF4141]"></hr>
            ) : (
              <></>
            )}{" "}
          </li>
          <li
            className="flex flex-col justify-center gap-[3px] items-center "
            onClick={() => {
              setMenu("men");
            }}
          >
            <Link to="/men">Men</Link>
            {menu === "men" ? (
              <hr className="border-none w-[80%]  h-[3px] rounded-[10px] bg-[#FF4141]"></hr>
            ) : (
              <></>
            )}
          </li>
          <li
            className="flex flex-col justify-center gap-[3px] items-center "
            onClick={() => {
              setMenu("women");
            }}
          >
            <Link to="/women">Women</Link>
            {menu === "women" ? (
              <hr className="border-none w-[80%]  h-[3px] rounded-[10px] bg-[#FF4141]"></hr>
            ) : (
              <></>
            )}
          </li>
          <li
            className="flex flex-col justify-center gap-[3px] items-center "
            onClick={() => {
              setMenu("kids");
            }}
          >
            <Link to="/kids">Kids</Link>
            {menu === "kids" ? (
              <hr className="border-none w-[80%]  h-[3px] rounded-[10px] bg-[#FF4141]"></hr>
            ) : (
              <></>
            )}
          </li>
        </ul>

        <div className="flex items-center gap-[45px]">
          {localStorage.getItem("auth-token") ? (
            <button
              onClick={() => {
                localStorage.removeItem("auth-token");
                window.location.replace("/");
              }}
              className="flex items-center justify-center px-[35px] py-[6px] border border-[#7a7a7a] rounded-[75px] text-[#515151] text-[20px] font-medium bg-white hover:bg-[#e6e5e5] transition duration-300"
            >
              LogOut
            </button>
          ) : (
            <Link to="/login">
              <button className="flex items-center justify-center px-[35px] py-[6px] border border-[#7a7a7a] rounded-[75px] text-[#515151] text-[20px] font-medium bg-white hover:bg-[#e6e5e5] transition duration-300">
                Login
              </button>
            </Link>
          )}

          <div className="relative">
            <Link to="/cart">
              <img src={cart_logo} alt="cart-logo" />
            </Link>
            <div className="absolute top-[-10px] right-[-10px] w-[22px] h-[22px] flex justify-center items-center rounded-full text-[14px] bg-red-600 text-white">
              {getTotalCartItems()}
            </div>
          </div>
        </div>
      </div>

      {/* Navbar for small screens */}
      <div className="flex lg:hidden justify-between items-center px-4 py-3 shadow-md sticky top-0 z-40 bg-white">
        <div className="flex items-center gap-[8px]">
          <img src={logo} alt="nav-logo" className="w-[30px] h-[30px]" />
          <p className="text-[#171717] text-[24px] font-semibold">SHOPPER</p>
        </div>

        {/* Mobile Menu Icon */}
        <div className="flex items-center gap-4 relative ">
          <Link to="/cart">
            <img
              src={cart_logo}
              alt="cart-logo"
              className="w-[24px] h-[24px]"
            />
          </Link>
          <div className="absolute right-[27px] top-0 w-[18px] h-[18px] font-semibold flex justify-center items-center rounded-full text-[12px] bg-red-600 text-white">
            {getTotalCartItems()}
          </div>

          {/*  hamburger icon */}
          <button
            className="text-[24px] text-[#333]"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu  */}
      {showMobileMenu && (
        <ul className="lg:hidden fixed top-0 left-0 right-0 bottom-0 z-50 flex flex-col items-start gap-4 px-6 py-6 bg-[linear-gradient(180deg,_#fdfbfb,_#ebedee_60%)] shadow overflow-y-auto">
          {/* Close button */}
          <div className="w-full flex justify-end">
            <button
              className="text-2xl text-[#333] px-4 py-2"
              onClick={() => setShowMobileMenu(false)}
            >
              ✖
            </button>
          </div>

          {/* Menu Items */}
          <li
            className={`text-[#626262] text-[18px] font-medium cursor-pointer ${
              menu === "shop" ? "text-[#FF4141]" : ""
            }`}
            onClick={() => {
              setMenu("shop");
              setShowMobileMenu(false);
            }}
          >
            <Link to="/">Shop</Link>
          </li>

          <li
            className={`text-[#626262] text-[18px] font-medium cursor-pointer ${
              menu === "men" ? "text-[#FF4141]" : ""
            }`}
            onClick={() => {
              setMenu("men");
              setShowMobileMenu(false);
            }}
          >
            <Link to="/men">Men</Link>
          </li>

          <li
            className={`text-[#626262] text-[18px] font-medium cursor-pointer ${
              menu === "women" ? "text-[#FF4141]" : ""
            }`}
            onClick={() => {
              setMenu("women");
              setShowMobileMenu(false);
            }}
          >
            <Link to="/women">Women</Link>
          </li>

          <li
            className={`text-[#626262] text-[18px] font-medium cursor-pointer ${
              menu === "kids" ? "text-[#FF4141]" : ""
            }`}
            onClick={() => {
              setMenu("kids");
              setShowMobileMenu(false);
            }}
          >
            <Link to="/kids">Kids</Link>
          </li>

          {localStorage.getItem("auth-token") ? (
            <button
              onClick={() => {
                localStorage.removeItem("auth-token");
                window.location.replace("/");
              }}
              className="flex items-center justify-center px-[35px] py-[6px] border border-[#7a7a7a] rounded-[75px] text-[#515151] text-[20px] font-medium bg-white hover:bg-[#e6e5e5] transition duration-300"
            >
              LogOut
            </button>
          ) : (
            <Link to="/login">
              <button className="flex items-center justify-center px-[35px] py-[6px] border border-[#7a7a7a] rounded-[75px] text-[#515151] text-[20px] font-medium bg-white hover:bg-[#e6e5e5] transition duration-300">
                Login
              </button>
            </Link>
          )}
        </ul>
      )}
    </>
  );
}
