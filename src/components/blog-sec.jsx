import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import image1 from '../assets/images/report3.jpg';
import image2 from '../assets/images/report2.jpg';
import image3 from '../assets/images/report1.jpg';

export default function InfoCards() {
  const cards = [
    {
      id: 1,
      image: image3,
      title: 'Strategic Competitive Advantages: Stability and Time Zone',
      description: 'Ghana is positioned as a premium outsourcing hub due to factors beyond cost. These are key differentiators for your blog:',
      bullets: [' Political Stability: Ghana is frequently cited for its long-standing political stability.'],
      alt: 'Keynote speaker at podium'
    },
    {
      id: 2,
      image: image2,
      title: 'Significant Economic Impact and Market Growth Projections',
      description: "This provides hard economic evidence for the sector's importance:",
      bullets: [
        ' GDP Contribution: The services sector, which includes GBS, is a major pillar of the economy, contributing nearly 50% of Ghana’s national GDP.'
      ],
      alt: 'Group photo of professionals'
    },
    {
      id: 3,
      image: image1,
      title: 'Dedicated Investment in Talent Development and Remote Work',
      description: 'Highlight the ecosystem support for the "Remote Work Placement" vertical:',
      bullets: [
        ' Skilled Talent Pool: Ghana boasts a large, young, educated, and English-speaking workforce ready for global roles, particularly in areas like ICT, finance, and customer service.'
      ],
      alt: 'Conference audience'
    }
  ];

  return (
    <div className="w-full bg-white py-10 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 mb-8">
          {cards.map((card) => (
            <div key={card.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              {/* Card Image */}
              <div className="h-54 overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                  {card.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-3">
                  {card.description}
                </p>
                
                {/* Bullet Points */}
                <ul className="mb-4 space-y-2">
                  {card.bullets.map((bullet, index) => (
                    <li key={index} className="text-sm text-gray-600">
                      <span className="font-semibold">•</span> {bullet}
                    </li>
                  ))}
                </ul>
                
                {/* Read More Link */}
                <Link to="/about" className="flex items-center text-sm font-semibold text-gray-900 hover:text-orange-500 transition-colors duration-200">
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Learn More Button */}
        <div className="flex justify-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-md transition-colors duration-200">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}