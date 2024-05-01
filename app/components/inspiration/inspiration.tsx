"use client"
import { Card1, Card2 } from "../card2/card2"
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'

const Inspiration = () => {
  const [emblaRef] = useEmblaCarousel()
  return (
    <section className="bg-[#F7F7F7] h-[772px] flex flex-col items-center mobile:h-auto tablet:h-auto">
      <div className="flex flex-col items-center text-center mt-[80px] w-[810px] h-[150px] tablet:w-auto mobile:w-auto">
        <h2 className="font-bold text-4xl text-[#1F1F1F]">Design Insights and Inspiration</h2>
        <p className="font-normal text-lg mt-8 text-[#1F1F1F] tablet:w-[80%] mobile:w-[90%]">Discover industry insights, expert tips, and design inspiration. Stay updated with the latest trends in web design and user experience.</p>
      </div>
      <div className="flex justify-center gap-x-24 w-auto mt-6 laptop:gap-x-14 tablet:flex-col tablet:items-center tablet:mt-8 mobile:flex-col mobile:items-center mobile:mt-32 mobile:hidden">
        <Card1 path="/Card7.png" heading="Typography Tips for Design Success" text="Dive into the world of web typography and discover how to choose, pair, and optimize fonts for compelling and readable digital designs." />
        <Card1 path="/Card8.png" heading="Color Psychology in UX" text="Explore how color choices impact user emotions and decision-making in UX design." />
        <Card1 path="/Card9.png" heading="Boosting UX with Microinteractions" text="Discover the power of microinteractions in enhancing user experience and engagement." />
      </div>
      <div className="embla hidden w-[100%] mt-32 mobile:flex px-8 justify-center" ref={emblaRef}>
        <div className="embla__container w-[336px] flex gap-5">
          <Card2 path="/Card7.png" heading="Typography Tips for Design Success" text="Dive into the world of web typography and discover how to choose, pair, and optimize fonts for compelling and readable digital designs." />
          <Card2 path="/Card8.png" heading="Color Psychology in UX" text="Explore how color choices impact user emotions and decision-making in UX design." />
          <Card2 path="/Card9.png" heading="Boosting UX with Microinteractions" text="Discover the power of microinteractions in enhancing user experience and engagement." />
        </div>
      </div>
    </section>
  )
}

export default Inspiration