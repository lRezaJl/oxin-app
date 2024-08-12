import React, { useState } from "react";

const DualRangeSlider = () => {
  const [minValue, setMinValue] = useState(10);
  const [maxValue, setMaxValue] = useState(90);

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - 1);
    setMinValue(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + 1);
    setMaxValue(value);
  };

  return (
    <div className="flex flex-col items-center w-full p-4">
      <div className="relative w-full">
        <input
          type="range"
          min="0"
          max="100"
          value={minValue}
          onChange={handleMinChange}
          className="range range-primary absolute z-10 pointer-events-auto w-full h-2"
        />
        <input
          type="range"
          min="0"
          max="100"
          value={maxValue}
          onChange={handleMaxChange}
          className="range range-secondary absolute z-20 pointer-events-auto w-full h-2"
        />
        <div className="relative w-full h-2">
          <div
            className="absolute bg-blue-500 h-2 z-0"
            style={{
              left: `${minValue}%`,
              right: `${100 - maxValue}%`,
            }}
          ></div>
        </div>
      </div>
      <div className="mt-4 w-full flex justify-between text-sm">
        <span>Min: {minValue}</span>
        <span>Max: {maxValue}</span>
      </div>
    </div>
  );
};

export default DualRangeSlider;
