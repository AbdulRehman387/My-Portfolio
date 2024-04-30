import Button from "../button/button"
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section className="bg-pink flex justify-center gap-x-5 relative tablet:flex-col tablet:justify-center tablet:gap-y-12 tablet:pt-[58px] items-center mobile:flex-col mobile:justify-center mobile:gap-16 h-auto mobile:h-auto tablet:h-auto mobile:pt-16">
            <div className="w-[30%] laptop:w-[40%] tablet:w-[550px] mobile:w-[350px]">
                <h3 className="text-3xl">UX Designer</h3>
                <h1 className="text-6xl font-bold mt-10 laptop:text-5xl mobile:text-5xl">Hi There, I'm</h1>
                <h1 className="text-6xl font-bold text-red mt-5 laptop:text-5xl mobile:text-6xl">Abdul Rehman</h1>
                <p className="mt-7 text-lg mobile:mt-10 mobile:text-xl">Welcome to my portfolio of captivating digital experiences. Explore my work and let's create something extraordinary together.</p>
                <div className="w-full flex gap-x-5 mt-10 tablet:gap-0 tablet:justify-evenly mobile:flex-col mobile:items-center mobile:gap-y-5 mobile:mt-16 mb-5">
                    <button className="text-base font-extrabold text-white bg-black w-44 py-3 mobile:py-4 mobile:w-80 mobile:rounded-xl hover:scale-[1.04] transition-transform ease-in-out duration-150">Hire Me</button>
                    <button className="text-base font-extrabold text-black bg-white w-44 py-3 border border-black tablet:mr-10 mobile:py-4 mobile:w-80 mobile:rounded-xl hover:scale-[1.04] transition-transform ease-in-out duration-150">Portfolio</button>
                </div>
            </div>
            <div className="w-[40%] laptop:w-[50%] tablet:w-auto mobile:w-auto">
                <img className="" src="./Image.png" alt="Image" />
            </div>
        </section>
    )
}

export default Hero