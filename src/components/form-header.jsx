import React, { useState } from "react";

const FormNavbar = ({ initialStep = 1 }) => {
  // Manage current step in state (can be controlled externally if needed)
  const [currentStep, setCurrentStep] = useState(initialStep);

  // Define all steps for the form
  const steps = [
    { id: "A", label: "Organisation" },
    { id: "B", label: "Contact" },
    { id: "C", label: "Governance" },
    { id: "D", label: "Declarations" },
    { id: "E", label: "Attachments" },
    { id: "F", label: "Consent" },
  ];

  return (
    <div className="w-full bg-white border-b border-gray-200 px-4 py-3 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header text */}
        <p className="text-sm text-gray-600 mb-3">
          Complete all sections to submit your membership application
        </p>

        {/* Steps container */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          {steps.map((step, index) => {
            const isCompleted = index + 1 < currentStep;
            const isCurrent = index + 1 === currentStep;

            return (
              <div
                key={step.id}
                className="relative flex flex-col items-center text-center flex-1 min-w-[60px]"
              >
                {/* Connector Line (except for first item) */}
                {index > 0 && (
                  <div
                    className={`absolute top-4 left-[-50%] w-full h-[2px] ${
                      isCompleted
                        ? "bg-[#191970]"
                        : isCurrent
                        ? "bg-[#ff6600]"
                        : "bg-gray-300"
                    }`}
                  ></div>
                )}

                {/* Step Circle */}
                <div
                  className={`relative z-10 w-8 h-8 flex items-center justify-center rounded-full border-2 text-sm font-semibold transition-all duration-300 ${
                    isCompleted
                      ? "bg-[#191970] border-[#191970] text-white"
                      : isCurrent
                      ? "bg-[#ff6600] border-[#ff6600] text-white"
                      : "border-[#bfc3d9] text-[#191970] bg-white"
                  }`}
                >
                  {step.id}
                </div>

                {/* Step Label */}
                <div className="mt-1 text-[13px] font-medium text-gray-800">
                  {step.label}
                </div>

                {/* Step Status */}
                <div
                  className={`text-xs ${
                    isCompleted
                      ? "text-green-600"
                      : isCurrent
                      ? "text-[#ff6600]"
                      : "text-gray-500"
                  }`}
                >
                  {isCompleted
                    ? "Completed"
                    : isCurrent
                    ? "Current"
                    : "Pending"}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FormNavbar;
