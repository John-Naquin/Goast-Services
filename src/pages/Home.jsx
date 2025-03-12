import React from "react";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { WhyGoastServices } from "../components/WhyGoastServices";
import { Mission } from "../components/Mission";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <WhyGoastServices />
      <Mission />
    </div>
  );
}
