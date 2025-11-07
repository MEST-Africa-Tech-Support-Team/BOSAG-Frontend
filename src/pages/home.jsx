import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../components/navbar.jsx";
import HeroSection from "../components/hero.jsx";
import AboutSection from "../components/about-sec.jsx";
import StrategicPillars from "../components/about-strategy.jsx";
import UpcomingEvents from "../components/event-cards.jsx";
import MembershipSection from "../components/membership-categories.jsx";
import BrandPartners from "../components/brand-partners.jsx";
import FAQSection from "../components/faq.jsx";
import Footer from "../components/footer.jsx";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      <Navbar />

      <section data-aos="fade-up">
        <HeroSection />
      </section>

      <section data-aos="fade-up" data-aos-delay="100">
        <AboutSection />
      </section>

      <div className="bg-gray-50">
        <section data-aos="fade-up" data-aos-delay="200">
          <StrategicPillars />
        </section>
      </div>

      <section data-aos="fade-up" data-aos-delay="300">
        <UpcomingEvents />
      </section>

      <section data-aos="fade-up" data-aos-delay="400">
        <MembershipSection />
      </section>

      <section data-aos="fade-up" data-aos-delay="500">
        <BrandPartners />
      </section>

      <section data-aos="fade-up" data-aos-delay="600">
        <FAQSection />
      </section>

      <Footer />
    </>
  );
}
