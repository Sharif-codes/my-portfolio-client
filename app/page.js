import Navbar from "./shared/nav/Navbar";
import IntroPage from "./shared/introPage/IntroPage";
import Image from "next/image";
import banner from "../public/bg-photo.jpg"
import AboutPage from "./shared/AboutPage/AboutPage";
import SkillsPage from "./shared/SkillsPage/SkillsPage";

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
        <div className="relative z-10 mx-4 lg:mx-50">
          <Navbar></Navbar>
          <IntroPage></IntroPage>
        </div>
      </div>

      <div className=" h-full md:h-screen bg-stone-900">
        <AboutPage></AboutPage>
      </div>
      <div className="h-full md:h-screen bg-stone-950">
       <SkillsPage></SkillsPage>
      </div>
    </div>
  );
}
