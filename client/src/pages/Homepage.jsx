
import React from "react";
import HeroSlider from "../Components/HeroSlider";
import About from "../Components/About";
import HowItWorks from "../Components/HowItWorks";
import FAQs from "../Components/FAQs";
import Sponsors from "../Components/Sponsors";
import Contact from "../Components/Contact";
import WhatsAppButton from "../Components/WhatsAppButton";

import { useState } from "react";

export default function Home() {
   
  return (

    <div className="overflow-hidden">
     
      
      {/* Hero Section */}
      <HeroSlider />

      {/* About */}
      <About />

      {/* How It Works */}
      <HowItWorks />
      {/* FAQs */}
      <FAQs />

      {/* Sponsors */}
      <Sponsors />

      {/* Contact */}
      <Contact />
         {/* whatsapp icon */}
      <WhatsAppButton />
    
    </div>
  );
}
