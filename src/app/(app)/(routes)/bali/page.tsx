"use client"
import BaliHero from '@/components/Bali/Fragments/BaliHero'
import DestinationCard from '@/components/Shared/Elements/DestinationCard'
import { useBaliContext } from '@/context/BaliContext'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  const {baliTop} = useBaliContext()
  return (
    <div className='w-full min-h-screen'>
        <BaliHero />
        {baliTop.map((destination:any)=>(
          <DestinationCard key={destination.id} destination={destination} />
        ))}
    </div>
  )
}

export default page