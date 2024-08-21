"use client";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Pcs from "../../components/Pcs";
import Day from "../../components/Day";
import Select from "../../components/Select";
import PersianCalendar from "../../Components/PersianCalendarList";
import { utils } from "@amir04lm26/react-modern-calendar-date-picker";

export default function HomePage() {
  const [selectedDay, setSelectedDay] = useState(null);

  useEffect(() => {
    const today = utils("fa").getToday();
    setSelectedDay(today); // تنظیم تاریخ امروز به عنوان تاریخ انتخاب شده
  }, []);

  return (
    <div className="">
      <div className="fixed z-50 w-full">
        <div className="m-4">
          <Header />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <PersianCalendar
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
        />
      </div>
      <div className="flex flex-col gap-8 justify-center items-center mt-24 my-10">
        <Day selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
        <Select selectedDay={selectedDay} />
      </div>
      <div className="my-10">
        <Pcs />
        <div dir="rtl" className="w-full flex flex-col gap-3 bg-slate-200">
          <div>
            <label className="form-control m-auto w-full max-w-xs">
              <div className="label">
                <span className="label-text-alt text-slate-500">کد ملی</span>
              </div>
              <input
                type="text"
                placeholder="1234567890"
                className="input input-bordered border-2 border-slate-600 text-darkCharcoal w-full max-w-xs bg-transparent"
              />
            </label>
          </div>
          <button className="btn w-80 mx-auto text-lg bg-primary-400 hover:bg-primary-500 text-darkCharcoal border-slate-300 hover:border-slate-500">
            ثبت رزرو
          </button>
        </div>
      </div>
    </div>
  );
}
