import React from "react";
import { Button } from "../ui-components";
import Image from "next/image";

const FooterCard = () => {
  return (
    <section className="cards mt-[60px] sm:mt-[150px]">
      <div className="max-w-[1400px] xl:max-w-[1800px] w-full mx-auto bg-linearBlue rounded-lg">
        <div className="py-12 lg:py-14 mt-5 sm:mt-0">
          <div className="container">
            <div className="row gap-3 md:gap-0">
              <div className="col-12 col-lg-4">
                <div className="max-w-[482px] w-full">
                  <h2 className="font-bold text-white text-lg text-center md:text-start sm:text-[30px] leading-[40px] w-full">
                    Подпишитеть и будьте в курсе всех скидок и акций магазинов
                    Великобритании!
                  </h2>
                </div>
              </div>
              <div className="col-12 col-lg-8 md:mt-0 flex items-center justify-end">
                <form className="flex items-center sm:items-end flex-col gap-4 sm:flex-row justify-end w-full">
                  <div className="flex h-[50px] max-w-[510px] w-full">
                    <input
                      type="email"
                      placeholder="Введите ваш email"
                      className="max-w-[510px] w-full bg-transparent outline-none text-white placeholder:text-gray pb-4 sm:pb-6 border-b border-white"
                    />
                  </div>
                  <div className="sm:ml-[50px] flex items-center justify-center">
                    <Button
                      text={"Подписаться"}
                      y={`py-[22px]`}
                      x={`px-[60px]`}
                      size={`text-md`}
                      lineheight={`leading-[18px]`}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCard;
