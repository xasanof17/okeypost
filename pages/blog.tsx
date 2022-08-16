import * as React from "react";
import Head from "next/head";
import { Blog, RouteCards, SecondAllCard } from "../components";

const blog = () => {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <section className="blog">
      <RouteCards
          pt={`pt-[45px]`}
          pb={`pb-[60px]`}
          href={`blog`}
          name={`Блог`}
          title={`Блог`}
          text={``}
          notbtn={`hidden`}
          btntxt={`Начать зарабатывать`}
        />
        <Blog/>
        <SecondAllCard />
      </section>
    </>
  );
};

export default blog;
