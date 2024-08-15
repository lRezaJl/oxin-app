"use client";
import { useState } from "react";
import Header from "../components/Header";
import Pcs from "../Components/Pcs";
import Day from "../Components/Day";
import Select from "../Components/Select";
import PersianCalendarList from "../Components/PersianCalendarList";

export default function HomePage() {
  const [selectedDay, setSelectedDay] = useState(null); // Lifted state
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center">
        <PersianCalendarList />
      </div>
      <div className="flex gap-8 justify-center items-center mt-24 my-10">
        {/* Pass selectedDay and setSelectedDay as props */}
        <Day selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
        <Select selectedDay={selectedDay} />
      </div>
      <Pcs />
    </div>
  );
}
