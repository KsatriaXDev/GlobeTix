import Link from 'next/link';
import { Inter } from 'next/font/google'
import Navbar from "./components/organisems/Navbar";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900 dark:text-white dark:">
        <div className="container flex flex-wrap items-center justify-between mx-auto my-2">
          <a href="index.html" className="flex items-center">
            <div className="dark:text-white">Globe<span className="font-bold text-blue-800">Tix</span></div>
          </a>
          <div className="md:order-2 dark:text-white dark:bg-gray-900">
            <Link href="/signin" className="px-8 py-3 mt-2 mr-2 text-base font-medium text-black bg-gray-200 border border-transparent rounded-full hover:bg-gray-300 md:py-2 md:text-sm md:px-8 hover:shadow">
              Sign In
            </Link>
            <a href="/signup" className="px-8 py-3 text-base font-medium text-white border border-transparent rounded-full bg-blue-700 hover:bg-navy md:py-2 md:text-sm md:px-8 hover:shadow">
              Sign Up
            </a>
          </div>
        </div>
      </nav>

      <div className="relative overflow-hidden bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl dark:bg-gray-900">
          <div className="z-10 px-5 pb-8 bg-white xl:pl-20 lg:pl-16 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 dark:bg-gray-900">
            <main className="mx-auto mt-10 max-w-7xl sm:mt-12 md:mt-16 lg:mt-20 xl:mt-36 dark:bg-gray-900">
              <div className="bg-white sm:text-center lg:text-left dark:bg-gray-900">
                <h1 className="text-3xl font-bold leading-normal tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-white dark:bg-gray-900">
                  <span className="block lg:mb-2 dark:text-white">Making Travel Dreams</span>
                  <span className="block dark:text-white">a Reality</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Choose which island in Indonesia
                  <span className="block lg:mb-1"></span> you want to go!
                </p>
                <div
                  className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
                >

                </div>
                <button
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                >
                  Choose Now!
                  <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>
                <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <li>
                      <Link href="/categories" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Jawa</Link>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Bali</a>
                    </li>
                  </ul>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img className="w-full lg:w-3/4 lg:mt-8 rounded-2xl" src="img/HomeImage.JPG" alt="" />
        </div>
      </div>

    </>
  );
}
