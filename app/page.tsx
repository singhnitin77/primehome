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
import { Box } from "@mui/material";
import WhatsappButton from "./components/WhatsappButton";
import { ToastContainer, toast } from 'react-toastify';

export default function Home() {
  return (
    <Box sx={{
      scrollBehavior: 'smooth'
    }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ChooseUs />
      <OurServices />
      <InvestYamuna />
      {/* <Testimonials /> */}
      {/* <LatestNews /> */}
      <CTA />
      <Footer />
      <WhatsappButton />
      <ToastContainer />
    </Box>
  );
}
