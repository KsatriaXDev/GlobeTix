"use client"
import JavaHero from '@/components/Java/Fragments/JavaHero'
import React, { useEffect, useState } from 'react'
import DestinationCard from '@/components/Shared/Elements/DestinationCard'
import JavaContent from '@/components/Java/Fragments/JavaContent'

const page = () => {

  return (
    <div>
      <JavaHero />
      <JavaContent />
    </div>
      
    
  )
}

export default page