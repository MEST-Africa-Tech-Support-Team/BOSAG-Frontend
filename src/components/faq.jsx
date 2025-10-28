import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is BOSAG and what is its primary role?",
      answer:
        "BOSAG (Banking and Other Financial Services Association Ghana) is a premier industry association representing banks, insurance companies, and other financial institutions in Ghana. Our primary role is to advocate for industry interests, promote best practices, facilitate policy dialogue with regulators, and support the development of a robust financial services sector that serves the needs of all Ghanaians.",
    },
    {
      question: "What is BOSAG's main strategic goal for the sector?",
      answer:
        "Our main strategic goal is to foster a competitive, innovative, and inclusive financial services sector in Ghana. We aim to enhance industry collaboration, drive digital transformation, promote financial literacy, strengthen regulatory frameworks, and position Ghana as a leading financial hub in West Africa through sustainable growth and development initiatives.",
    },
    {
      question: "How is BOSAG structured and governed?",
      answer:
        "BOSAG operates under a democratic governance structure with a Board of Directors elected from member institutions. The organization is structured into various committees including Policy and Advocacy, Professional Development, and Member Relations. Our governance framework ensures transparency, accountability, and representation of diverse stakeholder interests within the financial services industry.",
    },
    {
      question: "How can my company become a member?",
      answer:
        "Companies can become members by meeting our eligibility criteria, which includes being a licensed financial institution operating in Ghana. The membership process involves submitting an application form, providing required documentation including business registration and regulatory licenses, paying membership fees, and approval by the Board of Directors. Visit our Membership page or contact our secretariat for detailed information.",
    },
    {
      question:
        "Which membership tiers have voting rights in the General Assembly?",
      answer:
        "Full corporate members have voting rights in the General Assembly. This includes banks, insurance companies, and primary financial institutions that hold full membership status. Associate members, while enjoying most benefits of membership including networking and professional development opportunities, do not have voting rights in the General Assembly but may participate in committee work and industry initiatives.",
    },
    {
      question: "When will the new website and member portal be fully live?",
      answer:
        "The new website and member portal are currently in the final phases of development and testing. We anticipate a full launch in the coming quarter. The portal will provide members with exclusive access to industry reports, networking tools, event management, professional development resources, and real-time industry data. Members will receive detailed onboarding materials and training sessions upon launch.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 bg-gray-50" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          <h2 id="faq-heading" className="text-4xl font-bold text-[#191970] mb-3">
            FAQs
          </h2>
          <p className="text-gray-600">
            Get quick answers to common questions about our platform.
          </p>
        </header>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <article
                key={index}
                className={`rounded-lg border border-gray-200 overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "bg-indigo-50 shadow-md border-indigo-200"
                    : "bg-white hover:shadow-md"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full flex items-center justify-between p-5 text-left transition-colors ${
                    isOpen ? "text-[#191970] font-semibold" : "text-gray-800"
                  }`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-sm pr-4 flex-1">
                    {index + 1}. {faq.question}
                  </span>
                  <span className="flex-shrink-0 text-[#191970]">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="px-5 pb-5 pt-2 text-gray-700 text-sm leading-relaxed border-t border-indigo-100"
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
