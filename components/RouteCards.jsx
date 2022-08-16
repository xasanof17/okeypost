import React from "react";
import Link from "next/link";
import { Button } from "../ui-components";

const RouteCards = ({ pt, pb, href, name, title, text, notbtn, btntxt }) => {
  return (
    <div className="max-w-[1400px] xl:max-w-[1800px] w-full mx-auto bg-linearBlue rounded-lg mb-[30px] sm:mb-[50px] md:mb-[70px] lg:mb-[105px]">
      <div className="container">
        <div className={`${pt} ${pb} mt-5 sm:mt-0`}>
          <div className="flex flex-col">
            <nav className="flex">
              <ul className="flex text-white font-light text-base">
                <li>
                  <Link href="/">
                    <a className="mr-1">Главная</a>
                  </Link>
                </li>
                <span>/</span>
                <li>
                  <Link href={href}>
                    <a className="mx-1">{name}</a>
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="flex flex-col mt-5">
              <h1 className="font-extrabold text-white text-[20px] sm:text-[35px]">{title}</h1>
              <p className="font-bold text-white text-[16px] sm:text-[22px] leading-5 sm:leading-8 mt-2">
                {text}
              </p>
            </div>
            <div className={`${notbtn} items-center justify-start mt-[30px] sm:mt-[40px]`}>
              <Button
                text={btntxt}
                y={`py-[18px]`}
                x={`px-8`}
                size={`text-md`}
                lineheight={`leading-[18px]`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteCards;
