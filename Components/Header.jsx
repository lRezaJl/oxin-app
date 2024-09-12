"use client";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import Login from "./LogIn";

import { FaPowerOff } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { TbLayoutDashboardFilled } from "react-icons/tb";

export default function Navbar() {
  const [isCodeEntryVisible, setIsCodeEntryVisible] = useState(false);

  const handleLoginClick = () => {
    // وقتی دکمه ورود / ثبت نام کلیک شد، کامپوننت CodeEntry به DOM اضافه می‌شود
    setIsCodeEntryVisible(true);
  };

  return (
    <div id="navbar" className="">
      <div className="">
        <div
          dir="rtl"
          className="flex navbar bg-base-100/75 backdrop-saturate-150 backdrop-blur-lg border border-slate-300 shadow-lg shadow-primary-700/20 rounded-box"
        >
          <div className="flex-1 mr-2">
            <Image
              className="w-[112px]"
              src="/images/oxinLogo180x67.png"
              alt="Oxin Game"
              width={180}
              height={67}
            />
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100/95 backdrop-saturate-150 backdrop-blur-lg z-[1] mt-3 w-52 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* --------------------------- */}
            <div>
              <button
                onClick={handleLoginClick}
                className="w-full text-white bg-primary-600 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                ورود / ثبت نام
              </button>

              {/* LogIn بدون شرط در DOM قرار دارد و با کلیک دکمه ظاهر می‌شود */}
              {isCodeEntryVisible && (
                <div className=" flex justify-center items-center w-full m-auto">
                  <Login />
                </div>
              )}
            </div>
            {/* --------------------------- */}

            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">حساب کاربری</div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100/95 backdrop-saturate-150 backdrop-blur-lg rounded-box z-[1] mt-3 w-40 p-2 py-3 shadow space-y-2"
              >
                <li className="flex flex-row">
                  <Link href="/account" className=" text-lg gap-3">
                    <TbLayoutDashboardFilled className="text-xl" />
                    پیشخوان
                  </Link>
                </li>
                <li className="flex flex-row">
                  <span className=" text-lg gap-3">
                    <IoSettingsSharp className="text-xl" />
                    تنظیمات
                  </span>
                </li>
                <li className="flex flex-row">
                  <span className="text-coralRed text-lg gap-3">
                    <FaPowerOff className=" text-xl" />
                    خروج
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
