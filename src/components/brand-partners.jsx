import React from "react";

import banner1 from "../assets/images/logos/ACT.png";
import banner2 from "../assets/images/logos/GIZ.png";
import banner3 from "../assets/images/logos/AMALITECH.png";
import banner4 from "../assets/images/logos/TURNTABL.png";
import banner5 from "../assets/images/logos/RELIANCE.png";
import banner6 from "../assets/images/logos/MEST.png";
import banner7 from "../assets/images/logos/4thIR.png";
import banner8 from "../assets/images/logos/24H ECONOMY.png";
import banner9 from "../assets/images/logos/ABELWAY.png";
import banner10 from "../assets/images/logos/ADAIRE.png";
import banner11 from "../assets/images/logos/aidecdigital.png";
import banner12 from "../assets/images/logos/ASSL.png";
import banner13 from "../assets/images/logos/AYO.jpg";
import banner14 from "../assets/images/logos/BOSAG.png";
import banner15 from "../assets/images/logos/CCI.png";
import banner16 from "../assets/images/logos/CODETRAIN.png";
import banner17 from "../assets/images/logos/CONCENTRIX.webp";
import banner18 from "../assets/images/logos/DEVOPS AFRICA.png";
import banner19 from "../assets/images/logos/DREAM OVAL.png";
import banner20 from "../assets/images/logos/ESAL.png";
import banner21 from "../assets/images/logos/GDC.jpg";
import banner22 from "../assets/images/logos/GDCL.png";
import banner23 from "../assets/images/logos/GENERATION GHANA.png";
import banner24 from "../assets/images/logos/GENESIS.png";
import banner25 from "../assets/images/logos/GFZA.png";
import banner26 from "../assets/images/logos/GIPC_2.png";
import banner27 from "../assets/images/logos/IIPGH.png";
import banner28 from "../assets/images/logos/INNOVARE.png";
import banner29 from "../assets/images/logos/INVEST FOR JOBS.png";
import banner30 from "../assets/images/logos/jobberman.png";
import banner31 from "../assets/images/logos/JS2.png";
import banner32 from "../assets/images/logos/KfW_RGB.jpg";
import banner33 from "../assets/images/logos/MASTERCARD.png";
import banner34 from "../assets/images/logos/MOBEX.png";
import banner35 from "../assets/images/logos/MOC.jpg";
import banner36 from "../assets/images/logos/NPONTU.png";
import banner37 from "../assets/images/logos/REMOTOWN.png";
import banner38 from "../assets/images/logos/Teleperformance.png";

const BrandPartners = () => {
  const brands = [
    { id: 1, name: "ACT ICT", logo: banner1, link: "https://example.com" },
    { id: 2, name: "GIZ", logo: banner2, link: "https://example.com" },
    { id: 3, name: "Amalitech", logo: banner3, link: "https://example.com" },
    { id: 4, name: "Turntabl", logo: banner4, link: "https://example.com" },
    { id: 5, name: "Reliance Personnel", logo: banner5, link: "https://example.com" },
    { id: 6, name: "Mest", logo: banner6, link: "https://example.com" },
    { id: 7, name: "4thIR", logo: banner7, link: "https://example.com" },
    { id: 8, name: "24H Economy", logo: banner8, link: "https://example.com" },
    { id: 9, name: "Abelway", logo: banner9, link: "https://example.com" },
    { id: 10, name: "Adaire", logo: banner10, link: "https://example.com" },
    { id: 11, name: "Aidec Digital", logo: banner11, link: "https://example.com" },
    { id: 12, name: "ASSL", logo: banner12, link: "https://example.com" },
    { id: 13, name: "AYO", logo: banner13, link: "https://example.com" },
    { id: 14, name: "BOSAG", logo: banner14, link: "https://example.com" },
    { id: 15, name: "CCI", logo: banner15, link: "https://example.com" },
    { id: 16, name: "CodeTrain", logo: banner16, link: "https://example.com" },
    { id: 17, name: "Concentrix", logo: banner17, link: "https://example.com" },
    { id: 18, name: "DevOps Africa", logo: banner18, link: "https://example.com" },
    { id: 19, name: "Dream Oval", logo: banner19, link: "https://example.com" },
    { id: 20, name: "ESAL", logo: banner20, link: "https://example.com" },
    { id: 21, name: "GDC", logo: banner21, link: "https://example.com" },
    { id: 22, name: "GDCL", logo: banner22, link: "https://example.com" },
    { id: 23, name: "Generation Ghana", logo: banner23, link: "https://example.com" },
    { id: 24, name: "Genesis", logo: banner24, link: "https://example.com" },
    { id: 25, name: "GFZA", logo: banner25, link: "https://example.com" },
    { id: 26, name: "GIPC", logo: banner26, link: "https://example.com" },
    { id: 27, name: "IIPGH", logo: banner27, link: "https://example.com" },
    { id: 28, name: "Innovare", logo: banner28, link: "https://example.com" },
    { id: 29, name: "Invest for Jobs", logo: banner29, link: "https://example.com" },
    { id: 30, name: "Jobberman", logo: banner30, link: "https://example.com" },
    { id: 31, name: "JS2", logo: banner31, link: "https://example.com" },
    { id: 32, name: "KfW", logo: banner32, link: "https://example.com" },
    { id: 33, name: "Mastercard", logo: banner33, link: "https://example.com" },
    { id: 34, name: "Mobex", logo: banner34, link: "https://example.com" },
    { id: 35, name: "MOC", logo: banner35, link: "https://example.com" },
    { id: 36, name: "NPONTU", logo: banner36, link: "https://example.com" },
    { id: 37, name: "REMOTOWN", logo: banner37, link: "https://example.com" },
    { id: 38, name: "Teleperformance", logo: banner38, link: "https://example.com" },
  ];

  return (
    <section className="py-10 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
       
        <header className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#191970] mb-2">
            Members & Collaborators
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted by leading brands to deliver exceptional experiences and drive
            meaningful growth
          </p>
        </header>


        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-5 items-center justify-center">
          {brands.map((brand) => (
            <a
              key={brand.id}
              href={brand.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 hover:bg-gray-50 group"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-26 h-10 object-contain transition-all duration-300 group-hover:brightness-110"
              />
            </a>
          ))}
        </div>

         <header className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#191970] mb-2">
            Strategic Partners
          </h2>
        </header>

         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-5 items-center justify-center">
          {brands.map((brand) => (
            <a
              key={brand.id}
              href={brand.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 hover:bg-gray-50 group"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-26 h-10 object-contain transition-all duration-300 group-hover:brightness-110"
              />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BrandPartners;
