import React, { useState } from "react";
import Image from "next/image";
import ReserveList from "../Components/ReserveList";

import { CiEdit } from "react-icons/ci";
import { IoHome } from "react-icons/io5";
import { FaPowerOff } from "react-icons/fa6";
import { SiCashapp } from "react-icons/si";
import { TbReservedLine } from "react-icons/tb";
import { FaClipboardList } from "react-icons/fa";

const Card = () => {
  // تنظیم state برای مدیریت فوکوس دکمه‌ها
  const [focusedCard, setFocusedCard] = useState([2, 3]); // کارت‌های دوم و سوم در ابتدا فعال هستند

  // تابعی برای تغییر فوکوس کارت‌ها
  const handleFocus = (cardIndex) => {
    if (cardIndex === 1) {
      setFocusedCard([1]); // اگر روی کارت اول کلیک شود، فقط کارت اول فعال می‌شود
    } else {
      setFocusedCard([2]); // در غیر این صورت، کارت‌های دوم و سوم فعال می‌مانند
    }
  };

  return (
    <div
      dir="rtl"
      className="w-full h-screen rounded-box bg-gray-300 flex flex-row p-1"
    >
      <div
        className={`relative flex-1 h-full overflow-hidden rounded-btn transition-all duration-500 bg-gray-300 flex justify-center items-start min-w-5 ${
          focusedCard.includes(1)
            ? "flex-[0.5] max-sm:flex-[14] max-md:flex-[2] max-lg:flex-[1] max-xl:flex-[0.75]"
            : "transition-all duration-500 cursor-pointer"
        }`}
        onClick={() => handleFocus(1)}
      >
        <div
          className={`absolute z-40 flex justify-center items-center min-w-[52rem] min-h-20 mt-2 p-2 transform transition-all duration-500 ${
            focusedCard.includes(1)
              ? "top-0"
              : "w-full h-full backdrop-blur-lg backdrop-saturate-150 drop-shadow-hardWhite cursor-pointer"
          }`}
          onClick={() => handleFocus(1)}
        >
          <span
            className={`hover:rotate-0 text-center text-gray-800 text-xl font-bold transform transition-all duration-500 ${
              focusedCard.includes(1)
                ? "rotate-0"
                : "-rotate-90 top-[50%] cursor-pointer text-2xl max-sm:text-lg"
            }`}
          >
            منو
          </span>
        </div>
        <div className="flex flex-col w-full mt-5 md:pr-3 md:pl-2 pr-1 overflow-hidden">
          <div className="flex my-10">
            <Image
              className="w-[112px]"
              src="/images/oxinLogo180x67.png"
              alt="Oxin Game"
              width={180}
              height={67}
            />
          </div>

          <div className="relative flex flex-row justify-start items-start gap-4 p-3 bg-gray-400 rounded-box">
            <div className="avatar">
              <div className="w-16 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="flex flex-col mt-1 space-y-1">
              <p className="text-lg font-medium text-gray-800">RezaJ</p>
              <p className="text-base font-normal text-primary-400 tracking-wide">
                09172060938
              </p>
            </div>
            <button className="absolute left-3 top-3 text-xl text-gray-800 p-1 rounded-badge bg-primary-400">
              <CiEdit />
            </button>
          </div>
          <nav className="flex flex-col justify-center items-start gap-10 my-10 lg:mr-14">
            <button className="btn bg-transparent border-none shadow-none hover:bg-gray-300 drop-shadow-3xlGray hover:shadow-navbox flex-nowrap flex flex-row justify-start items-start gap-5 text-gray-700">
              <IoHome className="text-4xl font-bold" />
              <p className="text-4xl font-bold tracking-wide">خانه</p>
            </button>
            <button className="btn bg-transparent border-none shadow-none hover:bg-gray-300 drop-shadow-3xlGray hover:shadow-navbox flex-nowrap flex flex-row justify-start items-start gap-5 text-gray-700">
              <FaClipboardList className="text-4xl font-bold" />
              <p className="text-4xl font-bold tracking-wide ">رزرو ها</p>
            </button>
            <button className="btn bg-transparent border-none shadow-none hover:bg-gray-300 drop-shadow-3xlGray hover:shadow-navbox flex-nowrap flex flex-row justify-start items-start gap-5 text-gray-700">
              <SiCashapp className="text-4xl font-bold" />
              <p className="text-4xl font-bold tracking-wide">پرداخت</p>
            </button>
            <button className="btn bg-transparent border-none shadow-none drop-shadow-3xlRed hover:bg-gray-300 hover:shadow-navbox  flex-nowrap flex flex-row justify-start items-start gap-5 text-coralRed">
              <FaPowerOff className="text-4xl font-bold" />
              <p className="text-4xl font-bold tracking-wide">خروج</p>
            </button>
          </nav>
        </div>
      </div>

      <div
        className={`relative flex-1 h-full overflow-hidden rounded-btn transition-all duration-500 bg-gray-800 flex justify-center items-start min-w-5  ${
          focusedCard.includes(2)
            ? "max-sm:flex-[14] sm:flex-[2] xl:flex-[3]"
            : "transition-all duration-500 cursor-pointer"
        }`}
        onClick={() => handleFocus(2)}
      >
        <div
          className={`absolute z-50 flex justify-center items-center min-w-[52rem] min-h-20 p-2 transform transition-all duration-500 text-gray-300 text-xl font-bold ${
            focusedCard.includes(2)
              ? "rotate-0 top-0 "
              : "w-full h-full backdrop-blur-lg backdrop-saturate-150 drop-shadow-hardDark cursor-pointer"
          }`}
          onClick={() => handleFocus(2)}
        >
          <span
            className={`hover:rotate-0 text-center transform transition-all duration-500 tracking-wide ${
              focusedCard.includes(2)
                ? "rotate-0"
                : "-rotate-90 top-[50%] cursor-pointer"
            }`}
          >
            رزرو هـا
          </span>
        </div>

        <div className="p-5 mt-16 w-full">
          <ReserveList />
        </div>
      </div>
    </div>
  );
};

export default Card;
