import React from "react";
import TeamImage from "../assets/images/hero7.jpg"; // replace with your image path

const AboutSection = () => {
  return (
    <section className="bg-white py-10 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Centered heading spanning both columns */}
        <header className="text-center mb-12">
          <h2 className="text-[#1c1c57] text-2xl sm:text-3xl lg:text-4xl font-bold">
            Positioning Ghana as the Premier Digital Services Hub
          </h2>
        </header>

        {/* Two-column layout: text (left) + image (right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* LEFT: paragraphs + stats */}
          <div>
            <p className="text-gray-700 leading-relaxed mb-6 text-[15px] sm:text-base">
              BOSAG’s mandate extends far beyond traditional Business Process
              Outsourcing. We are the driving force behind Ghana’s evolution into
              a sophisticated digital services ecosystem, actively promoting and
              supporting high-value IT-Enabled Services (ITES), comprehensive
              digital transformation initiatives, and Knowledge Process
              Outsourcing (KPO) capabilities.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8 text-[15px] sm:text-base">
              Our strategic focus encompasses emerging technologies, data
              analytics, artificial intelligence, cloud services, and specialized
              knowledge work that positions Ghana as a competitive destination for
              international investment in the digital economy.
            </p>

            {/* STATS: horizontal on desktop, wraps on small screens */}
            <div className="flex flex-wrap gap-8 md:gap-12">
              <div>
                <p className="text-orange-500 text-2xl sm:text-3xl font-bold">
                  100K+
                </p>
                <p className="text-gray-700 text-sm sm:text-base">Jobs Target by 2030</p>
              </div>

              <div>
                <p className="text-orange-500 text-2xl sm:text-3xl font-bold">50+</p>
                <p className="text-gray-700 text-sm sm:text-base">Active Members</p>
              </div>

              <div>
                <p className="text-orange-500 text-2xl sm:text-3xl font-bold">$3B+</p>
                <p className="text-gray-700 text-sm sm:text-base">Investment Target</p>
              </div>
            </div>
          </div>

          {/* RIGHT: image */}
          <div className="flex justify-center md:justify-end">
            <img
              src={TeamImage}
              alt="BOSAG Team"
              className="rounded-lg shadow-md w-full max-w-[520px] h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
