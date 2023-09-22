import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <div
      className="flex flex-col relative h-screen text-center
     md:text-left md:flex-row max-w-7xl px-10 justify-evenly 
     mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/269613235_1611229525887836_4995653009051253164_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=1b51e3&_nc_ohc=cYUomK_b2vcAX9_NDLn&_nc_ht=scontent.fdac14-1.fna&oh=00_AfAsRpBkn1gSpCGVU6WfNLrl9IM8g5wb1EF5Gg397NKCXA&oe=651274A9"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
        md:rounded-lg md:w-64 md:h-95 xl:w-[350px] xl:h-[450px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">Here is a little background</h4>
      </div>
    </div>
  );
}
