import Image from "next/image"
import { GrFacebookOption, GrGithub, GrLinkedinOption, GrMailOption } from "react-icons/gr"
import img from "../../../public/sharif-1.png"
import Link from "next/link"
import { MdWifiCalling3 } from "react-icons/md"
import TypeName from "@/app/components/TypeName"

const IntroPage = () => {
    return (

        <div className="flex flex-col-reverse  lg:flex-row mt-20 gap-4 items-center justify-center">
            <div className="w-1/2 space-y-3 mx-auto">
                <div>
                    
                    <TypeName></TypeName>
                </div>
                <div>
                    <p className="text-2xl font-semibold">And I'm a <span className="text-orange-500">Web Developer</span></p>
                </div>
                <div>
                    <p className="text-sm w-100 text-justify ">I'm a fresh CSE graduate having strong affection to web developement with strong skills in HTML,CSS, JavaScript, Tailwind, React, ExpressJS,MongoDB etc. I have been enhancing my skills by continuously learning new technologies and developing projects by my own for last two years. Looking forward to develop my career as a full-stack web developer.</p>
                </div>

                <div className="flex gap-4">
                    <button className="w-8 cursor-pointer border-orange-500 p-1.5 rounded-full border ">
                        <Link href={`https://www.facebook.com/bangladeshi.tiger.77`} target="_blank"><GrFacebookOption className="text-orange-500 "></GrFacebookOption></Link> </button>
                    <button className="w-8 cursor-pointer border-orange-500 p-1.5 rounded-full border">
                        <Link href={`https://www.linkedin.com/in/sharif-bhuyan`} target="_blank"><GrLinkedinOption className="text-orange-500 text-lg"></GrLinkedinOption></Link>  </button>

                    <button className="w-8 cursor-pointer border-orange-500 p-1.5 rounded-full border">
                        <Link href={`mailto:sharifxenjia@gmail.com?subject=Hello%20Sharif&body=I%20want%20to%20connect%20with%20you.`}><GrMailOption className="text-orange-500 text-lg"></GrMailOption></Link>  </button>
                    <button className="w-8 cursor-pointer border-orange-500 p-1.5 rounded-full border"> <Link href={`https://github.com/Sharif-codes`}><GrGithub className="text-orange-500 text-lg"></GrGithub></Link>  </button>
                </div>
                <div className="flex gap-4">
                    
                    <button className="btn btn-sm bg-orange-500 rounded-lg hover:bg-transparent hover:text-orange-500">Download CV</button>
                    <Link href="tel:+8801777456044" className="flex items-center gap-1"><MdWifiCalling3 className='cursor-pointer text-orange-500 text-2xl' /> <span>+8801777456044</span></Link>
                   
                </div>
            </div>
            <div className="w-1/2 ml-4  flex justify-center">

                <Image

                    src={img}
                    alt="sharif"
                    height={350}
                    quality={100}
                    placeholder="blur"
                >


                </Image>
            </div>
        </div>
    )
}

export default IntroPage