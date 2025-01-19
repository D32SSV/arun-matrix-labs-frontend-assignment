import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-between gap-2 text-white font-bold">
        <Image src={"/logo.png"} width={40} height={40} alt="logo" />
        <p>EthAi</p>
      </div>
      <div className="flex items-center justify-around gap-16 bg-[#092022] text-[#7EB8BC] border border-[#0F373D] rounded-full px-32 py-4">
        <p>Features</p>
        <p>Why Us</p>
        <p>Tokenomics</p>
        <p>Roadmap</p>
      </div>
      <div className="flex items-center justify-between text-white gap-2">
        <p>Login</p>
        <Image src={"/ww.png"} alt="whitepaper" width={150} height={90} />
      </div>
    </div>
  );
};

export default Navbar;
