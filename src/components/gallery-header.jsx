import React from "react";
import { Link } from "react-router";
import BackgroundImage from "../assets/images/about.png";

const PageBanner = ({ title = "Page Title", subtitle = "" }) => {
  return (
    <header
      className="relative bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        minHeight: "35vh",
      }}
    >
      <div className="absolute inset-0 bg-[#0a0a3a]/70"></div>

      <div className="relative z-10 text-center px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide mb-2">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg sm:text-xl text-gray-200 font-light">
            {subtitle}
          </p>
        )}
        
      </div>

    
    </header>
  );
};

export default PageBanner;
