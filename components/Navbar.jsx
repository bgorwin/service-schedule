'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from '../public/images/white-logo.png';

export default function Navbar() {
	const [nav, setNav] = useState(false);

	const [color, setColor] = useState('rgba(0,0,0,0.3)');
	const [textColor, setTextColor] = useState('#fff');

	const handleNav = () => {
		setNav(!nav);
	}

	useEffect(() => {
		const changeColor = () => {
			if(window.scrollY > 90){
				setColor('#000000');
				setTextColor('#fff')
			} else {
				setColor('rgba(0,0,0,0.3)')
				setTextColor('#fff')
			}
		};
		window.addEventListener('scroll', changeColor)
	}, [])

	return (
		<div className='fixed p-3 w-full z-10 ease-in duration-300 z-10' style={{backgroundColor: `${color}`}}>
			<div className='max-w-[1240px] m-auto flex justify-between items-center'>
				<Link href='/' className="z-10">
					<Image className="fill-current text-white" src={logo} alt="Service Schedule white outline logo." width={150} height={100} />
					{/* <h1 style={{color: `${textColor}`}}>Service Schedule BG</h1> */}
				</Link>

				<ul className='hidden sm:flex'>
					<li className='p-4' style={{color: `${textColor}`}}>
						<Link href='/customers' className="hover:text-orange-500 ">View Workorders</Link>
					</li>
					<li className='p-4' style={{color: `${textColor}`}}>
						<Link href='/about' className="hover:text-orange-500 ">About</Link>
					</li>
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
