import { useState } from "react";
import axios from "axios";

import CheckCode from "./CheckCode";
import { useUserStore } from "../context/userContext"; // مسیری که فایل userContext.js قرار دارد

const Login = () => {
  const { login, isCodeArrived } = useUserStore();
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(phone);
  };

  const handleLogin = async (phone) => {
    try {
      const response = await axios.post(
        "https://shekaf.liara.run/api/v1/phone/send/",
        { phone }
      );
      console.log(response);
      setIsCodeArrived(true);
    } catch (error) {
      console.error(error);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    handleLogin(phone);
  };

  return (
    <div>
      {isCodeArrived ? (
        <CheckCode />
      ) : (
        <section dir="rtl" className="ss02">
          <div className="flex flex-col items-center justify-center sm:w-[300px] w-screen sm:px-0 px-5">
            <div className="w-full bg-purewhite rounded-lg shadow">
              <div className="p-4 space-y-6">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-ultrablack md:text-2xl ss02">
                  ورود به OXIN
                </h1>
                <form className="space-y-6" onSubmit={submitForm}>
                  <div dir="rtl" className="text-right">
                    <label
                      htmlFor="phoneNumber"
                      className="block mb-2 text-sm font-medium text-ultrablack"
                    >
                      شماره موبایل خود را وارد کنید
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="bg-lighterwhiter border focus:ring-1 border-lightgray text-ultrablack sm:text-sm rounded-lg focus:ring-primary-600 outline-none focus:border-primary-600 block w-full p-2.5"
                      placeholder="09123456789"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    دریافت کد
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Login;
