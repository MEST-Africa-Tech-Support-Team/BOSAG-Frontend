import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import banner from "../assets/images/about.png";
import BosagExecutive from "../components/bosag-executive";
import AdvisoryBoard from "../components/advisory-board";
import matthew from "../assets/images/mattew1.png";
import kojo from "../assets/images/Kojo.png";
import gowu from "../assets/images/Gowu.png";
import rolana from "../assets/images/rolana.png";
import ryan from "../assets/images/ryan.png";
import deborah from "../assets/images/Deborah.jpg";
import mavis from "../assets/images/mavis.jpeg";
import { Link, Route } from "react-router";





const councilMembers = [
  {
    name: "Kojo Hayford",
    role: "Board Chair",
    title: "CEO, eSAL",
    image: kojo,
    featured: true,

  },
  {
    name: "David Gowu",
    role: "Member",
    title: "CEO, BOSAG",
    image: gowu,
    href : "david",
  
  },
  {
    name: "Matthew Darkwa",
    role: "Member",
    title: "Operations Director, Amalitech",
    image: matthew,
    href : "matthew"
  },
  {
    name: "Rolana Rashwan",
    role: "Member",
    title: "Consultant, Global Business Services",
    image: rolana,
    href : "rolana",
  },
  {
    name: "Deborah Asmah",
    role: "Member",
    title: "Chief Marketing Officer, Npontu",
    image: deborah,
    href : "deborah",
  },
  {
    name: "Mavis Ampah",
    role: "Member",
    title: "CEO, Cactus Creek Foundation",
    image: mavis,
    href : "mavis"
  },
  {
    name: "Ryan Keilloh",
    role: "Member",
    title: "Country Manager, Concentrix Ghana",
    image: ryan,
    href : "ryan"
  },
];


const BoardMembers = () => {
  const featuredMember = councilMembers.find((m) => m.featured);
  const otherMembers = councilMembers.filter((m) => !m.featured);
  

  return (
    <>
    <Navbar />
     <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image */}
      <img 
        src={banner}
        alt="BOSAG Leadership Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-indigo-950/60"></div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center">
        <h1 className="text-2xl sm:text-5xl lg:text-5xl font-bold text-white mb-6">
          BOSAG Leadership
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-100 leading-relaxed max-w-4xl mx-auto">
          Driving Ghana's digital transformation through visionary leadership and strategic partnerships in the business outsourcing ecosystem
        </p>
      </div>
    </section>
    <div className="min-h-screen bg-[#F9FAFB] py-20 px-4 md:px-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          BOSAG Governing Council
        </h2>
        <p className="text-gray-600 text-base leading-relaxed">
          The Governing Council provides strategic leadership and oversight for
          BOSAG’s mission to position Ghana as a leading hub for Business Process
          Outsourcing, IT Enabled Services, and Global Business Services.
        </p>
      </div>

      {/* Featured Member */}
      <div className="flex justify-center mb-16">
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-8 w-full max-w-sm flex flex-col items-center text-center">
          <img
            src={featuredMember.image}
            alt={featuredMember.name}
            className="w-40 h-50 rounded-full object-cover border-4 border-blue-600 mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-900">
            {featuredMember.name}
          </h3>
          <p className="text-blue-600  font-medium text-sm mb-1">
            {featuredMember.role}
          </p>
          <p className="text-gray-500 text-sm mb-4">{featuredMember.title}</p>
          <Link to="/kojo">
          <button className="bg-[#191970] hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2 rounded-md">
            Learn more
          </button>
          </Link>
        </div>
      </div>

      {/* Other Members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {otherMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-6 w-full max-w-xs flex flex-col items-center text-center"
          >
            <img
              src={member.image}
              alt=""
              className="w-40 h-50 rounded-full object-cover border-4 border-blue-600 mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900">
              {member.name}
            </h3>
            <p className="text-blue-600 font-medium text-sm mb-1">
              {member.role}
            </p>
            <p className="text-gray-500 text-sm mb-4">{member.title}</p>
            <Link to={`/${member.href}`}>
            <button className="bg-[#191970] hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-md">
              Learn more
            </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
    <BosagExecutive />
    <AdvisoryBoard />
    <Footer/>
    </>
  );
};

export default BoardMembers;
