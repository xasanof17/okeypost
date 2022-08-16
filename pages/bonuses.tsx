import * as React from "react";
import Head from "next/head";
import { AllCard, Bonuses, RouteCards } from "../components";
import { images } from "../constants";

const bonuses = () => {
  return (
    <>
      <Head>
        <title>Bonuses</title>
      </Head>
      <section className="bonuses-component">
        <RouteCards
          pt={`pt-[45px]`}
          pb={`pb-[60px]`}
          href={`bonuses`}
          name={`Бонусы и партнёрская программа`}
          title={`Бонусы и партнёрская программа`}
          text={`Платим $3 с каждой отправленной посылки`}
          notbtn={`flex`}
          btntxt={`Начать зарабатывать`}
        />
        <Bonuses />
        <AllCard
          img={images.help}
          title={`Готовы начать зарабатывать вместе с нами?`}
          txt={`Присоединяйтесь к партнерской программе Okeypost.com уже сегодня!`}
          btn={`Присоедениться`}
        />
      </section>
    </>
  );
};

export default bonuses;
