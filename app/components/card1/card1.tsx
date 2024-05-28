import { cardType } from "@/app/types/componentsTypes"
import { Link } from "react-scroll"

const Card1 = (props:cardType) => {
  return (
    <div className="w-[354.67px] mobile:w-auto">
          <a href={props.link} target={props.link !== "/" ? "_blank":""}><img src={props.path} alt="Card" className="w-[354.67px] shadow-xl hover:scale-[1.07] transition-transform ease-in-out duration-200" /></a>
          <h3 className="font-bold text-xl mt-6">{props.heading}</h3>
          <p className="font-normal text-base mt-4">{props.text}</p>
        </div>
  )
}
const Card2 = (props:cardType) => {
  return (
    <div className="w-[354.67px] mobile:w-auto embla__slide px-5">
      <a href={props.link} target={props.link !== "/" ? "_blank":""}><img src={props.path} alt="Card" className="w-[354.67px] shadow-xl hover:scale-[1.07] transition-transform ease-in-out duration-200" /></a>
      <h3 className="font-bold text-xl mt-6">{props.heading}</h3>
      <p className="font-normal text-base mt-4">{props.text}</p>
    </div>
  )
}

export {Card1, Card2}