import React from "react";
import gowu from "../assets/images/Gowu.png";

const BosagExecutive = () => {
  return (
    <div className="min-h-screen bg-[#f6f7fb]  py-20 px-4 md:px-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          BOSAG Executive Secretariat
        </h2>
        <p className="text-gray-600 text-base leading-relaxed">
          The Executive Secretariat, led by BOSAG’s Chief Executive Officer,
          provides day-to-day leadership, industry coordination, and operational
          direction to advance BOSAG’s mission of driving Ghana’s digital
          outsourcing ecosystem.
        </p>
      </div>

      {/* Profile Card */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg transition-all p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center md:items-start">
        {/* Image */}
        <div className="w-full md:w-1/2 h-[80vh] flex justify-center md:justify-start">
          <img
            src={gowu}
            alt="David Gowu"
            className="rounded-xl object-cover w-105 h-auto"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-2/3 text-gray-700">
          <h3 className="text-2xl font-semibold text-gray-900 mb-1">
            David Gowu
          </h3>
          <p className="text-blue-600 font-medium text-sm mb-4">CEO, BOSAG</p>

          <div className="space-y-4 text-xs leading-relaxed">
            <p>
              David Gowu is a visionary digital transformation leader with
              expertise in ICT, Telecoms Engineering, IT outsourcing, strategic
              talent management, and digital skills. He is the CEO and founding
              board member of the Business Outsourcing Services Association
              Ghana (BOSAG), Ghana’s premier trade association for Business
              Process Outsourcing (BPO), IT Enabled Services (ITES), and Global
              Business Services (GBS). BOSAG facilitates business and trade value
              advocacy for government and public sector support, driving the
              development of a thriving outsourcing industry in Ghana and Africa.
            </p>
            <p>
              David was recently appointed as a Board Member of Ghana Digital
              Centres Limited (GDCL) by the President of the Republic of Ghana,
              recognizing his leadership and contributions to Ghana’s digital
              transformation agenda.
            </p>
            <p>
              Previously, David served as the Chief Talent Officer of 4th-iR
              Ghana, where he led efforts to develop a virtual workforce of IT
              talents specializing in AI, software development, and innovation to
              support businesses globally. His leadership played a crucial role
              in expanding AI-driven solutions and advancing digital
              transformation.
            </p>
            <p>
              David is also the co-founder and immediate past Executive Director
              of the Institute of ICT Professionals Ghana (IIPGH), a professional
              body dedicated to promoting excellence and professionalism in the
              ICT industry. Under his leadership, IIPGH grew into a key player in
              Ghana’s digital transformation, fostering collaboration between
              industry and academia, enhancing digital literacy, and advocating
              for the adoption of innovative technologies.
            </p>
            <p>
              Currently, he serves as President of Technology Information
              Confederation Africa (TICON Africa), an organization fostering
              collaboration, knowledge sharing, and capacity building among
              technology professionals and entrepreneurs across Africa. Through
              conferences, research, education, and networking events, TICON
              Africa empowers the African tech community and contributes
              significantly to the Sustainable Development Goals (SDGs).
            </p>
            <p>
              David holds a Bachelor’s degree in Electrical/Electronics
              Engineering from the University of Mines and Technology (UMaT) and
              a Master’s in Communication Engineering from the University of
              Rwanda. He remains dedicated to advancing digital transformation in
              Ghana, Africa, and beyond, driving innovation, talent development,
              and technological excellence across the continent.
            </p>
          </div>

          {/* LinkedIn Button */}
          <div className="mt-6">
            <a
              href="https://www.linkedin.com/in/david-gowu-9158027/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.763 0 5-2.24 5-5v-14c0-2.76-2.237-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 11.268h-3v-5.604c0-1.337-.027-3.061-1.865-3.061-1.868 0-2.155 1.46-2.155 2.967v5.698h-3v-10h2.882v1.367h.041c.402-.763 1.384-1.566 2.849-1.566 3.045 0 3.614 2.005 3.614 4.612v5.587z" />
              </svg>
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BosagExecutive;
