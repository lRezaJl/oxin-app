"use client";
import React from "react";
import { FaAngleDown } from "react-icons/fa6";

export default function Payments() {
  return (
    <div dir="rtl" className="flex flex-col justify-start items-start">
      <div className=" w-full flex flex-col justify-start items-start">
        <p className="text-primary-400 text-3xl font-bold indent-5 marker:text-primary-300">
          &#8226; تاریخچه رزرو
        </p>
        <details className="w-full mt-4 space-y-3 group bg-gray-700 card pt-2 pb-5 border border-gray-600">
          <summary className="text-xl font-medium flex flex-row text-primary-400 justify-start items-center mx-4 ml-5 cursor-pointer py-3">
            <h3 className="text-2xl font-medium whitespace-nowrap">
              دوشنبه 6/12
            </h3>
            <div className="h-[2px] bg-primary-400 w-full mr-3"></div>
            <div className="p-2 ml-1 mt-1 text-xl transition-transform duration-300 ease-in-out group-open:rotate-180">
              <FaAngleDown />
            </div>
          </summary>
          <div className="details-content flex flex-row justify-between border-primary-300 border-y p-5 py-3 mr-5 ml-8 my-0 rounded-l-full">
            <div className="flex flex-row gap-2 text-nowrap">
              <span className="text-primary-400">18 PC</span>
              <p className="text-gray-50">شروع از ساعت </p>
              <span className="text-primary-400">13</span>
              <p className="text-gray-50">تا</p>
              <span className="text-primary-400">17</span>
              <p className="text-gray-50"> - (ساعت 4)</p>
            </div>
            <p className="text-gray-50">تومان 123,412</p>
          </div>
        </details>
        <details className="w-full mt-4 space-y-3 group bg-gray-700 card pt-2 pb-5 border border-gray-600">
          <summary className="text-xl font-medium flex flex-row text-primary-400 justify-start items-center mx-4 ml-5 cursor-pointer py-3">
            <h3 className="text-2xl font-medium whitespace-nowrap">
              سه‌شنبه 6/12
            </h3>
            <div className="h-[2px] bg-primary-400 w-full mr-3"></div>
            <div className="p-2 ml-1 mt-1 text-xl transition-transform duration-300 ease-in-out group-open:rotate-180">
              <FaAngleDown />
            </div>
          </summary>
          <div className="details-content flex flex-row justify-between border-primary-300 border-y p-5 py-3 mr-5 ml-8 my-0 rounded-l-full">
            <div className="flex flex-row gap-2 text-nowrap">
              <span className="text-primary-400">18 PC</span>
              <p className="text-gray-50">شروع از ساعت </p>
              <span className="text-primary-400">13</span>
              <p className="text-gray-50">تا</p>
              <span className="text-primary-400">17</span>
              <p className="text-gray-50"> - (ساعت 4)</p>
            </div>
            <p className="text-gray-50">تومان 123,324 </p>
          </div>
        </details>
      </div>
    </div>
  );
}
