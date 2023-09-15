"use client"
import JavaHero from '@/components/Java/Fragments/JavaHero'
import React, { useEffect, useState } from 'react'
import DestinationCard from '@/components/Shared/Elements/DestinationCard'
import axios from "axios";

const page = () => {
  const [java, setJava] = useState ([])

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios.get("https://64b9363379b7c9def6c0c250.mockapi.io/javatop");
            setJava(data)
        };
        fetchData()
    }, []);
  return (
        <div>
      <JavaHero />
      <h1>Top Destination</h1>
      <div className='flex'>
        {java.map((destination:any)=>(
        <DestinationCard key={destination.id} destination={destination} />
      ))}
      </div>
    </div>
      
    
  )
}

export default page