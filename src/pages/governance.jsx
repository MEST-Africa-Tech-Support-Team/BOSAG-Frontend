import React from 'react'
import { Users, Shield, Briefcase, Lightbulb, TrendingUp, Download ,UserCheck, Network} from 'lucide-react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
<<<<<<< HEAD
import GovernanceStructure from '../components/governace-structure';
=======
import GovernanceStructure from '../components/governance-structure';
>>>>>>> 7e97b50e489305b1b19633e38b8c45178357d31e
import MembershipAccountability from '../components/membership-accountability';

const governance = () => {
  const components = [
    {
      icon: Users,
      iconBg: 'bg-indigo-100',
      iconColor: 'text-indigo-900',
      title: 'General Assembly',
      description: "Highest decision-making body comprising all registered BOSAG members. Provides democratic oversight and strategic direction."
    },
    {
      icon: UserCheck,
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-500',
      title: 'Governing Council',
      description: "A compact group of elected representatives (approx. 7 members) who serve as BOSAG's formal board. Provides fiduciary oversight."
    },
    {
      icon: Briefcase,
      iconBg: 'bg-indigo-100',
      iconColor: 'text-indigo-900',
      title: 'Executive Secretariat',
      description: "The operational engine, led by a full-time CEO and professional team. Responsible for implementing directives and day-to-day operations."
    },
    {
      icon: Lightbulb,
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-500',
      title: 'Advisory Board',
      description: "A non-voting strategic advisory group made up of partners, experts, academia, etc. Provides external insight and thought leadership."
    },
    {
      icon: Network,
      iconBg: 'bg-indigo-100',
      iconColor: 'text-indigo-900',
      title: 'Specialised Committees',
      description: "Thematic working groups mandated to lead technical input, stakeholder collaboration, and programme execution across priority areas."
    }
  ];
  return (
    <>
    <Navbar/>
   <div>
    <section className="bg-[#191970] text-white py-13 px-6 md:px-12 lg:px-15">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Governance Structure
      </h2>

      {/* Paragraph */}
      <p className="text-base md:text-md text-gray-200 leading-relaxed mb-8 max-w-5xl">
        The Business Outsourcing Services Association of Ghana (BOSAG) serves as
        the national industry body representing the interests of Ghana’s Global
        Business Services (GBS). This includes the domestic and international
        Business Process Outsourcing (BPO), and Information Technology Enabled
        Services (ITES) sectors. In an increasingly competitive global
        outsourcing market, effective governance is essential to building
        institutional credibility, sustaining member engagement, and fostering
        trust among local and international stakeholders.
      </p>

      {/* Bottom icons */}
      <div className="flex flex-wrap items-center gap-6 text-gray-200">
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5 text-orange-400" />
          <span>Democratic Oversight</span>
        </div>
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-orange-400" />
          <span>Strategic Alignment</span>
        </div>
      </div>
    </section>

    <section className='bg-gray-50 py-8 px-6'>
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-3xl font-bold text-[#191970] mb-4 py-8">
          Governance Philosophy
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Left Column */}
          <div className="space-y-6">
            {/* BOSAG's Mandate */}
            <div className="bg-gray-100 rounded-lg p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-4">
                BOSAG's Mandate
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                BOSAG is the national industry body representing Ghana's Global 
                Business Services (GBS), including BPO and ITES sectors.
              </p>
            </div>

            {/* Core Principles */}
            <div className="bg-[#f4e9e0] border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-4">
                Core Principles
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Our governance systems reflect principles of transparency, 
                accountability, inclusiveness, and agility in all operations.
              </p>
            </div>
          </div>

          {/* Right Column - Strategic Alignment */}
          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-xl font-bold text-indigo-900 mb-4">
              Strategic Alignment
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              The framework is aligned with the BOSAG 5-Year Strategic Plan 
              (2025-2030) and supports the implementation of Ghana's National 
              BPO/ITO Strategy.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-orange-500 mb-1">
                  2025-2030
                </div>
                <div className="text-sm text-gray-600">
                  Strategic Plan
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-indigo-900 mb-1">
                  5
                </div>
                <div className="text-sm text-gray-600">
                  Components
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Download Button */}
        <div className="flex justify-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-lg transition duration-300 inline-flex items-center gap-3 shadow-lg">
            <Download className="w-5 h-5" />
            Download Document
          </button>
        </div>
      </div>
    </section>

    <section>
       <div className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-indigo-900 mb-4">
            Governance Structure Overview
          </h2>
          <p className="text-gray-600 text-md max-w-3xl mx-auto">
            Five interlinked components working together to ensure effective governance <br />
            and operational excellence
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {components.map((component, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Icon */}
              <div className={`w-14 h-14 ${component.iconBg} rounded-xl flex items-center justify-center mb-6`}>
                <component.icon className={`w-7 h-7 ${component.iconColor}`} />
              </div>
               {/* Title */}
              <h3 className="text-xl font-bold text-indigo-900 mb-4">
                {component.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {component.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
    <GovernanceStructure/>
     <MembershipAccountability />
   </div>
    <Footer/>
    </>
  )
}

export default governance