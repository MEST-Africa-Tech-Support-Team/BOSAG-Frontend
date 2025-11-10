import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Team from '../assets/images/team.jpg';
import Win from '../assets/images/win.jpg';
import Growth from '../assets/images/growth.jpg';

export default function ArticlesSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiry: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Inquiry submitted successfully!');
  };

  const articles = [
    {
      image: Growth,
      title: 'The 100K Job Goal: Forecasting Ghana\'s GBS Growth',
      description: 'The current workforce includes 19,672 professionals, with 3,034 serving international clients. The Highest Target models achieving 100,095 international offshore jobs by 2030.',
      link: '/about'
    },
    {
      image: Win,
      title: 'Strategy at a Glance: The Five Pillars of Growth',
      description: 'The strategy is built on 5 pillars:',
      points: [
        'Raise International Visibility',
        'Drive Skills Development (AI bootcamps)',
        'Deepen Local Sector ("Think Local")',
        'Facilitate Policy Alignment',
        'Enable Sector Research'
      ],
      link: '/about'
    },
    {
      image: Team,
      title: 'Top Markets: Where Ghana\'s GBS Sector Will Win',
      description: 'Ghana primarily serves Europe/UK (40%) and North America (35%). Key growth areas include Fintech, Healthcare IT, and high- potential Remote Work Placement, projected to enable over 33,000 remote jobs by 2030.',
      link: 'about/who-we-are'
    }
  ];

  const statistics = [
    { label: 'Current Workforce', value: '19,672' },
    { label: 'International Clients', value: '3,034' },
    { label: '2030 Target Jobs', value: '100K+' }
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content - Articles */}
          <section className="lg:col-span-3">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 flex-1 flex flex-col">
                    <h2 className="text-lg font-bold text-orange-500 mb-3">
                      {article.title}
                    </h2>
                    <p className="text-sm text-gray-600 mb-2">
                      {article.description}
                    </p>
                    {article.points && (
                      <ul className="text-sm text-gray-600 mb-4 space-y-1">
                        {article.points.map((point, idx) => (
                          <li key={idx} className="ml-4">• {point}</li>
                        ))}
                      </ul>
                    )}
                    <a 
                      href={article.link}
                      className="mt-auto inline-flex items-center text-sm font-semibold text-gray-900 hover:text-orange-500 transition-colors"
                    >
                      Read More <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-2">
            {/* Contact Form */}
            <div className="bg-gray-900 rounded-lg px-6 py-2 text-white">
              <h2 className="text-xl font-bold mb-2">CONTACT BOSAG</h2>
              <p className="text-sm text-gray-300 mb-6">
                Get in Touch with the BOSAG Secretariat
              </p>
              
              <div className="space-y-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <textarea
                  name="inquiry"
                  placeholder="Inquiry"
                  value={formData.inquiry}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                />
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 rounded-lg transition-all duration-200"
                >
                  Submit Inquiry
                </button>
              </div>
            </div>

            {/* Key Statistics */}
            <div className="bg-white rounded-lg shadow-md px-6 py-3">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Key Statistics</h2>
              <div className="space-y-4">
                {statistics.map((stat, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{stat.label}</span>
                    <span className="text-lg font-bold text-orange-500">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}