import Image from "next/image";
import React from "react";
import { images } from "../constants";

const Sales = () => {
  return (
    <section className="mb-[250px]">
      <div className="container">
        <div className="flex flex-col">
          <div className="flex flex-col mb-[30px] md:mb-[40px]">
            <h2 className="font-extrabold text-primary text-[27px] sm:text-[34px] md:text-[44px] leading-[35px] sm:leading-[56px] mb-2 max-w-[680px] w-full">
              Black Friday Early Access ранний доступ к распродажам в магазинах
              Великобритании!
            </h2>
          </div>
          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              {/* 1 */}
              <div className="flex items-center flex-col lg:flex-row">
                <div className="flex items-center justify-center max-w-[360px] w-full">
                  <Image
                    src={images.sell1}
                    alt="img"
                    className="w-full h-full"
                  />
                </div>
                <div className="flex items-start justify-start lg:ml-[55px] max-w-[360px] h-[328px] w-full">
                  <div className="flex flex-col">
                    <h3 className="text-primary font-bold text-[22px] leading-9 mb-1">
                      Abercrombie & Fitch
                    </h3>
                    <p className="text-primary font-light text-[16px] leading-7 max-w-[300px] w-full">
                      цены от{" "}
                      <span className="font-bold text-black">
                        {" "}
                        £7.99 (3365₽)
                      </span>{" "}
                      разделе:
                      <br />
                      мужские вещи:{" "}
                      <span className="text-green font-bold">CLEARANCE</span>
                      <br />
                      женские вещи:{" "}
                      <span className="text-green font-bold"> CLEARANCE</span>
                    </p>
                    <p className="text-primary font-light text-[16px] leading-7 max-w-[230px] w-full my-[18px]">
                      качественные детские вещи на{" "}
                      <span className="text-green font-bold">
                        Abercrombie kids
                      </span>
                    </p>
                    <a href="#!" className="text-green font-bold text-lg">
                      Только выкуп с оператором →
                    </a>
                  </div>
                </div>
              </div>
              {/* 2 */}
              <div className="flex items-center flex-col lg:flex-row">
                <div className="flex items-center justify-center max-w-[360px] w-full">
                  <Image
                    src={images.sell2}
                    alt="img"
                    className="w-full h-full"
                  />
                </div>
                <div className="flex items-start justify-start lg:ml-[55px] max-w-[360px] h-[328px] w-full">
                  <div className="flex flex-col">
                    <h3 className="text-primary font-bold text-[22px] leading-9 mb-1">
                      Timberland
                    </h3>
                    <p className="text-primary font-light text-[16px] leading-7 max-w-[230px] w-full">
                      <span className="text-black font-bold"> NEW!</span> <br />
                      Коллаб{" "}
                      <span className="text-green font-bold">
                        Tommy Hilfiger x Timberland!{" "}
                      </span>
                    </p>
                    <p className="text-primary font-light text-[16px] leading-7 max-w-[230px] w-full my-[18px]">
                      Ботинки от{" "}
                      <span className="text-black font-bold">
                        {" "}
                        £7.99 (3365₽)
                      </span>{" "}
                      <br />
                      Зимние шапки за{" "}
                      <span className="text-black font-bold">
                        {" "}
                        £7.99 (3365₽)
                      </span>{" "}
                      <br />
                    </p>
                    <a href="#!" className="text-green font-bold text-lg">
                      Только выкуп с оператором →
                    </a>
                  </div>
                </div>
              </div>
              {/* 3 */}
              <div className="flex items-center flex-col lg:flex-row">
                <div className="flex items-center justify-center max-w-[360px] w-full">
                  <Image
                    src={images.sell3}
                    alt="img"
                    className="w-full h-full"
                  />
                </div>
                <div className="flex items-start justify-start lg:ml-[55px] max-w-[360px] h-[328px] w-full">
                  <div className="flex flex-col">
                    <h3 className="text-primary font-bold text-[22px] leading-9 mb-1">
                      Polo Ralph Lauren
                    </h3>
                    <p className="text-primary font-light text-[16px] leading-7 max-w-[250px] w-full ">
                      <span className="text-green font-bold">Рубашка</span> за{" "}
                      <span className="text-black font-bold">
                        {" "}
                        £7.99 (3365₽)
                      </span>{" "}
                      <br />
                      <span className="text-green font-bold">Худи</span> за{" "}
                      <span className="text-black font-bold">
                        {" "}
                        £7.99 (3365₽)
                      </span>{" "}
                      <br />{" "}
                      <span className="text-green font-bold">
                        Свитшот с лого
                      </span>{" "}
                      за{" "}
                      <span className="text-black font-bold">
                        {" "}
                        £7.99 (3365₽)
                      </span>{" "}
                      <br />
                    </p>
                    <p className="text-primary font-light text-[16px] leading-7 my-[18px]">
                      До - <span className="text-black font-bold">40%</span> в
                      разделе SALE
                    </p>
                    <a href="#!" className="text-green font-bold text-lg">
                      Только выкуп с оператором →
                    </a>
                  </div>
                </div>
              </div>
              {/* 4 */}
              <div className="flex items-center flex-col lg:flex-row">
                <div className="flex items-center justify-center max-w-[360px] w-full">
                  <Image
                    src={images.sell4}
                    alt="img"
                    className="w-full h-full"
                  />
                </div>
                <div className="flex items-start justify-start lg:ml-[55px] max-w-[360px] h-[328px] w-full">
                  <div className="flex flex-col">
                    <h3 className="text-primary font-bold text-[22px] leading-9 mb-1">
                      Hollister Co.
                    </h3>
                    <p className="text-primary font-light text-[16px] leading-7 max-w-[300px] w-full">
                      цены от{" "}
                      <span className="font-bold text-black">
                        {" "}
                        £7.99 (3365₽)
                      </span>{" "}
                      разделе:
                      <br />
                      мужские вещи:{" "}
                      <span className="text-green font-bold">CLEARANCE</span>
                      <br />
                      женские вещи:{" "}
                      <span className="text-green font-bold"> CLEARANCE</span>
                    </p>
                    <a
                      href="#!"
                      className="text-green font-bold text-lg mt-[55px]"
                    >
                      Только выкуп с оператором →
                    </a>
                  </div>
                </div>
              </div>
              {/* 5 */}
              <div className="flex items-center flex-col lg:flex-row">
                <div className="flex items-center justify-center max-w-[360px] w-full">
                  <Image
                    src={images.sell5}
                    alt="img"
                    className="w-full h-full"
                  />
                </div>
                <div className="flex items-start justify-start lg:ml-[55px] max-w-[360px] h-[328px] w-full">
                  <div className="flex flex-col">
                    <h3 className="text-primary font-bold text-[22px] leading-9 mb-1">
                      Michael Kors
                    </h3>
                    <p className="text-primary font-bold text-[16px] leading-7">
                      Новая коллекция! <br /> Michael Kors x 007 (James Bond)
                    </p>
                    <p className="text-primary font-bold text-[16px] leading-7 my-[18px]">
                      HOLIDAY HEAD START
                      <br />- 60%{" "}
                      <span className="text-primary font-light text-[16px] leading-7">
                        на сумки, обувь и одежду
                      </span>
                    </p>
                    <a
                      href="#!"
                      className="text-green font-bold text-lg mt-[55px]"
                    >
                      В магазин →
                    </a>
                  </div>
                </div>
              </div>
              {/* 6 */}
              <div className="flex items-center flex-col lg:flex-row">
                <div className="flex items-center justify-center max-w-[360px] w-full">
                  <Image
                    src={images.sell6}
                    alt="img"
                    className="w-full h-full"
                  />
                </div>
                <div className="flex items-start justify-start lg:ml-[55px] max-w-[360px] h-[328px] w-full">
                  <div className="flex flex-col">
                    <h3 className="text-primary font-bold text-[22px] leading-9 mb-1">
                      Аутлет Saks OFF 5TH
                    </h3>
                    <p className="text-primary font-light text-[16px] leading-7 max-w-[250px] w-full">
                      <span className="font-bold text-black">
                        {" "}
                        Black Friday Early Access
                      </span>{" "}
                      <br />
                      Брендовые шапки, шарфы и перчатки -{" "}
                      <span className="font-bold text-black"> 60% OFF</span>
                    </p>
                    <p className="text-primary font-light text-[16px] leading-7 max-w-[300px] w-full my-[18px]">
                      Shop Pajar, Sorel, UGG, Calvin Klein Jeans, Tommy Hilfiger
                    </p>
                    <a
                      href="#!"
                      className="text-green font-bold text-lg mt-[55px]"
                    >
                      Только выкуп с оператором →
                    </a>
                  </div>
                </div>
              </div>
              {/* 7 */}
              <div className="flex items-center flex-col lg:flex-row">
                <div className="flex items-center justify-center max-w-[360px] w-full">
                  <Image
                    src={images.sell7}
                    alt="img"
                    className="w-full h-full"
                  />
                </div>
                <div className="flex items-start justify-start lg:ml-[55px] max-w-[360px] h-[328px] w-full">
                  <div className="flex flex-col">
                    <h3 className="text-primary font-bold text-[22px] leading-9 mb-1">
                      Victoria's Secret
                    </h3>
                    <p className="text-primary font-light text-[16px] leading-7 max-w-[230px] w-full my-[18px]">
                      <span className="text-black font-bold">
                        {" "}
                        Лосьоны и мисты
                      </span>{" "}
                      за{" "}
                      <span className="text-black font-bold">
                        {" "}
                        £7.99 (3365₽)
                      </span>{" "}
                      <br />
                      <span className="text-black font-bold">
                        7 трусиков
                      </span>{" "}
                      за{" "}
                      <span className="text-black font-bold">
                        {" "}
                        £7.99 (3365₽)
                      </span>{" "}
                      <br />
                      <span className="text-black font-bold">Халаты</span> за
                      <span className="text-black font-bold">
                        {" "}
                        £7.99 (3365₽)
                      </span>{" "}
                      <br />
                    </p>
                    <a
                      href="https://www.victoriassecret.com/us/"
                      target={`_blank`}
                      className="text-green font-bold text-lg"
                    >
                      Только выкуп с оператором →
                    </a>
                  </div>
                </div>
              </div>
              {/* 8 */}
              <div className="flex items-center flex-col lg:flex-row">
                <div className="flex items-center justify-center max-w-[360px] w-full">
                  <Image
                    src={images.sell8}
                    alt="img"
                    className="w-full h-full"
                  />
                </div>
                <div className="flex items-start justify-start lg:ml-[55px] max-w-[360px] h-[328px] w-full">
                  <div className="flex flex-col">
                    <h3 className="text-primary font-bold text-[22px] leading-9 mb-1">
                      Hollister Co.
                    </h3>
                    <p className="text-primary font-light text-[16px] leading-7 max-w-[300px] w-full">
                      цены от{" "}
                      <span className="font-bold text-black">
                        {" "}
                        £7.99 (3365₽)
                      </span>{" "}
                      разделе:
                      <br />
                      мужские вещи:{" "}
                      <span className="text-green font-bold">CLEARANCE</span>
                      <br />
                      женские вещи:{" "}
                      <span className="text-green font-bold"> CLEARANCE</span>
                    </p>
                    <a
                      href="#!"
                      className="text-green font-bold text-lg mt-[55px]"
                    >
                      Только выкуп с оператором →
                    </a>
                  </div>
                </div>
              </div>
              {/* 9 */}
              <div className="flex items-center flex-col lg:flex-row">
                <div className="flex items-center justify-center max-w-[360px] w-full">
                  <Image
                    src={images.sell9}
                    alt="img"
                    className="w-full h-full"
                  />
                </div>
                <div className="flex items-start justify-start lg:ml-[55px] max-w-[360px] h-[328px] w-full">
                  <div className="flex flex-col">
                    <h3 className="text-primary font-bold text-[22px] leading-9 mb-1">
                      Polo Ralph Lauren
                    </h3>
                    <p className="text-primary font-light text-[16px] leading-7 max-w-[250px] w-full ">
                      <span className="text-green font-bold">Рубашка</span> за{" "}
                      <span className="text-black font-bold">
                        {" "}
                        £7.99 (3365₽)
                      </span>{" "}
                      <br />
                      <span className="text-green font-bold">Худи</span> за{" "}
                      <span className="text-black font-bold">
                        {" "}
                        £7.99 (3365₽)
                      </span>{" "}
                      <br />{" "}
                      <span className="text-green font-bold">
                        Свитшот с лого
                      </span>{" "}
                      за{" "}
                      <span className="text-black font-bold">
                        {" "}
                        £7.99 (3365₽)
                      </span>{" "}
                      <br />
                    </p>
                    <p className="text-primary font-light text-[16px] leading-7 my-[18px]">
                      До - <span className="text-black font-bold">40%</span> в
                      разделе SALE
                    </p>
                    <a href="#!" className="text-green font-bold text-lg">
                      Только выкуп с оператором →
                    </a>
                  </div>
                </div>
              </div>
              {/* 10 */}
              <div className="flex items-center flex-col lg:flex-row">
                <div className="flex items-center justify-center max-w-[360px] w-full">
                  <Image
                    src={images.sell10}
                    alt="img"
                    className="w-full h-full"
                  />
                </div>
                <div className="flex items-start justify-start lg:ml-[55px] max-w-[360px] h-[328px] w-full">
                  <div className="flex flex-col">
                    <h3 className="text-primary font-bold text-[22px] leading-9 mb-1">
                      Abercrombie & Fitch
                    </h3>
                    <p className="text-primary font-light text-[16px] leading-7 max-w-[300px] w-full">
                      цены от{" "}
                      <span className="font-bold text-black">
                        {" "}
                        £7.99 (3365₽)
                      </span>{" "}
                      разделе:
                      <br />
                      мужские вещи:{" "}
                      <span className="text-green font-bold">CLEARANCE</span>
                      <br />
                      женские вещи:{" "}
                      <span className="text-green font-bold"> CLEARANCE</span>
                    </p>
                    <p className="text-primary font-light text-[16px] leading-7 max-w-[230px] w-full my-[18px]">
                      качественные детские вещи на{" "}
                      <span className="text-green font-bold">
                        Abercrombie kids
                      </span>
                    </p>
                    <a href="#!" className="text-green font-bold text-lg">
                      Только выкуп с оператором →
                    </a>
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

export default Sales;
