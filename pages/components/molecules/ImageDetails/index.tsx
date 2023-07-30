import React from 'react'

export default function ImageDetails() {
  return (
    <>
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
    </>
  )
}
