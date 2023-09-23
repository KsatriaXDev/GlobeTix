import React, {useContext} from "react";
import {Carousel} from "flowbite-react";
import {MonasContext} from "@/context/MonasContext";
import Image from "next/image";

const DestinationCarousel = () => {
  const {carouselImage} = useContext(MonasContext);
  return (
    <Carousel slideInterval={10000} className="w-full min-h-screen bg-transparent flex-wrap justify-between">
      {carouselImage.map((image: any) => (
        <Image className="object-cover" key={image.id} src={image.src} alt={image.alt} width={600} height={600} fill={true}/>
      ))}
    </Carousel>
  );
};

export default DestinationCarousel;
