import Image from "next/image";
import certificate from "../../public/certificate_page-0001.jpg";


const Course = () => {
    return (
        <div className="mt-2  space-y-2">
            <h2 className="text-orange-400 text-sm lg:text-md">"Complete Web Development Course" By Programming Hero. <a className="text-blue-500 hover:border-b" href="https://drive.google.com/file/d/1oClw-YZwKGoKWeFnH9-y-bgRqkGMiLqU/view" target="_blank"  rel="noopener noreferrer">See Certificate..</a> </h2>
            <div className="">
               <Image
               src={certificate}
               alt="certificate"
               width={300}
               className="rounded-md"
               ></Image>
            </div>
        </div>
    );
};

export default Course;