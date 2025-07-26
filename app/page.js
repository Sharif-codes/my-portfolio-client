import Navbar from "./shared/nav/Navbar";
import IntroPage from "./shared/introPage/IntroPage";
import Image from "next/image";
import banner from "../public/bg-photo.jpg"
import AboutPage from "./shared/AboutPage/AboutPage";
import SkillsPage from "./shared/SkillsPage/SkillsPage";
import Projects from "./shared/ProjectsPage/Projects";
import Contact from "./shared/ContactPage/Contact";

export default function Home() {

  return (
    <div>
      <div className="relative h-full md:h-screen">
        <Image
          src={banner}
          alt="banner"
          fill
          className="object-cover z-0 opacity-10"
          priority
        >
        </Image>

        <div className="relative z-10">
       
          <div className="fixed top-0 left-0 w-full z-50 shadow-md bg-blend-darken">
            <Navbar />
          </div>
          <div className="pt-20 px-4 lg:px-50">
            <IntroPage />
          </div>
        </div> 

      </div>
      <div id="about" className=" h-full md:h-screen bg-[#1F242D]">
        <AboutPage ></AboutPage>
      </div>
      <div id="skills" className="h-full md:h-screen bg-[#323946]">
        <SkillsPage></SkillsPage>
      </div>
      <div id="projects" className="h-full md:h-screen bg-[#1F242D]">
        <Projects></Projects>
      </div>
      <div id="contact" className="h-full md:h-screen bg-[#323946]">
        <Contact></Contact>
      </div>
    </div>
  );
}
