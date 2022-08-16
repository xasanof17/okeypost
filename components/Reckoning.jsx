import React from "react";
import { images } from "../constants";
import { BsChevronDown } from "react-icons/bs";
import Image from "next/image";

const cities = [
  {
    id: 1,
    title: "Страна:",
    img: images.clock,
    cities: [
      { id: 1, name: "Россия" },
      { id: 2, name: "UK" },
    ],
  },
];

const uslugi = [
  {
    id: 1,
    title: "Дополнительные услуги:",
    img: images.file,
    files: [
      { id: 1, name: "Выберите услуги" },
      { id: 2, name: "UK" },
    ],
  },
];

const inputs = [
  { id: 1, title: 'Город:', for: 'cityname',name: 'cityname',img: images.city, type: 'text', placeholder: 'Москва'},
  { id: 2, title: 'Индекс:', for: 'index',name: 'index',img: images.notebook, type: 'number', placeholder: 'Введите индекс'},
  { id: 3, title: 'Вес посылки:', for: 'index',name: 'index',img: images.gym, type: 'number', placeholder: '0,5'},
];


const Reckoning = ({ mt, mb, title, text }) => {
  return (
    <section className={`reckoning ${mt} ${mb}`}>
      <div className="container">
        <div className="flex flex-col">
          <div className="flex flex-col mb-12">
            <h2 className="text-primary font-extrabold text-[27px] sm:text-[30px] md:text-[40px] lg:text-[44px] leading-[40px] sm:leading-[56px] max-w-[829px] w-full mb-4">
              {title}
            </h2>
            <p className="text-primary text-md md:text-lg leading-[36px] font-light max-w-[766px] w-full">
              {text}
            </p>
          </div>
          <div className="w-full">
            <div className="bg-white shadow-gray rounded-sm py-[30px] lg:py-[50px] px-[20px] sm:px-[10px] lg:px-[35px]">
              <form action="" className="form">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 sm:gap-6 md:gap-x-6">
                  <div className="flex flex-col">
                    {cities.map((cities) => (
                      <div
                        className="flex flex-col relative pb-[25px] border-b border-secondary"
                        key={cities.id}
                      >
                        <label
                          htmlFor="cities"
                          className="text-[14px] text-secondary font-bold mb-3"
                        >
                          {cities.title}
                        </label>
                        <div className="flex items-center justify-start w-[30px] h-[30px] absolute left-0 bottom-[27%]">
                          <Image
                            src={images.globus}
                            alt="icon"
                            className="w-full h-full"
                          />
                        </div>
                        <select
                          name="cities"
                          id="cities"
                          className="focus:outline-none pl-[35px] appearance-none"
                        >
                          {cities.cities.map((cities) => (
                            <option value={0} key={cities.id}>
                              {cities.name}
                            </option>
                          ))}
                        </select>
                        <BsChevronDown className="absolute right-0 bottom-[35%] pointer-events-none" />
                      </div>
                    ))}
                  </div>
                  {inputs.map((input) => (
                    <div className="flex flex-col relative" key={input.id}>
                      <label htmlFor={input.for}>{input.title}</label>
                      <div className="flex items-center justify-center absolute bottom-[29%] left-[5px]">
                        <Image src={input.img} className="w-full h-full" />
                      </div>
                      <input type={input.type} className="p-[17px] pl-[40px]  outline-green appearance-none outline-none border-b border-secondary" name={input.name} autoComplete="off" placeholder={input.placeholder} />
                    </div>
                  ))}
                    <div className="flex flex-col">
                    {uslugi.map((files) => (
                      <div
                        className="flex flex-col relative pb-[25px] border-b border-secondary"
                        key={files.id}
                      >
                        <label
                          htmlFor="cities"
                          className="text-[14px] text-secondary font-bold mb-3"
                        >
                          {files.title}
                        </label>
                        <div className="flex items-center justify-start w-[30px] h-[30px] absolute left-0 bottom-[27%]">
                          <Image
                            src={files.img}
                            alt="icon"
                            className="w-full h-full"
                          />
                        </div>
                        <select
                          name="cities"
                          id="cities"
                          className="focus:outline-none pl-[35px] appearance-none"
                        >
                          {files.files.map((files) => (
                            <option value={0} key={files.id}>
                              {files.name}
                            </option>
                          ))}
                        </select>
                        <BsChevronDown className="absolute right-0 bottom-[35%] pointer-events-none" />
                      </div>
                    ))}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reckoning;
