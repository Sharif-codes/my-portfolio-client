import Navbar from "./pages/nav/Navbar";
import IntroPage from "./pages/introPage/IntroPage";
import Image from "next/image";
import banner from "../public/bg-photo.jpg"
import AboutPage from "./pages/AboutPage/AboutPage";
import SkillsPage from "./pages/SkillsPage/SkillsPage";
import Projects from "./pages/ProjectsPage/Projects";
import Contact from "./pages/ContactPage/Contact";
import { GoMoveToTop } from "react-icons/go";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div className="relative h-full md:min-h-screen m-2 mt-0">
        <Image
          src={banner}
          alt="banner"
          fill
          className="object-cover z-0 opacity-10 rounded-md"
          priority
        >
        </Image>

        <div className="relative  z-10">

          <div className="fixed top-0 left-0 w-full z-50 shadow-md bg-blend-darken  rounded-md m-2 mt-0">
            <Navbar />
          </div>

          <div className=" h-full  md:pt-16 py-16 px-3 lg:px-50">
            <IntroPage />
          </div>
        </div>

      </div>

      <div id="about" className=" h-full lg:h-screen bg-base-300 rounded-md m-2 ">
        <AboutPage ></AboutPage>
      </div>
      <div id="skills" className="h-full md:h-screen bg-base-200 rounded-md m-2 ">
        <SkillsPage></SkillsPage>
      </div>

      <div id="projects" className="h-full md:h-screen bg-base-300 rounded-md m-2">
        <Projects></Projects>
      </div>
      <div id="contact" className="h-full md:h-screen bg-base-200 rounded-md m-2">
        <Contact></Contact>
      </div> 
      
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 h-full">
        <aside className="flex gap-4">
          <p className="text-sm md:text-lg flex flex-col md:flex-row"> <span>Copyright © {new Date().getFullYear()} - All right reserved by </span><span className="text-orange-500">MD Shariful Islam Bhuyan</span></p> 
          <Link href="#home"  className="text-2xl font-bold animate-bounce text-orange-500 cursor-pointer
          "><GoMoveToTop /></Link>
        </aside>
      </footer>
    </div>
  );
}
