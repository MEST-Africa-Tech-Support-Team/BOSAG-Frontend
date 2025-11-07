import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import about from "../assets/images/about.png";
import KeyHighlights from "../components/key-highlights";
import { CheckCircle2 } from 'lucide-react';
import SectorCapabilities from "../components/sector-capabilities";
import SectorLeadership from "../components/sector-leadership";
import VisionForFuture from "../components/vision-for-future";


const IndustryOverview = () => {
  return (
    <>
    <Navbar />
    <section className="relative w-full text-white overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src={about}
      alt="Industry background"
      className="w-full h-full object-cover object-center"
    />
    {/* Overlay for readability */}
    <div className="absolute inset-0 bg-[#0B1B46]/70"></div>
  </div>

  {/* Content */}
  <div className="relative max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
    <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-snug">
      Industry Overview Of BOSAG
    </h2>

    <p className="text-base md:text-lg text-gray-100 leading-relaxed mb-10 max-w-4xl">
      Ghana’s Global Business Services (GBS) sector—encompassing Business
      Process Outsourcing (BPO) and IT Outsourcing (ITO)—is entering a
      transformative phase, positioning the country as one of Africa’s most
      promising destinations for outsourced service delivery. With a unique
      combination of cost efficiency, a scalable and skilled workforce, and
      a stable, business-friendly environment, Ghana is increasingly
      attracting global enterprises seeking resilient, high-quality, and
      future-ready outsourcing solutions.
    </p>

    {/* Buttons */}
    <div className="flex flex-wrap gap-4">
      <button className="bg-[#F86208] hover:bg-[#ea680c] transition text-white font-medium px-8 py-3 rounded-md">
        Downlond Document
      </button>
      {/* <button className="border border-white text-white hover:bg-white hover:text-[#0B2B8A] transition font-medium px-8 py-3 rounded-md">
        Board
      </button> */}
    </div>
  </div>
</section>

    <KeyHighlights />
    <section className="bg-[#f8fbff] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-xl sm:text-5xl font-bold text-gray-900 text-center mb-12">
          Ghana's Rise as a GBS Hub
        </h1>

        {/* Description Paragraphs */}
        <div className="space-y-6 mb-10">
          <p className="text-md text-gray-700 leading-relaxed">
            Ghana is rapidly establishing itself as a premier destination for Global Business Services, leveraging its strategic location, skilled workforce, and robust digital infrastructure to serve markets across Africa and beyond.
          </p>

          <p className="text-md text-gray-700 leading-relaxed">
            The country's commitment to digital transformation, combined with government support and industry leadership through BOSAG, positions Ghana at the forefront of the continent's business services revolution.
          </p>
        </div>

        {/* Key Points List */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-indigo-900 flex-shrink-0" />
            <span className="text-lg text-gray-700">Strategic West African location</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-indigo-900 flex-shrink-0" />
            <span className="text-lg text-gray-700">English-speaking workforce</span>
          </div>

          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-indigo-900 flex-shrink-0" />
            <span className="text-lg text-gray-700">Stable democratic governance</span>
          </div>
        </div>
      </div>
    </section>
    <SectorCapabilities />
    <SectorLeadership />
    <VisionForFuture />
     <section className="bg-[#242470] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-3xl font-bold text-white mb-6 leading-tight">
          Join BOSAG in Building Ghana's Digital Future
        </h1>

        {/* Subtitle */}
        <p className="text-md sm:text-xl text-gray-100 mb-10 max-w-3xl mx-auto leading-relaxed">
          Be part of the transformation that's positioning Ghana as Africa's leading destination for global business services.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-[#F59E0B] hover:bg-orange-400 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl text-lg min-w-[200px]">
            Become A Member
          </button>
          
          <button className="bg-white hover:bg-gray-50 text-indigo-900 font-semibold px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl text-lg min-w-[200px]">
            Contact Us
          </button>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default IndustryOverview;
