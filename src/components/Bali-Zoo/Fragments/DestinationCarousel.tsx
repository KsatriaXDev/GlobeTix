"use client"
import React, { useContext } from "react";
import {Carousel} from "flowbite-react";
import {BaliZooContext} from "@/context/BaliZooContext"
import Image from "next/image";

const DestinationCarousel = () => {
  const {carouselImage} = useContext(BaliZooContext);
  return (
    <Carousel slideInterval={10000} className='classname="w-full h-[750px] bg-transparent'>
      {carouselImage.map((image: any) => (
        <Image className="object-cover" key={image.id} src={image.src} alt={image.alt} width={600} height={600}/>
      ))}
    </Carousel>
  );
};

export default DestinationCarousel;
