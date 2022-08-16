import React, { useState } from "react";
import Image from "next/image";
import { BsChevronDown, BsChevronUp, BsInfoCircleFill } from "react-icons/bs";

const DeliveryCard = ({ img, title, deadlines, costdelivery, total }) => {
  const [show, setShow] = useState(false);
  const Show = () => {
    setShow((show) => !show);
  };

  return (
    <div className="mb-5">
      <div className="p-5 pr-3 sm:pr-5 lg:p-[25px] bg-white rounded-sm shadow-white">
        <div className="flex items-center justify-between md:justify-center">
          <div className="max-w-full sm:max-w-[90%] md:max-w-[45%] lg:max-w-[48%] w-full">
            <div className="flex items-center justify-start">
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center mr-3 sm:mr-5 md:mr-3 lg:mr-6 max-w-[50px] w-full">
                  <Image src={img} alt={title} className="w-full h-full" />
                </div>
                <h3 className="text-primary font-bold text-[13px] xs:text-[15px] sm:text-[18px] leading-6 uppercase">
                  {title}
                </h3>
              </div>
            </div>
          </div>
          <div className="max-w-[10%] xs:max-w-[10%] sm:max-w-[20%] md:max-w-[55%] lg:max-w-[52%] w-full">
            <div className="flex items-center justify-center sm:justify-end md:justify-center">
              <div className="max-w-[31%] w-full hidden md:flex items-center justify-center border-l border-gray">
                <div className="flex items-start justify-center flex-col">
                  <span className="text-[14px] leading-5 text-secondary mb-[6px]">
                    Сроки:
                  </span>
                  <p className="font-bold text-md lg:text-lg leading-4">
                    {deadlines}
                  </p>
                </div>
              </div>
              <div className="max-w-[31%] w-full hidden md:flex items-center justify-center border-l border-gray">
                <div className="flex items-start justify-center flex-col">
                  <span className="text-[14px] leading-5 text-secondary mb-[6px]">
                    Стоимость доставки:
                  </span>
                  <div className="flex items-center justify-center">
                    <p className="font-bold text-md lg:text-lg leading-4">
                      {costdelivery}
                    </p>
                    <button className="ml-2">
                      <BsInfoCircleFill color={"#C0C9D7"} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="max-w-[31%] w-full hidden md:flex items-center justify-center border-l border-gray">
                <div className="flex items-start justify-center flex-col">
                  <span className="text-[14px] leading-5 text-secondary mb-[6px]">
                    Итого:
                  </span>
                  <p className="font-bold text-md lg:text-lg leading-4">
                    {total}
                  </p>
                </div>
              </div>
              <div className="max-w-[20%] h-[30px] md:h-full md:max-w-[7%] w-full flex items-center justify-center md:border-l border-gray">
                <button
                  onClick={Show}
                  className="w-[30px] h-[30px] sm:w-full sm:h-full flex items-center justify-center text-[20px] rounded-full"
                >
                  {show ? (
                    <BsChevronUp className="text-green" />
                  ) : (
                    <BsChevronDown className="text-green" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        {show && (
          <div className="flex flex-col sm:flex-row items-center justify-center mt-5 md:mt-0">
            <div className="w-full md:hidden flex items-center justify-center py-2 sm:py-0 border-b border-gray sm:border-none">
              <div className="flex items-center sm:items-start justify-center flex-col">
                <span className="text-[14px] leading-5 text-secondary mb-[6px]">
                  Сроки:
                </span>
                <p className="font-bold text-md lg:text-lg leading-4">
                  {deadlines}
                </p>
              </div>
            </div>
            <div className="w-full md:hidden flex items-center justify-center py-2 sm:py-0 border-b sm:border-l border-gray">
              <div className="flex items-center sm:items-start justify-center flex-col">
                <span className="text-[14px] leading-5 text-secondary mb-[6px]">
                  Стоимость доставки:
                </span>
                <div className="flex items-center justify-center">
                  <p className="font-bold text-md lg:text-lg leading-4">
                    {costdelivery}
                  </p>
                  <button className="ml-2">
                    <BsInfoCircleFill color={"#C0C9D7"} />
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full md:hidden flex items-center justify-center py-2 sm:py-0 border-b sm:border-l border-gray">
              <div className="flex items-center sm:items-start justify-center flex-col">
                <span className="text-[14px] leading-5 text-secondary mb-[6px]">
                  Итого:
                </span>
                <p className="font-bold text-md lg:text-lg leading-4">
                  {total}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeliveryCard;
