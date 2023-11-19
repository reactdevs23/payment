import React from "react";

import AboutUs from "../components/AboutUs/AboutUs";
import ApiDocumentation from "../components/ApiDocumentation/ApiDocumentation";
import Benefits from "../components/Benefits/Benefits";
import Currencies from "../components/Currencies/Currencies";
import HeroSection from "../components/HeroSection/HeroSection";
import IntegrationPlugins from "../components/IntegrationPlugins/IntegrationPlugins";
import MaximizeSavings from "../components/MaximizeSavings/MaximizeSavings";
import Partners from "../components/Partners/Partners";
import PartnershipNetworks from "../components/PartnershipNetworks/PartnershipNetworks";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import SimplifyTransaction from "../components/SimplifyTransaction/SimplifyTransaction";

const Home = () => {
  return (
    <>
      {" "}
      <HeroSection />
      <Partners />
      <Currencies />
      <div className="line"></div>
      <AboutUs />
      <ServicesSection />
      <div id="features">
        <IntegrationPlugins />
        <ApiDocumentation />
      </div>
      <div id="roadmap">
        <MaximizeSavings />
        <SimplifyTransaction />
      </div>
      <div className="line2"></div>
      <Benefits />
      <PartnershipNetworks />
    </>
  );
};

export default Home;
