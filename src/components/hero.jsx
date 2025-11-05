"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";

import hero1 from "../assets/images/hero.jpg";
import hero2 from "../assets/images/hero1.jpg";
import hero3 from "../assets/images/hero2.jpg";
import hero4 from "../assets/images/hero3.jpg";
import hero5 from "../assets/images/hero4.jpg";
import hero6 from "../assets/images/hero5.jpg";
import hero7 from "../assets/images/hero6.jpg";
import hero8 from "../assets/images/hero7.jpg";

const HeroSection = () => {
  const slides = [
    {
      image: hero1,
      title: "Empowering Global <span class='text-orange-500'>Services with</span> Ghanaian Excellence",
      text: "Establishing national leadership in business process outsourcing, driving sector growth, and creating sustainable employment opportunities for Ghana's digital economy.",
      primary: { text: "Become a Member", link: "/membership" },
      secondary: { text: "Learn More", link: "/about" },
    },
    {
      image: hero2,
      title: " ⁠Positioning Ghana as <span class='text-orange-500'>Africa’s Premier </span> Services Hub",
      text: "Establishing national leadership in business process outsourcing, driving sector growth, and creating sustainable employment opportunities for Ghana's digital economy.",
      primary: { text: "Governance", link: "/about/governance" },
      secondary: { text: "Our Vision", link: "/about/who-we-are" },
    },
    {
      image: hero3,
      title: "⁠Connecting <span class='text-orange-500'>Talent, Technology</span> & Opportunity",
      text: "Establishing national leadership in business process outsourcing, driving sector growth, and creating sustainable employment opportunities for Ghana's digital economy.",
      primary: { text: "Membership", link: "/membership" },
      secondary: { text: "Meet Our Partners", link: "/about/board" },
    },
    {
      image: hero4,
      title: "Driving Innovation in <span class='text-orange-500'>BPO, ITES</span> & GBS",
      text: "Establishing national leadership in business process outsourcing, driving sector growth, and creating sustainable employment opportunities for Ghana's digital economy.",
      primary: { text: "Join Now", link: "/signup" },
      secondary: { text: "Contact Us", link: "/contact" },
    },
    {
      image: hero5,
      title: "Championing <span class='text-orange-500'>Ethical Governance</span> & Sector Growth",
      text: "Establishing national leadership in business process outsourcing, driving sector growth, and creating sustainable employment opportunities for Ghana's digital economy.",
      primary: { text: "See Reports", link: "/sector-reports" },
      secondary: { text: "Governance", link: "/about/governance" },
    },
    {
      image: hero6,
      title: "Championing <span class='text-orange-500'>Women in Tech</span> and Outsourcing",
      text: "Promoting diversity and inclusion across Ghana’s outsourcing sector.",
      primary: { text: "Our Impact", link: "/about" },
      secondary: { text: "Join the Movement", link: "/membership" },
    },
    {
      image: hero7,
      title: "Creating <span class='text-orange-500'>Global Opportunities</span> for Local Talent",
      text: "Expanding access to international clients and career opportunities.",
      primary: { text: "Learn More", link: "/about" },
      secondary: { text: "Get Started", link: "/membership" },
    },
    {
      image: hero8,
      title: "Collaborating for Industry Excellence",
      text: "Driving public-private partnerships for national growth and global recognition.",
      primary: { text: "See Our Work", link: "/gallery" },
      secondary: { text: "Contact Us", link: "/contact" },
    },
  ];

  const swiperRef = useRef(null);

  return (
    <section className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        pagination={{ clickable: true }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020F33]/90 via-[#020F33]/60 to-transparent"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end items-center text-center pb-16 px-6 text-white">
                <h1
                  className="text-3xl md:text-5xl font-bold leading-snug max-w-3xl"
                  dangerouslySetInnerHTML={{ __html: slide.title }}
                ></h1>

                <p className="mt-4 max-w-2xl text-sm md:text-base text-gray-200">
                  {slide.text}
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    to={slide.primary.link}
                    className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-md transition-all"
                  >
                    {slide.primary.text}
                  </Link>
                  <Link
                    to={slide.secondary.link}
                    className="px-6 py-3 border border-white text-white hover:bg-white hover:text-[#020F33] text-sm font-semibold rounded-md transition-all"
                  >
                    {slide.secondary.text}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-[#020F33]/40 hover:bg-[#020F33]/70 text-white p-3 rounded-full transition-all"
      >
        <ChevronLeft size={22} />
      </button>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-[#020F33]/40 hover:bg-[#020F33]/70 text-white p-3 rounded-full transition-all"
      >
        <ChevronRight size={22} />
      </button>
    </section>
  );
};

export default HeroSection;
