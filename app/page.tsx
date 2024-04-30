import Navbar from "./components/navbar/navbar"
import Hero from "./components/hero/hero"
import About from "./components/about/about"
import Services from "./components/services/services"
import Portfolio from "./components/portfolio/portfolio"
import Design from "./components/design/design"
import Testimonial from "./components/testimonial/testimonial"
import Inspiration from "./components/inspiration/inspiration"
import Contact from "./components/contact/contact"
import Footer from "./components/footer/footer"

const Page = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <div className="h-[1px] bg-black w-[100%]"></div>
      <Design />
      <Testimonial />
      <div className="h-[1px] bg-black w-[100%]"></div>
      <Inspiration />
      <Contact />
      <Footer />
    </main>
  )
}

export default Page