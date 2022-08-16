import React from "react";
import { FiSearch } from "react-icons/fi";

const Help = () => {
  return (
    <section className="help">
      <div className="container">
        <div className="flex flex-col">
          <div className="bg-white shadow-white rounded-sm py-[30px] sm:py-[40px] px-[20px] sm:px-[30px]">
            <form
              action=""
              className="form"
              onSubmit={() => window.location.reload()}
            >
              <label htmlFor="question" className="font-bold text-secondary">
                Поиск в вопросах и ответах:
              </label>
              <div className="border-b border-secondary relative">
                <input
                  type="search"
                  placeholder="Введите свой вопрос..."
                  className="w-full pb-3 sm:pb-6 pl-2 outline-none mt-5"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center absolute top-[25%] right-2"
                >
                  <span>
                    <FiSearch fontSize={28} className="text-green" />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Help;
