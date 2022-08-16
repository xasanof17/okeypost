import Image from "next/image";
import React from "react";
import { images } from "../constants";

const cards = [
  { img: images.logo1, title: "Primark (Форма заказа)" },
  { img: images.logo2, title: "H&M" },
  { img: images.logo3, title: "Mangooutlet" },
  { img: images.logo4, title: "Next" },
  { img: images.logo5, title: "Sportdirect" },
  { img: images.logo6, title: "Clothing at Tesco" },
  { img: images.logo7, title: "George at ASDA" },
  { img: images.logo8, title: "Accessorize" },
  { img: images.logo9, title: "Adidas UK" },
  { img: images.logo10, title: "Amazon" },
  { img: images.logo11, title: "ASOS" },
  { img: images.logo12, title: "Boohoo" },
  { img: images.logo13, title: "Crocs" },
  { img: images.logo14, title: "Ebay" },
  { img: images.logo15, title: "Matalan" },
  { img: images.logo16, title: "Matalan" },
  { img: images.logo17, title: "New Look" },
  { img: images.logo18, title: "Puma" },
  { img: images.logo19, title: "Timberland" },
  { img: images.logo20, title: "Showroomprive" },
  { img: images.logo21, title: "Brand Alley" },
  { img: images.logo22, title: "M&S" },
  { img: images.logo23, title: "Clarks" },
  { img: images.logo24, title: "Zara" },
  { img: images.logo25, title: "Mango" },
  { img: images.logo26, title: "Zulily" },
  { img: images.logo27, title: "Panachekids" },
  { img: images.logo28, title: "Betterware" },
  { img: images.logo29, title: "Tucci Store" },
  { img: images.logo30, title: "Mini Mode" },
];
let num = 1;

const Shops = () => {
  return (
    <section className="mb-[100px]">
      <div className="container">
        <div className="flex flex-col">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {cards.map((card, i) => (
              <div
                className="bg-white shadow-white rounded-sm cursor-pointer"
                key={i}
              >
                <div className="p-5 sm:p-[30px]">
                  <div className="flex flex-col">
                    <div className="flex items-center justify-start h-[80px] mb-3 sm:mb-5">
                      <Image
                        src={card.img}
                        className="w-full h-full"
                        alt={card.img}
                      />
                    </div>
                    <h4 className="font-bold text-primary text-[14px] sm:text-[16px] text-center sm:text-start sm:leading-8">
                      {card.title}
                    </h4>
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

export default Shops;
