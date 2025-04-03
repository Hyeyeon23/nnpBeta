import React from "react";

const ProgressBar = ({
  value,
  onChange,
  min = 1,
  max = 8,
  top1,
  left1,
  top2,
  left2,
  lbl = "",
  
}) => {
  const percentage = ((value - min) / (max - min)) * 100; // 진행률 계산

  return (
    <div className="">
      {/* 슬라이더 (Progress 값을 변경하면 상위로 전달) */}
      <input
        style={{ position: "absolute", top: top1, left: left1, zIndex: 1 }}
        type="range"
        className="w-full pt-"
        min={min}
        max={max}
        value={value}
        id="progressive"
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <label
        htmlFor="progressive"
        style={{ position: "absolute", top: top2, left: left2, zIndex: 1 }}
      >
        {" "}
        {lbl}{" "}
      </label>
      {/* Progress Bar */}
      <div className="w-full bg-gray-300 rounded-lg h-4">
        <div
          className="bg-blue-500 h-4 rounded-lg transition-all duration-300"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
