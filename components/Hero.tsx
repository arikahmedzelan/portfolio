import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi,My Name is Arik Ahmed Zelan",
      "Guys-who-loves-coffee.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx auto object-cover"
        src="https://scontent.fdac14-1.fna.fbcdn.net/v/t1.6435-9/117206054_1237446259932833_1430116750218287480_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=9jL_S2F1VOgAX9BnM1b&_nc_ht=scontent.fdac14-1.fna&oh=00_AfDa2QOVPRQPCzLv5QsHTZHH8w2voaETx12GEyYmcZTTeA&oe=6533604B"
        alt=""
      />
      <div className="z-20">
        <h2 className="text-xs uppercase text-gray-500 pb-2 tracking-[10px]">
          Software Engineer
        </h2>
        <h1 className="text-2xl lg:text-3xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experiance">
            <button className="heroButton">Experiance</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skill</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Project</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
