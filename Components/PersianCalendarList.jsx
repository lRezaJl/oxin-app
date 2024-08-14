import { useState, useEffect } from "react";
import dayjs from "dayjs";
import jalaliday from "jalaliday";

dayjs.extend(jalaliday); // اضافه کردن پشتیبانی از تقویم شمسی

const PersianCalendar = () => {
  const today = dayjs().calendar("jalali"); // تنظیم تقویم به شمسی

  // تبدیل روزهای هفته به فارسی
  const daysOfWeek = [
    "یکشنبه",
    "دوشنبه",
    "سه‌شنبه",
    "چهارشنبه",
    "پنج‌شنبه",
    "جمعه",
    "شنبه",
  ];

  // محاسبه 60 روز آینده
  const dates = Array.from({ length: 60 }, (_, i) => {
    const date = today.add(i, "day");
    return {
      id: i + 1,
      date: date.format("MM/DD"), // فرمت ماه/روز
      day: daysOfWeek[date.day()], // روز هفته به فارسی
    };
  });

  const [startIndex, setStartIndex] = useState(0); // شاخص شروع برای نمایش تاریخ‌ها
  const [visibleCount, setVisibleCount] = useState(7); // تعداد روزهای قابل نمایش
  const [selectedDateId, setSelectedDateId] = useState(today.date()); // تنظیم تاریخ امروز به عنوان انتخاب شده

  // تابع برای تنظیم تعداد روزهای قابل نمایش بر اساس اندازه صفحه
  const updateVisibleCount = () => {
    const width = window.innerWidth;

    if (width < 640) setVisibleCount(2);
    else if (width < 768) setVisibleCount(3);
    else if (width < 1024) setVisibleCount(5);
    else setVisibleCount(7);
  };

  useEffect(() => {
    updateVisibleCount(); // تنظیم تعداد روزهای قابل نمایش در بار اول
    window.addEventListener("resize", updateVisibleCount); // به‌روزرسانی تعداد روزهای قابل نمایش در هنگام تغییر اندازه صفحه

    return () => {
      window.removeEventListener("resize", updateVisibleCount);
    };
  }, []);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - visibleCount, 0)); // حرکت به عقب و جلوگیری از رفتن به زیر 0
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + visibleCount, dates.length - visibleCount)
    ); // حرکت به جلو و جلوگیری از عبور از تعداد کل تاریخ‌ها
  };

  const handleDateSelect = (id) => {
    setSelectedDateId(id); // تنظیم تاریخ انتخاب شده
  };

  const visibleDates = dates.slice(startIndex, startIndex + visibleCount); // دریافت روزها برای نمایش

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
