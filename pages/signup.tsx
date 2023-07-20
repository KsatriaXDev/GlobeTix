import React from 'react'

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
                <div className="mx-auto md:mx-0">
                  <div className="mb-12">
                    <div className="block mb-2">
                      <svg width="45" height="45" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline align-middle">
                        <circle cx="30" cy="30" r="30" fill="#642DFB" />
                        <path d="M20 35L30 40L40 35" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20 30L30 35L40 30" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M30 20L20 25L30 30L40 25L30 20Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <h3 className="inline-block ml-2 text-lg font-semibold">
                        Customizable
                      </h3>
                    </div>
                    <p className="mt-2 text-lg text-gray-500">
                      Accelerate your work with our millions <br/>
                        of ready-to-use design projects.
                    </p>
                  </div>
                  <div className="mb-12">
                    <div className="block mb-2">
                      <svg width="45" height="45" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline align-middle">
                        <circle cx="30" cy="30" r="30" fill="#1BA37A" />
                        <path d="M30 33C33.866 33 37 29.866 37 26C37 22.134 33.866 19 30 19C26.134 19 23 22.134 23 26C23 29.866 26.134 33 30 33Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M26.21 31.89L25 41L30 38L35 41L33.79 31.88" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <h3 className="inline-block ml-2 text-lg font-semibold">
                        500 v-fortune
                      </h3>
                    </div>
                    <p className="mt-2 text-lg text-gray-500">
                      Accelerate your work with our millions <br/>
                        of ready-to-use design projects.
                    </p>
                  </div>
                  <div className="mb-12">
                    <div className="block mb-2">
                      <svg width="45" height="45" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline align-middle">
                        <circle cx="30" cy="30" r="30" fill="#FF6D90" />
                        <path d="M40 21H34C32.9391 21 31.9217 21.4214 31.1716 22.1716C30.4214 22.9217 30 23.9391 30 25V39C30 38.2044 30.3161 37.4413 30.8787 36.8787C31.4413 36.3161 32.2044 36 33 36H40V21Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20 21H26C27.0609 21 28.0783 21.4214 28.8284 22.1716C29.5786 22.9217 30 23.9391 30 25V39C30 38.2044 29.6839 37.4413 29.1213 36.8787C28.5587 36.3161 27.7956 36 27 36H20V21Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>

                      <h3 className="inline-block ml-2 text-lg font-semibold">
                        Documentation
                      </h3>
                    </div>
                    <p className="mt-2 text-lg text-gray-500">
                      Accelerate your work with our millions <br/>
                        of ready-to-use design projects.
                    </p>
                  </div>
                </div>
                <div>
                  <v-form>
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
                      <button
                        type="button"
                        className="inline-flex items-center justify-center w-full px-8 py-3 mt-2 text-base font-medium text-black bg-gray-200 border border-transparent rounded-full hover:bg-gray-300 md:py-2 md:text-lg md:px-10 hover:shadow"
                      >
                        Sign In
                      </button>
                    </div>
                  </v-form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
