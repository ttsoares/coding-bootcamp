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
    <html lang="en" className="w-screen h-screen bg-slate-700">
      <body className={`${inter.className} relative w-full h-full`}>
        <div className="flex w-full h-full">
          <div className="flex flex-col justify-between w-1/2 h-full border-2 border-green-500">
            <div className="w-1/3 ml-96 mt-52">
              <Image src={Quotes} alt="" width={150} height={150} />
            </div>
            <div className="w-1/3">
              <Image src={Curve} alt="" />
            </div>
          </div>

          <div className="w-1/2 h-full p-8 mt-20">
            <Image src={PatternBg} alt="" />
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
