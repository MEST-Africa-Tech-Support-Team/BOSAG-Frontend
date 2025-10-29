import React from "react";
import { Check } from "lucide-react";

const steps = [
  { id: 1, label: "Organization", key: "organization" },
  { id: 2, label: "Contact", key: "contact" },
  { id: 3, label: "Governance", key: "governance" },
  { id: 4, label: "Declarations", key: "declarations" },
  { id: 5, label: "Attachments", key: "attachments" },
  { id: 6, label: "Signature", key: "signature" },
];

const FormProgressBar = ({ currentStep = 1, completedSteps = [] }) => {
  const isStepCompleted = (stepId) =>
    Array.isArray(completedSteps) && completedSteps.includes(stepId);

  const isStepCurrent = (stepId) => stepId === currentStep;
  const isStepActive = (stepId) => isStepCompleted(stepId) || isStepCurrent(stepId);

  return (
    <section className="w-full bg-white py-4 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
      <div className="max-w-6xl mx-auto">

        <header className="text-center mb-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#191970]">
            BOSAG Member Onboarding Form
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            Complete all sections to submit your membership application
          </p>
        </header>

        {/* Progress Steps */}
        <nav aria-label="Form progress">
          <ol className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4">
            {steps.map((step, index) => {
              const completed = isStepCompleted(step.id);
              const current = isStepCurrent(step.id);
              const active = isStepActive(step.id);
              const isLast = index === steps.length - 1;

              return (
                <li
                  key={step.key}
                  className="flex items-center"
                  style={{ flex: isLast ? "0 0 auto" : "1 1 0%" }}
                >

                  <div className="flex items-center gap-2">
                    <div
                      className={`flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 text-xs sm:text-sm font-semibold transition-all duration-300
                        ${
                          completed
                            ? "bg-blue-700 border-blue-700 text-white"
                            : active
                            ? "bg-blue-700 border-blue-700 text-white"
                            : "bg-gray-300 border-gray-300 text-white"
                        }`}
                      aria-current={current ? "step" : undefined}
                    >
                      {completed ? (
                        <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                      ) : (
                        <span>{String.fromCharCode(64 + step.id)}</span>
                      )}
                    </div>

                    <span
                      className={`text-xs sm:text-sm md:text-base font-medium whitespace-nowrap ${
                        active ? "text-blue-700" : "text-gray-400"
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>


                  {!isLast && (
                    <div
                      className={`h-0.5 flex-1 mx-2 sm:mx-4 md:mx-6 transition-colors duration-300 ${
                        completed ? "bg-blue-700" : "bg-gray-300"
                      }`}
                      aria-hidden="true"
                    />
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </section>
  );
};

export default FormProgressBar;
