import React from "react";

const CB2 = ({ title }: { title: string }) => {
  return (
    <button className="px-6 py-2 rounded-xl shadow-inner shadow-[#8BF9E833] border-[#8BF9E833] border text-center text-lg text-white">
      {title}
    </button>
  );
};

export default CB2;
