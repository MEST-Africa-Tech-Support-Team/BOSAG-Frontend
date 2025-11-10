import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import EventGrids from "../components/event-grid";

const Event = () => {
  const [activeTab, setActiveTab] = useState("All Events");

  const tabs = ["All Events", "Upcoming Events", "Past Events", "Annual Events"];

  return (
    <>
    <Navbar />
    <section className="py-20 bg-[#F8FAFC] text-center">
      <div className="max-w-4xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#18166A] mb-4">
          Events Hub
        </h2>
        <p className="text-gray-600 mb-10">
          Access BOSAG’s comprehensive research, market intelligence, and
          performance benchmarks that inform strategic decision-making and
          drive sector growth.
        </p>

        {/* Tabs */}
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
    <EventGrids />
    <Footer/>
    </>
  );
};

export default Event;
