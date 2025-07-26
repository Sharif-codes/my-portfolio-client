import Link from "next/link";

const Navbar = () => {
    return (
        <div className="" >
            <div className="navbar  ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                    <a className="btn btn-ghost text-xl hidden lg:flex">Sharif</a>
                </div>
                <div className="flex lg:hidden navbar-end">
                    <a href=""> Sharif</a>
                </div>
                <div className=" hidden navbar-end lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-2">
                        <li><button><Link href="#home">Home</Link> </button></li>
                        <li><button><Link href="#about">About me</Link> </button></li>
                        <li><button><Link href="#skills">Skills</Link></button></li>
                        <li><button><Link href="#projects">Projects</Link></button></li>
                        <li><button><Link href="#contact">Contact Me</Link></button></li>
                        <li><button>Download CV</button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;