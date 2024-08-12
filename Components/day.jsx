import React, { useState } from "react";
import { Calendar } from "react-modern-calendar-datepicker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";

const ReservationCalendar = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  return (
    <div dir="rtl" className="flex flex-col items-center">
      <Calendar
        value={selectedDay}
        onChange={setSelectedDay}
        locale="fa" // برای تقویم جلالی
        calendarClassName="border rounded-lg p-2"
        shouldHighlightWeekends
      />
    </div>
  );
};

export default ReservationCalendar;
