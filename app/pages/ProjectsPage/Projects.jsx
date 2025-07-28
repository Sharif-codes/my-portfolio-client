import Image from "next/image";
import projects from "../../../app/data/projectData.json"
import Link from "next/link";

const Projects = () => {

    return (
        <div className="mx-4 lg:mx-50 py-5 lg:py-0">
            <h2 className="text-xl lg:text-3xl text-center py-3 lg:py-8">My <span className="text-orange-500">Projects</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-4">
                {
                    projects?.map(project => (

                        <div key={project.id} className="relative group  ">
                            <Image
                                src={project.photo}
                                alt="domain_hub"
                                width={600}
                                height={200}
                                quality={100}
                                className="w-full h-full rounded-lg object-cover group-hover:opacity-15 transition-opacity duration-500"
                            >
                            </Image>
                            <div className="absolute inset-0  transition-normal  flex gap-4 flex-col items-center justify-center opacity-0 group-hover:opacity-90 transition-opacity duration-200">

                                <Link href={project.live_link} target="_blank">
                                    <button className="rounded-sm cursor-pointer w-16 bg-orange-400">Live</button>
                                </Link>
                                <div className="flex gap-4">
                                    <Link href={project.client} target="_blank">
                                        <button className="rounded-sm cursor-pointer w-16 bg-sky-400">Client</button>
                                    </Link>
                                    <Link href={project.server} target="_blank">
                                        <button className="rounded-sm cursor-pointer w-16 bg-purple-400">Server</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>


    );
};

export default Projects;