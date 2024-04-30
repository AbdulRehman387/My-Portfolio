import { barType } from "@/app/types/componentsTypes"

const Bar = (props: barType) => {
    return (
        <div className="w-auto">
            <h3 className="font-bold text-xl w-auto">{props.heading}</h3>
            <div className="flex gap-5 group h-10 hover:scale-x-[1.03] hover:translate-x-2 transition-all ease-in-out duration-100">
                <div className="mt-4 bg-[#E1E1E1] h-[8px] w-[400px] mobile:w-[270px] group-hover:bg-[#FFD4D0] transition-all ease-in-out duration-100 rounded-md">
                    <div style={{ width: props.text }} className="bg-[#1F1F1F] h-[8px] group-hover:bg-[#FC3314] transition-all ease-in-out duration-100 rounded-md"></div>
                </div>
                <div className="font-bold text-lg relative top-1">
                    {props.text}
                </div>
            </div>
        </div>
    )
}

export default Bar