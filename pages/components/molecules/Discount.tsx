import React from 'react'

export default function Discount() {
  return (
    <>
    
    <div className="container px-4 mx-auto my-16 md:px-12">
        <h2 className="mb-4 text-xl font-medium md:mb-0 md:text-lg">Discount</h2>
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          <div className="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <div className="overflow-hidden border border-gray-200 rounded-xl">
                <div className="m-4 overflow-hidden rounded-xl">
                  <img alt="Placeholder" className="block w-full h-auto" src="/img/item/Monas1.jpg" />
                </div>
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
                <div className="m-4 overflow-hidden rounded-xl">
                  <img alt="Placeholder" className="block w-full h-auto" src="img/items-2.jpg" />
                </div>
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
                <div className="m-4 overflow-hidden rounded-xl">
                  <img alt="Placeholder" className="block w-full h-auto" src="img/items-3.jpg" />
                </div>
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
    </>
  )
}
