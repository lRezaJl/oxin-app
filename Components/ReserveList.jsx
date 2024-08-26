"use client";
import React from "react";
import { FaAngleDown } from "react-icons/fa6";

export default function Reserve() {
  return (
    <div dir="rtl" className="flex flex-col justify-start items-start">
      <div className=" w-full">
        <div
          tabIndex={0}
          className="flex flex-row justify-start items-center mx-4 ml-5 collapse-title collapse"
        >
          <h3 className="text-2xl font-semibold text-primary-400 text-nowrap">
            دوشنبه 6/12
          </h3>
          <div className="h-[2px] bg-primary-400 w-full mr-3"></div>
          <button className="text-primary-400 p-2 ml-1 mt-1 text-xl">
            <FaAngleDown />
          </button>
        </div>
        <div className="card flex flex-row justify-between bg-slate-700 p-5 m-5 mt-3 collapse-content">
          <div className="flex flex-row gap-2">
            <span className="text-primary-400">18 PC</span>
            <p>شروع از ساعت </p>
            <span className="text-primary-400">13</span>
            <p>تا</p>
            <span className="text-primary-400">17</span>
            <p> - (ساعت 4)</p>
          </div>
        </div>
      </div>
      <div className=" w-full">
        <div
          tabIndex={0}
          className="flex flex-row justify-start items-center mx-4 ml-5 collapse-title collapse"
        >
          <h3 className="text-2xl font-semibold text-primary-400 text-nowrap">
            دوشنبه 6/12
          </h3>
          <div className="h-[2px] bg-primary-400 w-full mr-3"></div>
          <button className="text-primary-400 p-2 ml-1 mt-1 text-xl">
            <FaAngleDown />
          </button>
        </div>
        <div className="collapse-content card flex flex-row justify-between bg-slate-700 p-5 m-5 mt-3">
          <div className="flex flex-row gap-2">
            <span className="text-primary-400">18 PC</span>
            <p>شروع از ساعت </p>
            <span className="text-primary-400">13</span>
            <p>تا</p>
            <span className="text-primary-400">17</span>
            <p> - (ساعت 4)</p>
          </div>
        </div>
      </div>

      <div tabIndex={0} className="collapse bg-gray-900">
        <div
          className="collapse-title text-xl font-medium
        flex flex-row justify-start items-center mx-4 ml-5 "
        >
          <h3 className="text-2xl font-semibold text-primary-400 text-nowrap">
            دوشنبه 6/12
          </h3>
          <div className="h-[2px] bg-primary-400 w-full mr-3"></div>
          <button className="text-primary-400 p-2 ml-1 mt-1 text-xl">
            <FaAngleDown />
          </button>
        </div>

        <div
          className={`collapse-content flex flex-row justify-between bg-slate-700 p-5 m-5 mt-0 rounded`}
        >
          <div className="flex flex-row gap-2">
            <span className="text-primary-400">18 PC</span>
            <p>شروع از ساعت </p>
            <span className="text-primary-400">13</span>
            <p>تا</p>
            <span className="text-primary-400">17</span>
            <p> - (ساعت 4)</p>
          </div>
        </div>
      </div>

      <details className="w-full my-8 space-y-3 group">
        <summary className="text-xl font-medium flex flex-row text-primary-400 justify-start items-center mx-4 ml-5 cursor-pointer">
          <h3 className="text-2xl font-semibold whitespace-nowrap">
            دوشنبه 6/12
          </h3>
          <div className="h-[2px] bg-primary-400 w-full mr-3"></div>
          <div className="p-2 ml-1 mt-1 text-xl transition-transform duration-300 ease-in-out group-open:rotate-180">
            <FaAngleDown />
          </div>
        </summary>
        <div className="details-content flex flex-row justify-between bg-slate-700 p-5 m-5 mt-0 rounded">
          <div className="flex flex-row gap-2">
            <span className="text-primary-400">18 PC</span>
            <p>شروع از ساعت </p>
            <span className="text-primary-400">13</span>
            <p>تا</p>
            <span className="text-primary-400">17</span>
            <p> - (ساعت 4)</p>
          </div>
        </div>
      </details>
    </div>
  );
}
