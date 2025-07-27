"use client"
import Image from "next/image";
import face from "../../../public/faceimg.jpeg"
import AboutTabs from "@/app/components/AboutTabs";
import { useState } from "react";
import Education from "@/app/components/Education";
import Course from "@/app/components/Course";
import Hobby from "@/app/components/Hobby";
import Language from "@/app/components/Language";


const AboutPage = () => {
  const [selectedTabs, setSelectedTabs] = useState("education")
  return (
    <div className="mx-4 lg:mx-50 py-5 lg:py-0">
      <h2 className="text-xl lg:text-3xl text-center py-3 lg:py-8">About <span className="text-orange-500">Me</span></h2>

      <div className="flex flex-col lg:flex-row justify-center md:items-start items-center  gap-4 mt-4">
        <div className="md:w-1/3 w-full">
          <div className="mt-10 flex justify-center ">

            <div className="h-48 lg:h-60 w-56 relative bg-orange-500 rounded-xl ">
              <div className="absolute inset-0 -top-10 flex justify-center h-24">
                <Image
                  src={face}
                  alt="sharif"
                  width={95}
                  className="object-cover rounded-full border-4 border-base-content    "
                  priority
                >
                </Image>
              </div>

              <div className="h-full w-full absolute flex flex-col justify-center items-center ">
                <p className="font-bold mb-2">MD Shariful Islam Bhuyan</p>
                <p className="font-md mt-1 text-black font-semibold text-sm">CSE Graduate</p>
                <p className="font-md mt-1 text-black font-semibold text-sm">Web Developer</p>
              </div>
            </div>
          </div>
        </div>

        {/* About Page start */}
        <div className="md:w-2/3 w-full flex flex-col justify-center items-start ">
          <AboutTabs setSelectedTabs={setSelectedTabs} selectedTabs={selectedTabs}></AboutTabs>

          {
            selectedTabs === "education" &&
            <div className="h-[290px] md:w-full md:h-full  ">
              <Education></Education>
            </div>
          }
          {
            selectedTabs === "course" &&
            <div className="h-[290px] md:w-full md:h-full" >
              <Course></Course>
            </div>
          }
          {
            selectedTabs === "hobby" &&
            <div className="h-[290px] w-full md:h-full">
             <Hobby></Hobby>
            </div>
          }
          {
            selectedTabs === "language" &&
            <div className="h-[290px] w-full md:h-full">
             <Language></Language>
            </div>
          }

        </div>
        {/* About Page end */}

      </div>

    </div>
  );
};

export default AboutPage;