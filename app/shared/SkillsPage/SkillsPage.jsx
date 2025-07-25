import Image from "next/image"; // If you're using Next.js
import htmlIcon from "../../../public/html_Icon.png";
import css from "../../../public/css.png";
import tailwind from "../../../public/tailwind.png";
import js from "../../../public/js.png";
import reactIcon from "../../../public/react.png";
import GithubIcon from "../../../public//github.png";
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
            percentage: "70% "
        },

    ]
    return (
        <div className="mx-4 lg:mx-50">
            <h2 className="text-3xl text-center py-8">My <span className="text-orange-500">SKills</span></h2>

            <div className="grid grid-cols-2">
                {
                    skills?.map(skill =>(
                        
                        <div key={skill.skillName} className="flex items-center gap-4 p-4 rounded-full w-fit">
                            {/* Icon */}
                            <div className="w-12 h-12 rounded-full overflow-hidden bg-white p-1">
                                <Image
                                    src={skill?.logo}
                                    alt="HTML5"
                                    width={48}
                                    height={48} />
                            </div>

                            {/* Text and Bar */}
                            <div className="flex-1 min-w-[300px]">
                                <div className="text-white font-semibold">{skill?.skillName}</div>
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