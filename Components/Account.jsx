"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import Image from "next/image";
import ReserveList from "../Components/ReserveList";
import Payments from "../Components/Payments";

import { CiEdit } from "react-icons/ci";
import { IoHome } from "react-icons/io5";
import { FaPowerOff } from "react-icons/fa6";
import { SiCashapp } from "react-icons/si";
import { FaClipboardList } from "react-icons/fa";

const Card = () => {
  const [focusedCard, setFocusedCard] = useState([2, 3]);
  const [router, setRouter] = useState(null);
  const [activeComponent, setActiveComponent] = useState("ReserveList");

  const handleComponentChange = (componentName) => {
    setActiveComponent(componentName);
  };

  const handleFocus = (cardIndex) => {
    if (window.innerWidth >= 1024) {
      // در صفحه‌های بزرگتر از 1024 پیکسل تغییری در اندازه نده
      return;
    }
    if (cardIndex === 1) {
      setFocusedCard([1]);
    } else {
      setFocusedCard([2]);
    }
  };

  const navigateTo = (path) => {
    if (router) {
      router.push(path);
    }
  };

  function LogOut() {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    window.location.href = "/home";
  }

  return (
    <div
      dir="rtl"
      className="w-full h-screen rounded-box bg-gray-300 flex flex-row p-1"
    >
      {/* بخش 1 */}
      <div
        className={`relative flex-1 h-full overflow-hidden rounded-btn transition-all duration-500 bg-gray-300 flex justify-center items-start min-w-5 ${
          focusedCard.includes(1)
            ? "flex-[0.5] max-sm:flex-[10] max-md:flex-[10] max-lg:flex-[8] max-xl:flex-[0.75]"
            : "cursor-pointer"
        }`}
        onClick={() => handleFocus(1)}
      >
        <div
          className={`absolute z-40 flex justify-center items-center min-w-[52rem] min-h-20 mt-2 p-2 transform transition-all duration-500 ${
            focusedCard.includes(1)
              ? "top-0"
              : "max-lg:w-full max-lg:h-full max-lg:backdrop-blur-lg"
          }`}
        >
          <span
            className={`text-center text-gray-800 text-xl font-bold transform transition-all duration-500 ${
              focusedCard.includes(1)
                ? "rotate-0"
                : "lg:hidden -rotate-90 top-[50%] cursor-pointer text-2xl max-sm:text-lg"
            }`}
          >
            منو
          </span>
        </div>
        {/* محتوای بخش 1 */}
        <div className="flex flex-col w-full mt-5 md:pr-3 pl-2 pr-1 overflow-hidden">
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
          {/* منوهای ناوبری */}
          <nav className="flex flex-col justify-center items-start gap-10 my-10 lg:mr-2">
            <Link
              href="/"
              className="btn bg-transparent border-none hover:bg-gray-300 flex-nowrap flex flex-row gap-8 text-gray-700"
            >
              <IoHome className="text-4xl font-bold" />
              <p className="text-4xl font-bold tracking-wide">خانه</p>
            </Link>
            <button
              onClick={() => handleComponentChange("ReserveList")}
              className="btn bg-transparent border-none hover:bg-gray-300 flex-nowrap flex flex-row gap-8 text-gray-700"
            >
              <FaClipboardList className="text-4xl font-bold" />
              <p className="text-4xl font-bold tracking-wide">رزرو ها</p>
            </button>
            <button
              onClick={() => handleComponentChange("Payments")}
              className="btn bg-transparent border-none hover:bg-gray-300 flex-nowrap flex flex-row gap-8 text-gray-700"
            >
              <SiCashapp className="text-4xl font-bold" />
              <p className="text-4xl font-bold tracking-wide">پرداخت</p>
            </button>
            <button
              onClick={LogOut}
              className="btn bg-transparent border-none hover:bg-gray-300 flex-nowrap flex flex-row gap-8 text-coralRed"
            >
              <FaPowerOff className="text-4xl font-bold" />
              <p className="text-4xl font-bold tracking-wide">خروج</p>
            </button>
          </nav>
        </div>
      </div>

      {/* بخش 2 */}
      <div
        className={`relative flex-1 h-full overflow-hidden rounded-btn transition-all duration-500 bg-gray-800 flex justify-center items-start min-w-5 ${
          focusedCard.includes(2)
            ? "max-sm:flex-[10] max-md:flex-[10] max-lg:flex-[8] lg:flex-[2.7] xl:flex-[3]"
            : "cursor-pointer"
        }`}
        onClick={() => handleFocus(2)}
      >
        <div
          className={`absolute z-50 flex justify-center items-center min-w-[52rem] min-h-20 p-2 transform transition-all duration-500 text-gray-300 text-xl font-bold ${
            focusedCard.includes(2)
              ? "rotate-0 top-0"
              : "max-lg:w-full max-lg:h-full max-lg:backdrop-blur-lg"
          }`}
        >
          <span
            className={`text-center transform transition-all duration-500 ${
              focusedCard.includes(2)
                ? "rotate-0"
                : "lg:hidden -rotate-90 top-[50%] cursor-pointer"
            }`}
          >
            {activeComponent === "ReserveList" && "رزرو ها"}
            {activeComponent === "Payments" && "پرداخت ها"}
          </span>
        </div>

        {/* محتوای بخش 2 */}
        <div className="p-5 mt-16 w-full">
          {activeComponent === "ReserveList" && <ReserveList />}
          {activeComponent === "Payments" && <Payments />}
        </div>
      </div>
    </div>
  );
};

export default Card;
