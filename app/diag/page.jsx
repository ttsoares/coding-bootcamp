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
    <main className="h-full w-full absolute top-0 left-0  md:p-20">
      <div className="flex flex-col md:flex-row w-full h-full relative">
        {/* left - text */}
        <div
          className="z-10  
        order-last md:order-none
        md:w-2/3 md:h-full "
        >
          <div className="p-8 md:p-20  w-full h-2/3 text-center md:text-left md:mt-24 md:ml-20 text-lg md:text-2xl">
            <p className="">{`" ${data[person].text} "`}</p>
            <div className="flex flex-col md:flex-row mt-6">
              <p className="font-bold text-lg mr-3">{data[person].name}</p>
              <p className="text-gray-400 text-lg">{data[person].focus}</p>
            </div>
          </div>
        </div>
        {/* image */}
        <div
          className=" order-first flex flex-col justify-center items-center md:items-start p-6 first-7 
          md:p-0 md:mt-0 md:order-none md:absolute md:top-0 md:right-0 md:w-[50%]"
        >
          <div
            className=" w-[260px] h-[260px] drop-shadow-4xl
          md:w-[540px] md:h-[540px] md:mt-4 md:ml-6"
          >
            <Image
              src={data[person].image}
              width={550}
              height={550}
              alt="photo person"
            />
          </div>

          <Controls inc={inc} dec={dec} />
        </div>
      </div>
    </main>
  );
};

export default Page;
