const Services = () => {
  return (
    <section id="services" className="bg-white h-auto flex flex-col items-center">
        <div className="text-center mt-[80px] w-[810px] h-[48px] laptop:w-auto laptop:px-32 tablet:w-auto tablet:px-10 mobile:w-auto mobile:px-5">
          <h2 className="font-bold text-4xl text-[#1F1F1F]">Services</h2>
          <p className="font-normal text-lg mt-8 text-[#1F1F1F]">Explore my design services, from user interface and experience to prototyping and testing. Let&apos;s craft exceptional digital experiences together.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-16 w-[90%] mt-32 bg-white laptop:gap-x-32 laptop:gap-y-16 laptop:w-[80%] tablet:w-[100%] tablet:gap-x-10 tablet:gap-y-10 mobile:flex-col mobile:items-center mobile:gap-y-12 mobile:mt-52 mb-16">
          <div className="w-[20%] laptop:w-[300px] tablet:w-[40%] tablet:px-5 mobile:w-[80%]">
            <img src="./Vector1.png" alt="Vector1" className="hover:scale-[1.1] transition-transform ease-in-out duration-100" />
            <h3 className="font-bold text-xl mt-6">Design</h3>
            <p className="font-normal text-base mt-6">I specialize in web development and design, creating visually appealing, user-friendly digital experiences.</p>
          </div>
          <div className="w-[20%] laptop:w-[300px] tablet:w-[40%] tablet:px-5 mobile:w-[80%]">
            <img src="./Vector2.png" alt="Vector2" className="hover:scale-[1.1] transition-transform ease-in-out duration-100" />
            <h3 className="font-bold text-xl mt-6">Branding</h3>
            <p className="font-normal text-base mt-6">I&apos;m a branding expert, crafting unique visual identities that tell your story and resonate with your audience.</p>
          </div>
          <div className="w-[20%] laptop:w-[300px] tablet:w-[40%] tablet:px-5 mobile:w-[80%] tablet:mb-16 laptop:mb-16">
            <img src="./Vector3.png" alt="Vector3" className="hover:scale-[1.1] transition-transform ease-in-out duration-100" />
            <h3 className="font-bold text-xl mt-6">UX Research</h3>
            <p className="font-normal text-base mt-6">I specialize in user experience research, collaborating on web development, and ensuring user-friendly digital products.</p>
          </div>
          <div className="w-[20%] laptop:w-[300px] tablet:w-[40%] tablet:px-5 mobile:w-[80%] mobile:mb-16 tablet:mb-16 laptop:mb-16">
            <img src="./Vector4.png" alt="Vector4" className="hover:scale-[1.1] transition-transform ease-in-out duration-100" />
            <h3 className="font-bold text-xl mt-6">Usability Testing</h3>
            <p className="font-normal text-base mt-6">I perform usability testing and optimize designs websites based on real-user feedback for seamless interactions.</p>
          </div>
        </div>
      </section>
  )
}

export default Services