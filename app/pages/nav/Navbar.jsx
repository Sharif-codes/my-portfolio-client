import Link from "next/link";
import profile from "../../../public/ChatGPT Image Jul 27, 2025, 12_15_29 PM.png"
import Image from "next/image";
import ThemeToggle from "@/app/components/ThemeToggle";
const Navbar = () => {
    return (
        <div className="mx-0 md:mx-2 lg:mx-50" >
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-1 w-40 p-2 shadow">
                            <li className="hover:text-orange-500 flex items-start"> <button><Link href="#home">Home</Link></button> </li>
                            <li className="hover:text-orange-500 flex items-start"><button><Link href="#about">About me</Link></button> </li>
                            <li className="hover:text-orange-500 flex items-start"><button><Link href="#skills">Skills</Link></button></li>
                            <li className="hover:text-orange-500 flex items-start"><button><Link href="#projects">Projects</Link></button></li>
                            <li className="hover:text-orange-500 flex items-start"><button><Link href="#contact">Contact Me</Link></button></li>
                            <li className="hover:text-orange-500 flex items-start">
                                <a
                                    href="https://drive.google.com/file/d/1gQiNXSOuvf04I3vVZsKV5YRanmJZ7QG3/view?usp=sharing"
                                    target="_blank"
                                >Download CV</a>
                            </li>
                            <li className="hover:text-orange-500 flex items-start ml-2"><ThemeToggle></ThemeToggle></li>

                        </ul>
                    </div>
                    <div className="hidden h-[10px] w-[180px] lg:flex items-center justify-start">
                        <Image
                            src={profile}
                            alt="logo"
                            width={100}
                            height={50}
                            className="object-contain flex justify-start"
                        />
                    </div>

                </div>
                <div className="flex lg:hidden navbar-end">
                    <div className=" h-[20px] w-[90px] flex items-center justify-center">
                        <Image
                            src={profile}
                            alt="logo"
                            width={150}
                            height={50}
                            className="object-contain"
                        />
                    </div>
                </div>
                <div className=" hidden navbar-end lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className="hover:text-orange-500"><button><Link href="#home">Home</Link> </button></li>
                        <li className="hover:text-orange-500"><button><Link href="#about">About me</Link> </button></li>
                        <li className="hover:text-orange-500"><button><Link href="#skills">Skills</Link></button></li>
                        <li className="hover:text-orange-500"><button><Link href="#projects">Projects</Link></button></li>
                        <li className="hover:text-orange-500"><button><Link href="#contact">Contact Me</Link></button></li>
                    </ul>
                </div>
                <div className="hidden md:flex">
                    <ThemeToggle></ThemeToggle>
                </div>

            </div>
        </div>
    );
};

export default Navbar;