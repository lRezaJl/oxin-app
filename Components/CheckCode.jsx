import { useState, useEffect } from "react";
import axios from "axios";

const CheckCode = (phone) => {
  const [code, setCode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/login/`, { code, phone });
    
      if (response.status === 200) {
        localStorage.setItem("access", response.data.access);
        localStorage.setItem("refresh", response.data.refresh);
        
        location.reload();
      }
      
    } catch (error) {
      console.error(error);
    }
  };
  const [timeLeft, setTimeLeft] = useState(2 * 60); // 2 دقیقه

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const formatTime = (value) => (value < 10 ? `0${value}` : value);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft((prevTime) => prevTime - 1);
      } else {
        clearInterval(timerInterval);
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [timeLeft]);

  return (
    <section dir="rtl" className="ss02">
      <div className="flex flex-col items-center justify-center sm:w-[300px] w-screen sm:px-0 px-5">
        <div className="w-full bg-purewhite rounded-lg shadow">
          <div className="p-4 space-y-4">
            <h1 className="text-xl font-bold text-center text-ultrablack md:text-2xl">
              ورود به شکاف
            </h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div dir="rtl" className="text-center">
                <label
                  htmlFor="phoneNumber"
                  className="block mb-2 text-sm font-medium text-ultrablack"
                >
                  کد پنج رقمی ارسال شده را وارد کنید
                </label>
                <input
                  type="tel"
                  name="code"
                  id="code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="bg-lighterwhiter border focus:ring-1 border-lightgray text-ultrablack sm:text-sm rounded-md focus:ring-primary-600 outline-none focus:border-primary-600 block w-full p-2.5"
                  placeholder="12345"
                />
              </div>
              {timeLeft > 0 ? (
                <button
                  type="button"
                  className="w-full text-primary-600 ring-2 ring-primary-600 font-medium rounded-md text-sm px-5 py-2.5 text-center"
                >
                  {formatTime(minutes)}:{formatTime(seconds)}
                </button>
              ) : (
                <button
                  type="button"
                  className="w-full text-primary-600 ring-2 ring-primary-600 font-medium rounded-md text-sm px-5 py-2.5 text-center"
                  onClick={() => setTimeLeft(2 * 60)} // ارسال مجدد
                >
                  ارسال مجدد
                </button>
              )}
              <div className="flex flex-row justify-between">
                <button
                  type="button"
                  className="w-32 text-primary-600 ring-2 ring-primary-600 font-medium rounded-md text-sm px-5 py-2.5 text-center"
                  onClick={() => setCode("")} // اصلاح شماره
                >
                  اصلاح شماره
                </button>
                <button
                  type="submit"
                  className="w-32 text-white bg-primary-600 font-medium rounded-md text-sm px-5 py-2.5 text-center"
                >
                  تایید
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckCode;
