"use client";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Pcs from "../Components/Pcs";
import Day from "../Components/Day";
import Select from "../Components/Select";
import PersianCalendarList from "../Components/PersianCalendarList";
import { utils } from "react-modern-calendar-datepicker";

export default function HomePage() {
  const [selectedDay, setSelectedDay] = useState(null);

  useEffect(() => {
    const today = utils("fa").getToday();
    setSelectedDay(today); // تنظیم تاریخ امروز به عنوان تاریخ انتخاب شده
  }, []);

  return (
    <div>
      <Header />
      <div className="flex items-center justify-center">
        <PersianCalendarList
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
        />
      </div>
      <div className="flex gap-8 justify-center items-center mt-24 my-10">
        <Day selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
        <Select selectedDay={selectedDay} />
      </div>
      <Pcs />
    </div>
  );
}
