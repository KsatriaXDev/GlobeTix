import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='flex flex-col justify-center items-center max-h-screen w-full mt-40'>
      <div>
        <h2>Monas</h2>
      </div>
      <div className='flex flex-col md:flex-row'>
        <div>Carousel</div>
        <div>Detail and Button</div>
      </div>
    </div>
  )
}

export default page