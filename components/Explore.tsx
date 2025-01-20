import React from "react";
import CustomButton from "./reusable/CustomButton";

const Explore = () => {
  return (
    <div className="flex p-64">
      <div className="flex flex-col items-center justify-center gap-16 h-[30dvw] p-24 rounded-xl shadow-inner shadow-[#396f77]  bg-[#08252A] border-2 border-[#0E5664]">
        <p className="text-white text-3xl">
          Explore Our <span className="text-[#63F0FE]">dApp</span>
        </p>
        <p className="text-[#7BB7BD]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          voluptas tempora, deleniti fugit obcaecati est in commodi aliquid
          explicabo voluptate perferendis numquam? Qui facere exercitationem
          laborum tenetur hic quae a sequi inventore enim. Saepe accusamus
          voluptatum a illum eum, possimus cum nisi, labore corporis, adipisci
          fuga maiores ad eligendi dolor.
        </p>
        <CustomButton title="Open dApp" />
      </div>
    </div>
  );
};

export default Explore;
