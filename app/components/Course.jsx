import Image from "next/image";
import certificate from "../../public/certificate_page-0001.jpg";


const Course = () => {
    return (
        <div className="mt-2 space-y-2">
            <h2 className="text-orange-400 text-sm lg:text-md">"Complete Web Development Course" By Programming Hero</h2>
            <div className="flex justify-center">
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