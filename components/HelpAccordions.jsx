import React from "react";
import HelpAccordion from "./HelpAccordion";

const HelpAccordions = ({ title, accordions }) => {
  return (
    <section className="my-[50px]">
      <div className="container">
        <div className="flex flex-col">
          <div className="flex items-center justify-start mb-4 sm:mb-8">
            <h2 className="text-primary font-extrabold text-[27px] sm:text-[30px] md:text-[35px] lg:text-[44px] leading-6 sm:leading-8 lg:leading-[56px]">
              {title}
            </h2>
          </div>
          <div className="accordions">{accordions.map((card, i) => (
            <HelpAccordion title={card.title} text={card.text} key={i}/>
          ))}</div>
        </div>
      </div>
    </section>
  );
};

export default HelpAccordions;
