import React from "react";
import { ArrowRight } from "lucide-react";
import img1 from "../assets/images/hero.jpg";
import img2 from "../assets/images/hero1.jpg";
import img3 from "../assets/images/hero3.jpg";
import img4 from "../assets/images/hero4.jpg";
import img5 from "../assets/images/hero5.jpg";
import img6 from "../assets/images/hero6.jpg";
const LatestArticles = () => {
  const articles = [
    {
      id: 1,
      image: img1,
      title: "The 100K Job Goal: Forecasting Ghana’s GBS Growth",
      text: "The current workforce includes 19,672 professionals, with 3,034 serving international clients. The Highest Target models achieving 100,095 international offshore jobs by 2030.",
    },
    {
      id: 2,
      image: img2,
      title: "Strategy at a Glance: The Five Pillars of Growth",
      text: "The strategy is built on 5 pillars: Raise International Visibility, Drive Skills Development (AI Readiness), Promote Local Sector, Facilitate Policy Alignment, Enable Sector Research.",
    },
    {
      id: 3,
      image: img3,
      title: "Top Markets: Where Ghana’s GBS Sector Will Win",
      text: "Ghana primarily serves Europe/UK (40%) and North America (35%). Fintech, Healthcare, and Remote Work Placement will drive 33,000 new jobs by 2030.",
    },
    {
      id: 4,
      image: img4,
      title: "Strategic Competitive Advantages: Stability and Time Zone",
      text: "Ghana is positioned as a premium outsourcing hub due to its long-standing political stability and strategic time zone advantage.",
    },
    {
      id: 5,
      image: img5,
      title: "Significant Economic Impact and Market Growth Projections",
      text: "The services sector, including GBS, contributes nearly 50% of Ghana’s GDP—providing strong evidence for sustained industry growth.",
    },
    {
      id: 6,
      image: img6,
      title: "Dedicated Investment in Talent Development and Remote Work",
      text: "Skilled workforce and government support enable Ghana to serve global roles in ICT, finance, and customer service.",
    },
   
  ];

  return (
    <section className="bg-[#F8FAFC] flex justify-center pt-20 mb-60">
      <div className="w-[90%] md:w-[85%] lg:w-[80%]">
        {/* Header */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-8">
          Latest Articles
        </h2>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* LEFT — Articles */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-6">
            {articles.slice(0, 4).map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all overflow-hidden"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-[15px] font-semibold text-[#FF5B22] mb-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {article.text}
                  </p>
                  <button className="flex items-center text-[#0F172A] font-semibold text-sm hover:underline">
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
         
        </div>

    <div className="flex flex-col lg:flex-row gap-10 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
    {/* Article Cards */}
    {articles.slice(4, 6).map((article) => (
      <div
        key={article.id}
        className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all overflow-hidden h-[500px] flex flex-col"
      >
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-40 object-cover"
        />
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-[15px] font-semibold text-[#0F172A] mb-2">
            {article.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-grow overflow-hidden">
            {article.text}
          </p>
          <button className="flex items-center text-[#0F172A] font-semibold text-sm hover:underline mt-auto">
            Read More <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    ))}

    {/* Contact + Stats Column */}
    <div className="flex flex-col justify-between h-[500px]">
      {/* Contact Form */}
      {/* <div className="w-full bg-[#10182E] rounded-lg shadow-md p-6 flex-grow">
        <h3 className="text-white text-lg font-bold mb-4">CONTACT BOSAG</h3>
        <p className="text-sm text-[#e9e9ec] mb-4">
          Get in Touch with the BOSAG Secretariat
        </p>

        <form className="flex flex-col gap-3 mb-4">
          <input
            type="text"
            placeholder="Name"
            className="border border-gray-300 text-[#ADAEBC] rounded-md px-3 py-2 text-sm"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 text-[#ADAEBC] rounded-md px-3 py-2 text-sm"
          />
          <textarea
            placeholder="Inquiry"
            className="border border-gray-300 text-[#ADAEBC] rounded-md px-3 py-3 text-sm"
            rows="3"
          ></textarea>
          <button
            type="submit"
            className="bg-[#FF5B22] hover:bg-[#ff6a38] text-white text-sm font-semibold py-2 mt-5 rounded-md"
          >
            Submit Inquiry
          </button>
        </form>
      </div> */}

      {/* Stats */}
      
      <div className="bg-[#10182E] rounded-xl h-135 shadow-md p-6 ">
        <img
            src={img3}
            alt=""
            className=""
            />
        <h2 className="text-xl font-bold text-gray-900 mb-6 mt-4">Key Statistics</h2>

        <div className="space-y-4">
          <div className="flex justify-between items-center pb-4 border-b border-gray-200">
            <span className="text-sm text-white">Current Workforce</span>
            <span className="text-lg font-bold text-orange-500">19,672</span>
          </div>

          <div className="flex justify-between items-center pb-4 border-b border-gray-200">
            <span className="text-sm text-white">International Clients</span>
            <span className="text-lg font-bold text-orange-500">3,034</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm text-white">2030 Target Jobs</span>
            <span className="text-lg font-bold text-orange-500">100,095</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
 
        {/* Learn More Button */}
        <div className="flex justify-center mb-10 mt-10">
          <button className="bg-[#FF5B22] hover:bg-[#ff6a38] text-white font-semibold px-8 py-3 rounded-md text-sm">
            Learn More
          </button>
        </div>
      
      </div>
    </section>
  );
};

export default LatestArticles;
