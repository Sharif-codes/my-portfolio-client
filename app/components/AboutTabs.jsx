
const AboutTabs = ({setSelectedTabs,selectedTabs}) => {
     
   
    return (
         <div className="flex gap-8">
            <div>
              <button onClick={()=>setSelectedTabs("education")} className={`${selectedTabs === "education" ? "text-orange-500 border-b" : ""} cursor-pointer`}>Educational Qualification</button>
            </div>
            <div>
              <button onClick={()=>setSelectedTabs("course")} className={`${selectedTabs === "course" ? "text-orange-500 border-b" : ""} cursor-pointer`}>Courses</button>
            </div>
            <div >
              <button onClick={()=>setSelectedTabs("hobby")} className={`${selectedTabs === "hobby" ? "text-orange-500 border-b" : ""} cursor-pointer`}>Hobbies</button>
            </div>
            <div >
              <button onClick={()=>setSelectedTabs("language")} className={`${selectedTabs === "language" ? "text-orange-500 border-b" : ""} cursor-pointer`}>Languages</button>
            </div>
          </div>
    );
};

export default AboutTabs;