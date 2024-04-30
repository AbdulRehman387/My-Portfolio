import { FaTwitter, FaInstagram, FaWhatsapp, FaFacebookF } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="h-[359px] bg-[#1F1F1F] text-white flex flex-col justify-center items-center gap-y-16">
        <div className="flex justify-center items-center gap-x-32 w-[764px] tablet:w-[100%] tablet:gap-x-14 tablet:px-0 mobile:w-auto mobile:flex-col mobile:gap-y-3 mobile:relative top-5">
          <div className="flex gap-x-10 font-bold text-xl mobile:flex-col mobile:items-center mobile:gap-y-3">
            <Link href="/" className="hover:scale-y-[1.2] hover:-translate-y-[3px] transition-transform ease-in-out duration-150">About</Link>
            <Link href="/" className="hover:scale-y-[1.2] hover:-translate-y-[3px] transition-transform ease-in-out duration-150">Services</Link>
          </div>
          <div className="tablet:w-32 mobile:order-first">
            <img src="./Logo2.png" alt="Logo" className="cursor-pointer" />
          </div>
          <div className="flex gap-x-10 font-bold text-xl mobile:flex-col mobile:items-center mobile:gap-y-3">
            <Link href="/" className="hover:scale-y-[1.2] hover:-translate-y-[3px] transition-transform ease-in-out duration-150">Portfolio</Link>
            <Link href="/" className="hover:scale-y-[1.2] hover:-translate-y-[3px] transition-transform ease-in-out duration-150">Blog</Link>
          </div>
        </div>
        <div className="ml-3 mobile:relative mobile:bottom-3">
          <p>Follow me on social media:</p>
          <div className="flex gap-x-2 items-center justify-center mt-5">
            <div className="flex justify-center items-center h-12 w-12 hover:scale-[1.25] transition-transform ease-in-out duration-150 cursor-pointer"><FaTwitter className="text-2xl" /></div>
            <div className="flex justify-center items-center h-12 w-12 hover:scale-[1.25] transition-transform ease-in-out duration-150 cursor-pointer"><FaInstagram className="text-2xl hover:scale-[1.2] transition-transform ease-in-out duration-100" /></div>
            <div className="flex justify-center items-center h-12 w-12 hover:scale-[1.25] transition-transform ease-in-out duration-150 cursor-pointer"><FaWhatsapp className="text-2xl hover:scale-[1.2] transition-transform ease-in-out duration-100" /></div>
            <div className="flex justify-center items-center h-12 w-12 hover:scale-[1.25] transition-transform ease-in-out duration-150 cursor-pointer"><FaFacebookF className="text-2xl hover:scale-[1.2] transition-transform ease-in-out duration-100" /></div>
          </div>
        </div>
      </section>
  )
}

export default Footer