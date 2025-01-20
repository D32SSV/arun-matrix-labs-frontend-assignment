import Image from "next/image";
import React from "react";

const Faq = () => {
  const features = [
    "Lorem ipsum dolor",
    "sit amet consecte",
    "adipiscing elit",
    "sed do eiusmod tempor",
    "adipiscing elit",
    "adipiscing elit",
  ];
  return (
    <div className="flex items-center justify-evenly text-left h-[30dvw]">
      <div className="text-3xl text-white">
        <p>Frequently Asked</p>
        <p>Questions</p>
      </div>
      <div className="flex flex-col gap-6">
        {features.map((item, id) => (
          <span className="flex items-center" key={id}>
            <Image src={"/tick.svg"} alt="point" width={20} height={20} />
            <p className="text-white ml-4">{item}</p>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Faq;
