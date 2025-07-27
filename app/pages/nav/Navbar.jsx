import Link from "next/link";
import profile from "../../../public/ChatGPT Image Jul 27, 2025, 12_15_29 PM.png"
import Image from "next/image";
import ThemeToggle from "@/app/components/ThemeToggle";
const Navbar = () => {
    return (
        <div className="mx-2 lg:mx-50" >
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li> <button><Link href="#home">Home</Link></button> </li>
                            <li><button><Link href="#about">About me</Link></button> </li>
                            <li><button><Link href="#skills">Skills</Link></button></li>
                            <li><button><Link href="#projects">Projects</Link></button></li>
                            <li><button><Link href="#contact">Contact Me</Link></button></li>
                            <li><button>Download CV</button></li>
                        </ul>
                    </div>
                    <div className="hidden  h-[30px] w-[130px] lg:flex items-center justify-center">
                        <Image
                            src={profile}
                            alt="logo"
                            width={150}
                            height={50}
                            className="object-contain"
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
                        <li><button><Link href="#home">Home</Link> </button></li>
                        <li><button><Link href="#about">About me</Link> </button></li>
                        <li><button><Link href="#skills">Skills</Link></button></li>
                        <li><button><Link href="#projects">Projects</Link></button></li>
                        <li><button><Link href="#contact">Contact Me</Link></button></li>
                    </ul>
                </div>
                <ThemeToggle></ThemeToggle>
            </div>
        </div>
    );
};

export default Navbar;