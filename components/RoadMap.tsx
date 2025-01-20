import React from "react";
import Roadmap from "./reusable/RoadmapCommon";

const RoadMap = () => {
  const repeat = [1, 2, 3];
  const dir: ("ltr" | "rtl")[] = ["ltr", "rtl", "ltr"];
  const features = [
    "Lorem ipsum dolor",
    "sit amet consecte",
    "adipiscing elit",
    "sed do eiusmod tempor",
  ];
  return (
    <div className="flex flex-col gap-4">
      <p className="text-white text-center text-7xl p-8">Roadmap</p>
      {repeat.map((phase, id) => {
        return (
          <Roadmap
            key={id}
            phase={phase}
            dir={dir[id]}
            features={features}
            src="/khandar.svg"
          />
        );
      })}
    </div>
  );
};

export default RoadMap;
