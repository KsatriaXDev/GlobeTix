import React from 'react'
import SignupSVG from "./components/organisems/SignupSVG";
import Link from 'next/link';

export default function signup() {
  return (
    <>
      <div className="relative overflow-hidden bg-white">
        <div className="mx-auto">
          <div
            className="flex flex-col items-center w-full min-h-screen pt-6 sm:justify-center sm:pt-0"
          >
            <div className="w-full p-5 mx-auto md:max-w-4xl">
              <h2 className="mb-10 text-5xl font-bold text-center">
                <span className="block lg:mb-2">Join & Get Our</span>
                <span className="block">Pro Benefits</span>
              </h2>
            </div>
            <div className="w-full p-5 mx-auto md:max-w-4xl">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <SignupSVG />
                <div>
                  <form>
                    <div className="mb-4">
                      <label className="block mb-1" v-for="name">Name</label>
                      <input
                        placeholder="Type your full name"
                        id="name"
                        type="text"
                        name="name"
                        className="block w-full py-3 mt-2 border border-gray-300 rounded-full shadow-sm px-7 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:bg-gray-100"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block mb-1" v-for="email">Email Address</label>
                      <input
                        placeholder="Type your email"
                        id="email"
                        type="text"
                        name="email"
                        className="block w-full py-3 mt-2 border border-gray-300 rounded-full shadow-sm px-7 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:bg-gray-100"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block mb-1" v-for="password">Password</label>
                      <input
                        placeholder="Type your password"
                        id="password"
                        type="password"
                        name="password"
                        className="block w-full py-3 mt-2 border border-gray-300 rounded-full shadow-sm px-7 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:bg-gray-100"
                      />
                    </div>
                    <div className="mt-6">
                      <button
                        type="button"
                        className="inline-flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-700 md:py-2 md:text-lg md:px-10 hover:shadow"
                      >
                        Continue Sign Up
                      </button>
                      <Link
                        href="/signin"
                        className="inline-flex items-center justify-center w-full px-8 py-3 mt-2 text-base font-medium text-black bg-gray-200 border border-transparent rounded-full hover:bg-gray-300 md:py-2 md:text-lg md:px-10 hover:shadow"
                      >
                        Sign In
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
