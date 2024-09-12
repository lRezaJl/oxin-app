import { createContext, useContext, useState } from "react";

// ایجاد یک کانتکست جدید برای مدیریت کاربر
const UserContext = createContext();

// کامپوننت Provider برای فراهم کردن state به سایر کامپوننت‌ها
export const UserProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCodeArrived, setIsCodeArrived] = useState(false);
  const [phone, setPhone] = useState("");
  const [token, setToken] = useState("");

  const login = async (phone) => {
    setPhone(phone);
    const body = { phone };
    const response = await fetch(
      "https://shekaf.liara.run/api/v1/phone/send/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    if (response.ok) {
      setIsCodeArrived(true);
    }
  };

  const checkCode = async (code) => {
    const body = { phone, code };
    const response = await fetch(
      "https://shekaf.liara.run/api/v1/user/create/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    if (response.ok) {
      const data = await response.json();
      setToken(data.access);
      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);
      setIsAuthenticated(true);
      setIsCodeArrived(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        isAuthenticated,
        isCodeArrived,
        phone,
        login,
        checkCode,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// هوک برای استفاده از UserContext در سایر کامپوننت‌ها
export const useUserStore = () => {
  return useContext(UserContext);
};
