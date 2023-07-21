import React from 'react'
import CardDiscount from '@/pages/components/molecules/CardDiscount'

export default function index() {
  return (
    <>
      <div className="container px-4 mx-auto my-16 md:px-12">
        <h2 className="mb-4 text-xl font-medium md:mb-0 md:text-lg">Discount</h2>
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          <CardDiscount title="Candi Borobudur, Daerah Istimewa Yogyakarta" thumbnail="Borobudur3" category="Jawa Timur"  />
          <CardDiscount title="Candi Borobudur, Daerah Istimewa Yogyakarta" thumbnail="Borobudur3" category="Jawa Timur"  />
          <CardDiscount title="Candi Borobudur, Daerah Istimewa Yogyakarta" thumbnail="Borobudur3" category="Jawa Timur"  />
        </div>
      </div>
    </>
  )
}
