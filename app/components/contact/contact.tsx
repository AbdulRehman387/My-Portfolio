"use client"
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMail, IoLocationSharp } from "react-icons/io5";
import { FaTwitter, FaInstagram, FaWhatsapp, FaFacebookF } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState(false)
  const showForm = () => {
    setForm(true)
  }
  const hideForm = () => {
    setForm(false)
  }
  return (
    <main id="contact" className="relative">
      <section className="bg-[#FFD4D0] h-[715px] flex justify-around items-center laptop:px-14 mobile:px-10">
        <div className="w-[566px] h-[467px] flex flex-col gap-7 laptop:w-auto tablet:w-[70vw] mobile:w-auto tablet:justify-center mobile:-mt-20">
          <div>
            <h2 className="text-4xl font-bold text-[#1F1F1F]">Get in Touch</h2>
            <p className="text-base font-normal text-[#1F1F1F] mt-5 laptop:w-[70%] tablet:w-[70%] mobile:h-20">Have a question or a project in mind? I'd love to hear from you. Let's chat and make something amazing together</p>
          </div>
          <div>
            <button onClick={showForm} className="hidden tablet:block mobile:block text-base font-extrabold text-white bg-dark px-6 py-3 mt-5">Contact Me</button>
          </div>
          <div className="flex gap-4 mt-10 group cursor-default">
            <BiSolidPhoneCall className="text-2xl group-hover:scale-[1.25] transition-transform ease-in-out duration-150" />
            <p>+92 321 7652706</p>
          </div>
          <div className="flex gap-4 group cursor-default">
            <IoMail className="text-2xl group-hover:scale-[1.25] transition-transform ease-in-out duration-150" />
            <p>abdulrehman03082007@gmail.com</p>
          </div>
          <div className="flex gap-4 group cursor-default laptop:w-[75%] laptop:h-20 tablet:w-[75%]">
            <IoLocationSharp className="text-2xl mobile:w-10 tablet:w-10 group-hover:scale-[1.3] transition-transform ease-in-out duration-150" />
            <p className="">House no 1330-C, Haji Chowk, Peoples Colony no 2, Faisalabad.</p>
          </div>
          <div className="flex gap-x-5 mt-20 laptop:mt-10 mobile:mt-5">
            <div className="flex justify-center items-center h-12 w-12 hover:scale-[1.25] transition-transform ease-in-out duration-150 cursor-pointer"><FaTwitter className="text-2xl" /></div>
            <div className="flex justify-center items-center h-12 w-12 hover:scale-[1.25] transition-transform ease-in-out duration-150 cursor-pointer"><FaInstagram className="text-2xl hover:scale-[1.2] transition-transform ease-in-out duration-100" /></div>
            <div className="flex justify-center items-center h-12 w-12 hover:scale-[1.25] transition-transform ease-in-out duration-150 cursor-pointer"><FaWhatsapp className="text-2xl hover:scale-[1.2] transition-transform ease-in-out duration-100" /></div>
            <div className="flex justify-center items-center h-12 w-12 hover:scale-[1.25] transition-transform ease-in-out duration-150 cursor-pointer"><FaFacebookF className="text-2xl hover:scale-[1.2] transition-transform ease-in-out duration-100" /></div>
          </div>
        </div>

        <div className="w-[566px] h-[467px] flex flex-col gap-y-7 tablet:hidden mobile:hidden laptop:mt-10">
          <input type="text" name="" id="" placeholder="First Name" className="py-3.5 px-4 outline-none" />
          <input type="email" name="" id="" placeholder="Email" className="py-3.5 px-4 outline-none" />
          <input type="text" name="" id="" placeholder="Phone Number" className="py-3.5 px-4 outline-none" />
          <textarea name="" id="" placeholder="Your Message" cols={30} rows={7} className="px-4 py-3.5"></textarea>
          <button className="py-3 px-14 bg-[#1F1F1F] text-white w-[233px] h-[48px] hover:scale-[1.04] transition-transform ease-in-out duration-150">Send Message</button>
        </div>
      </section>
      <div style={{ transform: form ? "translateX(0%)" : "translateX(100%)" }} className="w-[100vw] h-[100vh] flex flex-col gap-y-7 fixed top-0 right-0 px-10 bg-pink translate-x-[100%] transition-all ease-in-out duration-300 z-10">
        <RxCross2 onClick={hideForm} className="mobile:mt-6 tablet:mt-12 absolute right-3 tablet:right-8 text-4xl cursor-pointer" />
        <input type="text" name="" id="" placeholder="First Name" className="py-3.5 px-4 outline-none mt-28" />
        <input type="email" name="" id="" placeholder="Email" className="py-3.5 px-4 outline-none" />
        <input type="text" name="" id="" placeholder="Phone Number" className="py-3.5 px-4 outline-none" />
        <textarea name="" id="" placeholder="Your Message" cols={30} rows={7} className="px-4 py-3.5"></textarea>
        <button className="py-3 px-14 bg-[#1F1F1F] text-white w-[233px] h-[48px] hover:scale-[1.04] transition-transform ease-in-out duration-150">Send Message</button>
      </div>
    </main>
  )
}

export default Contact