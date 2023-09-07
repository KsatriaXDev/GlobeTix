import React from 'react'
import Dropdown from '../Elements/Dropdown'
import HomeText from '../Elements/HomeText'

import Image from 'next/image'
import { HomeImg } from '../../../../public'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='container flex flex-col lg:flex-row justify-between px-20 mt-10'>
        <div className='flex flex-col justify-center h-full items-center gap-10 mt-40'>
            <HomeText />
            <Dropdown />
        </div>
        <div className='flex justify-center items-center h-full'>
            <Image className="w-[400px] h-[500px] rounded-lg" src={HomeImg} alt="home-image" />
        </div>
    </div>
  )
}

export default Hero