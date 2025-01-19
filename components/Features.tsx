import React from "react";
import FeatureDescription from "./reusable/FeatureDescription";

const Features = () => {
  return (
    <div className="bg-gradient-to-t from-[#00151E] to-[#020301] h-screen p-36 flex items-center justify-center">
      <div className="w-5/6 h-full flex flex-col gap-2">
        <div className="flex gap-2">
          <FeatureDescription
            unistyle={["pb-[3.12rem] rounded-tl-3xl"]}
            src="/optimizer.png"
            heading="Trade Optimizer"
            desc="Find the right moments to buy or sell, with personalized trade suggestions designed to help you make the most of every opportunity. "
          />
          <div className="flex flex-col w-full gap-2 ">
            <div className="bg-[#08252A] border border-[#0F373D] rounded-md">
              <div className=" w-96 p-8 ">
                <p className="text-white">Market Insight</p>
                <p className="text-sm text-[#B0FAFFB2]">
                  Stay ahead of the market. Get real-time updates on market
                  trends, track top traders&apos; movements, and spot signals
                  from key influencers.
                </p>
              </div>
            </div>
            <div className="w-full h-40 shadow-inner shadow-[#396f77]  bg-[#08252A] border border-[#0F373D] rounded-md"></div>
          </div>
          <FeatureDescription
            unistyle={["text-center w-max rounded-tr-3xl pb-8"]}
            src="/chip.svg"
            heading="Risk Guard"
            desc="Get alerts on market swings and potential risks before they impact your portfolio. This agent helps you navigate volatility and stay prepared for anything."
          />
        </div>
        <div className="flex justify-center gap-2 text-left">
          <div className="bg-[#08252A]  border border-[#0F373D] rounded-md rounded-bl-3xl">
            <div className="p-4 pr-64 pb-12">
              <p className="text-white">Portfolio Sync</p>
              <p className="text-sm text-[#B0FAFFB2]">
                Stay ahead of the market. Get real-time updates on market
                trends, track top traders&apos; movements, and spot signals from
                key influencers.
              </p>
            </div>
          </div>
          <div className="bg-[#08252A] w-max border border-[#0F373D] rounded-md rounded-br-3xl">
            <div className="p-4 pr-40">
              <p className="text-white">Opportunity Scout</p>
              <p className="text-sm text-[#B0FAFFB2]">
                Stay ahead of the market. Get real-time updates on market
                trends, track top traders&apos; movements, and spot signals from
                key influencers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
