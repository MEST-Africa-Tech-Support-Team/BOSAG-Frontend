import React from "react";
import bannerImage from "../assets/images/blogimage.png";
import { Link } from "react-router";

export default function StrategyBanner() {
  return (
    <section className="bg-white flex justify-center py-8 px-4">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-stretch rounded-lg overflow-hidden shadow-sm">
        {/* Text Section */}
        <div className="bg-[#0D1440] text-white w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
          <span className="text-xs font-semibold bg-orange-500 text-white px-3 py-1 rounded-full w-fit mb-4">
            STRATEGY
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold leading-snug mb-4">
            DRIVING INCLUSIVE GROWTH: GHANA'S GBS/BPO SECTOR TARGETS 100,000 NEW JOBS BY 2030
          </h2>
          <p className="text-sm text-gray-300 mb-6 leading-relaxed">
            Ghana's GBS/BPO sector is entering a transformative era. This strategic blueprint
            aims to catalyze the creation of over 100,000 international-facing jobs by 2030,
            leveraging the country's skilled workforce and cost advantages.
          </p>
          <Link to="/about" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-5 py-2 rounded-md w-fit transition-all">
            Read the Full Strategy
          </Link>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={bannerImage}
            alt="Strategy Banner"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
