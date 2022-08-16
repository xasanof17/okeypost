import Image from "next/image";
import React from "react";
import { images } from "../constants";

const cards = [
  {
    img: images.price1,
    title: "Ваш личный адрес для покупок",
    txt: "на нашем современном автоматизированном складе в безналоговом Делавэре",
    btn: "Бесплатно",
  },
  {
    img: images.price2,
    title: "Объединение нескольких посылок в одну",
    txt: "ведь часто отправлять несколько посылок в одной коробке гораздо выгоднее, чем по одной",
    btn: "от £10.00",
  },
  {
    img: images.price3,
    title: "Усиленная упаковка по запросу",
    txt: "Мы дополнительно упакуем вашу посылку в пленку, коробку с двойными стенками.",
    btn: "от £0.25",
  },
  {
    img: images.price4,
    title: "Хранение входящих посылок 30 дней",
    txt: "чем больше срок хранения посылок на складе – тем больше вы сможете собрать",
    btn: "Бесплатно",
  },
];

const Price = () => {
  return (
    <section className="price">
      <div className="container">
        <div className="flex flex-col">
          <div className="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {cards.map((card, i) => (
              <div
                className="flex items-center lg:items-start justify-center flex-col"
                key={i}
              >
                <div className="flex items-center justify-center max-w-[300px] w-full mb-[20px] md:mb-[30px] lg:mb-[40px]">
                  <Image src={card.img} alt="img" className="w-full h-full" />
                </div>
                <div className="flex items-center lg:items-start flex-col mb-5">
                  <h3 className="font-bold text-primary text-md md:text-lg lg:text-[24px] leading-7 md:leading-9 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-primary font-light text-base md:text-[16px] lg:text-[18px] leading-7 md:leading-9 text-center lg:text-start">
                    {card.txt}
                  </p>
                </div>
                <div className="flex items-center justify-start">
                  <button className="bg-blue py-5 px-12 rounded-[8px] text-white font-bold text-base">
                    {card.btn}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
