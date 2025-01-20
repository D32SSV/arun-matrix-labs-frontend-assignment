import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center justify-center gap-2 text-white font-bold">
      <Image src={"/logo.png"} width={40} height={40} alt="logo" />
      <p>EthAi</p>
    </div>
  );
};

export default Logo;
