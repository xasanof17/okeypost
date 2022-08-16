import Image from "next/image";
import React from "react";
import { images } from "../constants";
import { Button } from "../ui-components";

const buycards = [
  {
    id: 1,
    img: images.buy1,
    num: "01",
    title: "Получаем адрес для покупок в магазинах Великобритании",
    txt: "Okeypost поможет притвориться американцем и не переплачивать. Для этого нужно зарегистрироваться в нашем сервисе. После регистрации вам станут доступны два адреса в Англии, которые вы сможете указывать при оформлении заказов в интернет-магазинах.",
  },
  {
    id: 2,
    img: images.buy2,
    num: "02",
    title: "Идём за покупками в онлайн-магазины ",
    txt: "Выбираем нужные товары в магазинах Англии. Расплачиваемся, как обычно, в качестве адреса доставки указываем координаты одного из складов Okeypost. Оформить покупки можно самостоятельно или с нашей помощью. Вот список того, что покупать нельзя.",
  },
  {
    id: 3,
    img: images.buy3,
    num: "03",
    title: "Следим за перемещением посылки до склада",
    txt: "После оформление заказа магазин пришлет трек-номер посылки на ваш e-mail и отправит вещи на наш склад. Через 5-7 дней покупки придут к нам, мы поместим их в специальное хранилище, закрепленное за вашим аккаунтом.",
  },
  {
    id: 4,
    img: images.buy4,
    num: "04",
    title: "Оплачиваем доставку и покупки отправляются домой",
    txt: `Мы сообщим, когда ваши покупки поступят на склад. Вы сможете заказать что-то еще в других магазинах и отправить все одной посылкой (так выгоднее). До 30 дней покупки будут храниться бесплатно.
    Когда все товары поступили на склад, выбирайте способ доставки, мы надежно все упакуем и отправим вам, сообщив трек-номер.`,
  },
  {
    id: 5,
    img: images.buy5,
    num: "05",
    title: "Получаем посылку и спешим сделать новый заказ",
    txt: "Примерно через 2 недели посылка приедет к вам домой, в пункт выдачи заказов или на почту. Получаем покупки и радуемся :)",
  },
];

const Howtobuy = () => {
  return (
    <div className="mb-[40px] sm:mb-[80px] md:mb-[120px] lg:mb-[160px]">
      <div className="container">
        <div className="flex flex-col">
          <div className="flex flex-col mb-[50px]">
            <h2 className="font-extrabold text-primary text-[27px] sm:text-[34px] md:text-[44px] leading-[35px] sm:leading-[56px] mb-2">
              Покупать в Великобритании очень просто
            </h2>
            <p className="max-w-922px w-full text-[20px] leading-7 md:leading-9 font-light">
              Английские магазины не доставляют в Россию, но это не проблема. С
              OkeyPost можно покупать по лучшим ценам и экономить на доставке.
              Мы получим ваши посылки, надежно упакуем и отправим их к вам
              домой.
            </p>
          </div>
          <div className="flex flex-col">
            <div className="row justify-center">
              {buycards.map((card) => (
                <div className="col-12 my-[50px] row" key={card.id}>
                  <div className="col-12 col-lg-3 mb-5 md:mb-0">
                    <div className="flex items-center justify-center md:justify-start sm:max-w-[320px] w-full h-auto">
                      <Image
                        src={card.img}
                        alt={card.num}
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-9">
                    <div className="flex flex-col my-2">
                      <div className="flex items-center justify-start mb-2">
                        <span className="text-green font-regular text-[35px] sm:text-[50px] lg:text-[80px] leading-[56px]">
                          {card.num}
                        </span>
                        <div className="mx-[35px] w-[1px] h-[30px] sm:h-[55px] bg-gray" />
                        <h3 className="max-w-[350px] w-full text-primary font-bold text-[17px] sm:text-[20px] lg:text-[24px] leading-7 sm:leading-9">
                          {card.title}
                        </h3>
                      </div>
                      <p className="font-light text-primary text-[17px] lg:text-[18px] leading-7 lg:leading-9 text-start">
                        {card.txt}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-start">
              <Button
                text={`Получить адрес в UK`}
                y={`py-[20px]`}
                x={`px-6`}
                size={`text-md`}
                lineheight={`leading-[18px]`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Howtobuy;
