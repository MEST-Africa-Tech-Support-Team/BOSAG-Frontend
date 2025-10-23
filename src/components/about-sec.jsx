import React from "react";
import { Link } from "react-router";

const AboutSection = () => {
  return (
    <section className="bg-white border-t border-blue-100">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <article>
            <h2 className="text-lg font-bold text-[#191970] mb-2">
              About Us: <span className="text-[#191970] font-bold">Driving Ghana's Digital Future</span>
            </h2>

            <p className="text-black font-bold text-sm leading-relaxed mb-3">
              <strong>BOSAG</strong> is the official national industry association promoting Ghana
              as a premier destination for "Global Business Services (GBS)" and{" "}
              "IT-Enabled Services (ITES)".
            </p>

            <div className="border-l-4 border-orange-500 pl-4 mb-5">
              <p className="text-gray-800 text-sm leading-relaxed">
                We actively coordinate public and private sector efforts to transition Ghana's
                outsourcing model to <strong>“high-value services”</strong> such as AI, Cloud computing, and
                Knowledge Process Outsourcing (KPO). Our mandate ensures our workforce is
                future-ready and our regulatory environment is globally competitive.
              </p>
            </div>

            <Link to="/about" className="bg-[#191970] hover:bg-[#0a0a3a] text-white text-sm font-medium px-6 py-2 rounded transition-colors">
              Learn More
            </Link>
          </article>

          {/* Right Side Card */}
          <aside className="bg-[#191970] text-white rounded-xl px-8 py-10 shadow-lg">
            <h3 className="text-sm font-semibold text-white uppercase mb-4">
              Our Core Strategic Vision
            </h3>

            <p className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">
              100,000
            </p>

            <p className="text-lg md:text-xl font-semibold mb-3">
              International GBS/BPO Jobs
            </p>

            <p className="text-sm text-gray-200 leading-relaxed">
              Targeted for creation under the BOSAG 5-Year Strategic Plan (2025-2030).
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
