"use client";
import React from "react";

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  txt: string;
  bgCol: string;
}

const CustomButton = ({ txt, bgCol }: CustomButtonProps) => {
  return (
    <button
      className={`px-10 py-5 w-[400px] rounded-xl bg-${bgCol} hover:bg-${bgCol}-600 shadow-xl font-medium text-slate-50  `}
      style={{
        backgroundColor: `${bgCol}`,
        opacity: 1,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.opacity = "0.9"; // Change opacity on hover
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = "1"; // Change opacity on hover
      }}
    >
      {txt}
    </button>
  );
};

export default CustomButton;
