import React, { useState } from "react";

const Accordion = ({ question, answer, cardBackground }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-2 m-2 px-2 bg-[url('/images/cardOrange.png')] bg-cover bg-no-repeat shadow-lg">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full"
      >
        <span className="font-host font-bold text-start text-purple-900">
          {question}
        </span>
        {/* {accordionOpen ? <span>+</span> : <span>-</span>} */}
        <svg
          className="fill-indigo-600 shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen ? "rotate-180" : ""
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen ? "rotate-180" : ""
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden text-sm mt-2 font-host text-[#4A3D8F]">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
