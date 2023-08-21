"use client";

import { useState } from "react";

import Image from "next/image";

import { data } from "./data";

//----------------------------
export default function Home() {
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
    <main className="h-full w-full md:w-[90%] absolute top-0 left-0 md:top-20 md:left-28">
      <div className="flex flex-col  md:flex-row w-full md:w-2/3 relative">
        <div className="order-last md:order-none">
          <div className="w-[90%] md:w-[50%]  md:absolute md:top-48 md:left-40 md:z-20">
            <p className="text-base">{data[person].text}</p>
            <div className="flex mt-6">
              <p className="font-bold text-lg mr-3">{data[person].name}</p>
              <p className="text-gray-400 text-lg">{data[person].focus}</p>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col order-first mt-12 ml-10
          md:ml-0 md:mt-0
          md:absolute  top-32 -right-60 md:hidden"
        >
          <div className="md:ml-20 drop-shadow-2xl w-[310px] h-[310px] md:w-[510px] md:h-[510px]">
            <Image
              src={data[person].image}
              width={510}
              height={510}
              alt="photo person"
            />
          </div>
          <div className="-mt-5 ml-36 z-10 flex w-24 h-12 rounded-full bg-white items-center justify-around drop-shadow-lg">
            <div onClick={dec} className="ml-2 mt-1 hover:cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22">
                <path
                  fill="none"
                  stroke="#8585AC"
                  strokeWidth="3"
                  d="M11 1L3 9l8 8"
                />
              </svg>
            </div>
            <div onClick={inc} className="hover:cursor-pointer mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22">
                <path
                  fill="none"
                  stroke="#8585AC"
                  strokeWidth="3"
                  d="M2 1l8 8-8 8"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
