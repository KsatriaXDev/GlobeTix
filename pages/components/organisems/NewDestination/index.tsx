import React from 'react'
import CardNewDestination from '../../molecules/CardNewDestination'

export default function index() {
  return (
    <>
      <div className="container px-4 mx-auto my-16 md:px-12">
        <h2 className="mb-4 text-xl font-medium md:mb-0 md:text-lg">New Destination</h2>
        <div className="flex flex-wrap -mx-1 lg:-mx-4 review-slider">
          <CardNewDestination title="Taman Safari, Jakarta" thumbnail="categories-1" category="Jakarta" />
          <CardNewDestination title="Sari ater, Lembang" thumbnail="categories-2" category="Jakarta" />
          <CardNewDestination title="Ragunan, Jakarta" thumbnail="categories-3" category="Jakarta" />
          <CardNewDestination title="Candi Prambanan" thumbnail="categories-4" category="Yogyakarta" />

        </div>
      </div>
    </>
  )
}
