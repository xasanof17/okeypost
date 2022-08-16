import React, { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const HelpAccordion = ({ title, text }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="bg-white shadow-white rounded-sm my-[10px]">
      <div className="p-5 sm:p-[25px] md:p-[35px]">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-[16px] md:text-[18px] leading-4">{title}</h3>
          <button
            className="flex items-center justify-center"
            onClick={() => setShow((show) => !show)}
          >
            {show ? (
              <span>
                <BsChevronUp fontSize={27} className="text-green" />
              </span>
            ) : (
              <span>
                <BsChevronDown fontSize={27} className="text-green" />
              </span>
            )}
          </button>
        </div>
        {show && (
          <div className="flex items-center justify-start mt-2">
            <p className="font-light text-primary text-[16px]">{text}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HelpAccordion;
