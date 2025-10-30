import React from "react";
import AboutHeader from "../components/about-header";
import AboutSection from "../components/about-sec2";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Executive from "../components/executive";
import StrategicPillars from "../components/about-strategy";
import AlignmentSection from "../components/alignment-sec";


export default function About() {
  return (
    <div>
      <Navbar />
      <AboutHeader />
      <AboutSection />
      <Executive />
      <StrategicPillars />
      <AlignmentSection />
      <Footer />
    </div>
  );
}
