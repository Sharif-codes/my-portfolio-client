import { MdGroups2 } from "react-icons/md";
import { GiCycling } from "react-icons/gi";
import { IoBook, IoExtensionPuzzle, IoHeart, IoPulseSharp, IoTime} from "react-icons/io5";
const Hobby = () => {
    return (
        <div className="mt-2 flex flex-col justify-center items-center text-sm lg:text-md">
            <ul className="space-y-1">
                <li className="flex items-center gap-2 text-orange-400"> <span><MdGroups2 /> </span> A team player who loves to assist his team.</li>
                <li className="flex items-center gap-2 text-orange-400"> <span> <IoExtensionPuzzle /> </span>Interest in problem solving.</li>
                <li className="flex items-center gap-2 text-orange-400"> <span> <IoTime /></span> Managing time effectively.</li>

                <li className="flex items-center gap-2 text-orange-400"> <span> <IoHeart /></span>Having a positive mindset in every situation.</li>
                <li className="flex items-center gap-2 text-orange-400"> <span> <IoPulseSharp /></span>Maintaining sincerity and  proffessionalism in job.</li>
                <li className="flex items-center gap-2 text-orange-400"> <span> <IoBook /></span>Always learning mindset.</li>
                
            </ul>
        </div>
    );
};

export default Hobby;