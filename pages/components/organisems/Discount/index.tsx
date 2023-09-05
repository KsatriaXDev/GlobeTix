
// import React from 'react'
// import CardDiscount from '@/pages/components/molecules/CardDiscount'
// import Link from 'next/link'



// export default function index() {
//   return (

    
//     <>

    
//       <div className="container px-4 mx-auto my-16 md:px-12" suppressHydrationWarning>
//         <h2 className="mb-4 text-xl font-medium md:mb-0 md:text-lg">Discount</h2>

//         <div className="flex flex-wrap -mx-1 lg:-mx-4">

//         <CardDiscount title="Candi Borobudur, Daerah Istimewa Yogyakarta" thumbnail="Borobudur3" category="Jawa Timur"  />
//           <CardDiscount title="Candi Borobudur, Daerah Istimewa Yogyakarta" thumbnail="Borobudur3" category="Jawa Timur"  />
//           <CardDiscount title="Candi Borobudur, Daerah Istimewa Yogyakarta" thumbnail="Borobudur3" category="Jawa Timur"  />
//         </div>

//     </div>    
//     </>
//   )
// }


import React from 'react'
import CardDiscount from '@/pages/components/molecules/CardDiscount'
import Link from 'next/link'

const link = <Link href="/"></Link>


export default function index() {
  return (

    
    <>

    
      <div className="container px-4 mx-auto my-16 md:px-12" suppressHydrationWarning>
        <h2 className="mb-4 text-xl font-medium md:mb-0 md:text-lg">Discount</h2>

        <div className="flex flex-wrap -mx-1 lg:-mx-4">

        <CardDiscount title1="Candi Borobudur, Daerah Istimewa Yogyakarta" thumbnail1="Borobudur3" category1="Jawa Timur"  />
        <CardDiscount title1="Monas, DKI Jakarta" thumbnail1="monas1" category1="Jakarta" />



        </div>

    </div>    
    </>
  )
}
