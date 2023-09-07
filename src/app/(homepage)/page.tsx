"use client"
import FooterWithSocialMediaIcons from "@/components/Homepage/Fragments/Footer";
import Hero from "@/components/Homepage/Fragments/Hero";
import FancyTestimonialsSlider from "@/components/Homepage/Elements/Testimonial";
import img1 from "../../../public/images/Borobudur1.jpeg"
import img2 from "../../../public/images/Borobudur2.jpeg"
import img3 from "../../../public/images/Borobudur3.jpg"

export default function Home() {
  const testimonials = [
    {
      img: img1,
      quote: "The ability to capture responses is a game-changer. If a user gets tired of the sign up and leaves, that data is still persisted. Additionally, it's great to select between formats.",
      name: 'Jessie J',
      role: 'Acme LTD'
    },
    {
      img: img2,
      quote: "Having the power to capture user feedback is revolutionary. Even if a participant abandons the sign-up process midway, their valuable input remains intact.",
      name: 'Nick V',
      role: 'Malika Inc.'
    },
    {
      img: img3,
      quote: "The functionality to capture responses is a true game-changer. Even if a user becomes fatigued during sign-up and abandons the process, their information remains stored.",
      name: 'Amelia W',
      role: 'Panda AI'
    }
  ]

  return (
    <div className="flex flex-col justify-between items-center gap-60 w-screen min-h-screen overflow-x-hidden">
      <Hero />
      <div className="flex flex-col justify-center items-center gap-5 text-lg ">
        <p>Here is some of our customer experience:</p>
        <FancyTestimonialsSlider testimonials={testimonials} />
      </div>
      <FooterWithSocialMediaIcons />
    </div>
  )
}
