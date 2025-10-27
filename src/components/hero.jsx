"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router";


import hero1 from "../assets/images/hero.jpg";
import hero2 from "../assets/images/hero1.jpg";
import hero3 from "../assets/images/hero2.jpg";
import hero4 from "../assets/images/hero3.jpg";
import hero5 from "../assets/images/hero4.jpg";

const HeroSection = () => {
  const slides = [hero1, hero2, hero3, hero4, hero5];

  return (
    <section className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden">
   
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {slides.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            >
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#020F33]/90 via-[#020F33]/60 to-transparent"></div>

              
              <div className="absolute inset-0 flex flex-col justify-end items-center text-center pb-16 px-6 text-white">
                <h1 className="text-3xl md:text-5xl font-bold leading-snug">
                  Leading Ghana's{" "}
                  <span className="text-orange-500">Outsourcing</span> <br />
                  Transformation
                </h1>
                <p className="mt-4 max-w-2xl text-sm md:text-base text-gray-200">
                  Establishing national leadership in business process
                  outsourcing, driving sector growth, and creating sustainable
                  employment opportunities for Ghana’s digital economy.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link to="/membership"
                    className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-md transition-all"
                  >
                    Become a Member
                  </Link>
                  <Link to="/about"
                    className="px-6 py-3 border border-white text-white hover:bg-white hover:text-[#020F33] text-sm font-semibold rounded-md transition-all"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
