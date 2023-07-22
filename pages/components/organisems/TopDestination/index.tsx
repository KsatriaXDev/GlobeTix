import React from 'react'
import CardTopDestination from '@/pages/components/molecules/CardTopDestination'

export default function TopDestination() {
  return (
    <>
      <div className="container px-4 mx-auto my-16 md:px-12">
        <h2 className="mb-4 text-xl font-medium md:mb-0 md:text-lg">Top Destination</h2>
        <div className="flex flex-wrap -mx-1 lg:-mx-4 review-slider">
          <CardTopDestination title="Candi Borobudur, Daerah Istimewa Yogyakarta" thumbnail="Borobudur3" category="Jawa timur" />
          <CardTopDestination title="Monas, DKI Jakarta" thumbnail="monas1" category="Jakarta" />
          <CardTopDestination title="Candi Borobudur, Daerah Istimewa Yogyakarta" thumbnail="Borobudur3" category="Jawa timur" />
          <CardTopDestination title="Taman Safari, Jakarta" thumbnail="Tamansafari4" category="Jakarta" />
        </div>
      </div>
    </>
  )
}
