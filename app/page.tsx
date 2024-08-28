import Image from "next/image";
import {
  HeroSection,
  ChooseUs,
  OurServices,
  AboutSection,
  InvestYamuna,
  CTA,
  Footer,
  LatestNews,
  Navbar,
} from "./containers";
import Testimonials from "./containers/testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ChooseUs />
      <OurServices />
      <InvestYamuna />
      <Testimonials />
      {/* <LatestNews /> */}
      <CTA />
      <Footer />
    </>
  );
}
