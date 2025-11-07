import React from "react";
import heroImg from "../assets/images/blogimage.png"; 
import LatestArticles from "../components/latest-articles";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import EventCards from "../components/event-cards";
import UpcomingEvents from "../components/event-cards.jsx";

const Blog = () => {
  return (
    <>
    <Navbar />
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center bg-[#0F172A]  overflow-hidden shadow-lg">
          {/* Left content */}
          <div className="p-10 text-white">
            <span className="inline-block bg-[#FF5B22] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
              Strategy
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
              Driving Inclusive Growth: <br /> Ghana's GBS/BPO Sector Targets
              100,000 New Jobs by 2030
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Ghana's GBS/BPO sector is entering a transformative era. This
              strategic blueprint aims to catalyze the creation of over 100,000
              international-facing jobs by 2030, leveraging the country's
              skilled workforce and cost advantages.
            </p>
            <button className="bg-[#FF5B22] hover:bg-[#ff6a38] text-white text-sm font-semibold px-5 py-3 rounded-md transition-all">
              Read the Full Strategy
            </button>
          </div>

          {/* Right image */}
          <div className="relative">
            <img
              src={heroImg}
              alt="Strategy Hero"
              className="w-full h-full object-cover"
            />
            {/* Optional overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0F172A]/30"></div>
          </div>
        </div>
      </div>
      <LatestArticles />
      <UpcomingEvents />
    </section>
    <Footer/>
    </>
  );
};

export default Blog;
