"use client";

import { useState } from "react";

import Image from "next/image";

import Controls from "@/components/Controls";

import { data } from "../data";

//----------------------------
const Page = () => {
  const [person, setPerson] = useState(0);

  function inc() {
    const increment = person + 1;
    if (increment > data.length - 1) setPerson(0);
    else setPerson(increment);
  }

  function dec() {
    const decrement = person - 1;
    if (decrement < 0) setPerson(data.length - 1);
    else setPerson(decrement);
  }

  return (
    <main className="h-full w-full absolute top-0 left-0 border-2  border-yellow-500 md:p-20">
      <div className="flex flex-col md:flex-row w-full h-full relative">
        {/* left - text */}
        <div
          className="z-10 border-2 border-yellow-400 
        order-last md:order-none
        md:w-2/3 md:h-full "
        >
          <div className="p-9 md:p-20 border-4 border-red-500 w-full h-2/3 md:mt-24 md:ml-20 text-lg md:text-2xl">
            <p className="text-center md:text-left">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
              repellat iure reiciendis, quas numquam temporibus cupiditate ex
              rerum amet, libero minus quisquam reprehenderit corporis ab error
              magnam ullam? Pariatur, sequi?
            </p>
          </div>
        </div>
        {/* image */}
        <div
          className="border-2 border-blue-600 order-first flex flex-col justify-center items-center md:items-start p-6 md:p-0 mt-7 
          md:mt-0 md:order-none md:absolute md:top-0 md:right-0 md:w-[50%] md:h-full"
        >
          <div
            className="bg-slate-500 w-[260px] h-[260px] drop-shadow-xl
          md:w-[510px] md:h-[510px] md:mt-24 md:ml-24"
          ></div>

          <Controls inc={inc} dec={dec} />
        </div>
      </div>
    </main>
  );
};

export default Page;
