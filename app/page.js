import Navbar from "./shared/nav/Navbar";
import IntroPage from "./shared/introPage/IntroPage";
import Image from "next/image";
import banner from "../public/bg-photo.jpg"
import AboutPage from "./shared/AboutPage/AboutPage";

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

      <div className="mx-4 lg:mx-50 h-full md:h-screen">
        <AboutPage></AboutPage>
      </div>
    </div>
  );
}
