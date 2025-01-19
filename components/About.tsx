import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="h-screen mx-[25%] flex items-center justify-center flex-col gap-6 text-center">
      <p className="text-2xl text-white">About EthAi</p>
      <p className="text-[#B0FAFFB2]">
        At EthAi, we’re all about making crypto trading easier and more
        intuitive. We provide tools that help traders keep up with all new
        market trends, track top traders’ movements.
      </p>
      <button className="bg-[#CCFCFF] px-6 py-2 text-[#0A2A2D] rounded-xl ring-2 ring-inset ring-[#50D5F3] shadow-[#50D5F3] shadow-inner">
        Read More
      </button>
      <div className="bg-[#08252A] rounded-xl p-8 grid grid-cols-2 grid-rows-2 gap-16 text-left">
        <div>
          <Image src={"/graph.png"} alt="graph" height={20} width={20} />
          <p className="text-white">Stay Ahead</p>
          <p className="text-[#7CBABF] text-xs">No more guesswork—get clear, trustable insights.</p>
        </div>
        <div>
          <Image src={"/wallet.png"} alt="graph" height={20} width={20} />
          <p className="text-white">Know Your Assets</p>
          <p className="text-[#7CBABF] text-xs">No more guesswork—get clear, trustable insights.</p>
        </div>
        <div>
          <Image src={"/ft.png"} alt="graph" height={20} width={20} />
          <p className="text-white">Future-Proof</p>
          <p className="text-[#7CBABF] text-xs">No more guesswork—get clear, trustable insights.</p>
        </div>
        <div>
          <Image src={"/Vector.png"} alt="graph" height={20} width={20} />
          <p className="text-white">Simple,Not Overwhelming</p>
          <p className="text-[#7CBABF] text-xs">No more guesswork—get clear, trustable insights.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
