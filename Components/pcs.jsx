"use client";
import { useState, useEffect } from "react";

export default function Home() {
  // ایجاد یک آرایه از وضعیت‌ها برای هر دکمه
  const [activeButtons, setActiveButtons] = useState(Array(30).fill(false));

  // وضعیت برای ذخیره کردن دکمه‌های رزرو شده از سرور
  const [reservedButtons, setReservedButtons] = useState([]);

  // وضعیت برای دکمه‌های "رزرو موقت"
  const [temporaryReservedButtons, setTemporaryReservedButtons] = useState([]);

  // شبیه‌سازی داده دریافتی از سرور
  useEffect(() => {
    // فرض کنید داده‌های دریافتی از سرور به این صورت باشد:
    const fetchedReservedButtons = [3, 8, 26];
    const fetchedTemporaryReservedButtons = [5, 10, 12, 20]; // دکمه‌های رزرو موقت
    setReservedButtons(fetchedReservedButtons);
    setTemporaryReservedButtons(fetchedTemporaryReservedButtons);
  }, []);

  // تابع برای تغییر وضعیت یک دکمه خاص
  const toggleClass = (index) => {
    // اگر دکمه در حالت رزرو یا رزرو موقت بود، امکان تغییر ندارد
    if (
      reservedButtons.includes(index + 1) ||
      temporaryReservedButtons.includes(index + 1)
    )
      return;

    const updatedActiveButtons = [...activeButtons];
    updatedActiveButtons[index] = !updatedActiveButtons[index];
    setActiveButtons(updatedActiveButtons);
  };

  return (
    <div className="">
      <div className="flex justify-center items-center min-h-screen bg-slate-200">
        <div className="grid max-sm:grid-cols-4 max-md:grid-cols-6 grid-cols-6 gap-15 md:gap-4">
          <div className="flex flex-col my-3 md:my-4">
            {[26, 27, 28, 29, 30].map((number) => (
              <button
                key={number}
                className={`p-4 text-center text-dark rounded-lg w-14 h-14 m-2 ${
                  reservedButtons.includes(number)
                    ? "bg-primary-700 text-primary-50 reversed-custom-box-shadow"
                    : temporaryReservedButtons.includes(number)
                    ? "bg-primary-400 opacity-60"
                    : "bg-primary-400"
                } ${
                  activeButtons[number - 1]
                    ? "reverse-custom-box-shadow bg-primary-500"
                    : "custom-box-shadow"
                }`}
                onClick={() => toggleClass(number - 1)}
                title={
                  reservedButtons.includes(number)
                    ? "!قبلا رزرو شده"
                    : temporaryReservedButtons.includes(number)
                    ? "درحال تکمیل فراید رزرو"
                    : "!روش زده فیـری"
                }
                data-twe-toggle="tooltip"
              >
                {reservedButtons.includes(number) ? (
                  "رزرو"
                ) : temporaryReservedButtons.includes(number) ? (
                  <p className="text-wrap -m-5">رزرو موقت</p>
                ) : (
                  number
                )}
              </button>
            ))}
          </div>

          <div className="max-sm:hidden sm:col-span-1 md:col-span-1"></div>

          <div className="flex flex-col my-3 md:my-4">
            {[25, 24, 23, 22, 21].map((number) => (
              <button
                key={number}
                className={`p-4 text-center text-dark rounded-lg w-14 h-14 m-2 ${
                  reservedButtons.includes(number)
                    ? "bg-primary-700 text-primary-50 reversed-custom-box-shadow"
                    : temporaryReservedButtons.includes(number)
                    ? "bg-primary-400 opacity-60"
                    : "bg-primary-400"
                } ${
                  activeButtons[number - 1]
                    ? "reverse-custom-box-shadow bg-primary-500"
                    : "custom-box-shadow"
                }`}
                onClick={() => toggleClass(number - 1)}
                title={
                  reservedButtons.includes(number)
                    ? "!قبلا رزرو شده"
                    : temporaryReservedButtons.includes(number)
                    ? "درحال تکمیل فراید رزرو"
                    : "!روش زده فیـری"
                }
                data-twe-toggle="tooltip"
              >
                {reservedButtons.includes(number) ? (
                  "رزرو"
                ) : temporaryReservedButtons.includes(number) ? (
                  <p className="text-wrap -m-5">رزرو موقت</p>
                ) : (
                  number
                )}
              </button>
            ))}
          </div>

          <div className="flex flex-col my-3 md:my-4">
            {[5, 4, 3, 2, 1].map((number) => (
              <button
                key={number}
                className={`p-4 text-center text-dark rounded-lg w-14 h-14 m-2 ${
                  reservedButtons.includes(number)
                    ? "bg-primary-700 text-primary-50 reversed-custom-box-shadow"
                    : temporaryReservedButtons.includes(number)
                    ? "bg-primary-400 opacity-60"
                    : "bg-primary-400"
                } ${
                  activeButtons[number - 1]
                    ? "reverse-custom-box-shadow bg-primary-500"
                    : "custom-box-shadow"
                }`}
                onClick={() => toggleClass(number - 1)}
                title={
                  reservedButtons.includes(number)
                    ? "!قبلا رزرو شده"
                    : temporaryReservedButtons.includes(number)
                    ? "درحال تکمیل فراید رزرو"
                    : "!روش زده فیـری"
                }
                data-twe-toggle="tooltip"
              >
                {reservedButtons.includes(number) ? (
                  "رزرو"
                ) : temporaryReservedButtons.includes(number) ? (
                  <p className="text-wrap -m-5">رزرو موقت</p>
                ) : (
                  number
                )}
              </button>
            ))}
          </div>

          <div className="max-sm:hidden sm:col-span-1 md:col-span-1"></div>

          <div className="flex flex-col my-3 md:my-4">
            {[6, 7, 8, 9, 10].map((number) => (
              <button
                key={number}
                className={`p-4 text-center text-dark rounded-lg w-14 h-14 m-2 ${
                  reservedButtons.includes(number)
                    ? "bg-primary-700 text-primary-50 reversed-custom-box-shadow"
                    : temporaryReservedButtons.includes(number)
                    ? "bg-primary-400 opacity-60"
                    : "bg-primary-400"
                } ${
                  activeButtons[number - 1]
                    ? "reverse-custom-box-shadow bg-primary-500"
                    : "custom-box-shadow"
                }`}
                onClick={() => toggleClass(number - 1)}
                title={
                  reservedButtons.includes(number)
                    ? "!قبلا رزرو شده"
                    : temporaryReservedButtons.includes(number)
                    ? "درحال تکمیل فراید رزرو"
                    : "!روش زده فیـری"
                }
                data-twe-toggle="tooltip"
              >
                {reservedButtons.includes(number) ? (
                  "رزرو"
                ) : temporaryReservedButtons.includes(number) ? (
                  <p className="text-wrap -m-5">رزرو موقت</p>
                ) : (
                  number
                )}
              </button>
            ))}
          </div>

          <div className="max-sm:col-span-2 sm:col-span-3 md:col-span-3"></div>

          <div className="flex flex-col mx-auto my-3 md:my-4 ">
            {[20, 19, 18, 17, 16].map((number) => (
              <button
                key={number}
                className={`p-4 text-center text-dark rounded-lg w-14 h-14 m-2 ${
                  reservedButtons.includes(number)
                    ? "bg-primary-700 text-primary-50 reversed-custom-box-shadow"
                    : temporaryReservedButtons.includes(number)
                    ? "bg-primary-400 opacity-60"
                    : "bg-primary-400"
                } ${
                  activeButtons[number - 1]
                    ? "reverse-custom-box-shadow bg-primary-500"
                    : "custom-box-shadow"
                }`}
                onClick={() => toggleClass(number - 1)}
                title={
                  reservedButtons.includes(number)
                    ? "!قبلا رزرو شده"
                    : temporaryReservedButtons.includes(number)
                    ? "درحال تکمیل فراید رزرو"
                    : "!روش زده فیـری"
                }
                data-twe-toggle="tooltip"
              >
                {reservedButtons.includes(number) ? (
                  "رزرو"
                ) : temporaryReservedButtons.includes(number) ? (
                  <p className="text-wrap -m-5">رزرو موقت</p>
                ) : (
                  number
                )}
              </button>
            ))}
          </div>

          <div className="max-sm:hidden sm:col-span-1 md:col-span-1"></div>

          <div className="flex flex-col my-3 md:my-4">
            {[11, 12, 13, 14, 15].map((number) => (
              <button
                key={number}
                className={`p-4 text-center text-dark rounded-lg w-14 h-14 m-2 ${
                  reservedButtons.includes(number)
                    ? "bg-primary-700 text-primary-50 reversed-custom-box-shadow"
                    : temporaryReservedButtons.includes(number)
                    ? "bg-primary-400 opacity-60"
                    : "bg-primary-400"
                } ${
                  activeButtons[number - 1]
                    ? "reverse-custom-box-shadow bg-primary-500"
                    : "custom-box-shadow"
                }`}
                onClick={() => toggleClass(number - 1)}
                title={
                  reservedButtons.includes(number)
                    ? "!قبلا رزرو شده"
                    : temporaryReservedButtons.includes(number)
                    ? "درحال تکمیل فراید رزرو"
                    : "!روش زده فیـری"
                }
                data-twe-toggle="tooltip"
              >
                {reservedButtons.includes(number) ? (
                  "رزرو"
                ) : temporaryReservedButtons.includes(number) ? (
                  <p className="text-wrap -m-5">رزرو موقت</p>
                ) : (
                  number
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
