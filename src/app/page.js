import React from "react";

import HeroBanner from "./components/HeroBanner";
import About from "./components/About";
import Services from "./components/Services";
import Marquee from "./components/Marquee";

import Flipcards from "./components/Flipcards";
import Faq from "./components/Faq";
import Callnow from "./components/Callnow";
import ExpoGallery from "./components/ExpoGallery";
// import Chosesection from "./components/Chosesection"; 


function page() {
  return (
    <>
    <Callnow/>
      <HeroBanner />
      <Marquee/>
      <About />
      <Services />
      <ExpoGallery/>
  {/* <Chosesection/> */}
      <Flipcards />
      <Faq />
      
    
    
    </>
  );
}

export default page;
