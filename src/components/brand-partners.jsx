import React from "react";

import banner1 from "../assets/images/logos/ACT.png";
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
import banner14 from "../assets/images/logos/CCI.png";
import banner15 from "../assets/images/logos/CODETRAIN.png";
import banner16 from "../assets/images/logos/CONCENTRIX.webp";
import banner17 from "../assets/images/logos/DEVOPS AFRICA.png";
import banner18 from "../assets/images/logos/DREAM OVAL.png";
import banner19 from "../assets/images/logos/ESAL.png";
import banner20 from "../assets/images/logos/INNOVARE.png";
import banner21 from "../assets/images/logos/jobberman.png";
import banner22 from "../assets/images/logos/JS2.png";
import banner23 from "../assets/images/logos/MOBEX.png";
import banner24 from "../assets/images/logos/NPONTU.png";
import banner25 from "../assets/images/logos/REMOTOWN.png";
import banner26 from "../assets/images/logos/Teleperformance.png";

import banner27 from "../assets/images/logos/GDCL.png";
import banner28 from "../assets/images/logos/IIPGH.png";
import banner29 from "../assets/images/logos/GIPC_2.png";
import banner30 from "../assets/images/logos/GENESIS.png";
import banner31 from "../assets/images/logos/GENERATION GHANA.png";
import banner32 from "../assets/images/logos/GFZA.png";
import banner33 from "../assets/images/logos/GDC.jpg";
import banner34 from "../assets/images/logos/MASTERCARD.png";
import banner35 from "../assets/images/logos/MOC.jpg";
import banner36 from "../assets/images/logos/TONY.png";

const BrandPartners = () => {
  const membersAndCollaborators = [
    { id: 1, logo: banner19, name: "ESAL", url: "https://esalbpo.com/" },
    { id: 2, logo: banner16, name: "Concentrix", url: "https://www.concentrix.com/" },
    { id: 3, logo: banner3, name: "Amalitech", url: "https://amalitech.org" },
    { id: 4, logo: banner4, name: "Turntabl", url: "https://turntabl.io" },
    { id: 5, logo: banner24, name: "Npontu", url: "https://npontu.com" },
    { id: 6, logo: banner7, name: "Fourth IR", url: "https://4th-ir.com" },
    { id: 7, logo: banner14, name: "CCI", url: "https://cciglobal.com/" },
    { id: 8, logo: banner17, name: "DevOps Africa", url: "https://www.devopsafricalimited.com/" },
    { id: 9, logo: banner6, name: "Remotown", url: "https://meltwater.org/" },
    { id: 10, logo: banner22, name: "JS2", url: "https://js2.co.uk" },
    { id: 11, logo: banner26, name: "Teleperformance", url: "https://www.teleperformance.com" },
    { id: 12, logo: banner9, name: "Abelway", url: "https://abelwaytech.com/" },
    { id: 13, logo: banner10, name: "Adaire", url: "https://adaire.com" },
    { id: 14, logo: banner5, name: "Reliance Personnel", url: "https://reliancepersonnel.com" },
    { id: 15, logo: banner12, name: "ASSL", url: "https://www.africa2trust.com/B2BAfrica/ghana/tech-gaming/i-t-services/africa-software-solutions-ltd-assl/Profile/AboutUs/1/20/11333/3" },
    { id: 16, logo: banner25, name: "Jobberman", url: "https://www.remotown.com/" },
    { id: 17, logo: banner1, name: "ACT ICT", url: "https://act-ict.com/" },
    { id: 18, logo: banner11, name: "Aidec Digital", url: "https://aidecdigital.com" },
    { id: 19, logo: banner20, name: "Innovare", url: "https://www.innovarelearning.com/" },
    { id: 20, logo: banner21, name: "MEST", url: "https://www.jobberman.com.gh/" },
    { id: 21, logo: banner13, name: "Ayo Foundation", url: "https://ayotsl.com/" },
    { id: 22, logo: banner18, name: "DreamOval", url: "https://www.dreamoval.org/" },
    { id: 23, logo: banner15, name: "CodeTrain", url: "https://codetrainafrica.com/" },
    { id: 24, logo: banner23, name: "Mobex", url: "https://mobexafrica.org/" },
  ];

  const strategicPartners = [
    { id: 1, logo: banner27, name: "GDC", url: "https://www.gdcl.gov.gh/" },
    { id: 2, logo: banner28, name: "IIPGH", url: "https://iipgh.org" },
    { id: 3, logo: banner8, name: "24H Economy", url: "https://24hplus.gov.gh/" },
    { id: 4, logo: banner34, name: "Mastercard Foundation", url: "https://mastercardfdn.org" },
    { id: 5, logo: banner32, name: "GFZA", url: "https://gfza.gov.gh" },
    { id: 6, logo: banner35, name: "GIPC", url: "https://moc.gov.gh/" },
    { id: 7, logo: banner30, name: "Genesis", url: "https://www.genesis-analytics.com/" },
    { id: 8, logo: banner29, name: "Generation Ghana", url: "https://gipc.gov.gh/" },
    { id: 9, logo: banner36, name: "Invest for Jobs", url: "https://institute.global/" },
    { id: 10, logo: banner31, name: "KfW", url: "https://ghana.generation.org/" },
    { id: 11, logo: banner33, name: "GDCL", url: "https://www.giz.de/en" },
  ];

  return (
    <section className="py-10 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Members & Collaborators */}
        <header className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#191970] mb-2">
            Members & Collaborators
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted by leading brands to deliver exceptional experiences and drive meaningful growth
          </p>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-5 items-center justify-center mb-16">
          {membersAndCollaborators.map((brand) => (
            <a
              key={brand.id}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-full h-20 object-contain md:h-24 lg:h-28"
              />
            </a>
          ))}
        </div>

        <header className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#191970] mb-2">
            Strategic Partners
          </h2>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-5 items-center justify-center">
          {strategicPartners.map((brand) => (
            <a
              key={brand.id}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-full h-20 object-contain md:h-24 lg:h-28"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandPartners;
