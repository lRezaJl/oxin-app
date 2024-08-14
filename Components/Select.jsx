import { useState, useRef, useEffect } from "react";

// گزینه‌های دقیقه
const minutesOptions = ["", "00", "15", "30", "45"];

// گزینه‌های ساعت برای انتخاب ساعت شروع
const hourOptions = Array.from({ length: 16 }, (_, i) =>
  (8 + i).toString().padStart(2, "0")
);

const VerticalSelect = ({
  options,
  selected,
  setSelected,
  selectedHour,
  isLeftColumn,
}) => {
  const containerRef = useRef(null);
  const startY = useRef(0);
  const isDragging = useRef(false);

  const handleWheel = (event) => {
    const currentIndex = options.indexOf(selected);
    let newIndex = currentIndex;

    if (event.deltaY < 0 && currentIndex > 0) {
      newIndex = currentIndex - 1;
    } else if (event.deltaY > 0 && currentIndex < options.length - 1) {
      newIndex = currentIndex + 1;
    }

    if (options[newIndex] !== "") {
      setSelected(options[newIndex]);
    }
  };

  const handleMouseDown = (event) => {
    startY.current = event.clientY;
    isDragging.current = true;
    containerRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (event) => {
    if (!isDragging.current) return;

    const deltaY = startY.current - event.clientY;
    if (Math.abs(deltaY) > 10) {
      // تنظیم حساسیت درگ
      handleWheel({ deltaY });
      startY.current = event.clientY;
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    containerRef.current.style.cursor = "grab";
  };

  const getOpacity = (index) => {
    const currentIndex = options.indexOf(selected);
    const distance = Math.abs(currentIndex - index);
    return 1 - distance * 0.3;
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

  return (
    <div
      ref={containerRef}
      className={`carousel carousel-vertical rounded-box h-fit overflow-hidden
      ${
        isLeftColumn && (selectedHour === "22" || selectedHour === "23")
          ? ""
          : "border-x-2 border-blue-700 bg-gradient-to-t from-gray-800 via-blue-950 to-gray-800"
      }`}
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      style={{ maxHeight: "150px", cursor: "grab" }}
    >
      {options.map((opt, index) => (
        <div
          key={index}
          className={`carousel-item flex justify-center items-center text-center cursor-pointer
            ${
              isLeftColumn && (selectedHour === "22" || selectedHour === "23")
                ? ""
                : "p-2"
            }
            ${
              selected === opt
                ? "text-orange-500 font-bold opacity-100"
                : "text-orange-200"
            }`}
          style={{
            opacity: getOpacity(index),
            transition: "opacity 0.3s ease-in-out",
            height: "36px",
            pointerEvents: opt === "" ? "none" : "auto",
          }}
          onClick={() => opt && setSelected(opt)}
        >
          {opt || "\u00A0"}
        </div>
      ))}
    </div>
  );
};

const SelectList = () => {
  const [filteredHourOptions, setFilteredHourOptions] = useState([]);
  const [selectableHours, setSelectableHours] = useState([]);
  const [selectedHour, setSelectedHour] = useState("");
  const [selectedMinute, setSelectedMinute] = useState("00");
  const [selectedEndHour, setSelectedEndHour] = useState("");
  const [difference, setDifference] = useState(0);

  useEffect(() => {
    const date = new Date();
    const options = { hour: "2-digit", hour12: false, timeZone: "Asia/Tehran" };
    const currentHour = parseInt(
      new Intl.DateTimeFormat("en-US", options).format(date),
      10
    );

    const filteredHours = hourOptions.filter(
      (hour) => parseInt(hour, 10) >= currentHour
    );

    const selectableHours = filteredHours.slice(1);

    setFilteredHourOptions(filteredHours);
    setSelectableHours(selectableHours);

    const middleIndexStart = Math.floor(filteredHours.length / 2);
    const middleIndexEnd = Math.floor(selectableHours.length / 2);

    setSelectedHour(filteredHours[middleIndexStart] || "");
    setSelectedEndHour(selectableHours[middleIndexEnd] || "");
  }, []);

  useEffect(() => {
    if (selectedHour === "23") {
      setSelectableHours(["00"]);
      setSelectedEndHour("00");
    } else {
      const newSelectableHours = hourOptions.filter(
        (hour) => parseInt(hour, 10) > parseInt(selectedHour, 10)
      );
      setSelectableHours(newSelectableHours);
      setSelectedEndHour(newSelectableHours[0] || "");
    }
  }, [selectedHour]);

  useEffect(() => {
    if (selectedHour && selectedMinute && selectedEndHour) {
      const startHour = parseInt(selectedHour, 10);
      const endHour = parseInt(selectedEndHour, 10);
      const diff =
        endHour >= startHour ? endHour - startHour : 24 - startHour + endHour;

      setDifference(diff);

      console.log(
        `شروع از ساعت ${selectedHour}:${selectedMinute} تا ساعت ${selectedEndHour}:${selectedMinute} (${diff} ساعت)`
      );
    }
  }, [selectedHour, selectedMinute, selectedEndHour]);

  const handleMinuteChange = (minute) => {
    setSelectedMinute(minute);
  };

  const handleEndHourChange = (hour) => {
    setSelectedEndHour(hour);
  };

  return (
    <div
      dir="rtl"
      className="flex flex-row justify-center items-center gap-4 no-select"
    >
      <div className="flex flex-row justify-center items-center">
        <h3 className="text-center mb-2 mx-1">شروع از ساعت</h3>
        <VerticalSelect
          options={minutesOptions}
          selected={selectedMinute}
          setSelected={handleMinuteChange}
          selectedHour={selectedHour}
          isLeftColumn={false}
        />
        <h3 className="text-center mx-1">:</h3>
        <VerticalSelect
          options={filteredHourOptions}
          selected={selectedHour}
          setSelected={setSelectedHour}
          selectedHour={selectedHour}
          isLeftColumn={false} // این ستون سمت چپ است
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
          selectedHour={selectedHour}
          isLeftColumn={true} // این ستون سمت راست است
        />
        <p className="text-orange-500 font-bold mr-3">({difference} ساعت)</p>
      </div>
    </div>
  );
};

export default SelectList;
