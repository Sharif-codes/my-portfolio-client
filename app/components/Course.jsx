import Image from "next/image";
import certificate from "../../public/certificate_page-0001.jpg";


const Course = () => {
    return (
        <div className="mt-2 space-y-2">
            <h2 className="text-orange-400">"Complete Web Development Course" By Programming Hero</h2>
            <div className="flex justify-center">
               <Image
               src={certificate}
               alt="certificate ph"
               width={300}
               ></Image>
            </div>
        </div>
    );
};

export default Course;