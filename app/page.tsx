import About from "@/components/About";
import Explore from "@/components/Explore";
import Faq from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
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
      <Explore />
      <Footer />
    </>
  );
}
