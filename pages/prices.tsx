import * as React from "react";
import Head from "next/head";
import { RouteCards, Price, Reckoning, VariantDelivery, WarehouseServices, SecondAllCard } from "../components";

const prices = () => {
  return (
    <>
      <Head>
        <title>Prices</title>
      </Head>
      <section className="prices">
        <RouteCards
          pt={`pt-[45px]`}
          pb={`pb-[60px]`}
          href={`prices`}
          name={`Цены`}
          title={`Услуги доставки из Великобритании`}
          text={``}
          notbtn={`hidden`}
          btntxt={``}
        />
        <Price />
        <Reckoning
          mt={`mt-[160px]`}
          mb={`mb-[160px]`}
          title={"Онлайн-калькулятор стоимости доставки товара"}
          text={
            "Задайте необходимые параметры посылки, и калькулятор рассчитает приблизительную стоимость доставки вашей посылки из Англии."
          }
        />
        <VariantDelivery />
        <WarehouseServices/>
        <SecondAllCard />
      </section>
    </>
  );
};

export default prices;
