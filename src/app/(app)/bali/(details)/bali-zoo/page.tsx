import DestinationCarousel from "@/components/Bali-Zoo/Fragments/DestinationCarousel";
import DestinationDetail from "@/components/Bali-Zoo/Fragments/DestinationDetail";
import DestinationTitle from "@/components/Bali-Zoo/Fragments/DestinationTitle";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex flex-col w-full px-20 items-center justify-between shadow-[0_0.5rem_1rem_rgba(0,0,0,0.1)] text-[1.2rem] py-8 top-0 inset-x-0;
    background: white max-h-screen my-24">
    <DestinationTitle title='Bali Zoo - Denpasar' />
    <div className='flex flex-col md:flex-row justify-center gap-20'>
      <DestinationCarousel/>
      <DestinationDetail/>
    </div>
  </div>
  );
};

export default page;
