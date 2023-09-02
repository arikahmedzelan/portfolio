import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function Header({}: Props) {
  return (
    <header>
      <div>
        {/*Social Icons*/}
        <SocialIcon
          url="https://www.youtube.com/channel/UCetKRATzuGDY0wgH2_xHigQ"
          fgColor="white"
          bgColor="transparent"
        />
      </div>
    </header>
  );
}
