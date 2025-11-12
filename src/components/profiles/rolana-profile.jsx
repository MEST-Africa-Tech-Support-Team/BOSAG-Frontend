import React from 'react';
import { ArrowLeft, Linkedin } from 'lucide-react';
import ban from "../../assets/images/about.png";
import david from "../../assets/images/rolana.png";
import Navbar from '../navbar';
import Footer from '../footer';
import { Link } from 'react-router';


export default function RolanaProfile() {
  
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <img 
          src={ban}
          alt="BOSAG Leadership Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-indigo-950/60"></div>
        
        <div className="relative max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            BOSAG Leadership
          </h1>
          <p className="text-base sm:text-lg text-gray-100 leading-relaxed max-w-3xl mx-auto">
            Driving Ghana's digital transformation through visionary leadership and strategic partnerships in the business outsourcing ecosystem
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link to="/about/board">
        <button className="flex items-center text-indigo-900 hover:text-indigo-700 mb-8 transition-colors">
          <ArrowLeft className="w-10 h-16" />
        </button>
        </Link>

        {/* Profile Card */}
       <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg transition-all p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center md:items-start">
               {/* Image */}
               <div className="w-full md:w-1/2 h-[80vh] flex justify-center md:justify-start">
                 <img
                   src={david}
                   alt="David Gowu"
                   className="rounded-xl object-cover w-105 h-auto"
                 />
               </div>
       
               {/* Text Section */}
               <div className="w-full md:w-2/3 text-gray-700">
                 <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                  Rolana Rashwan
                 </h3>
                 <p className="text-blue-600 font-medium text-sm mb-4">GBS Sector Consultant</p>
       
                 <div className="space-y-4 text-sm leading-relaxed">
                   <p>
                    Rolana Rashwan is a multidisciplinary professional with over 20 years of 
                    experience in consulting, sustainable development, and strategic marketing. 
                    Between 2016 and 2022, Rolana has led the analyst relations and international 
                    marketing at the IT Industry Development Agency (ITIDA), the executive arm of 
                    the Egyptian Ministry of CIT. She has been influential in positioning Egypt as
                     a leading global offshoring hub and has contributed to the development of Egypt’s 
                     2022-2026 Digital Sector Strategy. 
                   </p>
                   <p>
                    Rolana has been actively contributing to the development of the GBS sector across
                     Africa through advising local governments, development institutions and private sector 
                     companies, forging strategic partnerships, and speaking at international events. Rolana currently 
                     serves on the Steering Committee of the Africa Federation of GBS Associations, helping shape its
                      strategic direction and spearheading initiatives to grow its footprint and impact. She also serves 
                      on the board of eNable, where she supports the company’s transformation into a global BPO player. 
                   </p>
                   <p>
                     For the past two years, Rolana has been advising GIZ, the development arm of the German government, 
                     on their Invest for Jobs initiative, focusing on creating jobs in Africa. Prior to this, she held roles
                      at Simon Kucher, Worley, UNDP, and Telecom Egypt.
                   </p>
                   <p>
                    Rolana holds an MSc in Sustainable Development from University of London and BSc in Electronics and 
                    Communication Engineering from Cairo University.
                   </p>
                  
                 </div>
       
                 {/* LinkedIn Button */}
                 <div className="mt-6">
                   <a
                     href="https://www.linkedin.com/in/rolanarashwan/"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-flex items-center bg-[#191970] hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md"
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
      </main>
    </div>
    <Footer/>
    </>
  );
}