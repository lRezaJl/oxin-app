"use client";
import { useState, useEffect } from "react";
import Header from "../../../components/Header";
import Pcs from "../../../components/Pcs";
import Day from "../../../components/Day";
import Select from "../../../components/Select";
import PersianCalendar from "../../../Components/PersianCalendarList";
import BorderBeam from "../../../Components/BorderBeam";
import { utils } from "@amir04lm26/react-modern-calendar-date-picker";

export default function HomePage() {
    const [selectedDay, setSelectedDay] = useState(null);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showHeader, setShowHeader] = useState(true);

    useEffect(() => {
        const today = utils("fa").getToday();
        setSelectedDay(today); // تنظیم تاریخ امروز به عنوان تاریخ انتخاب شده
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                setShowHeader(false);
            } else {
                setShowHeader(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <div className="">
            <div className="mx-5">
                <div
                    className={`sticky top-0 z-50 w-full transform transition-transform duration-150 ease-in-out ${showHeader ? "translate-y-0" : "-translate-y-full"
                        }`}
                >
                    <div className="my-4">
                        <Header />
                    </div>
                </div>

                <div className="container m-auto relative flex flex-col gap-8 justify-center items-center my-24">
                    <Day selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
                    <div className="z-20">
                        <Select selectedDay={selectedDay} />
                    </div>
                    <div className="absolute">
                        <BorderBeam />
                    </div>
                </div>

                <div className="container m-auto flex items-center justify-center">
                    <PersianCalendar
                        selectedDay={selectedDay}
                        setSelectedDay={setSelectedDay}
                    />
                </div>
                <div className="container m-auto flex flex-col my-5">
                    <Pcs />
                    <div
                        dir="rtl"
                        className="w-full flex flex-col gap-3 bg-slate-200 my-5 rounded-lg"
                    >
                        <div>
                            <label className="form-control m-auto w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text-alt text-slate-500">
                                        کد ملی
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    placeholder="1234567890"
                                    className="input input-bordered border-2 border-slate-600 text-darkCharcoal w-full max-w-xs bg-transparent"
                                />
                            </label>
                        </div>
                        <button className="btn w-80 mx-auto text-lg bg-primary-400 hover:bg-primary-400 text-darkCharcoal border-slate-300 hover:border-slate-500">
                            ثبت رزرو
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
