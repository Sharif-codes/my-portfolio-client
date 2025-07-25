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
    <div className="h-screen">
      <h2 className="text-3xl text-center py-8">About <span className="text-orange-500">me</span></h2>
      <div className="flex gap-16 mt-4">
        <div className="">
          <div className="mt-10">

            <div className="h-60 w-56 relative bg-orange-500 rounded-xl ">
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
        <div className="">

          <AboutTabs setSelectedTabs={setSelectedTabs} selectedTabs={selectedTabs}></AboutTabs>

          {
            selectedTabs === "education" &&
            <div>
              <Education></Education>
            </div>
          }
          {
            selectedTabs === "course" &&
            <div>
              <Course></Course>
            </div>
          }
          {
            selectedTabs === "hobby" &&
            <div>
             <Hobby></Hobby>
            </div>
          }
          {
            selectedTabs === "language" &&
            <div className="w-full h-full">
             <Language></Language>
            </div>
          }

        </div>

      </div>

    </div>
  );
};

export default AboutPage;