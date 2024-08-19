'use client'
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import jalaliday from "jalaliday";

dayjs.extend(jalaliday);

const PersianCalendar = ({ selectedDay, setSelectedDay }) => {
  const today = dayjs().calendar("jalali");

  const daysOfWeek = [
    "یکشنبه",
    "دوشنبه",
    "سه‌شنبه",
    "چهارشنبه",
    "پنج‌شنبه",
    "جمعه",
    "شنبه",
  ];

  const dates = Array.from({ length: 60 }, (_, i) => {
    const date = today.add(i, "day");
    return {
      id: i + 1,
      date: date.format("MM/DD"),
      day: daysOfWeek[date.day()],
      fullDate: {
        year: date.year(),
        month: date.month() + 1,
        day: date.date(),
      },
    };
  });

  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(7);
  const [selectedDateId, setSelectedDateId] = useState(null);

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;

      if (width < 640) setVisibleCount(2);
      else if (width < 768) setVisibleCount(3);
      else if (width < 1024) setVisibleCount(5);
      else setVisibleCount(7);
    };

    // Call the function to set initial state
    updateVisibleCount();

    // Add event listener
    window.addEventListener("resize", updateVisibleCount);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", updateVisibleCount);
    };
  }, []);

  useEffect(() => {
    if (selectedDay) {
      const selectedDate = dates.find(
        (d) =>
          d.fullDate.year === selectedDay.year &&
          d.fullDate.month === selectedDay.month &&
          d.fullDate.day === selectedDay.day
      );
      setSelectedDateId(selectedDate ? selectedDate.id : null);
    }
  }, [selectedDay]);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - visibleCount, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + visibleCount, dates.length - visibleCount)
    );
  };

  const handleDateSelect = (id) => {
    setSelectedDateId(id);
    setSelectedDay(dates[id - 1].fullDate); // ارسال تاریخ انتخاب شده به بالا
  };

  const visibleDates = dates.slice(startIndex, startIndex + visibleCount);

  return (
    <div
      dir="rtl"
      className="w-full flex items-center justify-center bg-slate-200 py-4"
    >
      <button
        onClick={handlePrev}
        className="btn btn-circle"
        disabled={startIndex === 0}
      >
        ❮
      </button>

      <div className="flex mx-4 join">
        {visibleDates.map((item) => (
          <button
            key={item.id}
            className={`join-item btn text-center p-2 border rounded-lg min-w-[100px] ${
              item.id === selectedDateId
                ? "bg-primary-400 text-dark/90 hover:bg-primary-500"
                : "bg-dark/95"
            }`}
            onClick={() => handleDateSelect(item.id)}
          >
            <div className="flex flex-col gap-1.5">
              <div>{item.day}</div>
              <div>{item.date}</div>
            </div>
          </button>
        ))}
      </div>

      <button
        onClick={handleNext}
        className="btn btn-circle"
        disabled={startIndex + visibleCount >= dates.length}
      >
        ❯
      </button>
    </div>
  );
};

export default PersianCalendar;
