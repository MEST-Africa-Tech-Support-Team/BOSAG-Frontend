import React from 'react';
import { ArrowLeft, Linkedin } from 'lucide-react';
import ban from "../../assets/images/about.png";
import matthew from "../../assets/images/Matthew.jpg";
import Navbar from '../navbar';
import Footer from '../footer';
import { Link } from 'react-router';


export default function MatthewProfile() {
  
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
                   src={matthew}
                   alt="David Gowu"
                   className="rounded-xl object-cover w-105 h-auto"
                 />
               </div>
       
               {/* Text Section */}
               <div className="w-full md:w-2/3 text-gray-700">
                 <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                  Matthew Darkwa 
                 </h3>
                 <p className="text-blue-600 font-medium text-sm mb-4">Operations Director, Amalitech</p>
       
                 <div className="space-y-4 text-sm leading-relaxed">
                   <p>
                     Matthew Darkwa has over 25 years of rich experience in the IT industry,
                      excelling in various roles within multinational corporations. His career 
                      has been driven by a profound passion for technology and an unwavering commitment 
                      to skill development. Matthew has continuously evolved with the rapid advancements
                     in the tech world, showcasing his adaptability and dedication to personal and professional growth. 
                   </p>
                   <p>
                    In 2019, Matthew embarked on an impactful journey with AmaliTech in Ghana. 
                    His contributions have been pivotal in building AmaliTech from its inception.
                     This endeavour transcends business; it’s about nurturing local talent, enhancing
                     technical expertise, and creating meaningful job opportunities in Ghana and beyond. 
                     Under his leadership, AmaliTech has become a beacon of tech education and skill development,
                      reflecting his advocacy for these causes across the African continent. 
                   </p>
                   <p>
                    Matthew is a staunch advocate for tech education and decent job creation in Africa.
                     His efforts are not just about improving the tech landscape but also about empowering 
                     individuals with the skills they need to thrive in a digital world. He believes in the 
                     transformative power of technology and its potential to drive sustainable development and economic growth. 
                   </p>
                   <p>
                    Beyond his professional life, Matthew dreams of farming, cherishing the simplicity and 
                    connection to nature it offers. He also enjoys travelling and playing golf, finding relaxation 
                    and joy in these activities. While his golf game may not be perfect, the serenity it brings is 
                    invaluable to him. 
                   </p>
                   <p>
                    Matthew Darkwa’s journey is a testament to his dedication to technology, education, and community 
                    development. His leadership at AmaliTech exemplifies his commitment to fostering growth and creating
                     opportunities, making him a key figure in the IT industry and a role model for many aspiring professionals. 
                   </p>
                  
                 </div>
       
                 {/* LinkedIn Button */}
                 <div className="mt-6">
                   <a
                     href="https://www.linkedin.com/in/matthew-darkwa/"
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