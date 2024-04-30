import { cardType } from "@/app/types/componentsTypes"

const Card2 = (props:cardType) => {
    return (
        <div className="bg-white w-[336px] h-[426px] relative laptop:w-[270px] tablet:w-[336px] tablet:mb-20 mobile:mb-20 text-[#1F1F1F] shadow-lg hover:scale-[1.05] ease-in-out duration-200">
            <img src={props.path} alt="Card7" />
            <p className="text-xs font-normal mt-8 ml-4 mr-04">August 15, 2023 / UX</p>
            <h3 className="font-bold ml-4 mr-4 mt-2">{props.heading}</h3>
            <p className="font-normal text-sm ml-4 mr-4 mt-2 h-[22%]">{props.text}</p>
            <p className="font-bold text-xs cursor-pointer absolute bottom-6 left-4 hover:translate-x-3 hover:scale-[1.1] transition-transform ease-in-out duration-150">Read More &gt;</p>
        </div>
    )
}

export default Card2