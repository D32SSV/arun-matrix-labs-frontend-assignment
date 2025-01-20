import React from "react";
import Logo from "./reusable/Logo";
import Image from "next/image";
import CB2 from "./reusable/CB2";

const Footer = () => {
  return (
    <div className="flex items-center justify-around bg-[#010F14] h-[20vw]">
      <div className="flex flex-col justify-center items-start gap-4">
        <Logo />
        <div className="flex gap-4 items-center ">
          <Image
            src={"/discord.svg"}
            alt="social media"
            height={30}
            width={30}
          />
          <Image
            src={"/Facebook.svg"}
            alt="social media"
            height={30}
            width={30}
          />
          <Image src={"/x.svg"} alt="social media" height={30} width={30} />
          <Image
            src={"/instagram.svg"}
            alt="social media"
            height={30}
            width={30}
          />
          <Image
            src={"/telegram.svg"}
            alt="social media"
            height={30}
            width={30}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 text-white">
        <div className="text-justify font-bold text-3xl">
          <p>&quot;Designed for traders of</p>
          <p className="ml-3">today, just like you.&quot;</p>
        </div>
        <div className="flex justify-between p-2 gap-32 border rounded-2xl">
          <input
            type="email"
            name=""
            id=""
            placeholder="What's your work email?"
            className="bg-inherit ml-3"
          />
          <CB2 title="Get Started" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
