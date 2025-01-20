import About from "@/components/About";
import Faq from "@/components/FAQ";
import Features from "@/components/Features";
import HomeBG from "@/components/HomeBG";
import RoadMap from "@/components/RoadMap";
import Tokenomics from "@/components/Tokenomics";

export default function Home() {
  return (
    <>
      <HomeBG />
      <Features />
      <About />
      <Tokenomics />
      <RoadMap />
      <Faq />
    </>
  );
}
