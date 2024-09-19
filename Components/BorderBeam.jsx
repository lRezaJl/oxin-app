import React from "react";
import "../src/app/css/BorderBeam.css";

const BorderBeam = () => {
  return (
    <div className="relative -z-10 w-[700px] h-[700px] border-y-0 border-slate-300 rounded-full overflow-hidden">
      <div
        className="absolute inset-0 border-y-4 border-primary-600 rounded-full animate-spin-slow"
        style={{ willChange: "transform" }}
      />
    </div>
  );
};

export default BorderBeam;
