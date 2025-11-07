import React from "react";
import { Link } from "react-router";
import ComLeadership from "../assets/images/hero4.jpg";
import YouthMentorship from "../assets/images/hero6.jpg";
import SustainabilityConference from "../assets/images/hero2.jpg";

const EventGrids = () => {
  const events = [
    {
      date: "March 15, 2025",
      title: "Community Leadership Workshop",
      description:
        "Empowering local leaders with essential skills for community development.",
      image: ComLeadership,
      path: "/events/community-leadership-workshop",
    },
    {
      date: "March 22, 2025",
      title: "Youth Mentorship Program",
      description:
        "Connecting experienced professionals with aspiring young leaders.",
      image: YouthMentorship,
      path: "/events/youth-mentorship-program",
    },
    {
      date: "April 5, 2025",
      title: "Sustainability Conference",
      description:
        "Exploring innovative solutions for environmental challenges.",
      image: SustainabilityConference,
      path: "/events/sustainability-conference",
    },
     {
      date: "March 15, 2025",
      title: "Community Leadership Workshop",
      description:
        "Empowering local leaders with essential skills for community development.",
      image: ComLeadership,
      path: "/events/community-leadership-workshop",
    },
    {
      date: "March 22, 2025",
      title: "Youth Mentorship Program",
      description:
        "Connecting experienced professionals with aspiring young leaders.",
      image: YouthMentorship,
      path: "/events/youth-mentorship-program",
    },
    {
      date: "April 5, 2025",
      title: "Sustainability Conference",
      description:
        "Exploring innovative solutions for environmental challenges.",
      image: SustainabilityConference,
      path: "/events/sustainability-conference",
    },
     {
      date: "March 15, 2025",
      title: "Community Leadership Workshop",
      description:
        "Empowering local leaders with essential skills for community development.",
      image: ComLeadership,
      path: "/events/community-leadership-workshop",
    },
    {
      date: "March 22, 2025",
      title: "Youth Mentorship Program",
      description:
        "Connecting experienced professionals with aspiring young leaders.",
      image: YouthMentorship,
      path: "/events/youth-mentorship-program",
    },
    {
      date: "April 5, 2025",
      title: "Sustainability Conference",
      description:
        "Exploring innovative solutions for environmental challenges.",
      image: SustainabilityConference,
      path: "/events/sustainability-conference",
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

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
                  className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-105"
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

export default EventGrids;
