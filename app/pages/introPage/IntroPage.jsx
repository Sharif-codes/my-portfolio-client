import Image from "next/image"
import { GrFacebookOption, GrGithub, GrLinkedinOption, GrMailOption } from "react-icons/gr"
import img from "../../../public/sharif-1.png"
import Link from "next/link"
import { MdDownload, MdWifiCalling3 } from "react-icons/md"
import TypeName from "@/app/components/TypeName"

const IntroPage = () => {
    return (

        <div className="flex mt-20 gap-2 lg:gap-4 items-center justify-center">
            <div className="w-3/5 lg:w-1/2 space-y-1.5 lg:space-y-3 mx-auto">
                <div>
                    <h2 className="text-[15px] md:text-3xl font-bold text-orange-500">MD Shariful Islam Bhuyan</h2>
                 
                </div>
                <div>
                    <p className="text-xs md:text-2xl font-semibold">And I'm a <span className="text-orange-500"><TypeName></TypeName></span></p>
                </div>
                <div>
                    <p className="text-[8px] md:text-sm w-52  lg:w-100  ">I'm a fresh CSE graduate having strong affection to web developement with strong skills in HTML,CSS, JavaScript, Tailwind, React, ExpressJS,MongoDB etc. I have been enhancing my skills by continuously learning new technologies. Looking forward to develop my career as a full-stack web developer.</p>
                </div>

                <div className="flex gap-2 md:gap-8">
                    <button className="w-[25px] h-[25px] md:w-8 md:h-8 cursor-pointer border-orange-500  p-0.5 lg:p-1.5 rounded-full border flex justify-center items-center ">
                        <Link href={`https://www.facebook.com/bangladeshi.tiger.77`} target="_blank"><GrFacebookOption className="text-orange-500  text-sm lg:text-lg"></GrFacebookOption></Link> </button>


                    <button className="w-[25px] h-[25px] md:w-8 md:h-8 cursor-pointer border-orange-500  p-0.5 lg:p-1.5 rounded-full border flex justify-center items-center  ">
                        <Link href={`https://www.linkedin.com/in/sharif-bhuyan`} target="_blank"><GrLinkedinOption className="text-orange-500 text-sm lg:text-lg"></GrLinkedinOption></Link>  </button>

                    <button className="w-[25px] h-[25px] md:w-8 md:h-8 cursor-pointer border-orange-500  p-0.5 lg:p-1.5 rounded-full border flex justify-center items-center ">
                        <Link href={`mailto:sharifxenjia@gmail.com?subject=Hello%20Sharif&body=I%20want%20to%20connect%20with%20you.`}><GrMailOption className="text-orange-500 text-sm lg:text-lg"></GrMailOption></Link>  </button>
                    <button className="w-[25px] h-[25px] md:w-8 md:h-8 cursor-pointer border-orange-500  p-0.5 md:p-1.5 rounded-full border flex justify-center items-center"> <Link href={`https://github.com/Sharif-codes`}><GrGithub className="text-orange-500 text-sm md:text-lg"></GrGithub></Link>  </button>
                </div>
                <div className="flex gap-1 md:gap-4">
                    
                    <a 
                    href="https://drive.google.com/file/d/1gQiNXSOuvf04I3vVZsKV5YRanmJZ7QG3/view?usp=sharing"
                    download
                    className="btn btn-sm md:btn-md text-[10px] md:text-sm bg-orange-500 hover:bg-transparent hover:text-orange-500 rounded-md flex justify-center items-center"
                    > <MdDownload className="hidden md:flex text-sm md:text-lg"></MdDownload>  Download CV </a>
                    <Link href="tel:+8801777456044" className="flex items-center lg:gap-1 gap-x-0.5 text-[11px] md:text-lg"><MdWifiCalling3 className='cursor-pointer text-orange-500 text-sm lg:text-2xl' /> <span>+8801777456044</span></Link>
                   
                </div>
            </div>
            <div className="w-2/5 md:w-1/2 ml-0 md:ml-4  flex justify-center mask-image-bottom ">
                <Image
                    src={img}
                    alt="sharif"
                    height={400}
                    quality={100}
                    placeholder="blur"
                    className="image-fade-right"
                >


                </Image>
            </div>
        </div>
    )
}

export default IntroPage