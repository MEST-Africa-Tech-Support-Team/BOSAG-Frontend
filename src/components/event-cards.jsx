import React from "react";
import { Link } from "react-router";
import ComLeadership from "../assets/images/report3.jpg";
import YouthMentorship from "../assets/images/report1.jpg";
import SustainabilityConference from "../assets/images/hero2.jpg";

const EventCards = () => {
  const events = [
    {
      date: "June, 16, 2025",
      title: "BOSAG Hosts Workshop to Shape the Future of Ghana's Outsourcing Industry",
      description:
        "BOSAG's three-days workshop unites industry leaders to shape Ghana's outsourcing future, driving innovation, jobs and global competitiveness.",
      image: ComLeadership,
      path: "https://www.linkedin.com/feed/update/urn:li:activity:7341936512277561344",
      target: "_blank",
    },
    {
      date: "4 months ago",
      title: "Ghana's BPO Growth Spotlighted on Good Morning BSS World Podcast.",
      description:
        "David Gowu discusses why Ghana is emerging as a top outsourcing hub, highlighting talent, innovation and investment opportunity .",
      image: YouthMentorship,
      path: "https://www.linkedin.com/feed/update/urn:li:activity:7335353813886758913",
      target: "_blank",
    },
    {
      date: "5 months ago",
      title: "BOSAG Joins GBS Roadshow in Berlin to Showcase Ghana's Outsorcing Potential.",
      description:
        "BOSAG hightlights  Ghana's growing  BPO market, skilled workforce and competitive edge, attracting global outsourcing investment.",
      image: SustainabilityConference,
      path: "https://www.linkedin.com/feed/update/urn:li:activity:7334358921140170752",
      target: "_blank",
    },
  ];

  return (
    <section className="bg-white py-10 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#191970]">
             Events
          </h2>

          <Link
            to="/events"
            className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors"
          >
            View All Events
          </Link>
        </div>

        {/* Event Cards */}
        <div className="grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible scrollbar-hide">
          {events.map((event, index) => (
            <Link
              to={event.path}
              key={index}
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventCards;
