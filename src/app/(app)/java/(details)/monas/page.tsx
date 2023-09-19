'use client';
import DestinationDetail from '@/components/Detail/Fragments/DestinationDetail';
import DestinationTitle from '@/components/Detail/Fragments/DestinationTitle';
import { Carousel } from 'flowbite-react';
import React from 'react'
import {useMonasContext} from "@/context/MonasContext"
import DestinationCarousel from '@/components/Detail/Fragments/DestinationCarousel';


type Props = {}

const page = (props: Props) => {
  const {detail, carouselImage} = useMonasContext()
  return (
    <div className='flex flex-col  w-full px-20'>
      <DestinationTitle title='Monas' />
      <div className='flex flex-col md:flex-row justify-center gap-20'>
        <DestinationCarousel carouselImage={carouselImage}/>
        <DestinationDetail detail={detail}/>
      </div>
    </div>
  )
}

export default page