'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
	const [nav, setNav] = useState(false);

	const [color, setColor] = useState('transparent');
	const [textColor, setTextColor] = useState('#fff');

	const handleNav = () => {
		setNav(!nav);
	}

	useEffect(() => {
		const changeColor = () => {
			if(window.scrollY > 90){
				setColor('#fff');
				setTextColor('#000000')
			} else {
				setColor('transparent')
				setTextColor('#fff')
			}
		};
		window.addEventListener('scroll', changeColor)
	}, [])

	return (
		<div className='fixed p-3 w-full z-10 ease-in duration-300 border-b-2 border-gray-600 ' style={{backgroundColor: `${color}`}}>
			<div className='max-w-[1240px] m-auto flex justify-between items-center'>
				<Link href='/'>
					<h1 style={{color: `${textColor}`}}>Service Schedule BG</h1>
				</Link>

				<ul className='hidden sm:flex'>
					<li className='p-4' style={{color: `${textColor}`}}>
						<Link href='/customers' className="hover:text-orange-500 ">View Customers</Link>
					</li>
					{/* <li className='p-4' style={{color: `${textColor}`}}>
						<Link href='/schedule' className="hover:text-orange-500 ">View Schedule</Link>
					</li> */}
				</ul>

				{/* Mobile Button */}
				<div onClick={handleNav} className='block sm:hidden z-10'>
					{nav ? <AiOutlineClose size={20} style={{color: `${textColor}`}} className='z-10' /> : <AiOutlineMenu size={20} style={{color: `${textColor}`}} className='z-10' />}
				</div>

				{/* Mobile Menu */}
				<div className={nav ? 'sm:hidden bg-slate-700 absolute top-0 right-0 bottom-0 flex justify-center items-center w-full h-screen  text-center ease-in-out duration-300 -translate-x' : 'absolute top-0 left-[-100%]  bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in-out duration-300 -translate-x'}>
					<ul>
						<li className='p-4 text-4xl hover:text-gray-500 ease-in-out duration-300'>
							<Link href='/customers'>View Customers</Link>
						</li>
						{/* <li className='p-4 text-4xl hover:text-gray-500 ease-in-out duration-300'>
							<Link href='/schedule'>View Schedule</Link>
						</li> */}
					</ul>
				</div>
			</div>
		</div>
	);
}
