import React from "react";
import { Calendar, utils } from "@amir04lm26/react-modern-calendar-date-picker";
import "@amir04lm26/react-modern-calendar-date-picker/lib/DatePicker.css";

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
