import { useState, useRef, useEffect } from "react";

// گزینه‌های دقیقه
const minutesOptions = ["", "00", "15", "30", "45"];

// گزینه‌های ساعت برای انتخاب ساعت شروع
const hourOptions = Array.from({ length: 16 }, (_, i) =>
  (8 + i).toString().padStart(2, "0")
);

const VerticalSelect = ({ options, selected, setSelected }) => {
  const containerRef = useRef(null);

  const handleWheel = (event) => {
    // event.preventDefault(); // جلوگیری از اسکرول صفحه

    const currentIndex = options.indexOf(selected);
    if (event.deltaY < 0 && currentIndex > 0) {
      // اسکرول به بالا
      setSelected(options[currentIndex - 1]);
    } else if (event.deltaY > 0 && currentIndex < options.length - 1) {
      // اسکرول به پایین
      setSelected(options[currentIndex + 1]);
    }
  };

  const handleDrag = (event) => {
    // اینجا میتوانید تابعی برای تغییر مقدار با درگ اضافه کنید
  };

  useEffect(() => {
    const index = options.indexOf(selected);
    const container = containerRef.current;
    if (container) {
      const itemHeight = container.firstChild?.offsetHeight || 0;
      container.scrollTo({
        top: index * itemHeight - (container.clientHeight - itemHeight) / 2,
        behavior: "smooth",
      });
    }
  }, [selected, options]);

  const getOpacity = (index) => {
    const currentIndex = options.indexOf(selected);
    const distance = Math.abs(currentIndex - index);
    return 1 - distance * 0.3; // کاهش شفافیت بر اساس فاصله از آیتم انتخاب شده
  };

  return (
    <div
      ref={containerRef}
      className="carousel carousel-vertical rounded-box h-fit overflow-hidden border-x-2 border-blue-700 -mt-2
      bg-gradient-to-t from-gray-800 via-blue-950 to-gray-800"
      onWheel={handleWheel} // اضافه کردن رویداد اسکرول
      onMouseEnter={() => (document.body.style.overflow = "hidden")} // جلوگیری از اسکرول کل صفحه
      onMouseLeave={() => (document.body.style.overflow = "auto")} // بازگرداندن اسکرول کل صفحه
      style={{ maxHeight: "150px" }} // محدود کردن ارتفاع به صورت دلخواه
    >
      {options.map((opt, index) => (
        <div
          key={index}
          className={`carousel-item flex justify-center items-center p-2 text-center cursor-pointer ${
            selected === opt
              ? "text-orange-500 font-bold opacity-100"
              : "text-orange-200"
          }`}
          style={{
            opacity: getOpacity(index),
            transition: "opacity 0.3s ease-in-out",
            height: "36px",
            pointerEvents: opt === "" ? "none" : "auto", // غیرفعال کردن کلیک روی آیتم خالی
          }}
          onClick={() => opt && setSelected(opt)} // فقط در صورتی تغییر مقدار که آیتم خالی نباشد
        >
          {opt || "\u00A0"}{" "}
          {/* نمایش آیتم خالی با کاراکتر فضای غیر قابل تقسیم */}
        </div>
      ))}
    </div>
  );
};

const SelectList = () => {
  const [filteredHourOptions, setFilteredHourOptions] = useState([]);
  const [selectableHours, setSelectableHours] = useState([]);
  const [selectedHour, setSelectedHour] = useState(""); // ساعت شروع پیش‌فرض
  const [selectedMinute, setSelectedMinute] = useState("00"); // دقیقه شروع پیش‌فرض
  const [selectedEndHour, setSelectedEndHour] = useState(""); // ساعت پایان انتخاب شده
  const [difference, setDifference] = useState(0); // برای نگهداری مقدار اختلاف ساعت‌ها

  useEffect(() => {
    const date = new Date();

    // تنظیمات صحیح برای دریافت ساعت با منطقه زمانی
    const options = { hour: "2-digit", hour12: false, timeZone: "Asia/Tehran" };
    const currentHour = parseInt(
      new Intl.DateTimeFormat("en-US", options).format(date),
      10
    );

    const filteredHours = hourOptions.filter(
      (hour) => parseInt(hour, 10) >= currentHour
    );

    // حذف اولین ساعت از لیست فیلتر شده برای نمایش در قسمت انتخاب دوم
    const selectableHours = filteredHours.slice(1);

    setFilteredHourOptions(filteredHours);
    setSelectableHours(selectableHours);

    // تنظیم مقادیر وسطی به عنوان انتخاب پیش‌فرض
    const middleIndexStart = Math.floor(filteredHours.length / 2);
    const middleIndexEnd = Math.floor(selectableHours.length / 2);

    setSelectedHour(filteredHours[middleIndexStart] || ""); // مقدار وسطی برای ساعت شروع
    setSelectedEndHour(selectableHours[middleIndexEnd] || ""); // مقدار وسطی برای ساعت پایان
  }, []);

  useEffect(() => {
    // اگر ساعت شروع 23 باشد، ساعت پایان به صورت خودکار 00 تنظیم می‌شود
    if (selectedHour === "23") {
      setSelectableHours(["00"]);
      setSelectedEndHour("00");
    } else {
      // در غیر این صورت، لیست ساعات پایان بر اساس ساعت شروع انتخاب شده به‌روزرسانی می‌شود
      const newSelectableHours = hourOptions.filter(
        (hour) => parseInt(hour, 10) > parseInt(selectedHour, 10)
      );
      setSelectableHours(newSelectableHours);
      setSelectedEndHour(newSelectableHours[0] || ""); // تنظیم ساعت پایان به اولین گزینه جدید
    }
  }, [selectedHour]);

  useEffect(() => {
    if (selectedHour && selectedMinute && selectedEndHour) {
      // تبدیل ساعات به عدد و محاسبه اختلاف
      const startHour = parseInt(selectedHour, 10);
      const endHour = parseInt(selectedEndHour, 10);
      const diff =
        endHour >= startHour ? endHour - startHour : 24 - startHour + endHour;

      setDifference(diff); // به‌روزرسانی مقدار difference در state

      console.log(
        `شروع از ساعت ${selectedHour}:${selectedMinute} تا ساعت ${selectedEndHour}:${selectedMinute} (${diff} ساعت)`
      );
    }
  }, [selectedHour, selectedMinute, selectedEndHour]);

  // برای تنظیم دقیقه در قسمت پایان
  const handleMinuteChange = (minute) => {
    setSelectedMinute(minute);
  };

  // برای تنظیم ساعت پایان
  const handleEndHourChange = (hour) => {
    setSelectedEndHour(hour);
  };

  return (
    <div dir="rtl" className="flex flex-row justify-center items-center gap-4">
      <div className="flex flex-row justify-center items-center">
        <h3 className="text-center mb-2 mx-1">شروع از ساعت</h3>
        <VerticalSelect
          options={minutesOptions}
          selected={selectedMinute}
          setSelected={handleMinuteChange}
        />
        <h3 className="text-center mx-1">:</h3>
        <VerticalSelect
          options={filteredHourOptions}
          selected={selectedHour}
          setSelected={setSelectedHour}
        />
      </div>

      <div className="flex flex-row justify-center items-center">
        <h3 className="text-center mx-1">تا ساعت</h3>
        <p className="text-orange-500 font-bold">{selectedMinute}</p>
        <h3 className="text-center mx-1">:</h3>
        <VerticalSelect
          options={selectableHours}
          selected={selectedEndHour}
          setSelected={handleEndHourChange}
        />
        <p className="text-orange-500 font-bold mr-3">({difference} ساعت)</p>
      </div>
    </div>
  );
};

export default SelectList;
