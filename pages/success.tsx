import Link from 'next/link'
import React from 'react'

export default function success() {
  return (
    <>
      <div className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl">
          <div
            className="flex flex-col items-center w-full min-h-screen pt-6 sm:justify-center sm:pt-0"
          >
            <div className="w-full p-5 mx-auto sm:max-w-md">
              <img src="img/success-illustration.svg" alt="" className="mb-10 w-4xl" />
                <h2 className="mb-2 text-2xl font-bold text-center">Payment Success</h2>
                <p className="mb-5 text-lg text-center text-gray-500">
                  Waiting your payment approve
                </p>
            </div>
            <Link
              href="/"
              className="px-8 py-3 text-base font-medium text-white bg-blue-700 border border-transparent rounded-full hover:bg-blue-800 md:py-2 md:text-lg md:px-10 hover:shadow"
            >
              Explore Now
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
