import Link from "next/link";
import React from "react";
import Hero from "./components/molecules/Hero";

export default function categories() {
  return (
    <>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
        <div className="container flex flex-wrap items-center justify-between mx-auto my-2">
          <a href="index.html" className="flex items-center">
            <div>
              Globe<span className="font-bold text-blue-800">Tix</span>
            </div>
          </a>
          <div className="md:order-2">
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
              <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-regular">
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4 text-white bg-indigo-600 rounded md:bg-transparent md:text-indigo-600 md:p-0 dark:text-white" aria-current="page">
                    Top Destination
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-indigo-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Discount
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-indigo-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    New Destination
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <Hero />

      <div className="container px-4 mx-auto my-16 md:px-12">
        <h2 className="mb-4 text-xl font-medium md:mb-0 md:text-lg">Top Destination</h2>
        <div className="flex flex-wrap -mx-1 lg:-mx-4 review-slider">
          <div className="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
            <div className="overflow-hidden border border-gray-200 rounded-xl">
              <Link href="/details">
                <div className="m-4 overflow-hidden rounded-xl">
                  <img alt="Placeholder" className="block w-full h-auto" src="/img/item/Monas1.jpg" />
                </div>
              </Link>
              <header className="px-4 mb-4 leading-tight">
                <h1 className="text-lg">
                  <a className="font-semibold text-black no-underline hover:underline" href="monas.html">
                    Monumen Nasional, DKI Jakarta
                  </a>
                </h1>
                <span className="block text-sm font-light text-gray-500 no-underline">
                  DKI Jakarta
                </span>
              </header>
            </div>
          </div>
          <div className="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
            <div className="overflow-hidden border border-gray-200 rounded-xl">
              <Link href="/details">
                <div className="m-4 overflow-hidden rounded-xl">
                  <img alt="Placeholder" className="block w-full h-auto max-w-xs" src="/img/item/Borobudur3.jpg" />
                </div>
              </Link>
              <header className="px-4 mb-4 leading-tight">
                <h1 className="text-lg">
                  <a className="font-semibold text-black no-underline hover:underline" href="borobudur.html">
                    Candi Borobudur, Daerah Istimewa Yogyakarta
                  </a>
                </h1>
                <span className="block text-sm font-light text-gray-500 no-underline">
                  Jawa Timur
                </span>
              </header>
            </div>
          </div>
          <div className="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
            <div className="overflow-hidden border border-gray-200 rounded-xl">
              <Link href="/details">
                <div className="m-4 overflow-hidden rounded-xl">
                  <img alt="Placeholder" className="block w-full h-auto" src="/img/item/Tamansafari4.jpg" />
                </div>
              </Link>
              <header className="px-4 mb-4 leading-tight">
                <h1 className="text-lg">
                  <a className="font-semibold text-black no-underline hover:underline" href="tamansafari.html">
                    Taman Safari Indonesia, Bogor, Puncak
                  </a>
                </h1>
                <span className="block text-sm font-light text-gray-500 no-underline">
                  Jawa Barat
                </span>
              </header>
            </div>
          </div>
          <div className="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
            <div className="overflow-hidden border border-gray-200 rounded-xl">
              <Link href="/details">
                <div className="m-4 overflow-hidden rounded-xl">
                  <img alt="Placeholder" className="block w-full h-auto" src="/img/item/Bromo1.jpg" />
                </div>
              </Link>
              <header className="px-4 mb-4 leading-tight">
                <h1 className="text-lg">
                  <a className="font-semibold text-black no-underline hover:underline" href="bromo.html">
                    Gunung Bromo, Malang, Cemoro Lawang
                  </a>
                </h1>
                <span className="block text-sm font-light text-gray-500 no-underline">
                  Jawa Timur
                </span>
              </header>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 mx-auto my-16 md:px-12">
        <h2 className="mb-4 text-xl font-medium md:mb-0 md:text-lg">Discount</h2>
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          <div className="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <div className="overflow-hidden border border-gray-200 rounded-xl">
              <Link href="/details">
                <div className="m-4 overflow-hidden rounded-xl">
                  <img alt="Placeholder" className="block w-full h-auto" src="/img/item/Monas1.jpg" />
                </div>
              </Link>
              <header className="px-4 mb-4 leading-tight">
                <h1 className="text-lg">
                  <a className="font-semibold text-black no-underline hover:underline" href="monas.html">
                    Monumen Nasional, DKI Jakarta
                  </a>
                </h1>
                <span className="block text-sm font-light text-gray-500 no-underline">
                  DKI Jakarta
                </span>
              </header>
            </div>
          </div>
          <div className="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <div className="overflow-hidden border border-gray-200 rounded-xl">
              <Link href="/details">
                <div className="m-4 overflow-hidden rounded-xl">
                  <img alt="Placeholder" className="block w-full h-auto" src="img/items-2.jpg" />
                </div>
              </Link>
              <header className="px-4 mb-4 leading-tight">
                <h1 className="text-lg">
                  <a className="font-semibold text-black no-underline hover:underline" href="#">
                    Online Doctor Consultation
                  </a>
                </h1>
                <span className="block text-sm font-light text-gray-500 no-underline">
                  Website UI Kit
                </span>
              </header>
            </div>
          </div>
          <div className="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <div className="overflow-hidden border border-gray-200 rounded-xl">
              <Link href="/details">
                <div className="m-4 overflow-hidden rounded-xl">
                  <img alt="Placeholder" className="block w-full h-auto" src="img/items-3.jpg" />
                </div>
              </Link>
              <header className="px-4 mb-4 leading-tight">
                <h1 className="text-lg">
                  <a className="font-semibold text-black no-underline hover:underline" href="#">
                    Banking Crypto
                  </a>
                </h1>
                <span className="block text-sm font-light text-gray-500 no-underline">
                  Mobile UI Kit
                </span>
              </header>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container px-4 mx-auto my-16 md:px-12">
        <div id="controls-carousel" className="relative w-full" data-carousel="static">
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="/img/item/Borobudur1.jpeg"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
              <img src="/img/Borobudur2.jpeg"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
              <img src="/img/item/Borobudur1.jpeg"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
              <img src="/img/item/Borobudur2.jpeg"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
            </div>
          </div>

          <button type="button"
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev>
            <span
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M5 1 1 5l4 4" />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button type="button"
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next>
            <span
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="m1 9 4-4-4-4" />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div> */}

      <div className="container px-4 mx-auto my-16 md:px-12">
        <h2 className="mb-4 text-xl font-medium md:mb-0 md:text-lg">New Destination</h2>
        <div className="flex flex-wrap -mx-1 lg:-mx-4 review-slider">
          <div className="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
            <div className="overflow-hidden border border-gray-200 rounded-xl">
              <a href="monas.html">
                <div className="m-4 overflow-hidden rounded-xl">
                  <img alt="Placeholder" className="block w-full h-auto" src="img/categories-3.jpg" />
                </div>
              </a>
              <header className="px-4 mb-4 leading-tight">
                <h1 className="text-lg">
                  <a className="font-semibold text-black no-underline hover:underline" href="monas.html">
                    Monumen Nasional, DKI Jakarta
                  </a>
                </h1>
                <span className="block text-sm font-light text-gray-500 no-underline">
                  731 items
                </span>
              </header>
            </div>
          </div>
          <div className="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
            <div className="overflow-hidden border border-gray-200 rounded-xl">
              <Link href="/details">
                <div className="m-4 overflow-hidden rounded-xl">
                  <img alt="Placeholder" className="block w-full h-auto" src="img/categories-3.jpg" />
                </div>
              </Link>
              <header className="px-4 mb-4 leading-tight">
                <h1 className="text-lg">
                  <a className="font-semibold text-black no-underline hover:underline" href="borobudur.html">
                    Candi Borobudur, Yogyakarta
                  </a>
                </h1>
                <span className="block text-sm font-light text-gray-500 no-underline">
                  657 items
                </span>
              </header>
            </div>
          </div>
          <div className="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
            <div className="overflow-hidden border border-gray-200 rounded-xl">
              <Link href="/details">
                <div className="m-4 overflow-hidden rounded-xl">
                  <img alt="Placeholder" className="block w-full h-auto" src="img/categories-3.jpg" />
                </div>
              </Link>
              <header className="px-4 mb-4 leading-tight">
                <h1 className="text-lg">
                  <a className="font-semibold text-black no-underline hover:underline" href="#">
                    Icon Set
                  </a>
                </h1>
                <span className="block text-sm font-light text-gray-500 no-underline">
                  83,559 items
                </span>
              </header>
            </div>
          </div>
          <div className="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
            <div className="overflow-hidden border border-gray-200 rounded-xl">
              <Link href="/details">
                <div className="m-4 overflow-hidden rounded-xl">
                  <img alt="Placeholder" className="block w-full h-auto" src="img/categories-3.jpg" />
                </div>
              </Link>
              <header className="px-4 mb-4 leading-tight">
                <h1 className="text-lg">
                  <a className="font-semibold text-black no-underline hover:underline" href="#">
                    Icon Set
                  </a>
                </h1>
                <span className="block text-sm font-light text-gray-500 no-underline">
                  83,559 items
                </span>
              </header>
            </div>
          </div>
          <div className="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
            <div className="overflow-hidden border border-gray-200 rounded-xl">
              <Link href="/details">
                <div className="m-4 overflow-hidden rounded-xl">
                  <img alt="Placeholder" className="block w-full h-auto" src="img/categories-4.jpg" />
                </div>
              </Link>

              <header className="px-4 mb-4 leading-tight">
                <h1 className="text-lg">
                  <a className="font-semibold text-black no-underline hover:underline" href="#">
                    Website UI Kit
                  </a>
                </h1>
                <span className="block text-sm font-light text-gray-500 no-underline">
                  4,500 items
                </span>
              </header>
            </div>
          </div>
          <div className="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
            <div className="overflow-hidden border border-gray-200 rounded-xl">
              <Link href="/details">
                <div className="m-4 overflow-hidden rounded-xl">
                  <img alt="Placeholder" className="block w-full h-auto" src="img/categories-4.jpg" />
                </div>
              </Link>

              <header className="px-4 mb-4 leading-tight">
                <h1 className="text-lg">
                  <a className="font-semibold text-black no-underline hover:underline" href="#">
                    Website UI Kit
                  </a>
                </h1>
                <span className="block text-sm font-light text-gray-500 no-underline">
                  4,500 items
                </span>
              </header>
            </div>
          </div>
          <div className="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
            <div className="overflow-hidden border border-gray-200 rounded-xl">
              <Link href="/details">
                <div className="m-4 overflow-hidden rounded-xl">
                  <img alt="Placeholder" className="block w-full h-auto" src="img/categories-4.jpg" />
                </div>
              </Link>

              <header className="px-4 mb-4 leading-tight">
                <h1 className="text-lg">
                  <a className="font-semibold text-black no-underline hover:underline" href="#">
                    Website UI Kit
                  </a>
                </h1>
                <span className="block text-sm font-light text-gray-500 no-underline">
                  4,500 items
                </span>
              </header>
            </div>
          </div>
          <div className="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
            <div className="overflow-hidden border border-gray-200 rounded-xl">
              <Link href="/details">
                <div className="m-4 overflow-hidden rounded-xl">
                  <img alt="Placeholder" className="block w-full h-auto" src="img/categories-4.jpg" />
                </div>
              </Link>

              <header className="px-4 mb-4 leading-tight">
                <h1 className="text-lg">
                  <a className="font-semibold text-black no-underline hover:underline" href="#">
                    Website UI Kit
                  </a>
                </h1>
                <span className="block text-sm font-light text-gray-500 no-underline">
                  4,500 items
                </span>
              </header>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
