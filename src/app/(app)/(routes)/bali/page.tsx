import BaliHero from '@/components/Bali/Fragments/BaliHero'
import TopDestination from '@/components/Shared/Fragments/TopDestination'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='w-full min-h-screen'>
        <BaliHero />
        <TopDestination/>
    </div>
  )
}

export default page