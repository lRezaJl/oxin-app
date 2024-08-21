import React, { useState } from "react";
import Image from "next/image";

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
      className="w-full h-screen rounded-box bg-pink-500 flex flex-row gap-1.5 p-1"
    >
      <div
        className={`flex-1 h-full overflow-hidden cursor-pointer rounded-btn transition-all duration-500 bg-pink-500 border border-pink-500 flex justify-center items-center min-w-5 ${
          focusedCard.includes(1)
            ? "flex-[0.5] max-sm:flex-[18] max-md:flex-[2] max-lg:flex-[1] max-xl:flex-[0.75]"
            : "transition-all duration-500  max-lg:w-5 xl:max-w-none"
        }`}
        onClick={() => handleFocus(1)}
      >
        <span
          className={`min-w-[14em] p-2 text-center transform transition-all duration-500 uppercase text-gray-800 text-lg font-bold tracking-widest hover:rotate-0  ${
            focusedCard.includes(1) ? "rotate-0 w-full h-full" : "-rotate-90"
          }`}
        >
          منــــو
        </span>
      </div>
      <div
        className={`flex-1 h-full overflow-hidden cursor-pointer rounded-btn transition-all duration-500 bg-gray-800 border border-pink-500 flex justify-center items-center  min-w-5 ${
          focusedCard.includes(2) ? "flex-[4]" : ""
        }`}
        onClick={() => handleFocus(2)}
      >
        <span
          className={`min-w-[14em] p-2 text-center transform transition-all duration-500 uppercase text-pink-400 tracking-widest hover:rotate-0  ${
            focusedCard.includes(2) ? "rotate-0 w-full h-full" : "-rotate-90"
          }`}
        >
          رزورهــا
        </span>
      </div>
      <div
        className={`flex-1 h-full overflow-hidden cursor-pointer rounded-btn transition-all duration-500 bg-gray-800 border border-pink-500 flex justify-center items-center max-sm:hidden  min-w-5 ${
          focusedCard.includes(3) ? "flex-[4]" : ""
        }`}
        onClick={() => handleFocus(3)}
      >
        <span
          className={`min-w-[14em] p-2 text-center transform transition-all duration-500 uppercase text-pink-400 tracking-widest hover:rotate-0  ${
            focusedCard.includes(3) ? "rotate-0 w-full h-full" : "-rotate-90"
          }`}
        >
          سبد خرید
        </span>
      </div>
    </div>
  );
};

export default Card;
