// import Link from 'next/link';
// import React from 'react'

// export interface CardDiscount {
//   thumbnail: 'Borobudur1' | 'Borobudur2' | 'Borobudur3';
//   title: string;
//   category: string;
// }

// export default function CardDiscount(props: CardDiscount) {
//   const { thumbnail, title, category } = props;

//   return (
//     <>
//       <div className="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
//         <div className="overflow-hidden border border-gray-200 rounded-xl">
//           <Link href="/details">
//             <div className="m-4 overflow-hidden rounded-xl">
//               <img alt="Placeholder" className="block w-full h-auto" src={`/img/item/${thumbnail}.jpg`} width={40} height={40} />
//             </div>
//           </Link>
//           <header className="px-4 mb-4 leading-tight">
//             <h1 className="text-lg">
//               <Link className="font-semibold text-black no-underline hover:underline" href="/details">
//                 {title}
//               </Link>
//             </h1>
//             <span className="block text-sm font-light text-gray-500 no-underline">
//               {category}
//             </span>
//           </header>
//         </div>
//       </div>

//     </>
//   )
// }

import Link from 'next/link';
import React from 'react'
import details, { Details1 } from '@/pages/details'


export interface CardDiscount {
  thumbnail1: 'Borobudur1' | 'Borobudur2' | 'Borobudur3';
  title1: string;
  category1: string;


}

export default function CardDiscount(props: CardDiscount) {
  const { thumbnail1, title1, category1 } = props;

  return (
    <>
      <div className="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        <div className="overflow-hidden border border-gray-200 rounded-xl">
          <Link href="/">
{/* I want to connect this one to details.tsx and to Details1 function */}
            <div className="m-4 overflow-hidden rounded-xl">
              <img alt="Placeholder" className="block w-full h-auto" src={`/img/item/${thumbnail1}.jpg`} width={40} height={40} />
            </div>
          </Link>
          <header className="px-4 mb-4 leading-tight">
            <h1 className="text-lg">
              <Link className="font-semibold text-black no-underline hover:underline" href="/details">
                {title1}
              </Link>
            </h1>
            <span className="block text-sm font-light text-gray-500 no-underline">
              {category1}
            </span>
          </header>
        </div>
      </div>

    </>
  )
}





export interface CardDiscount1 {

  thumbnail2: 'monas1' | 'monas2' | 'monas3';
  title2: string;
  category2: string;
}

export  function CardDiscount1 (props: CardDiscount1) {
  const { thumbnail2, title2, category2,  } = props;

  return (
    <>
      <div className="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        <div className="overflow-hidden border border-gray-200 rounded-xl">
          <Link href="/details">
            <div className="m-4 overflow-hidden rounded-xl">
              <img alt="Placeholder" className="block w-full h-auto" src={`/img/item/${thumbnail2}.jpg`} width={40} height={40} />
            </div>
          </Link>
          <header className="px-4 mb-4 leading-tight">
            <h1 className="text-lg">
              <Link className="font-semibold text-black no-underline hover:underline" href="/details">
                {title2}
              </Link>
            </h1>
            <span className="block text-sm font-light text-gray-500 no-underline">
              {category2}
            </span>
          </header>
        </div>
      </div>

    </>
  );
}

    