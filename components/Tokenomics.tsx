import Image from "next/image";
import React from "react";

const Tokenomics = () => {
  return (
    <>
      <div className="h-screen">
        <div className="relative z-0 w-full h-screen overflow-hidden">
          <video
            autoPlay
            muted
            loop
            src={`/particle-vector.mp4`}
            className="absolute top-0 left-0 w-full h-[80vw] object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[#00151ed7] shadow-lg" />
          <p className="relative z-10 text-white text-center text-2xl p-8">
            Tokenomics
          </p>
          <div className="text-white relative z-10 flex items-center justify-evenly">
            <Image src={"/Donut.svg"} alt="donut" width={500} height={500} />
            <div className="flex gap-2 flex-col p-6 pr-32">
              <div className="flex gap-16 bg-[#08252ab2] w-full rounded-lg p-6 pr-32">
                <div className="flex flex-col gap-4">
                  <p>Name</p>
                  <p>Token Name</p>
                  <p>Token Standard</p>
                  <p>Blockchain</p>
                  <p>Total Supply</p>
                  <p>Tax</p>
                </div>
                <div className="flex flex-col gap-4">
                  <p>: EthAi</p>
                  <p>: $EthAi</p>
                  <p>: ERC20</p>
                  <p>: Ethereum</p>
                  <p>: 100 Million</p>
                  <p>: 5%/5%</p>
                </div>
              </div>
              <div className="flex gap-[5.2rem] bg-[#08252ab2] w-full rounded-lg p-6 pr-32">
                <div className="flex flex-col gap-4">
                  <p>Team</p>
                  <p>Marketing</p>
                  <p>Liquidity Pool</p>
                </div>
                <div className="flex flex-col gap-4">
                  <p>: 35%</p>
                  <p>: 90%</p>
                  <p>: 5%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tokenomics;
