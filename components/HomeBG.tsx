import React from "react";
import Navbar from "./Navbar";
import CB2 from "./reusable/CB2";
// import bg from "../../assets/bg/bg.mp4";

const HomeBG: React.FC = () => {
  return (
    <div className="relative z-0 w-full h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        src={`/bg.mp4`}
        className="absolute top-0 left-0 w-full h-[80vw] object-cover"
      />

      <div className="relative z-10 text-white text-center p-8">
        <Navbar />
      </div>
      <div className="relative z-10 text-8xl text-white text-center p-8 mr-28">
        <p>When Innovation</p>
        <p className="pt-8">
          Meets{" "}
          <span className="px-4 py-2 text-[#0A2A2D] font-semibold bg-[#AFFAFF] rounded-full">
            Investment
          </span>
        </p>
        <p className="text-[#B0FAFFB2] text-3xl text-center pt-16 mb-16 ">
          Empowering Trading Through Advanced Technology{" "}
        </p>
        <CB2 title={"Open dApp"} />
      </div>
    </div>
  );
};

export default HomeBG;
