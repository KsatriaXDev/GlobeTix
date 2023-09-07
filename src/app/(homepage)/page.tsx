"use client"
import FooterWithSocialMediaIcons from "@/components/Homepage/Fragments/Footer";
import Hero from "@/components/Homepage/Fragments/Hero";
import Testimonial from "@/components/Homepage/Fragments/Testimonial";

export default function Home() {
  return (
    <div className="flex flex-col justify-between items-center gap-20 w-screen min-h-screen overflow-x-hidden">
      <Hero />
      <Testimonial />
      <FooterWithSocialMediaIcons />
    </div>
  )
}
