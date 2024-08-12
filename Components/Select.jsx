import { useState, useEffect } from "react";

// گزینه‌های دقیقه
const minutesOptions = ["00", "15", "30", "45"];

// گزینه‌های ساعت برای انتخاب ساعت شروع
const hourOptions = Array.from({ length: 16 }, (_, i) =>
  (8 + i).toString().padStart(2, "0")
);

const VerticalSelect = ({ options, selected, setSelected }) => {
  return (
    <div
      className="carousel carousel-vertical rounded-box h-auto overflow-hidden border-x-2 border-blue-500
    bg-gradient-to-t from-gray-800 via-blue-950 to-gray-800"
    >
      {options.map((opt, index) => (
        <div
          key={index}
          className={`carousel-item flex justify-center items-center p-2 text-center cursor-pointer ${
            selected === opt
              ? "text-orange-500 font-bold opacity-100"
              : "text-orange-200 opacity-50"
          }`}
          onClick={() => setSelected(opt)}
        >
          {opt}
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

  useEffect(() => {
    const date = new Date();

    // تنظیمات صحیح برای دریافت ساعت با منطقه زمانی
    const options = { hour: "2-digit", hour12: false, timeZone: "Asia/Tehran" };
    const currentHour = parseInt(
      new Intl.DateTimeFormat("en-US", options).format(date),
      10
    );

    console.log("Current Hour:", currentHour);

    const filteredHours = hourOptions.filter(
      (hour) => parseInt(hour, 10) >= currentHour
    );
    console.log("Filtered Hours:", filteredHours);

    // حذف اولین ساعت از لیست فیلتر شده برای نمایش در قسمت انتخاب دوم
    const selectableHours = filteredHours.slice(1);

    setFilteredHourOptions(filteredHours);
    setSelectableHours(selectableHours);
    setSelectedHour(filteredHours[0] || ""); // اولین گزینه موجود بعد از فیلتر به عنوان گزینه انتخاب شده تنظیم می‌شود
    setSelectedEndHour(selectableHours[0] || ""); // اولین گزینه برای ساعت پایان انتخاب شود
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

  // برای تنظیم دقیقه در قسمت پایان
  const handleMinuteChange = (minute) => {
    setSelectedMinute(minute);
  };

  // برای تنظیم ساعت پایان
  const handleEndHourChange = (hour) => {
    setSelectedEndHour(hour);
  };

  return (
    <div dir="rtl" className="flex flex-row justify-center items-start gap-4">
      <div className="flex flex-row">
        <h3 className="text-center mb-2 mx-1">شروع از ساعت</h3>
        <VerticalSelect
          options={minutesOptions}
          selected={selectedMinute}
          setSelected={handleMinuteChange}
        />
        <h3 className="text-center mt-4 mx-1">:</h3>
        <VerticalSelect
          options={filteredHourOptions}
          selected={selectedHour}
          setSelected={setSelectedHour}
        />
      </div>

      <div className="flex flex-row">
        <h3 className="text-center mb-2 mx-1">تا ساعت</h3>
        <p className="text-orange-500 font-bold">{selectedMinute}</p>
        <h3 className="text-center mt-4 mx-1">:</h3>
        <VerticalSelect
          options={selectableHours}
          selected={selectedEndHour}
          setSelected={handleEndHourChange}
        />
      </div>
    </div>
  );
};

export default SelectList;
