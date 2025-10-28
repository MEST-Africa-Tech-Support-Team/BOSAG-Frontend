import React from "react";
import { Link } from "react-router";

const AboutSection = () => {
  return (
    <section className="bg-white border-t border-blue-100">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <article>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#191970] mb-3">
              About Us: <span className="text-[#191970] font-extrabold">Driving Ghana's Digital Future</span>
            </h2>

            <p className="text-[#000] font-semibold text-sm leading-relaxed mb-4">
              <strong>BOSAG</strong> is the official national industry association promoting Ghana
              as a premier destination for <strong>“Global Business Services (GBS)”</strong> and{" "}
              <strong>“IT-Enabled Services (ITES)”</strong>.
            </p>

            <div className="border-l-4 border-orange-500 pl-4 mb-6">
              <p className="text-gray-800 text-sm leading-relaxed">
                We actively coordinate public and private sector efforts to transition Ghana's
                outsourcing model to <strong>“high-value services”</strong> such as AI, Cloud computing, and
                Knowledge Process Outsourcing (KPO). Our mandate ensures our workforce is
                future-ready and our regulatory environment is globally competitive.
              </p>
            </div>

            <Link
              to="/about"
              className="inline-block bg-[#191970] hover:bg-[#0a0a3a] text-white text-sm font-medium px-6 py-2 rounded-md transition-colors"
            >
              Learn More
            </Link>
          </article>

          {/* Right Side Card */}
          <aside className="bg-[#191970] text-white rounded-2xl px-6 py-5 shadow-lg md:w-[90%] md:ml-auto">
            <h3 className="text-xs font-semibold uppercase text-white mb-3">
              Our Core Strategic Vision
            </h3>

            <p className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-2 leading-none">
              100,000
            </p>

            <p className="text-lg md:text-xl font-semibold leading-tight mb-3">
              International GBS/BPO Jobs
            </p>

            <p className="text-xs md:text-sm text-gray-200 leading-relaxed">
              Targeted for creation under the BOSAG 5-Year Strategic Plan (2025–2030).
            </p>
          </aside>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
