import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router"; 
import image from "../assets/images/image.png";

export default function Footer() {
  return (
    <footer className="bg-[#191970] text-gray-300 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 border-gray-500 pb-10">
        <div>
          
          <Link to="/">
            <img src={image} alt="BOSAG Logo" className="w-32 mb-4" />
          </Link>

          <div>
            <p className="text-sm mt-7">
              Leading Ghana's Outsourcing Future <br className="mb-2" />
              The authoritative voice for Ghana's Business Process Outsourcing
              sector, driving transformation and growth.
            </p>
          </div>
        </div>

        {/* ✅ Quick Links */}
        <div>
          <h4 className="text-base font-semibold mb-6 text-white">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm text-white/90">
            <li>
              <Link
                to="/about"
                className="hover:text-white cursor-pointer transition-colors"
              >
                About BOSAG
              </Link>
            </li>
            <li>
              <Link
                to="/membership"
                className="hover:text-white cursor-pointer transition-colors"
              >
                Membership
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-white cursor-pointer transition-colors"
              >
                Strategic Plan
              </Link>
            </li>
            <li>
              <Link
                to="/about/governance"
                className="hover:text-white cursor-pointer transition-colors"
              >
                Governance
              </Link>
            </li>
          </ul>
        </div>

        {/* ✅ Resources */}
        <div>
          <h4 className="text-base font-semibold mb-6 text-white">
            Resources
          </h4>
          <ul className="space-y-3 text-sm text-white/90">
            <li>
              <Link
                to="/sector-reports"
                className="hover:text-white cursor-pointer transition-colors"
              >
                Sector Data
              </Link>
            </li>
            <li>
              <Link
                to="/sector-reports"
                className="hover:text-white cursor-pointer transition-colors"
              >
                Research Reports
              </Link>
            </li>
            <li>
              <Link
                to="/sector-reports"
                className="hover:text-white cursor-pointer transition-colors"
              >
                Policy Papers
              </Link>
            </li>
            <li>
              <Link
                to="/event"
                className="hover:text-white cursor-pointer transition-colors"
              >
                Events
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-base font-semibold mb-6 text-white">Contact</h4>
          <div className="text-sm text-white/90 space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 shrink-0" />
              <div>info@bosag.org</div>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 shrink-0" />
              <div>+233 242 77 37 62</div>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 shrink-0" />
              <div>Accra, Ghana</div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-7 mb-8 flex justify-center">
        <hr className="border-t border-white/25 w-10/12" />
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-white/70">
        © 2024 Business Outsourcing Services Association of Ghana (BOSAG). All
        rights reserved.
      </div>
    </footer>
  );
}
