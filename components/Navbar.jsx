'use client';
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from '../public/images/white-logo.png';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-black text-white z-10">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-4 justify-between w-full">
                        {/* Logo or brand name */}
                        <div>
                            <Link href="/" className="flex items-center py-5 px-2 text-white">
								<Image className="fill-current text-white" src={logo} alt="Service Schedule white outline logo." width={150} height={100} />
                            </Link>
                        </div>

                        {/* Primary nav items - hidden on mobile */}
                        <div className="hidden md:flex lg:flex items-center space-x-1">
							<Link href="/schedule" className="py-5 px-3 hover:text-orange-500">View Workorders</Link>
                            <Link href="/about" className="py-5 px-3 hover:text-orange-500">About</Link>
                            {/* <Link href="/contact" className="py-5 px-3">Contact</Link> */}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu items */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
				<Link href="/" className="block py-2 px-4 text-sm hover:text-orange-500">Home</Link>
				<Link href="/schedule" className="block py-2 px-4 text-sm hover:text-orange-500">View Workorders</Link>
                <Link href="/about" className="block py-2 px-4 text-sm hover:text-orange-500">About</Link>
            </div>
        </nav>
    );
};

