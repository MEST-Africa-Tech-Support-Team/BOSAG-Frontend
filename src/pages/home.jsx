import Navbar from "../components/navbar.jsx";

import HeroSection from "../components/hero.jsx";
import FAQSection from "../components/faq.jsx";
import AboutSection from "../components/about-sec.jsx";
import StrategicPillars from "../components/strategic-pillars.jsx";
import UpcomingEvents from "../components/event-cards.jsx";
import MembershipSection from "../components/membership-categories.jsx";
import BrandPartners from "../components/brand-partners.jsx";
import Footer from "../components/footer.jsx";

export default function Home() {
  return (
    <>
      <Navbar />

      <HeroSection />
      
     

      <AboutSection />

      <StrategicPillars />
      <UpcomingEvents />
      <MembershipSection />
      <BrandPartners />


      <FAQSection />
      <Footer />
     
    </>
  );
}