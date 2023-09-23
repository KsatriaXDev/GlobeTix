import React, {useContext} from "react";
import {Carousel} from "flowbite-react";
import {MonasContext} from "@/context/MonasContext";

const DestinationCarousel = () => {
  const {carouselImage} = useContext(MonasContext);
  return (
    <Carousel slideInterval={10000} className="w-full h-[550px] bg-transparent flex-wrap justify-between">
      {carouselImage.map((image: any) => (
        <img className="object-cover" key={image.id} src={image.src} alt={image.alt} />
      ))}
    </Carousel>
  );
};

export default DestinationCarousel;
