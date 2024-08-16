import React from "react";
import { Calendar, utils } from "react-modern-calendar-datepicker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";

const ReservationCalendar = ({ selectedDay, setSelectedDay }) => {
  const today = utils("fa").getToday();

  return (
    <div dir="rtl" className="flex flex-col items-center">
      <Calendar
        value={selectedDay}
        onChange={setSelectedDay} // Use setSelectedDay from props
        locale="fa" // برای تقویم جلالی
        minimumDate={today}
        calendarClassName="border rounded-lg p-2"
        shouldHighlightWeekends
      />
    </div>
  );
};

export default ReservationCalendar;
