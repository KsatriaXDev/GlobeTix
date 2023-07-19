import React from 'react';

export default function Details() {
  return (
    <>
      <header>
        <h1><a href="index.html">Globe <span>Tix</span></a></h1>
        <div id="menu-bar" className="fa fa-bars"></div>
      </header>

      <section className="featured" id="featured">
        <h1 className="heading">Jakarta <span className="text-blue-800">"Monumen Nasional 'MONAS' "</span></h1>

        <div className="row">
          <div className="image-container">
            <div className="small-image">
              <img src="/img/item/Monas1.jpg" alt="" className="featured-image-3" />
              <img src="/img/item/Monas2.png" alt="" className="featured-image-3" />
              <img src="/img/item/Monas3.jpeg" alt="" className="featured-image-3" />
              <img src="/img/item/Monas4.png" alt="" className="featured-image-3" />
              <img src="/img/item/Monas5.png" alt="" className="featured-image-3" />
              <img src="/img/item/Monas6.png" alt="" className="featured-image-3" />
            </div>
            <div className="big-image">
              <img src="/img/item/Monas1.jpg" alt="" className="big-image-3" />
            </div>
          </div>

          <div className="content">
            <h3>Monas "Monumen Nasional"</h3>
            <div className="stars">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
            <p>Didirikan tahun 12 Juli 1975 oleh Soedarsono, Frederich Silaban dan Ir. Rooseno.</p>
            <p>Menara ini terletak persis di Pusat Kota Jakarta. Tugu Monas merupakan tugu kebanggaan bangsa Indonesia, selain itu monas juga menjadi salah satu pusat tempat wisata dan pusat pendidikan yang menarik bagi warga Indonesa baik yang di Jakarta maupun di luar Jakarta. Tujuan pembangunan tugu monas adalah untuk mengenang dan mengabadikan kebesaran perjuangan Bangsa Indonesia yang dikenal dengan Revolusi 17 Agustus 1945, dan juga sebagai wahana untuk membangkitkan semangat patriotisme generasi sekarang dan akan datang.</p>
            <p>Monas mulai dibangun pada bulan Agustus 1959. Keseluruhan bangunan Monas dirancang oleh para arsitek Indonesia yaitu Soedarsono, Frederich Silaban dan Ir. Rooseno. Pada tanggal 17 Agustus 1961, Monas diresmikan oleh Presiden Soekarno. Dan mulai dibuka untuk umum sejak tanggal 12 Juli 1975.</p>
            <div className="price">
              Rp15.000,00
              <span className="text-blue-800">Rp20.000,00</span>
            </div>
            <a href="Checkout.html" className="add-cart">Checkout</a>
            <a href="jawa.html" className="add-cart">Back</a>
          </div>
        </div>
      </section>
    </>
  );
}
