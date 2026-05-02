import React from "react";
import HeroSection from "../components/home/HeroSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import ProductHighlight from "../components/home/ProductHighlight";
import AboutSection from "../components/home/AboutSection";
import ContactSection from "../components/home/ContactSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <ProductHighlight />
      <AboutSection />
      <ContactSection />
    </>
  );
};

export default Home;