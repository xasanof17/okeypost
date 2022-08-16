import type { NextPage } from "next";
import Head from "next/head";
import { images } from "../constants";
import {
  AllCard,
  HeaderCard,
  Sell,
  SellCards,
  Dresses,
  Reckoning,
  VariantDelivery,
  Purchases,
  SatisfiedCustomers,
  Reviews,
  TextBlock,
  FooterCard,
} from "../components";

const Home: NextPage = () => {
  return (
    <div className="home">
      <Head>
        <title>OkeyPost</title>
      </Head>
      <HeaderCard />
      <Sell />
      <Dresses />
      <SellCards />
      <AllCard
        img={images.illustration2}
        title={`Поручите нашим мастерам шопинга оформить заказы в английских магазинах и освободите время для более важных дел.`}
        txt={`Такой способ покупки также подойдёт, если магазин принимает только английские карты.`}
        btn={`Попробовать`}
      />
      <Reckoning
        mt={`mt-[160px]`}
        mb={`mb-[80px]`}
        title={"OkeyPost удобная и быстрая доставка посылок из Великобритании "}
        text={
          "Рассчитайте стоимость доставки из Англии к вам домой. Мы получим ваши посылки на складе, при необходимости объединим несколько доставок в одну и отправим их к вам надежно упакованными."
        }
      />
      <VariantDelivery />
      <Purchases />
      <AllCard
        img={images.illustration3}
        title={`Виртуальный тур по нашему складу в реальном времени`}
        txt={`Вы можете всегда посмотреть на нашу слаженую работу на складе`}
        btn={`Попробовать`}
      />
      <SatisfiedCustomers />
      <Reviews />
      <TextBlock />
      <FooterCard />
    </div>
  );
};

export default Home;
