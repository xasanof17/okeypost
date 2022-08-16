import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { images } from "../constants";
import { navlinks } from "../data";
import { AiOutlineUser, AiOutlineMenu } from "react-icons/ai";
import { VscClose } from "react-icons/vsc";
import { Button } from "../ui-components";

const Navbar = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive((active) => !active);
        if (active == false) {
            let images = document.querySelectorAll("span img");
            for (let i = 0; i < images.length; i++) {
                const img = images[i];
                img.classList.add("remove");
            }
        } else {
            let images = document.querySelectorAll("span img");
            for (let i = 0; i < images.length; i++) {
                const img = images[i];
                img.classList.remove("remove");
            }
        }
    };

    return (
        <header className="header sticky top-0 left-0 w-full z-50">
            <nav className="py-3 md:py-6 lg:py-8 bg-white">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <Link href={"/"}>
                            <a className="flex items-center justify-center h-12 w-[190px]">
                                <Image src={images.logo} alt="logo" className="w-full h-full" />
                            </a>
                        </Link>

                        <ul className="hidden lg:flex">
                            {navlinks.map((link) => (
                                <li key={link.id}>
                                    <Link href={link.href}>
                                        <a className="font-semibold text-base text-primary px-20 duration-300 hover:text-green ease-in-out lg:px-10">
                                            {link.name}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="hidden sm:flex items-center justify-center">
                            <button className="text-sm font-semibold text-primary flex items-center mr-3 py-15 px-20 hover:bg-gray hover:rounded-lg hover:text-white duration-200">
                                <span className="mr-4">
                                    <AiOutlineUser
                                        fontSize={24}
                                        className="pointer-events-none"
                                    />
                                </span>
                                <span>Вход</span>
                            </button>
                            <Button
                                text="Связаться с нами"
                                y={`py-[15px]`} x={`px-5`} size={`text-sm`} lineheight={`leading-[18px]`} onClick={() => console.log('clicked')}
                            />
                        </div>
                        <div className="block lg:hidden">
                            {active ? (
                                <button
                                    className="flex items-center fixed top-5 md:top-9 right-4 z-20"
                                    onClick={handleClick}
                                >
                                    <span>
                                        <VscClose fontSize={30} />
                                    </span>
                                </button>
                            ) : (
                                <button className="flex items-center" onClick={handleClick}>
                                    <span>
                                        <AiOutlineMenu fontSize={30} />
                                    </span>{" "}
                                </button>
                            )}
                            {active && (
                                <div className="smallscreen">
                                    <div className="flex items-center justify-center flex-col fixed top-0 left-0 z-10 w-screen min-h-screen backdrop-blur-2xl">
                                        <ul className="flex items-center flex-col">
                                            {navlinks.map((link) => (
                                                <li key={link.id}>
                                                    <Link href={link.href}>
                                                        <a onClick={handleClick} className="font-bold text-xl inline-block text-secondary p-10 duration-300 hover:text-green ease-in-out lg:px-10">
                                                            {link.name}
                                                        </a>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="btns flex flex-row mt-3 sm:hidden">
                                            <button className="text-sm font-semibold text-primary flex items-center mr-4 py-4 px-6 hover:bg-slate-900 hover:rounded-lg hover:text-white duration-200">
                                                <span className="mr-4">
                                                    <AiOutlineUser
                                                        fontSize={24}
                                                        className="pointer-events-none"
                                                    />
                                                </span>
                                                <span>Вход</span>
                                            </button>
                                            <button className="text-white font-bold text-sm bg-green py-15 px-20 rounded-lg shadow-lg shadow-green ">
                                                Связаться с нами
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
