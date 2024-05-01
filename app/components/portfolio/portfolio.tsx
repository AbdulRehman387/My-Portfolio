"use client"
import { Card1, Card2 } from "../card1/card1"
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'

const Portfolio = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true })
  return (
    <section id="portfolio" className="h-auto bg-[#F7F7F7]">
      <div className="bg-[#FFD4D0] h-[400px] flex flex-col items-center">
        <div className="text-center mt-[60px] w-[810px] h-[48px] tablet:w-auto tablet:px-12 mobile:w-auto mobile:px-5">
          <h2 className="font-bold text-4xl text-[#1F1F1F]">My Portfolio</h2>
          <p className="font-normal text-lg mt-8 text-[#1F1F1F]">Explore my design services, from user interface and experience to prototyping and testing. Let&apos;s craft exceptional digital experiences together.</p>
        </div>
      </div>
      <div className="flex justify-center relative bottom-24 mobile:hidden">
        <div className="flex flex-wrap justify-center gap-20 w-[85%] tablet:w-[95%] tablet:gap-x-5 tablet:gap-y-16 mobile:gap-y-12">
          <Card1 path="/Card1.png" heading="Educational Platform" text="Web Design / Usability Testing" />
          <Card1 path="/Card2.png" heading="Travel App Design" text="UX Research / App Design" />
          <Card1 path="/Card3.png" heading="Personal Page" text="Web Design" />
          <Card1 path="/Card4.png" heading="Furniture Mobile App" text="App Design" />
          <Card1 path="/Card5.png" heading="Coffee House Landing Page" text="UX Research / Web Design" />
          <Card1 path="/Card6.png" heading="Home Services Page" text="Web Design / Marketing" />
        </div>
      </div>
      <div className="relative bottom-24 hidden mobile:flex justify-center items-center embla" ref={emblaRef}>
        <div className="embla__container w-[90%]">
        <Card2 path="/Card1.png" heading="Educational Platform" text="Web Design / Usability Testing" />
        <Card2 path="/Card2.png" heading="Travel App Design" text="UX Research / App Design" />
        <Card2 path="/Card3.png" heading="Personal Page" text="Web Design" />
        <Card2 path="/Card4.png" heading="Furniture Mobile App" text="App Design" />
        <Card2 path="/Card5.png" heading="Coffee House Landing Page" text="UX Research / Web Design" />
        <Card2 path="/Card6.png" heading="Home Services Page" text="Web Design / Marketing" />
        </div>
      </div>
    </section>

  )
}

export default Portfolio