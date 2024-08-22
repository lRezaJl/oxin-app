import React, { useState } from "react";
import Image from "next/image";
import { CiEdit } from "react-icons/ci";
import { IoHome } from "react-icons/io5";
import { FaPowerOff } from "react-icons/fa6";

const Card = () => {
  // تنظیم state برای مدیریت فوکوس دکمه‌ها
  const [focusedCard, setFocusedCard] = useState([2, 3]); // کارت‌های دوم و سوم در ابتدا فعال هستند

  // تابعی برای تغییر فوکوس کارت‌ها
  const handleFocus = (cardIndex) => {
    if (cardIndex === 1) {
      setFocusedCard([1]); // اگر روی کارت اول کلیک شود، فقط کارت اول فعال می‌شود
    } else {
      setFocusedCard([2, 3]); // در غیر این صورت، کارت‌های دوم و سوم فعال می‌مانند
    }
  };

  return (
    <div
      dir="rtl"
      className="w-full h-screen rounded-box bg-gray-300 flex flex-row gap-1.5 p-1"
    >
      <div
        className={`relative flex-1 h-full overflow-hidden rounded-btn transition-all duration-500 bg-gray-300 border border-gray-300 flex justify-start items-start min-w-5 ${
          focusedCard.includes(1)
            ? "flex-[0.5] max-sm:flex-[18] max-md:flex-[2] max-lg:flex-[1] max-xl:flex-[0.75]"
            : "transition-all duration-500  max-lg:w-5 xl:max-w-none"
        }`}
        onClick={() => handleFocus(1)}
      >
        <span
          className={`absolute min-w-[14em] mt-2 p-2 text-center transform transition-all duration-500 text-gray-800 text-lg font-bold hover:rotate-0  ${
            focusedCard.includes(1)
              ? "rotate-0"
              : "-rotate-90 w-full h-full cursor-pointer"
          }`}
        >
          منــــو
        </span>
        <div className="flex flex-col w-full mt-5 mr-2">
          <div className="flex my-10">
            <Image
              className="w-[112px]"
              src="/images/oxinLogo180x67.png"
              alt="Oxin Game"
              width={180}
              height={67}
            />
          </div>

          <div className="relative flex justify-start items-start gap-4 avatar p-3 bg-gray-400 rounded-box">
            <div className="w-16 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
            <div className="flex flex-col gap-1 mt-4">
              <p className="text-lg font-medium text-gray-800">RezaJ</p>
              <p className="text-base font-normal text-primary-500">
                09172060938
              </p>
            </div>
            <div className="absolute left-3 top-3 text-xl text-gray-800 p-1 rounded-badge bg-primary-500">
              <CiEdit />
            </div>
          </div>
          <nav className="flex flex-col justify-center items-start gap-5 my-10 lg:mr-14">
            <button className=" btn bg-transparent border-none shadow-none hover:bg-gray-300 hover:shadow-navbox flex flex-row gap-5 text-gray-700">
              <IoHome className="text-4xl font-bold" />
              <p className="text-4xl font-bold">خانه</p>
            </button>
            <button className=" btn bg-transparent border-none shadow-none drop-shadow-3xlRed hover:bg-gray-300 hover:shadow-navbox flex flex-row gap-5 text-coralRed">
              <FaPowerOff className="text-4xl font-bold" />
              <p className="text-4xl font-bold">خروج</p>
            </button>
          </nav>
        </div>
      </div>
      <div
        className={`relative flex-1 h-full overflow-hidden cursor-pointer rounded-btn transition-all duration-500 bg-gray-800 border border-gray-300 flex justify-center items-center  min-w-5 ${
          focusedCard.includes(2)
            ? "max-sm:flex-[12] sm:flex-[2] xl:flex-[3]"
            : ""
        }`}
        onClick={() => handleFocus(2)}
      >
        <span
          className={`absolute min-w-[14em] mt-2 p-2 text-center transform transition-all duration-500 text-gray-300 hover:rotate-0  ${
            focusedCard.includes(2) ? "rotate-0 w-full h-full" : "-rotate-90"
          }`}
        >
          رزورهــا
        </span>
      </div>
    </div>
  );
};

export default Card;
