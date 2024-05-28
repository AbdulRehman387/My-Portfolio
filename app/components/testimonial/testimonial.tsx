import { IoIosArrowBack } from "react-icons/io"
import { IoIosArrowForward } from "react-icons/io"


const Testimonial = () => {
  return (
    <section className="bg-[#FFD4D0] flex justify-center gap-40 px-10 laptop:gap-x-20 tablet:gap-x-10 mobile:px-0">
        <div className="mt-44 cursor-pointer h-10 w-10 mobile:hidden">
          <IoIosArrowBack className="text-5xl hover:-translate-x-2 hover:scale-[1.15] transition-transform duration-150 ease-in-out" />
        </div>
        <div className="h-[414px] flex flex-col items-center tablet:gap-y-10 mobile:gap-y-14">
          <div className="text-center mt-[80px] w-[810px] h-[48px] laptop:w-auto tablet:w-auto mobile:w-[90%]">
            <h2 className="font-bold text-4xl text-[#1F1F1F]">Testimonials</h2>
            <p className="font-normal text-base mt-8 text-[#1F1F1F]">Abdul Rehman&apos;s designs are both visually captivating and highly effective. She transformed our website, enhancing user engagement and conversions. Her attention to detail and creative approach are top-notch. Highly recommended!</p>
          </div>
          <div className="mt-32 flex mobile:w-auto">
            <img className="mobile:w-10 mobile:h-10 mobile:relative mobile:top-6 mobile:left-2" src="./Testimonial.png" alt="Testimonial" />
            <p className="font-bold ml-4 relative top-6 mobile:top-8">John Smith </p>
            <p className="ml-1 relative top-6 mobile:top-8">/ CEO of XYZ Company</p>
          </div>
        </div>
        <div className="mt-44 cursor-pointer h-10 w-10 mobile:hidden">
          <IoIosArrowForward className="text-5xl hover:translate-x-2 hover:scale-[1.15] transition-transform duration-150 ease-in-out" />
        </div>
      </section>
  )
}

export default Testimonial