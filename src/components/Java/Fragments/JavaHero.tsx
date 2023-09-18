import React from "react";
import HeroText from "../Elements/HeroText";
import HeroImage from "../Elements/HeroImage";

type Props = {};

const JavaHero = (props: Props) => {
  return (
    <div className="flex justify-center items-center gap-40 h-full w-full mt-20">
      <HeroText />
      <HeroImage />
    </div>
  );
};

export default JavaHero;
