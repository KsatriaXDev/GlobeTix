import React from 'react'
import Dropdown from '../Elements/Dropdown'
import HomeText from '../Elements/HomeText'

import Image from 'next/image'
import { HomeImg } from '../../../../public'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='container flex flex-col lg:flex-row justify-center gap-20 mt-40'>
        <div className='flex flex-col justify-center h-full items-center gap-5 mt-40'>
            <HomeText />
            <Dropdown />
        </div>
        <div className='flex justify-center items-center h-full'>
            <Image className="w-[600px] h-[700px] rounded-lg" src={HomeImg} alt="home-image" />
        </div>
    </div>
  )
}

export default Hero