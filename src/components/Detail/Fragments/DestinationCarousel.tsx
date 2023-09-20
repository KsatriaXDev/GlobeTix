import React from 'react'
import { Carousel } from 'flowbite-react';


const DestinationCarousel = ({carouselImage}: any) => {
  return (
    <Carousel slideInterval={10000} className='classname="w-full h-[750px] bg-transparent'>
        {carouselImage.map((image:any)=>(
            <img className='object-cover' key={image.id} src={image.src} alt={image.alt} />
        ))}
    </Carousel>
  )
}

export default DestinationCarousel