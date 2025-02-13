'use client'

// This is a Client Component. It receives data as props and
// has access to state and effects just like Page components
// in the `pages` directory.
import "tailwindcss/tailwind.css";
import { AiOutlineCheckCircle, AiOutlineArrowDown } from "react-icons/ai";

import Navbar from "../components/Navbar";
// import Hero from "../components/Hero";
import MediaText from "../components/MediaText";
import BannerDivider from "../components/BannerDivider";
import Image from "next/image";
import heroImage from "../public/images/spencer-davis-_0wuuvVeEdc-unsplash.png";
import secondHero from "../public/images/harley-davidson-QD6GvrDFPAA-unsplash.jpg"


export default function HomePage() {
	return (
		<div className=' text-white bg-black'>
			{/* <Hero
				heading='Service Schedule'
				message='Organize and prioritize all your service orders'
				image="custom-img"
				buttonLink="/customers"
				buttonText="View Workorders"
			/> */}

			
			<div className="grid grid-cols-3 grid-rows-5 gap-4 h-[80%] pb-10 container mx-auto ">
				<div className="col-span-2 row-span-3 flex justify-center items-center rounded-xl border border-orange-500 fade-in">
					<h1 className="text-5xl text-orange-500 ">Service Schedule</h1>
				</div>
				<div className="col-span-2 row-span-5 col-start-3">
					<Image className="rounded-xl fade-in-slow" src={heroImage} width={700} height={800} alt="hero image" />
				</div>
				<div className="row-span-2 row-start-4">
					<Image className="rounded-xl fade-in" src={secondHero} width={1200} height={700}  alt="hero image" />
				</div>
				<div className="row-span-2 row-start-4 flex justify-center items-center bg-white rounded-xl fade-in-slower">
					<AiOutlineArrowDown className="text-8xl rotate-[-45deg] text-orange-500" />
				</div>
			</div>
    

			<section className='py-40 flex flex-col items-center justify-center bg-white w-screen'>
				<div className="container mx-[20px]">
					<div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-5 text-black rounded-md bg-gray-200'>
						<div className='p-3 flex flex-col justify-center align-center'>
							<p className='text-gray-600 text-lg ps-1 underline underline-offset-4 mb-2'>
								Purpose
							</p>
							<h2 className='text-4xl  mb-5'>
								Help your
								<br />
								Service Department
								<br />
								<span className='text-4xl text-orange-600'>
									Succeed!
								</span>
							</h2>
						</div>
						<div className='p-3 items-center'>
							<p className='text-xl mb-5'>
								Keep everything organized for your service
								department, which helps your customers with the best
								experience.
							</p>
							<ul className='list-inside'>
								<li className='pb-4 text-xl'>
									<AiOutlineCheckCircle className='inline-block mr-2 icon-md' />
									Add in customer details
								</li>
								<li className='pb-4 text-xl'>
									<AiOutlineCheckCircle className='inline-block mr-2 icon-md' />
									View all services in one dashboard
								</li>
								<li className='pb-4 text-xl'>
									<AiOutlineCheckCircle className='inline-block mr-2 icon-md' />
									Keep track of service stage with color
									indicators.
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<section className='py-40'>
				<MediaText
					className='media-text-image-1'
					src=''
					heading='Customer service starts with communication'
					text='Color status indicators help you with tracking each customer and notifying them of their repairs.'
				/>
			</section>

			<section className="py-36 bg-white">
				<div className="container mx-auto">
					<h2 className="font-bold text-orange-600 text-4xl text-center">How It Works</h2>
					<hr className="w-56 h-1 bg-black mx-auto mt-4 mb-8" />
					<div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-between mt-8">
						<div className="col px-4 my-5">
							<div className="bg-white p-4 rounded-lg shadow h-full">
								<h3 className="text-xl font-bold mb-2 text-orange-500">Check In Customer</h3>
								<p className="text-gray-600">When a customer comes in, add their info and bike into the form.</p>
								{/* <button class="bg-black text-white hover:text-orange-500 px-4 py-2 mt-10 rounded-md">Button</button> */}
							</div>
						</div>

						<div className="col px-4 my-5">
							<div className="bg-white p-4 rounded-lg shadow h-full">
								<h3 className="text-xl font-bold mb-2 text-orange-500">Status Update</h3>
								<p className="text-gray-600">Setup a reminder schedule time to reach out to the customer with an update on their bike.</p>
								{/* <button class="bg-black text-white hover:text-orange-500 px-4 py-2 mt-10 rounded-md">Button</button> */}
							</div>
						</div>

						<div className="col px-4 my-5">
							<div className="bg-white p-4 rounded-lg shadow h-full">
								<h3 className="text-xl font-bold mb-2 text-orange-500">Service completed</h3>
								<p className="text-gray-600">When youre done with the repairs, update the status to Done and be prompted to reach out to the customer.</p>
								{/* <button class="bg-black text-white hover:text-orange-500 px-4 py-2 mt-10 rounded-md">Button</button> */}
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='py-36'>
				<BannerDivider />
			</section>

		</div>
	);
}
