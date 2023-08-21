import "./globals.css";

import Image from "next/image";

import Quotes from "/public/pattern-quotes.svg";
import Curve from "/public/pattern-curve.svg";
import PatternBg from "/public/pattern-bg.svg";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Coding Bootcamp",
  description:
    "https://www.frontendmentor.io/challenges/coding-bootcamp-testimonials-slider",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-screen w-screen">
      <body className={`${inter.className} relative w-full h-full`}>
        <div className="flex flex-col md:flex-row w-full h-full">
          <div className="flex flex-col justify-between  h-full w-full md:w-1/2  order-last md:order-first">
            <div className="w-full flex justify-center md:justify-normal md:w-1/3 md:ml-[345px] mt-8 md:mt-56 ">
              <Image src={Quotes} alt="" width={80} height={80} />
            </div>
            <div className=" md:w-[80%] h-28 md:h-56 relative items-end">
              <Image src={Curve} fill alt="" />
            </div>
          </div>

          <div className="w-full md:w-[50%] md:mr-20 order-first md:order-none">
            <Image src={PatternBg} alt="" className="md:mt-10" />
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
