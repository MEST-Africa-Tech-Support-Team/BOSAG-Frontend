import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ComLeadership from "../assets/images/report3.jpg";
import YouthMentorship from "../assets/images/report1.jpg";
import SustainabilityConference from "../assets/images/hero2.jpg";
import { Link } from "react-router";

const Event = () => {
  const [activeTab, setActiveTab] = useState("All Events");

  const tabs = ["All Events", "Upcoming Events", "Past Events", "Annual Events"];

  const events = [
    {
      date: "June 16, 2025",
      title: "BOSAG Hosts Workshop to Shape the Future of Ghana's Outsourcing Industry",
      description:
        "BOSAG's three-days workshop unites industry leaders to shape Ghana's outsourcing future, driving innovation, jobs and global competitiveness.",
      image: ComLeadership,
      path: "https://www.linkedin.com/feed/update/urn:li:activity:7341936512277561344",
      target: "_blank",
      categories: ["Past Events", "Annual Events"], // ✅ Appears in TWO tabs!
    },
    {
      date: "4 months ago",
      title: "Ghana's BPO Growth Spotlighted on Good Morning BSS World Podcast.",
      description:
        "David Gowu discusses why Ghana is emerging as a top outsourcing hub, highlighting talent, innovation and investment opportunity.",
      image: YouthMentorship,
      path: "https://www.linkedin.com/feed/update/urn:li:activity:7335353813886758913",
      target: "_blank",
      categories: ["Past Events"],
    },
    {
      date: "5 months ago",
      title: "BOSAG Joins GBS Roadshow in Berlin to Showcase Ghana's Outsourcing Potential.",
      description:
        "BOSAG highlights Ghana's growing BPO market, skilled workforce and competitive edge, attracting global outsourcing investment.",
      image: SustainabilityConference,
      path: "https://www.linkedin.com/feed/update/urn:li:activity:7334358921140170752",
      target: "_blank",
      categories: ["Past Events"],
    },
     {
          date: "15 November, 2024",
          title: "BOSAG officially unveiled; positioning Ghana as Africa's premier BPO destination.",
          description:
            "BOSAG officially launched, marking a significant milestone in establishing Ghana as a leading BPO hub in Africa.",
          image: SustainabilityConference,
          path: "https://myjoyonline.com/bosag-officially-unveiled-positioning-ghana-as-africas-premier-bpo-destination/",
          target: "_blank",
          categories: ["Past Events", "Annual Events"],
        },
  ];

  // ✅ Filter: include event if activeTab is in its categories (or "All Events")
  const filteredEvents = events.filter((event) => {
    if (activeTab === "All Events") return true;
    if (activeTab === "Upcoming Events") return false; // none are upcoming
    return event.categories.includes(activeTab);
  });

  return (
    <>
      <Navbar />
      <section className="py-10 bg-[#F8FAFC] text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#18166A] mb-4">
            Events Hub
          </h2>
          <p className="text-gray-600 mb-10">
            Access BOSAG’s comprehensive research, market intelligence, and
            performance benchmarks that inform strategic decision-making and
            drive sector growth.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-[#FF5B22] text-white border-[#FF5B22]"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-10 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          {filteredEvents.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible scrollbar-hide">
              {filteredEvents.map((event, index) => (
                <a
                  key={index}
                  href={event.path}
                  target={event.target}
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-full md:w-auto bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden transform hover:-translate-y-1 duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-60 object-cover transform transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-orange-500 text-sm font-semibold mb-1">
                      {event.date}
                    </p>
                    <h3 className="text-[#191970] font-bold text-lg leading-tight mb-1">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No events found for "{activeTab}".</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Event;