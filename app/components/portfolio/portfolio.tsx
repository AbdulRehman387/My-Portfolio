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
          <Card1 path="/ExploreSkills.png" heading="Educational Platform" text="Web Design" link="https://explore-skills-website.vercel.app/" />
          <Card1 path="/TodoList.png" heading="Todo List App" text="Productivity Tool / Web Design" link="https://todo-list-app-ivory-three.vercel.app/" />
          <Card1 path="/MyPortfolio.png" heading="Personal Portfolio" text="Web Design" link="/" />
          <Card1 path="/Quiz.png" heading="Quiz App" text="Educational Tool" link="https://quiz-app-plum-three.vercel.app/" />
          <Card1 path="/ExpenseTracker.png" heading="Expense Tracker App" text="Productivity Tool / Web Design" link="https://expense-tracker-app-theta-mauve.vercel.app/" />
          <Card1 path="/Calculator.png" heading="Calculator App" text="Educational Tool" link="https://calculator-app-delta-sooty.vercel.app/" />
        </div>
      </div>
      <div className="relative bottom-24 hidden mobile:flex justify-center items-center embla" ref={emblaRef}>
        <div className="embla__container w-[90%]">
          <Card2 path="/ExploreSkills.png" heading="Educational Platform" text="Web Design" link="https://explore-skills-website.vercel.app/" />
          <Card2 path="/TodoList.png" heading="Todo List App" text="Productivity Tool / Web Design" link="https://todo-list-app-ivory-three.vercel.app/" />
          <Card2 path="/MyPortfolio.png" heading="Personal Portfolio" text="Web Design" link="/" />
          <Card2 path="/Quiz.png" heading="Quiz App" text="Educational Tool" link="https://quiz-app-plum-three.vercel.app/" />
          <Card2 path="/ExpenseTracker.png" heading="Expense Tracker App" text="Productivity Tool / Web Design" link="https://expense-tracker-app-theta-mauve.vercel.app/" />
          <Card2 path="/Calculator.png" heading="Calculator App" text="Educational Tool" link="https://calculator-app-delta-sooty.vercel.app/" />

        </div>
      </div>
    </section>

  )
}

export default Portfolio