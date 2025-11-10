import React from "react";
import { Eye, GraduationCap, LineChart, Megaphone, ShieldHalf, Scale, Network } from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import memimage from "../assets/images/memimage.png";
import MembershipCategories from "../components/membership-categories";
import Partners from "../components/partners";
import { Link } from "react-router";

const BosagMembership = () => {
  return (
    <>
    <Navbar />
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[20%] text-white">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${memimage})` , backgroundPosition: 'center -60px',backgroundRepeat: "no-repeat", backgroundSize: 'cover'}}
          aria-hidden="true"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#31318D] opacity-42 " aria-hidden="true" />

        {/* Content */}
        <div className="relative pt-10">
          <div className="max-w-6xl mx-auto px-6 pt-10 pb-10 ml-20">
            <h1 className="text-xl md:text-5xl font-semibold mb-4 leading-tight">
              Join BOSAG Membership
            </h1>
            <p className="text-lg max-w-[480px] mb-8">
              Our membership structure is designed to be inclusive, scalable,
              and responsive to the diverse needs of Ghana's BPO/ITO sector.
              Benefit from sector alignment, visibility, and capacity
              development while maintaining governance integrity.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#FF7A00] text-white px-6 py-3 rounded-md font-medium hover:bg-[#e56e00] transition">
                Explore Membership Tiers
              </button>
              <button className="border border-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-[#131663] transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join BOSAG */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-xl md:text-4xl font-bold text-[#131663] mb-4">
            Why Join BOSAG?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            Discover new engagement services introduced from 2025, including an
            online member portal, mentorship pairings, supplier showcases, and
            access to executive education tracks.
          </p>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="bg-[#131663] w-10 h-10 flex items-center justify-center rounded-md mb-4 mx-auto">
                <LineChart className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-lg text-[#131663] mb-2">
                Sector Alignment
              </h3>
              <p className="text-gray-600 text-sm">
                Benefit from comprehensive sector alignment initiatives that
                ensure your business stays competitive in the evolving BPO/ITO
                landscape.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="bg-[#FF7A00] w-10 h-10 flex items-center justify-center rounded-md mb-4 mx-auto">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-lg text-[#131663] mb-2">
                Enhanced Visibility
              </h3>
              <p className="text-gray-600 text-sm">
                Gain visibility on BOSAG platforms and directories, access to
                market intelligence, and participation in high-profile networking
                events.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="bg-[#131663] w-10 h-10 flex items-center justify-center rounded-md mb-4 mx-auto">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-lg text-[#131663] mb-2">
                Capacity Development
              </h3>
              <p className="text-gray-600 text-sm">
                Access specialized training programs, mentorship opportunities,
                and shared service resources to strengthen your operational
                capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>
      <MembershipCategories/>
      <Partners/>
      {/* Last Section */}
      <div className="w-full">
      {/* Core Membership Benefits Section */}
      <section className="bg-white py-20 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-xl md:text-4xl font-bold text-[#131663] mb-3">
            Core Membership Benefits
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Access a comprehensive suite of benefits designed to accelerate your
            business growth
          </p>

            {/* Benefits Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Market Promotion */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#131663] w-14 h-14 flex items-center justify-center rounded-full mb-4">
                <Megaphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-[#131663] text-lg mb-2">
                Market Promotion
              </h3>
              <p className="text-gray-600 text-sm max-w-xs">
                International visibility through branding, promotional campaigns,
                and investor engagement support.
              </p>
            </div>
             {/* Capacity Building */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#FF7A00] w-14 h-14 flex items-center justify-center rounded-full mb-4">
                <ShieldHalf className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-[#131663] text-lg mb-2">
                Capacity Building
              </h3>
              <p className="text-gray-600 text-sm max-w-xs">
                Mentorship programmes, certification pathways, and operational
                best practice guides for local operators.
              </p>
            </div>
             {/* Policy Influence */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#131663] w-14 h-14 flex items-center justify-center rounded-full mb-4">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-[#131663] text-lg mb-2">
                Policy Influence
              </h3>
              <p className="text-gray-600 text-sm max-w-xs">
                Clear communication of sector priorities to policymakers and
                regulators through our advocacy committee.
              </p>
            </div>
             {/* Networking */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#FF7A00] w-14 h-14 flex items-center justify-center rounded-full mb-4">
                <Network className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-[#131663] text-lg mb-2">
                Networking
              </h3>
              <p className="text-gray-600 text-sm max-w-xs">
                Access to market intelligence, networking events, and shared
                resources including training centres.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Ready to Join Section */}
      <section className="bg-gray-50 py-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl md:text-4xl font-bold text-[#131663] mb-4">
            Ready to Join BOSAG?
          </h2>
          <p className="text-gray-600 mb-8">
            Take the next step in advancing your BPO/ITO business. Choose your
            membership tier and become part of Ghana's leading industry association.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/signup">
            <button className="bg-[#FF7A00] text-white px-8 py-3 rounded-md font-medium hover:bg-[#e56e00] transition">
              Apply for Membership
            </button>
            </Link>
            <Link to="/contact">
            <button className="border border-[#131663] text-[#131663] px-8 py-3 rounded-md font-medium hover:bg-[#131663] hover:text-white transition">
              Contact Us
            </button>
            </Link>
          </div>
        </div>
      </section>
    </div>

    </div>
    <Footer/>
    </>
  );
};

export default BosagMembership;
