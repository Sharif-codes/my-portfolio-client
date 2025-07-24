import Image from "next/image";
import face from "../../../public/faceimg.jpeg"

const AboutPage = () => {
    return (
        <div>
        <h2 className="text-3xl text-center mb-10">About <span className="text-orange-500">me</span></h2>
        <div className="flex gap-5 justify-center">
          <div className="w-1/2">
            <div className="relative h-64 w-56">
              <div className="h-64 w-56 relative bg-orange-500 rounded-xl">
              </div>
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
            </div>
          </div>

          <div className="w-1/2 ">
            2
          </div>

        </div>

      </div>
    );
};

export default AboutPage;