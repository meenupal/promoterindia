import React from "react";

import HeroBanner from "./components/HeroBanner";
import About from "./components/About";
import Services from "./components/Services";
import Marquee from "./components/Marquee";

import Flipcards from "./components/Flipcards";
import Faq from "./components/Faq";
import Callnow from "./components/Callnow";


function page() {
  return (
    <>
    <Callnow/>
      <HeroBanner />
      <Marquee/>
      <About />
      <Services />
  <chosesection/>
      <Flipcards />
      <Faq />
      
    
    
    </>
  );
}

export default page;
