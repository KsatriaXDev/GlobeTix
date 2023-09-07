import Link from 'next/link'
import React from 'react'
import { auth, UserButton } from '@clerk/nextjs'

type Props = {}

const Navbar = (props: Props) => {
  const { userId } = auth();
  return (
    <nav className="fixed top-0 w-full bg-white border-gray-200 px-2 sm:px-4 py-2.5 shadow-xl">
        <div className="container flex flex-wrap items-center justify-between mx-auto my-2">
          <Link href="/" className="flex items-center h-full">
          <div className="dark:text-white text-xl">Globe<span className="font-bold text-blue-800">Tix</span></div>
          </Link>
          <div className="md:order-2 dark:text-white dark:bg-gray-900">
            {!userId && (
              <>
                <Link href="/sign-in" className="px-8 py-3 mt-2 mr-2 text-base font-medium text-black bg-gray-200 border border-transparent rounded-full hover:bg-gray-300 md:py-2 md:text-sm md:px-8 hover:shadow">
                  Sign In
                </Link>
                <Link href="/sign-up" className="px-8 py-3 text-base font-medium text-white border border-transparent rounded-full bg-blue-700 hover:bg-blue-800 md:py-2 md:text-sm md:px-8 hover:shadow">
                  Sign Up
                </Link>
              </>
            )}
            <div className='ml-auto'>
              <UserButton afterSignOutUrl='/'/>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Navbar