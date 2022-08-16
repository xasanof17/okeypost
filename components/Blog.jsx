import { castDraft } from "immer";
import Image from "next/image";
import React from "react";
import { images } from "../constants";
import {FiClock} from 'react-icons/fi'

const blogs = [
  {
    img: images.blog1,
    title: "Интернет-магазин Urban Outfitters в UK: обзор",
    date: "22.10.2022",
    time: "8",
  },
  {
    img: images.blog2,
    title: "Overstock. Брендовые товары по доступным ценам",
    date: "22.10.2022",
    time: "8",
  },
  {
    img: images.blog3,
    title: "Skechers с Amazon. Удобная обувь для всей семьи",
    date: "22.10.2022",
    time: "8",
  },
  {
    img: images.blog4,
    title: "16 лучших подарков с Амазона в 2021 году",
    date: "22.10.2022",
    time: "8",
  },
  {
    img: images.blog5,
    title: "Target — семейный супермаркет с ценами от 300 рублей!",
    date: "22.10.2022",
    time: "8",
  },
  {
    img: images.blog6,
    title: "Английский магазин RIPNDIP. Покупаем самовыражение",
    date: "22.10.2022",
    time: "8",
  },
  {
    img: images.blog7,
    title: "Nautica. Элитные товары из Англии по низким ценам",
    date: "22.10.2022",
    time: "8",
  },
  {
    img: images.blog8,
    title: "Forever 21 - покупаем джинсы за 1 500 рублей",
    date: "22.10.2022",
    time: "8",
  },
  {
    img: images.blog9,
    title: "Как купить кроссовки Balenciaga на 30 000 рублей дешевле?",
    date: "22.10.2022",
    time: "8",
  },
  {
    img: images.blog10,
    title: "Топ-7 самых дорогих сумок Louis Vuitton",
    date: "22.10.2022",
    time: "8",
  },
  {
    img: images.blog11,
    title: "BH Cosmetics Galaxy. Галактика красоты и ухода",
    date: "22.10.2022",
    time: "8",
  },
  {
    img: images.blog12,
    title: "“Вансы”. Крутые кеды, которые не выйдут из моды никогда!",
    date: "22.10.2022",
    time: "8",
  },
];

const Blog = () => {
  return (
    <section className="mb-[100px]">
      <div className="container">
        <div className="flex flex-col">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[30px]">
            {blogs.map((blog, i) => (
              <div className="bg-white shadow-white rounded-sm" key={i}>
                <div className="flex flex-col">
                  <div className="flex items-center justify-center">
                    <Image
                      src={blog.img}
                      alt={i}
                      className="w-full h-full rounded-t-sm"
                    />
                  </div>
                  <div className="p-5 lg:p-[30px]">
                    <h4 className="font-bold text-22px leading-8 text-primary max-w-[260px] w-full mb-5">
                      {blog.title}
                    </h4>
                    <div className="flex items-center justify-between">
                        <p className="text-primary font-regular text-[13px] leading-3">{blog.date}</p>
                        <p className="flex text-primary font-regular text-[13px] leading-3"><span className="mr-2"><FiClock/></span> Читать: <span className="mx-1">{blog.time}</span> минут</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
