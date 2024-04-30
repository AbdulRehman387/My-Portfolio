const About = () => {
  return (
    <section id="about" className="bg-[#1F1F1F] h-auto flex flex-col items-center px-5 mobile:gap-y-20">
        <div className="text-center mt-[80px] w-[820px] h-[150px] tablet:w-auto mobile:w-auto">
          <h2 className="font-bold text-4xl text-white">About Me</h2>
          <p className="font-normal text-lg mt-8 text-white w-auto tablet:text-base mobile:text-base">I&apos;m Abdul Rehman, a UI/UX designer dedicated to crafting intuitive and visually stunning digital experiences. With a passion for user-centric design, I transform ideas into functional and beautiful interfaces. Let&apos;s collaborate and shape the future of design together.</p>
        </div>
        <div className="flex justify-around w-[70%] mt-6 tablet:w-[100%] mobile:flex-col mobile:gap-y-5">
          <div>
            <p className="text-[64px] font-bold text-center text-[#FFD4D0]">502</p>
            <p className="text-center font-bold text-lg text-white">Projects Done</p>
          </div>
          <div>
            <p className="text-[64px] font-bold text-center text-[#FFD4D0]">10+</p>
            <p className="text-center font-bold text-lg text-white">Years of Experience</p>
          </div>
          <div className="mb-16">
            <p className="text-[64px] font-bold text-center text-[#FFD4D0]">273+</p>
            <p className="text-center font-bold text-lg text-white">Clients Served</p>
          </div>
        </div>
      </section>
  )
}

export default About