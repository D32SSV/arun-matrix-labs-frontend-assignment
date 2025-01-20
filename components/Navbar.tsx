import React from "react";
import CustomButton from "./reusable/CustomButton";
import Logo from "./reusable/Logo";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <Logo />
      <div className="flex items-center justify-around gap-16 bg-[#092022] text-[#7EB8BC] border border-[#0F373D] rounded-full px-32 py-4">
        <p>Features</p>
        <p>Why Us</p>
        <p>Tokenomics</p>
        <p>Roadmap</p>
      </div>
      <div className="flex items-center justify-between text-white gap-2">
        <p>Login</p>
        <CustomButton title="White Paper" />
      </div>
    </div>
  );
};

export default Navbar;
