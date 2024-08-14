"use client";
import Header from "../components/Header";
import Pcs from "../Components/Pcs";
import Day from "../Components/Day";
import Select from "../Components/Select";
// import { imageOptimizer } from "next/dist/server/image-optimizer";
import RangeSlider from "../Components/RangeSlider";
import PersianCalendarList from "../Components/PersianCalendarList";

export default function HomePage() {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center">
        <PersianCalendarList />
      </div>
      <div className="flex gap-8 justify-center items-center mt-24 my-10">
        {/* <RangeSlider /> */}
        <Day />
        <Select />
      </div>
      <Pcs />
    </div>
  );
}
