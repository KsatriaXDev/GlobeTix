"use client";
import DestinationDetail from "@/components/Monas/Fragments/DestinationDetail";
import DestinationTitle from "@/components/Monas/Fragments/DestinationTitle";
import React from "react";
import DestinationCarousel from "@/components/Monas/Fragments/DestinationCarousel";

type Props = {};

const page = (props: Props) => {
  return (
    <div
      className="flex flex-col  w-full px-20 items-center justify-between shadow-[0_0.5rem_1rem_rgba(0,0,0,0.1)] text-[1.2rem] py-8 top-0 inset-x-0;
    background: white "
    >
      <DestinationTitle title="Monas" />
      <div className="flex flex-col md:flex-row justify-center gap-10 ">
        <DestinationCarousel />
        <DestinationDetail />
      </div>
    </div>
  );
};

export default page;
