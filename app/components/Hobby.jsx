import { MdOutlineSportsCricket, MdOutlineTour } from "react-icons/md";
import { GiCycling } from "react-icons/gi";

const Hobby = () => {
    return (
        <div className="mt-2 flex flex-col justify-center items-center text-sm lg:text-md">
            <ul className="space-y-1">
                <li className="flex items-center gap-1 text-orange-400"> <span><MdOutlineTour /> </span>  Travelling</li>
                <li className="flex items-center gap-1 text-orange-400"> <span> <MdOutlineSportsCricket /> </span>  Playing Cricket</li>
                <li className="flex items-center gap-1 text-orange-400"> <span> <GiCycling /> </span> Cycling</li>
                
            </ul>
        </div>
    );
};

export default Hobby;