import Bar from "../perbar/perBar"

const Design = () => {
  return (
    <section id="skills" className="bg-[#F7F7F7] h-auto flex flex-col items-center">
      <div className="text-center mt-[60px] w-[810px] tablet:w-auto tablet:px-10 mobile:w-auto mobile:px-5 h-[48px]">
        <h2 className="font-bold text-4xl text-[#1F1F1F] mobile:text-3xl">Core Design Skills</h2>
        <p className="font-normal text-lg mt-8 text-[#1F1F1F]">I excel in essential design skills, creating visually stunning and functional digital experiences. From UI design to UX research, my passion is to craft effective and memorable digital solutions</p>
      </div>
      <div className="flex flex-wrap justify-center gap-x-36 gap-y-6 m-[135px] tablet:relative tablet:top-10 mobile:relative mobile:top-20 w-[85%] laptop:hidden">
        <Bar heading="Interaction Design" text="60%" />
        <Bar heading="Figma" text="95%" />
        <Bar heading="Usability Testing" text="70%" />
        <Bar heading="Prototyping" text="80%" />
        <Bar heading="User Research" text="45%" />
        <Bar heading="Information Architecture" text="50%" />
      </div>
      <div className="hidden w-[80%] justify-center gap-x-16 laptop:flex mt-36 mr-12 laptop:mb-10">
        <div className="text-xl font-bold flex flex-col gap-y-[38px] w-[270px]">
          <h3>Interaction Design</h3>
          <h3>Figma</h3>
          <h3>Usability Testing</h3>
          <h3>Prototyping</h3>
          <h3>User Research</h3>
          <h3>Information Architecture</h3>
        </div>
        <div className="flex flex-wrap justify-center gap-x-36 gap-y-6 w-[50%] laptop:justify-normal">
          <Bar heading="" text="60%" />
          <Bar heading="" text="95%" />
          <Bar heading="" text="70%" />
          <Bar heading="" text="80%" />
          <Bar heading="" text="45%" />
          <Bar heading="" text="50%" />
        </div>
      </div>
    </section>
  )
}

export default Design