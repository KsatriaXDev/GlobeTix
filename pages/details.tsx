import React from 'react'
import Link from 'next/link';
import ImageDetails from './components/molecules/ImageDetails'

export default function Details() {
  return (
    <>
    <figcaption>
      <figure>
        <h1>
          <Link href="/">Globe
            <span className="font-bold text-blue-800 ">Tix</span>
          </Link>
        </h1>
        <div id="menu-bar" className="fa fa-bars"></div>
      </figure>

      <section className="featured" id="featured">
        <h1 className="heading_">Jakarta <span className="text-blue-800">"Monumen Nasional 'MONAS' "</span></h1>

        <div className="row">
         <ImageDetails />
          <div className="content">
            <h3>Monas "Monumen Nasional"</h3>
            <p>Didirikan tahun 12 Juli 1975 oleh Soedarsono, Frederich Silaban dan Ir. Rooseno.</p>
            <p>Menara ini terletak persis di Pusat Kota Jakarta. Tugu Monas merupakan tugu kebanggaan bangsa Indonesia, selain itu monas juga menjadi salah satu pusat tempat wisata dan pusat pendidikan yang menarik bagi warga Indonesa baik yang di Jakarta maupun di luar Jakarta. Tujuan pembangunan tugu monas adalah untuk mengenang dan mengabadikan kebesaran perjuangan Bangsa Indonesia yang dikenal dengan Revolusi 17 Agustus 1945, dan juga sebagai wahana untuk membangkitkan semangat patriotisme generasi sekarang dan akan datang.</p>
            <p>Monas mulai dibangun pada bulan Agustus 1959. Keseluruhan bangunan Monas dirancang oleh para arsitek Indonesia yaitu Soedarsono, Frederich Silaban dan Ir. Rooseno. Pada tanggal 17 Agustus 1961, Monas diresmikan oleh Presiden Soekarno. Dan mulai dibuka untuk umum sejak tanggal 12 Juli 1975.</p>
            <div className="price">
              Rp15.000,00
              <span className="text-blue-800">Rp20.000,00</span>
            </div>

            <Link href="/checkout" className="add-cart">Checkout</Link>
            <a href="jawa.html" className="add-cart">Back</a>
          </div>
        </div>
      </section>
    </figcaption>  
    </>
  );
}
