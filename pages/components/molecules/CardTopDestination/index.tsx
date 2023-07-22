import Link from "next/link";
import React from "react";

export interface CardTopDestination {
  thumbnail: 'Tamansafari4' | 'monas1' | 'Borobudur3';
  title: string;
  category: string;
}

export default function CardTopDestination(props: CardTopDestination) {
  const { thumbnail, title, category } = props;
  return (
    <>
      <div className="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
        <div className="overflow-hidden border border-gray-200 rounded-xl">
          <Link href='/details'>
            <div className="m-4 overflow-hidden rounded-xl">
              <img alt="Placeholder" className="block w-full h-auto" src={`/img/item/${thumbnail}.jpg`} width={40} height={40}  />
            </div>
          </Link>
          <header className="px-4 mb-4 leading-tight">
            <h1 className="text-lg">
              <Link className="font-semibold text-black no-underline hover:underline" href="/details">
                {title}
              </Link>
            </h1>
            <span className="block text-sm font-light text-gray-500 no-underline">{category}</span>
          </header>
        </div>
      </div>
    </>
  );
}
