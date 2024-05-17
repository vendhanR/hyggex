import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const Faq = ({ question, answer,lastAccordion }) => {
  const [showAccordion, setShowAccordion] = useState(false);

  return (
    <div className={`max-w-[53rem] border border-[#217EEC] rounded-xl mt-[2rem] px-6 mb-6 ${lastAccordion && 'mb-[19.188rem]'}`}
    onClick={() => setShowAccordion(!showAccordion)}
    >
      <div
        className="flex pt-[1.438rem] items-center justify-between"
        
      >
        <h3 className="font-semibold text-[#28262C]">{question}</h3>
        {!showAccordion ? <BsChevronDown className=" duration-300 " /> :<BsChevronDown className="[transform:rotateX(180deg)] duration-300" />  }
      </div>
      <div className={`grid overflow-hidden transition-all duration-300 ease-linear 
        ${showAccordion
        ? "grid-rows-[1fr] opacity-100  mt-[1.438rem]"
        : "grid-rows-[0fr] opacity-0"}      
      `}>
        <p
          className={`overflow-hidden pb-[1.438rem] font-semibold text-[#3A3740]`}
        >
          {answer}
        </p>
      </div>
    </div>
  );
};

export default Faq;
