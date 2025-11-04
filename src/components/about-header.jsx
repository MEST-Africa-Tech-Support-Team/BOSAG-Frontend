import React from "react";
import { Link } from "react-router";
import BackgroundImage from "../assets/images/about.png"; 

const AboutHeader = () => {
  return (
    <header
      className="relative bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        minHeight: "20vh",
      }}
    >
     
      <div className="absolute inset-0 bg-[#0a0a3a]/70"></div>

     
      <div className="relative z-10 flex flex-col justify-center items-start px-6 sm:px-12 lg:px-24 py-12 sm:py-16 max-w-4xl">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 leading-snug">
          Industry Overview Of BOSAG
        </h1>
        <p className="text-gray-200 text-sm sm:text-base mb-6 leading-relaxed">
          Ghana’s Global Business Services (GBS) sector—encompassing Business
          Process Outsourcing (BPO) and IT Outsourcing (ITO)—is entering a
          transformative phase, positioning the country as one of Africa’s most
          promising destinations for outsourced service delivery. With a unique
          combination of cost efficiency, a scalable and skilled workforce, and
          a stable, business-friendly environment, Ghana is increasingly
          attracting global enterprises seeking resilient, high-quality, and
          future-ready outsourcing solutions.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/about/governance-structure"
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-5 py-2 rounded-md transition-colors text-sm sm:text-base"
          >
            Governance
          </Link>

          <Link
            to="/about/board-management"
            className="border border-white text-white hover:bg-white hover:text-[#0a0a3a] font-medium px-10 py-2 rounded-md transition-colors text-sm sm:text-base"
          >
            Board
          </Link>
        </div>
      </div>
    </header>
  );
};

export default AboutHeader;
