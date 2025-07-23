import Image from "next/image";
import Navbar from "./shared/nav/Navbar";
import { GrFacebookOption, GrGithub, GrLinkedinOption, GrMailOption } from "react-icons/gr";
import img from "../public/sharif-1.png"
export default function Home() {
  return (
    <div className="">
      <Navbar></Navbar>

      <div className="flex flex-col-reverse lg:flex-row mt-20 gap-4 items-center justify-center">
        <div className="w-1/2 space-y-3">
          <div>
            <p className="text-3xl text-slate-50 font-semibold">MD Shariful Islam Bhuyan</p>
          </div>
          <div>
            <p className="text-2xl font-semibold">And I'm a <span className="text-orange-500">Web Developer</span></p>
          </div>
          <div>
            <p className="text-sm w-100 ">I'm professional web developer with strong skill in HTML,
              CSS, JavaScript, Tailwind, JQuery etc. I have working in this
              field almost 3 years and all projects are complited successfully
              with 100% client satisfiction.</p>
          </div>

          <div className="flex gap-4">
            <button className="w-8 cursor-pointer border-orange-500 p-1.5 rounded-full border "> <GrFacebookOption className="text-orange-500 "></GrFacebookOption> </button>
            <button className="w-8 cursor-pointer border-orange-500 p-1.5 rounded-full border"> <GrLinkedinOption className="text-orange-500 text-lg"></GrLinkedinOption> </button>
            <button className="w-8 cursor-pointer border-orange-500 p-1.5 rounded-full border"> <GrMailOption className="text-orange-500 text-lg"></GrMailOption> </button>
            <button className="w-8 cursor-pointer border-orange-500 p-1.5 rounded-full border"> <GrGithub className="text-orange-500 text-lg"></GrGithub> </button>
          </div>
          <div className="flex gap-4">
            <button className="btn btn-sm bg-orange-500 rounded-lg hover:bg-transparent hover:text-orange-500">Download CV</button>
            <button className="btn btn-sm bg-orange-500 rounded-lg hover:bg-transparent hover:text-orange-500">See more</button>
          </div>
        </div>
        <div className="w-1/2 ml-4">
       <Image 
       
       src={img}
       alt="sharif"
       height={400}
       quality={100}
       placeholder="blur"
       >
    

       </Image>
        </div>
      </div>

    </div>
  );
}
