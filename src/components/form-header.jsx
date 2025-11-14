import React, { useEffect, useState } from "react";

const FormProgressBar = ({ currentStep }) => {
  const steps = [
    { id: "A", label: "Organisation" },
    { id: "B", label: "Contact" },
    { id: "C", label: "Governance" },
    { id: "D", label: "Declarations" },
    { id: "E", label: "Attachments" },
    { id: "F", label: "Consent" },
  ];

  const [completedSteps, setCompletedSteps] = useState([]);
  const [statusText, setStatusText] = useState("In Progress");
  const [statusColor, setStatusColor] = useState({
    bg: "#FFF1E6",
    text: "#FF6600",
  });

  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("completedSteps")) || [];
    setCompletedSteps(saved);

    if (saved.length === 0) {
      setStatusText("Not Started");
      setStatusColor({ bg: "#F3F4F6", text: "#6B7280" });
    } else if (saved.length === steps.length) {
      setStatusText("Completed");
      setStatusColor({ bg: "#E6FFEA", text: "#16A34A" });
    } else {
      setStatusText("In Progress");
      setStatusColor({ bg: "#FFF1E6", text: "#FF6600" });
    }
  }, [currentStep]);

  return (
    <div
      className={`w-full bg-white border-b border-gray-200 px-4 py-6 md:px-10 rounded-t-xl transition-all duration-500 ${isShrunk ? "py-2 opacity-80 scale-[0.98]" : "py-6 opacity-100 scale-100"
        }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-[15px] md:text-[16px] font-semibold text-[#0A0A3A]">
              Membership Application Status
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Complete all sections to submit your membership application
            </p>
          </div>

          <div
            className="text-xs font-medium px-4 py-1 rounded-full shadow-sm"
            style={{
              backgroundColor: statusColor.bg,
              color: statusColor.text,
            }}
          >
            {statusText}
          </div>
        </div>

        <div className="flex items-center justify-between mt-3 relative">
          {steps.map((step, index) => {
            const stepNumber = index + 1;
            const isCompleted = completedSteps.includes(stepNumber);
            const isCurrent = stepNumber === currentStep;

            return (
              <div
                key={step.id}
                className="relative flex flex-col items-center text-center flex-1"
              >
                {index > 0 && (
                  <div
                    className={`absolute top-4 left-[-50%] w-full h-[2px] z-0 ${isCompleted
                      ? "bg-[#0A0A3A]"
                      : isCurrent
                        ? "bg-[#FF6600]"
                        : "bg-[#D9D9D9]"
                      }`}
                  />

                )}

                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold border transition-all duration-300 z-10 ${isCompleted
                      ? "bg-[#0A0A3A] border-[#0A0A3A] text-white"
                      : isCurrent
                        ? "bg-[#FF6600] border-[#FF6600] text-white"
                        : "bg-white border-[#0A0A3A] text-[#0A0A3A]"
                    }`}
                >
                  {step.id}
                </div>


                <p
                  className={`mt-1 text-[12px] font-medium ${isCurrent ? "text-[#FF6600]" : "text-[#0A0A3A]"
                    }`}
                >
                  {step.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FormProgressBar;
