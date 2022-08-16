import * as React from "react";
import Head from "next/head";
import { RouteCards, SecondAllCard, Shops } from "../components";

const shops = () => {
  return (
    <>
      <Head>
        <title>Shops</title>
      </Head>
      <section className="shops">
        <RouteCards
          pt={`pt-[45px]`}
          pb={`pb-[60px]`}
          href={`shops`}
          name={`Популярные магазины`}
          title={`Популярные магазины`}
          text={``}
          notbtn={`hidden`}
          btntxt={``}
        />
        <Shops />
        <SecondAllCard />
      </section>
    </>
  );
};

export default shops;
