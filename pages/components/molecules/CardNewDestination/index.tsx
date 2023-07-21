import React from 'react'

export interface CardNewDestination {
  thumbnail: 'categories-1' | 'categories-2' | 'categories-3' | 'categories-4';
  title: string;
  category: string;
}

export default function CardNewDestination(props: CardNewDestination) {
  const { thumbnail, title, category } = props;

  return (
    <>
      <div className="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
        <div className="overflow-hidden border border-gray-200 rounded-xl">
          <a href="monas.html">
            <div className="m-4 overflow-hidden rounded-xl">
              <img alt="Placeholder" className="block w-full h-auto" src={`/img/${thumbnail}.jpg`} width={40} height={40} />
            </div>
          </a>
          <header className="px-4 mb-4 leading-tight">
            <h1 className="text-lg">
              <a className="font-semibold text-black no-underline hover:underline" href="monas.html">
                {title}
              </a>
            </h1>
            <span className="block text-sm font-light text-gray-500 no-underline">
              {category}
            </span>
          </header>
        </div>
      </div>
    </>
  )
}