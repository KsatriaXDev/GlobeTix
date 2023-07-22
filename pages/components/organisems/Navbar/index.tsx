import React from 'react'
import Link from "next/link";
import Menu from "./menu"
export default function index() {
  return (
   <>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
        <div className="container flex flex-wrap items-center justify-between mx-auto my-2">
          <Link href="/" className="flex items-center">
            <div>
              <div>
                Globe<span className="font-bold text-blue-800">Tix</span>
              </div>
            </div>
          </Link>
          <div className="md:order-2">
            <Link href="/signin" className="px-8 py-3 mt-2 mr-2 text-base font-medium text-black bg-gray-200 border border-transparent rounded-full hover:bg-gray-300 md:py-2 md:text-sm md:px-8 hover:shadow">
              Sign In
            </Link>
            <Link href="/signup" className="px-8 py-3 text-base font-medium text-white border border-transparent rounded-full bg-navy hover:bg-navy md:py-2 md:text-sm md:px-8 hover:shadow">
              Sign Up
            </Link>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-regular">   
              <Menu title='Top Destination' href="/top-destination"/>
              <Menu title='Discount' href="/Discount"/>
              <Menu title='New Destination'  href="/new-destination" />
            </ul>
          </div>
        </div>
      </nav>
   </>
  )
}
