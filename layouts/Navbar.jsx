import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { images } from "../constants";
import { navlinks } from "../data";
import { AiOutlineUser, AiOutlineMenu } from "react-icons/ai";
import { VscClose } from "react-icons/vsc";
import { Button } from "../ui-components";
import { VscChromeClose } from "react-icons/vsc";
import api from "../services/api";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsGithub } from "react-icons/bs";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [signup, setSignup] = useState(false);
  const [resetPass, setResetPass] = useState(false);
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = useState(null);
  const [clients, setClients] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const isValidFormData = () => {
    if (!name) {
      toast.warn("Check your name", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (!surname) {
      toast.warn("Check your email", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (!email) {
      toast.warn("Check your email", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (clients.some((client) => client.email === email && client._id === id)) {
      return toast.success("Email check", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleSubmitForCreateAccount = async (e) => {
    e.preventDefault();
    setName("");
    setSurname("");
    setEmail("");
    setModal((modal) => !modal);
    if (isValidFormData()) return;
    try {
      setIsLoading(true);
      const { data } = await api.post("/clients", { name, surname, email });
      setClients(clients.concat(data.data));
      setName("");
      setSurname("");
      setEmail("");
      return toast.success("Uraa Akkaunt ochildi!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

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
  useEffect(() => {
    api.get("/clients").then(({ data }) => {
      setClients(data.data);
    });
  }, [clients]);

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
              <button
                onClick={() => setModal((modal) => !modal)}
                className="text-sm font-semibold text-primary flex items-center mr-3 py-15 px-20 hover:bg-gray hover:rounded-lg hover:text-white duration-200"
              >
                <span className="mr-4">
                  <AiOutlineUser
                    fontSize={24}
                    className="pointer-events-none"
                  />
                </span>
                <span>????????</span>
              </button>
              <Button
                text="?????????????????? ?? ????????"
                y={`py-[15px]`}
                x={`px-5`}
                size={`text-sm`}
                lineheight={`leading-[18px]`}
                onClick={() => console.log("clicked")}
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
                  </span>
                </button>
              )}
              {active && (
                <div className="smallscreen">
                  <div className="flex items-center justify-center flex-col fixed top-0 left-0 z-10 w-screen min-h-screen backdrop-blur-2xl">
                    <ul className="flex items-center flex-col">
                      {navlinks.map((link) => (
                        <li key={link.id}>
                          <Link href={link.href}>
                            <a
                              onClick={handleClick}
                              className="font-bold text-xl inline-block text-secondary p-10 duration-300 hover:text-green ease-in-out lg:px-10"
                            >
                              {link.name}
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="btns flex flex-row mt-3 sm:hidden">
                      <button
                        onClick={() => setModal((modal) => !modal)}
                        className="text-sm font-semibold text-primary flex items-center mr-4 py-4 px-6 hover:bg-slate-900 hover:rounded-lg hover:text-white duration-200"
                      >
                        <span className="mr-4">
                          <AiOutlineUser
                            fontSize={24}
                            className="pointer-events-none"
                          />
                        </span>
                        <span>????????</span>
                      </button>
                      <button className="text-white font-bold text-sm bg-green py-15 px-20 rounded-lg shadow-lg shadow-green ">
                        ?????????????????? ?? ????????
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      <ToastContainer />
      {modal && (
        <div className="fixed top-0 left-0 w-full h-full z-[100] backdrop-blur-sm">
          <div className="flex items-center justify-center mt-[15%]">
            <div className="bg-white pt-[50px] xs:pt-[45px] p-[30px] sm:p-[40px] max-w-[480px] w-full rounded-sm shadow-white relative">
              <button
                onClick={() => setModal((modal) => !modal)}
                className="absolute top-[2%] sm:top-[-5%] right-2 sm:right-[-5%]"
              >
                <span>
                  <VscChromeClose
                    fontSize={30}
                    className="text-green"
                  />
                </span>
              </button>
              <div className={signup ? "login hidden" : "login"}>
                <div className="flex flex-col">
                  <h3 className="font-bold text-primary text-lg max-w-[280px] w-full mb-4">
                    ?????????????? ?????????????????? ?????????????? ?? ???????????????????? ??????????????????
                  </h3>
                  <form
                    action=""
                    className="flex flex-col"
                    onSubmit={handleSubmitForCreateAccount}
                  >
                    <div className="flex flex-col">
                      <label
                        htmlFor="username"
                        className="font-bold text-base mb-2"
                      >
                        ??????:
                      </label>
                      <input
                        type="text"
                        name="username"
                        placeholder="?????????????? ?????? ??????"
                        className="w-full py-[10px] px-2 border border-gray bg-[#FCFDFF] outline-none rounded-[6px] focus:bg-[#d4d4d6a2]"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col my-4">
                      <label
                        htmlFor="surname"
                        className="font-bold text-base mb-2"
                      >
                        ??????????????:
                      </label>
                      <input
                        type="text"
                        name="surname"
                        placeholder="?????????????? ?????? ??????????????"
                        className="w-full py-[10px] px-2 border border-gray bg-[#FCFDFF] outline-none rounded-[6px] focus:bg-[#d4d4d6a2]"
                        required
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col mb-5">
                      <label
                        htmlFor="email"
                        className="font-bold text-base mb-2"
                      >
                        Email:
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="?????????????? ?????? email:"
                        className="w-full py-[10px] px-2 border border-gray bg-[#FCFDFF] outline-none rounded-[6px] focus:bg-[#d4d4d6a2]"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <p className="font-light text-[14px] leading-5 max-w-[395px] w-full">
                      ?????????????? ???? ???????????? ???? ???????????????????????? ??
                      <a href="#!" className="text-green mx-1">
                        ?????????????????? ???????????????????????????? ??????????
                      </a>
                      ??
                      <a href="#!" className="text-green mx-1">
                        ?????????????????? ????????????????????????????????????
                      </a>
                    </p>
                    <div className="flex items-center flex-col sm:flex-row justify-between mt-5">
                      <button
                        type="submit"
                        className="bg-green shadow-green p-5 rounded-lg font-bold text-white text-base"
                      >
                        ???????????????? ?????????? ?? UK
                      </button>
                      <div className="flex flex-col mt-4 sm:mt-0 items-center sm:items-start justify-center">
                        <p className="text-primary font-regular">
                          ?????? ?????????????????????????????????
                        </p>
                        <button
                          onClick={() => setSignup(true)}
                          className="text-green text-base"
                        >
                          ?????????????????? ????????
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {signup && (
                <div className={resetPass ? 'signup hidden' : 'signup'}>
                  <div className="flex flex-col">
                    <h3 className="font-bold text-primary text-lg max-w-[280px] w-full mb-4">
                      ?????????????????? ???????? ?? ?????? ???????????? ??????????????
                    </h3>
                    <form
                      action=""
                      className="flex flex-col"
                      onSubmit={handleSubmitForCreateAccount}
                    >
                      <div className="flex flex-col">
                        <label
                          htmlFor="username"
                          className="font-bold text-base mb-2"
                        >
                          ?????????? ????????????????:
                        </label>
                        <input
                          type="phone"
                          name="username"
                          placeholder="?????????????? ?????? ??????????"
                          className="w-full py-[10px] px-2 border border-gray bg-[#FCFDFF] outline-none rounded-[6px] focus:bg-[#d4d4d6a2]"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="flex flex-col my-4">
                        <label
                          htmlFor="email"
                          className="font-bold text-base mb-2"
                        >
                          Email:
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="?????????????? ?????? email:"
                          className="w-full py-[10px] px-2 border border-gray bg-[#FCFDFF] outline-none rounded-[6px] focus:bg-[#d4d4d6a2]"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="flex flex-col mb-4">
                        <label
                          htmlFor="password"
                          className="font-bold text-base mb-2"
                        >
                          ?????? ????????????:
                        </label>
                        <input
                          type="text"
                          name="password"
                          placeholder="?????????????? ?????? ????????????:"
                          className="w-full py-[10px] px-2 border border-gray bg-[#FCFDFF] outline-none rounded-[6px] focus:bg-[#d4d4d6a2]"
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <p className="font-light text-[14px] leading-5 max-w-[395px] w-full">
                        <a
                          onClick={() => setResetPass(true) }
                          href="#!"
                          className="text-green mx-1"
                        >
                          ???????????????????????????? ????????????
                        </a>
                        {""}
                        ??????
                        {""}
                        <a
                          onClick={() => setSignup(false)}
                          href="#!"
                          className="text-green mx-1"
                        >
                          ?????????????? ??????????????????????
                        </a>
                      </p>
                      <div className="flex items-center flex-col sm:flex-row justify-between mt-5">
                        <button
                          type="submit"
                          className="bg-green shadow-green w-[200px] p-5 rounded-lg font-bold text-white text-base"
                        >
                          ??????????
                        </button>
                        <div className="flex mt-4 sm:mt-0 items-center sm:items-start justify-center">
                          <button className="mx-3 text-green text-base">
                            <span>
                              <FcGoogle fontSize={25} />
                            </span>
                          </button>
                          <button className="mx-3 text-blue text-base">
                            <span>
                              <BsFacebook fontSize={25} color="#4267B2" />
                            </span>
                          </button>
                          <button className="mx-3 text-base">
                            <span>
                              <BsGithub fontSize={25} />
                            </span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              )}
              {resetPass && (
                <div className="resetpassword">
                  <div className="flex flex-col">
                    <h3 className="font-bold text-primary text-lg max-w-[280px] w-full mb-4">
                      ???????????????????????????? ????????????
                    </h3>
                    <p className="font-light text-[16px] leading-4 max-w-[380px] w-full mb-2">
                      ?????????????? Email, ?? ?????????????? ???? ???????????????????????????????? ???? ??????????, ??
                      ??????????????{" "}
                      <strong className="font-bold">????????????????????????????</strong>
                    </p>
                    <form
                      action=""
                      className="flex flex-col"
                      onSubmit={handleSubmitForCreateAccount}
                    >
                      <div className="flex flex-col my-4">
                        <label
                          htmlFor="email"
                          className="font-bold text-base mb-2"
                        >
                          ?????? email:
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="?????????????? ?????? email:"
                          className="w-full py-[10px] px-2 border border-gray bg-[#FCFDFF] outline-none rounded-[6px] focus:bg-[#d4d4d6a2]"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <p className="font-light text-[14px] leading-5 max-w-[395px] w-full">
                        ?????????????????? ?????????????
                        <a
                          onClick={() => setResetPass(false)}
                          href="#!"
                          className="text-green mx-1"
                        >
                          ?????????????????? ????????
                        </a>
                      </p>
                      <div className="flex items-center flex-col sm:flex-row justify-between mt-5">
                        <button
                          type="submit"
                          className="bg-green shadow-green w-[200px] p-5 rounded-lg font-bold text-white text-base"
                        >
                          ????????????????????????
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
