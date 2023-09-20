"use client"
import React from 'react'
import Link from 'next/link';

type Props = {
detail: any;
}

const DestinationDetail = ({detail}: Props) => {
const {title, history, p1, p2, price} = detail
  return (
    <div className='flex flex-col justify-center gap-5 w-full '>
        <h3>{title}</h3>
        <p>{history}</p>
        <p>{p1}</p>
        <p>{p2}</p>
        <div className='flex flex-col items-center gap-5 mt-10'>
            <p>Ticket Price: <span className='underline text-blue-500 font-semi'>{price}</span></p>
            <div className='flex gap-5'>
            <Link href="/java/booking" className='bg-blue-500 text-white px-6 py-3 text-sm rounded-full'>
                Book Now
            </Link>
            <Link href="/java" className='bg-blue-500 text-white px-6 py-3 text-sm rounded-full'>
                Go Back
            </Link>
            </div>
        </div>
    </div>
  )
}

export default DestinationDetail