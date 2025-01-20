import Image from "next/image";
import React from "react";

type Props = {
  dir: "ltr" | "rtl";
  src: string;
  features: string[];
  phase: number;
};

const Roadmap = ({ dir, src, features, phase }: Props) => {
  return (
    <div
      className={`h-[50dvw] flex items-center justify-between ${
        dir === "ltr" ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div className={`flex flex-col gap-4 text-left ${dir === "ltr" ? "ml-48" : "mr-48"}`}>
        <div className={`flex flex-col gap-2`}>
          <p className="text-[#333333] bg-white w-max rounded-md px-4 py-2">
            Phase {phase}
          </p>
          <p className="text-2xl text-white">Kicking Off</p>
        </div>
        <div className="flex flex-col gap-4">
          {features.map((item, id) => (
            <span className="flex items-center" key={id}>
              <Image src={"/tick.svg"} alt="point" width={20} height={20} />
              <p className="text-white ml-4">{item}</p>
            </span>
          ))}
        </div>
      </div>
      <Image src={src} width={500} height={500} alt="preview" />
    </div>
  );
};

export default Roadmap;
