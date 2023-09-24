import React from "react";
import Dropdown from "../Elements/Dropdown";
import HomeText from "../Elements/HomeText";

import Image from "next/image";
import {HomeImg} from "../../../../public";
import FancyTestimonialsSlider from "../Elements/Testimonial";


type Props = {};

const Hero = (props: Props) => {
  const testimonials = [
    {
      img: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg",
      quote:
        "Booking my holiday tickets through GlobeTix was an absolute breeze! The user-friendly interface made it easy to find the best deals, and their customer support team was incredibly helpful when I had a few questions. I'll definitely be using this site for all my future travel plans.",
      name: "Kevin Pratama",
      role: "Customer",
    },
    {
      img: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg",
      quote:
        "I've been using GlobeTix for years now, and it never disappoints. The wide range of destinations and airlines to choose from ensures that I always find the perfect holiday deal. Plus, the regular promotions and discounts are a bonus!",
      name: "Jesslyn Prawira",
      role: "Customer",
    },
    {
      img: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg",
      quote:
        "Thanks to GlobeTix, my family and I had the most amazing holiday ever. The prices were unbeatable, and the booking process was a breeze. We had no worries, just pure enjoyment from start to finish.",
      name: "Kristine Wibowo",
      role: "Customer",
    },
  ];
  return (
    <>
      <div className="container flex flex-col lg:flex-row justify-center gap-40 mt-40">
        <div className="flex flex-col justify-center h-full items-center gap-5 mt-40">
          <HomeText />
          <Dropdown />
        </div>
        <div className="flex justify-center items-center h-full">
          <Image className="w-[600px] h-[700px] rounded-lg" src={HomeImg} alt="home-image" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-5 text-lg">
        <p className="text-xl font-semibold py-14">Here is some of our customer experience:</p>
        <FancyTestimonialsSlider testimonials={testimonials} />
      </div>
    </>
  );
};

export default Hero;