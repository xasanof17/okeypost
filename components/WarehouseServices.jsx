import React from "react";

const cards = [
  {
    col: "col-12 col-md-6",
    mb: "",
    title: "Консолидация",
    txt: "",
    price: "£1.00/1 трек",
  },
  {
    col: "col-12 col-md-6",
    mb: "",
    title: "Заполнение декларации",
    txt: "",
    price: "£1.00",
  },
  {
    col: "col-12 col-md-6",
    mb: "",
    title: "Дополнительная упаковка",
    txt: "",
    price: "£5.00",
  },
  {
    col: "col-12 col-md-6",
    mb: "",
    title: "Упаковка xрупкиx предметов",
    txt: "",
    price: "£10.00",
  },
  {
    col: "col-12 col-md-6",
    mb: "",
    title: "Заполнение декларации",
    txt: "",
    price: "£1.00",
  },
  {
    col: "col-12 col-md-6",
    mb: "",
    title: "Разделение заказа",
    txt: "",
    price: "£2.00",
  },
  {
    col: "col-12",
    mb: "mb-1",
    title: "Сборка исходящей посылки вне очереди или экспресс сборка",
    txt: "Чтобы сэкономить время",
    price: "£5.00",
  },
  {
    col: "col-12",
    mb: "mb-1",
    title: "Фото содержимого входящей посылки",
    txt: "3 фото за $5 или 10 фото за $8, а ещё можно попросить сфотографировать бирку или подарочный сертификат",
    price: "£1.00 за 1 фото",
  },
  {
    col: "col-12",
    mb: "mb-1",
    title: "Возврат вещей в магазин",
    txt: 'В случае, если вещи нельзя отправить в страну назначения, возврат в магазин для услуги "Виртуальный адрес"',
    price: "£10 + почтовые",
  },
  {
    col: "col-12",
    mb: "mb-1",
    title: "Проверка техники на работоспособность",
    txt: "Проверка электроники на включение/выключение (запрос через тикеты).",
    price: "£10.00",
  },
  {
    col: "col-12",
    mb: "mb-1",
    title: "Удаление инвойса",
    txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    price: "Бесплатно",
  },
  {
    col: "col-12",
    mb: "mb-1",
    title: "Дополнительная упаковка",
    txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    price: "По договоренности",
  },
];

const WarehouseServices = () => {
  return (
    <section className="mb-[160px]">
      <div className="container">
        <div className="flex flex-col">
          <div className="flex items-center justify-start mb-[40px]">
            <h2 className="font-extrabold text-primary text-[28px] sm:text-[34px] md:text-[44px] leading-3 sm:leading-[56px]">
              Услуги склада
            </h2>
          </div>
          <div className="bottom">
            <div className="row">
              {cards.map((card, i) => (
                <div className={`${card.col} mb-5`} key={i}>
                  <div className="bg-white rounded-sm shadow-white py-[32px] px-[25px] lg:px-[38px] flex items-center flex-col sm:flex-row sm:justify-between">
                    <div className="flex items-center mb-2 sm:mb-0 sm:items-start justify-center flex-col max-w-[300px] md:max-w-full w-full">
                      <h3
                        className={`text-primary text-center sm:text-start font-bold text-[16px] sm:text-[13px] md:text-[18px] leading-4 ${card.mb}`}
                      >
                        {card.title}
                      </h3>
                      <p className="text-primary text-center sm:text-start font-light text-[14px] leading-6">
                        {card.txt}
                      </p>
                    </div>
                    <div className="price sm:relative flex justify-center mt-2 sm:mt-0 sm:block sm:max-w-[130px] md:max-w-[150px] lg:max-w-[180px] w-full sm:pl-[20px] lg:pl-[30px]">
                      <div className="h-[64px] hidden sm:block bg-gray w-[1px] absolute left-0 top-[-78%]" />
                      <span className="font-bold text-sm sm:text-[14px] lg:text-sm text-primary">
                        {card.price}
                      </span>
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

export default WarehouseServices;
