
const AboutTabs = ({setSelectedTabs,selectedTabs}) => {
     
   
    return (
         <div className="flex md:gap-12 gap-7">
            <div className="text-sm lg:text-md">
              <button onClick={()=>setSelectedTabs("education")} className={`${selectedTabs === "education" ? "text-orange-500 border-b" : ""} cursor-pointer`}>Education</button>
            </div>
            <div className="text-sm lg:text-md">
              <button onClick={()=>setSelectedTabs("hobby")} className={`${selectedTabs === "hobby" ? "text-orange-500 border-b" : ""} cursor-pointer`}>Interpersonal</button>
            </div>
            <div className="text-sm lg:text-md">
              <button onClick={()=>setSelectedTabs("course")} className={`${selectedTabs === "course" ? "text-orange-500 border-b" : ""} cursor-pointer`}>Courses</button>
            </div>
            
            <div className="text-sm lg:text-md" >
              <button onClick={()=>setSelectedTabs("language")} className={`${selectedTabs === "language" ? "text-orange-500 border-b" : ""} cursor-pointer`}>Languages</button>
            </div>
          </div>
    );
};

export default AboutTabs;