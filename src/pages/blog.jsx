import React from 'react'
import { Link } from 'react-router'
import image from "../assets/images/image.png";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import UpcomingEvent from '../components/event-cards';
import ArticlesSection from '../components/latest';
import StrategyBanner from '../components/blog-banner';
import InfoCards from '../components/blog-sec';

const blog = () => {
  return (
    <div>
      <Navbar />
      <div>
        <StrategyBanner />
        <ArticlesSection />
        <InfoCards />
        <UpcomingEvent />
      </div>
      <Footer />
    </div>

  )
}

export default blog