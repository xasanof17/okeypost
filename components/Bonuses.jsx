import Image from "next/image";
import React from "react";
import { images } from "../constants";

const cards = [
  {
    img: images.skidka,
    title: "Дарим скидку 10% вашим друзьям и подписчикам",
    txt: "На их первую отправленную посылку. Вам есть чем мотивировать зарегистрироваться именно по вашему реферальному коду или ссылке.",
  },
  {
    img: images.cash,
    title: "Платим по £3 за отправленную посылку ",
    txt: "Когда клиент, привлеченный по вашей ссылке, отправляет посылку – на ваш счет поступает $3. Вы можете оплачивать этими деньгами ваши посылки или выводить их себе на счет.",
  },
  {
    img: images.promo,
    title: "Промо на любой вкус",
    txt: "Автоматические или персональные реферальные коды для отправки друзьям или подписчикам в мессенджеры или социальные сети, а также реферальные ссылки и баннеры для ваших сайтов.",
  },
  {
    img: images.request,
    title: "Выплаты по запросу",
    txt: "Платим по первому вашему требованию без задержек и других сложностей. Если на счету менее $50 – вы можете тратить их на оплату товаров или доставки. Если больше – выводить на свой счет.",
  },
  {
    img: images.get,
    title: "Начисляем кэшбэк £1 на 1 посылку",
    txt: "За каждую отправленную посылку , возможность оплатить после бонусного счета в 10 фунтов ",
  },
];

const Bonuses = () => {
  return (
    <section className="mb-[80px] sm:mb-[100px] md:mb-[140px] lg:mb-[180px]">
      <div className="container">
        <div className="flex flex-col">
          <div className="flex items-center justify-start mb-[40px]">
            <h2 className="font-extrabold text-primary text-[28px] md:text-[35px] lg:text-[44px] leading-6 md:leading-[56px]">
              Зарабатывать с нами — проще простого:
            </h2>
          </div>
          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-9">
              {cards.map((card, i) => (
                <div className="bg-white shadow-white rounded-sm" key={i}>
                  <div className="p-[30px] lg:p-[35px]">
                    <div className="flex flex-col">
                      <div className="flex items-center justify-center max-w-[55px] w-full h-[55px] mb-[30px]">
                        <Image
                          src={card.img}
                          alt="icon"
                          className="w-full h-full"
                        />
                      </div>
                      <h3 className="font-bold text-[18px] leading-5 mb-2">
                        {card.title}
                      </h3>
                      <p className="font-light text-[16px] leading-8 max-w-[540px] w-full lg:h-[90px]">
                        {card.txt}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bonuses;
