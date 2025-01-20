import React from "react";

const CustomButton = ({ title }: { title: string }) => {
  return (
    <button className="bg-[#CCFCFF] px-6 py-2 text-[#0A2A2D] rounded-xl ring-2 ring-inset ring-[#50D5F3] shadow-[#50D5F3] shadow-inner">
      {title}
    </button>
  );
};

export default CustomButton;
