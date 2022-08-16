import * as React from "react";
import Head from "next/head";
import { RouteCards, Howtobuy, SecondAllCard } from "../components";

const howtobuy = () => {
  return (
    <>
      <Head>
        <title>How to Buy</title>
      </Head>
      <section className="how to buy">
        <RouteCards
          pt={`pt-[45px]`}
          pb={`pb-[90px]`}
          href={`howtobuy`}
          name={`Как покупать`}
          title={`Научим покупать вВеликобритании!`}
          text={`и экономить до 70%`}
          notbtn={`flex`}
          btntxt={`Получить адрес в UK`}
        />
        <Howtobuy />
        <SecondAllCard />
      </section>
    </>
  );
};

export default howtobuy;
