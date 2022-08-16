import * as React from "react";
import Head from "next/head";
import { RouteCards, Sales, SecondAllCard } from "../components";

const sales = () => {
  return (
    <>
      <Head>
        <title>Sales</title>
      </Head>
      <section className="sales">
        <RouteCards
          pt={`pt-[45px]`}
          pb={`pb-[90px]`}
          href={`sales`}
          name={`Распродажи`}
          title={`Распродажи`}
          text={`ранний доступ к распродажам в магазинах`}
          notbtn={`flex`}
          btntxt={`Получить адрес в UK`}
        />
        <Sales />
        <SecondAllCard />
      </section>
    </>
  );
};

export default sales;
