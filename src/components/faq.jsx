import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    // ABOUT BOSAG
    {
      question: "What is BOSAG?",
      answer:
        "BOSAG (Business Outsourcing Services Association of Ghana) is the national apex body representing Ghana’s Business Process Outsourcing (BPO), IT Enabled Services (ITES), and Global Business Services (GBS) sector.",
    },
    {
      question: "What is BOSAG’s mission?",
      answer:
        "To empower global commerce by facilitating trade and investment in BPO, ITES, and GBS, while advocating for public-sector support and sector-wide development.",
    },
    {
      question: "What is BOSAG’s vision?",
      answer: "To transform Ghana into Africa’s premier services hub and economic gateway.",
    },

    // MEMBERSHIP
    {
      question: "Who can become a member of BOSAG?",
      answer:
        "Membership is open to companies, institutions, and individuals operating in or supporting the BPO/ITES/GBS sector in Ghana.",
    },
    {
      question: "What are the membership categories?",
      answer:
        "BOSAG operates six membership tiers: Platinum Full Members, Gold Full Members, Vendors & Affiliate Members, Start-ups & Associate Members, Government Members, and Honorary & Observer Members.",
    },
    {
      question: "What benefits do members receive?",
      answer:
        "Benefits include sector visibility, access to market intelligence, participation in events, advocacy representation, shared resources, and executive education.",
    },
    {
      question: "Do all members have voting rights?",
      answer:
        "Only Platinum and Gold Full Members have voting rights at the General Assembly and are eligible for governance roles.",
    },

    // GOVERNANCE & LEADERSHIP
    {
      question: "How is BOSAG governed?",
      answer:
        "BOSAG’s governance structure includes the General Assembly, Governing Council, Executive Secretariat, Advisory Board, and Specialised Committees.",
    },
    {
      question: "What is the role of the Governing Council?",
      answer:
        "The Council provides strategic leadership, approves budgets and plans, appoints the CEO, and ensures alignment with national and sectoral priorities.",
    },
    {
      question: "Who leads BOSAG operationally?",
      answer:
        "The Executive Secretariat, headed by a full-time CEO, manages day-to-day operations, member services, stakeholder engagement, and programme delivery.",
    },

    // STRATEGIC FOCUS & SERVICES
    {
      question: "What are BOSAG’s strategic pillars?",
      answer:
        "Key pillars include Policy Advocacy, Skills Development, International Promotion, SME Capacity Building, and Research.",
    },
    {
      question: "How does BOSAG support investment promotion?",
      answer:
        "Through global outreach campaigns, investor engagement, sector branding, and collaboration with partners like GIPC.",
    },
    {
      question: "Does BOSAG offer training or certification?",
      answer:
        "Yes. BOSAG supports industry-aligned training, certification schemes, and partnerships with academic institutions.",
    },

    // COMPLIANCE & ETHICS
    {
      question: "Is BOSAG a legally registered entity?",
      answer:
        "Yes. BOSAG is registered as a non-profit company limited by guarantee under Ghana’s Companies Act, 2019 (Act 992).",
    },
    {
      question: "What ethical standards does BOSAG uphold?",
      answer:
        "All members and leaders must adhere to BOSAG’s Code of Conduct, which includes principles of integrity, fairness, transparency, and compliance.",
    },
    {
      question: "How are conflicts of interest managed?",
      answer:
        "Governance members must declare conflicts of interest. The Membership, Ethics & Governance Committee oversees compliance and disciplinary actions.",
    },

    // EVENTS & ENGAGEMENT
    {
      question: "What events does BOSAG host?",
      answer:
        "BOSAG hosts AGMs, Sector Dialogues, Training Workshops, the Ghana GBS/BPO Awards, and International Roadshows.",
    },
    {
      question: "How can members participate in committees?",
      answer:
        "Members can join Specialised Committees aligned with BOSAG’s strategic pillars. Platinum and Gold Members may chair or vote; others may contribute as non-voting participants.",
    },

    // CONTACT & SUPPORT
    {
      question: "How can I contact BOSAG?",
      answer:
        "You can reach BOSAG via the contact form on www.bosag.org, or email the Secretariat directly at info@bosag.org.",
    },
    {
      question: "How do I apply for membership?",
      answer:
        "Visit the membership section on the BOSAG website to complete the application form and submit required documentation.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-4 bg-gray-50" aria-labelledby="faq-heading">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-10">
          <h2 id="faq-heading" className="text-3xl font-bold text-[#191970] mb-2">
            FAQs
          </h2>
          <p className="text-gray-600 text-sm">
            Get quick answers to common questions about BOSAG, membership, governance, and more.
          </p>
        </header>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <article
                key={index}
                className={`rounded-lg border border-gray-200 overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "bg-indigo-50 shadow-sm border-indigo-200"
                    : "bg-white hover:shadow-sm"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full flex items-center justify-between px-4 py-3 text-left transition-colors ${
                    isOpen ? "text-[#191970] font-medium" : "text-gray-800"
                  }`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-sm pr-4 flex-1">{faq.question}</span>
                  <span className="flex-shrink-0 text-[#191970]">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="px-4 pb-3 pt-1 text-gray-700 text-xs leading-relaxed border-t border-indigo-100"
                    role="region"
                  >
                    {faq.answer}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
