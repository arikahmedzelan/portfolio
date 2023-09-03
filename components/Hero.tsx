import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi,My Name is Arik Ahmed Zelan",
      "Gus-who-loves-coffee.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div>
      <span>{text}</span>
      <Cursor cursorColor="#F7AB0A" />
    </div>
  );
}
