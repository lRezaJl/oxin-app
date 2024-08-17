import { useState } from "react";

export default function Home() {
  // ایجاد یک آرایه از وضعیت‌ها برای هر دکمه
  const [activeButtons, setActiveButtons] = useState(Array(30).fill(false));

  // تابع برای تغییر وضعیت یک دکمه خاص
  const toggleClass = (index) => {
    const updatedActiveButtons = [...activeButtons];
    updatedActiveButtons[index] = !updatedActiveButtons[index];
    setActiveButtons(updatedActiveButtons);
  };

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-slate-200">
        <div className="grid max-sm:grid-cols-4 max-md:grid-cols-6 grid-cols-6 gap-15 md:gap-4">
          <div className="flex flex-col my-3 md:my-4">
            {[26, 27, 28, 29, 30].map((number) => (
              <button
                key={number}
                className={`p-4 text-center text-dark rounded-lg bg-primary-500 m-2 ${
                  activeButtons[number - 1]
                    ? "reverse-custom-box-shadow"
                    : "custom-box-shadow"
                }`}
                onClick={() => toggleClass(number - 1)}
              >
                {number}
              </button>
            ))}
          </div>

          <div className="max-sm:hidden sm:col-span-1 md:col-span-1"></div>

          <div className="flex flex-col my-3 md:my-4">
            {[25, 24, 23, 22, 21].map((number) => (
              <button
                key={number}
                className={`p-4 text-center text-dark rounded-lg bg-primary-500 m-2 ${
                  activeButtons[number - 1]
                    ? "reverse-custom-box-shadow"
                    : "custom-box-shadow"
                }`}
                onClick={() => toggleClass(number - 1)}
              >
                {number}
              </button>
            ))}
          </div>

          <div className="flex flex-col my-3 md:my-4">
            {[5, 4, 3, 2, 1].map((number) => (
              <button
                key={number}
                className={`p-4 text-center text-dark rounded-lg bg-primary-500 m-2 ${
                  activeButtons[number - 1]
                    ? "reverse-custom-box-shadow"
                    : "custom-box-shadow"
                }`}
                onClick={() => toggleClass(number - 1)}
              >
                {number}
              </button>
            ))}
          </div>

          <div className="max-sm:hidden sm:col-span-1 md:col-span-1"></div>

          <div className="flex flex-col my-3 md:my-4">
            {[6, 7, 8, 9, 10].map((number) => (
              <button
                key={number}
                className={`p-4 text-center text-dark rounded-lg bg-primary-500 m-2 ${
                  activeButtons[number - 1]
                    ? "reverse-custom-box-shadow"
                    : "custom-box-shadow"
                }`}
                onClick={() => toggleClass(number - 1)}
              >
                {number}
              </button>
            ))}
          </div>

          <div className="max-sm:col-span-2 sm:col-span-3 md:col-span-3"></div>

          <div className="flex flex-col mx-auto my-3 md:my-4 ">
            {[20, 19, 18, 17, 16].map((number) => (
              <button
                key={number}
                className={`p-4 text-center text-dark rounded-lg w-14 h-14 bg-primary-500 m-2 ${
                  activeButtons[number - 1]
                    ? "reverse-custom-box-shadow"
                    : "custom-box-shadow"
                }`}
                onClick={() => toggleClass(number - 1)}
              >
                {number}
              </button>
            ))}
          </div>

          <div className="max-sm:hidden sm:col-span-1 md:col-span-1"></div>

          <div className="flex flex-col my-3 md:my-4">
            {[11, 12, 13, 14, 15].map((number) => (
              <button
                key={number}
                className={`p-4 text-center text-dark rounded-lg bg-primary-500 m-2 ${
                  activeButtons[number - 1]
                    ? "reverse-custom-box-shadow"
                    : "custom-box-shadow"
                }`}
                onClick={() => toggleClass(number - 1)}
              >
                {number}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
