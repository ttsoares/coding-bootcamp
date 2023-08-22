"use client";

import { useState } from "react";

import Image from "next/image";

import Controls from "@/components/Controls";

import { data } from "./data";

//----------------------------
const Page = () => {
  const [person, setPerson] = useState(1);

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
      <div className="flex flex-col md:flex-row w-full h-full relative ">
        {/* left - text */}
        <div className="z-10 order-last md:order-none w-full flex justify-center md:w-2/3 md:h-full ">
          <div className="py-6 w-[77%] h-2/3 text-center  md:text-left md:mt-24 text-lg md:text-3xl md:py-16 md:pr-16 md:ml-14">
            <p className=" w-[90%] md:w-full mx-auto md:mx-0 mt-9 md:mt-0 text-dark_blue font-light ">{`" ${data[person].text} "`}</p>
            <div className="flex flex-col md:flex-row mt-6">
              <p className="font-bold text-lg mr-3 text-dark_blue">
                {data[person].name}
              </p>
              <p className="text-grayish_blue text-lg font-medium">
                {data[person].focus}
              </p>
            </div>
          </div>
        </div>
        {/* image */}
        <div
          className=" order-first flex flex-col justify-center items-center md:items-start  
          md:p-0 md:mt-0 md:order-none md:absolute md:top-0 md:right-0 md:w-[50%]"
        >
          <div
            className=" w-[280px] h-[280px] drop-shadow-4xl
          md:w-[530px] md:h-[530px] mt-8 md:mt-4 md:ml-6"
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
