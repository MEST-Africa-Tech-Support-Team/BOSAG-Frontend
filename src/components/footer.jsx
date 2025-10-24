import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#131663] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand / About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center">
                <span className="font-bold text-sm text-white">BOSAG</span>
              </div>
            </div>

            <p className="text-sm text-white/80 leading-relaxed">
              Leading Ghana's Outsourcing Future
            </p>

            <p className="text-xs text-white/60">
              The authoritative voice for Ghana’s Business Process Outsourcing
              sector, driving transformation and growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="hover:underline cursor-pointer">About BOSAG</li>
              <li className="hover:underline cursor-pointer">Membership</li>
              <li className="hover:underline cursor-pointer">Strategic Plan</li>
              <li className="hover:underline cursor-pointer">Governance</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="hover:underline cursor-pointer">Sector Data</li>
              <li className="hover:underline cursor-pointer">
                Research Reports
              </li>
              <li className="hover:underline cursor-pointer">Policy Papers</li>
              <li className="hover:underline cursor-pointer">Events</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Contact</h4>
            <div className="text-sm text-white/80 space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>info@bosag.org</div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>+233 242 77 37 62</div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>Accra, Ghana</div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 flex justify-center">
          <hr className="border-t border-white/20 w-3/4" />
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-xs text-white/60">
          @ 2024 Business Outsourcing Services Association
          of Ghana (BOSAG). All rights reserved.
        </div>
      </div>

      {/* Decorative bottom strip */}
      <div className="bg-[#e7e7e7] h-12" aria-hidden />
    </footer>
  );
}