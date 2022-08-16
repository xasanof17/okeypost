import React from "react";
import Image from "next/image";
import {Button} from "../ui-components";

const AllCard = ({img, title, txt, btn}) => {
  return (
    <section className="max-w-[1400px] xl:max-w-[1800px] w-full mx-auto bg-linearBlue rounded-lg">
      <div className="py-12 lg:py-14 mt-5 sm:mt-0">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4">
              <div className="flex items-center justify-center md:justify-start mb-3 sm:my-auto">
                <div className="flex items-center justify-center w-full h-full sm:w-[410px] sm:h-[410px]">
                  <Image
                    src={img}
                    alt="illustration"
                    width={400}
                    height={400}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-8 flex items-center justify-start">
              <div className="flex items-start flex-col my-0 xs:my-2 lg:my-0">
                <div className="flex items-center lg:items-start justify-center flex-col">
                  <h2 className="font-bold text-center lg:text-start text-white text-lg sm:text-2xl lg:text-3xl mb-3 max-w-[763px] w-full">
                    {title}
                  </h2>
                  <p className="font-regular text-center text-white text-md lg:text-lg mb-8">
                    {txt}
                  </p>
                  <div className=" flex items-center justify-center xs:block">
                    <Button
                      text={btn}
                      y={`py-[15px]`} x={`px-6`} size={`text-md`} lineheight={`leading-[18px]`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllCard;
