import Image from "next/image"; // If you're using Next.js
import htmlIcon from "../../../public/html_Icon.png";
import css from "../../../public/css.png";
import tailwind from "../../../public/tailwind.png";
import js from "../../../public/js.png";
import reactIcon from "../../../public/react.png";
import GithubIcon from "../../../public/github.png";
import nodeIcon from "../../../public/node.png";
import mongo from "../../../public/mongo.png";

const SkillsPage = () => {
    const skills = [
        {
            skillName: "HTML- 5",
            logo: htmlIcon,
            percentage: "90% "
        },
        {
            skillName: "CSS",
            logo: css,
            percentage: "80% "
        },
        {
            skillName: "Tailwind",
            logo: tailwind,
            percentage: "80% "
        },
        {
            skillName: "Javascript",
            logo: js,
            percentage: "80% "
        },
        {
            skillName: "React",
            logo: reactIcon,
            percentage: "90% "
        },
        {
            skillName: "Github",
            logo: GithubIcon,
            percentage: "60% "
        },
        {
            skillName: "Node JS",
            logo: nodeIcon,
            percentage: "60%"
        },
        {
            skillName: "MongoDB",
            logo: mongo,
            percentage: "50%"
        },

    ]
    return (
        <div className="mx-2 lg:mx-50 py-5 md:py-0">
            <h2 className="text-xl lg:text-3xl text-center py-4 lg:py-8">My <span className="text-orange-500">SKills</span></h2>

            <div className="grid grid-cols-2 ">
                {
                    skills?.map(skill =>(
                        
                        <div  key={skill.skillName} className="flex items-center justify-center gap-1 md:gap-4 p-2 md:p-4 rounded-full w-fit">
                            {/* Icon */}
                            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full overflow-hidden bg-white p-1">
                                <Image
                                    src={skill?.logo}
                                    alt="HTML5"
                                    width={50}
                                    height={50} />
                            </div>

                            {/* Text and Bar */}
                            <div className="flex-1 min-w-[115px] md:min-w-[300px]">
                                <div className=" font-semibold text-xs md:text-md">{skill?.skillName}</div>
                                <div className="relative mt-1 h-4 w-full rounded-full bg-gray-800">
                                    <div
                                        className="h-full rounded-full bg-cyan-400"
                                        style={{ width: skill?.percentage }}
                                    ></div>
                                    <span className="absolute right-2 top-0 text-white text-xs h-full flex items-center">
                                        {skill?.percentage}
                                    </span>
                                </div>
                            </div>
                        </div>)
                    )
                }

            </div>
        </div>
    );
};

export default SkillsPage;