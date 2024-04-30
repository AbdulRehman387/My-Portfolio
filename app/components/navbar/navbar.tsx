"use client"
// import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-scroll';

const navbar = () => {
    const [sidebar, setSidebar] = useState(false);
    let showSidebar = () => {
        setSidebar(true);
    }
    let hideSidebar = () => {
        setSidebar(false);
    }
    return (
        <main>
            <nav className="flex justify-evenly items-center bg-pink w-full mobile:justify-between mobile:px-5 tablet:px-10 tablet:justify-between py-10 mobile:py-5">
                <div>
                    <img src="Logo.png" alt="Logo" className="cursor-pointer" />
                </div>
                <div className="flex justify-between items-center w-[30%] mobile:hidden tablet:hidden text-lg font-extrabold">
                    <div className="hover:scale-y-[1.2] hover:-translate-y-[3px] transition-transform ease-in-out duration-150"><Link href="/" activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link></div>
                    <div className="hover:scale-y-[1.2] hover:-translate-y-[3px] transition-transform ease-in-out duration-150"><Link href="/" activeClass="active" to="services" spy={true} smooth={true} offset={50} duration={500}>Services</Link></div>
                    <div className="hover:scale-y-[1.2] hover:-translate-y-[3px] transition-transform ease-in-out duration-150"><Link href="/" activeClass="active" to="portfolio" spy={true} smooth={true} offset={50} duration={500}>Portfolio</Link></div>
                    <div className="hover:scale-y-[1.2] hover:-translate-y-[3px] transition-transform ease-in-out duration-150"><Link href="/" activeClass="active" to="skills" spy={true} smooth={true} offset={50} duration={500}>Skills</Link></div>
                </div>
                <div className="flex justify-between items-center">
                    <button className="mobile:hidden tablet:hidden text-base font-extrabold text-white bg-dark px-6 py-3 hover:scale-[1.04] transition-transform ease-in-out duration-150"><Link href="/" activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}>Let's Talk</Link></button>
                    <button className="hover:scale-[1.2] transition-transform ease-in-out duration-150"><FaBars onClick={showSidebar} className="text-2xl hidden mobile:block tablet:block cursor-pointer" /></button>
                </div>
            </nav>

            <nav style={{ transform: sidebar ? "translateX(0%)" : "translateX(100%)" }} id="sidebar" className="flex flex-col items-center bg-pink fixed top-0 right-0 h-[100vh] w-[100vw] text-lg font-extrabold transition-all ease-in-out duration-300 z-10">
                <RxCross2 onClick={hideSidebar} className="mobile:mt-6 tablet:mt-12 absolute right-3 tablet:right-8 text-4xl cursor-pointer hover:scale-[1.2] transition-transform ease-in-out duration-150" />
                <div className="px-[42vw] py-10 border-gray-200 border-b-2 hover:bg-[#facfcb] border-t-2 mt-28"><Link href="/" to="">About</Link></div>
                <div className="px-[39vw] py-10 border-b-2 hover:bg-[#facfcb]"><Link href="/" to="">Services</Link></div>
                <div className="px-[39vw] py-10 border-b-2 hover:bg-[#facfcb]"><Link href="/" to="">Portfolio</Link></div>
                <div className="px-[44vw] py-10 border-b-2 hover:bg-[#facfcb]"><Link href="/" to="">Blog</Link></div>
                <button className=" mt-14 w-80 rounded-xl py-4 text-white bg-dark hover:scale-[1.04] transition-transform ease-in-out duration-150">Let's Talk</button>
            </nav>
        </main>
    )
}

export default navbar