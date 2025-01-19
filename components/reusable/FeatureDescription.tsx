import Image from "next/image";
import React from "react";

type Props = {
  heading: string;
  desc: string;
  src?: string;
  unistyle?: string[];
};

const FeatureDescription = ({ heading, desc, src, unistyle = [] }: Props) => {
  return (
    <div
      className={`flex items-center justify-center flex-col gap-4 p-4 bg-[#08252A] border border-[#0F373D] h-full rounded-lg ${
        unistyle.length > 0
          ? unistyle.join(" ")
          : "rounded-tl-3xl text-center w-max"
      }`}
    >
      {!src ? null : (
        <Image src={src} alt="optimizer icon" width={100} height={100} className="py-2" />
      )}
      <p className="text-white text-lg w-40">{heading}</p>
      <p className="text-[#B0FAFFB2] text-xs w-40">{desc}</p>
    </div>
  );
};

export default FeatureDescription;
