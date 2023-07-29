'use client'

// This is a Client Component. It receives data as props and
// has access to state and effects just like Page components
// in the `pages` directory.
import "tailwindcss/tailwind.css";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MediaText from "../components/MediaText";
import BannerDivider from "../components/BannerDivider";


export default function HomePage() {
	return (
		<div className=' text-white bg-black'>
			<Navbar />
			<Hero
				heading='Service Schedule'
				message='Organize and prioritize all your service orders'
				image="custom-img"
			/>

			<section className='py-40 flex flex-col items-center justify-center bg-white w-screen'>
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
				<div class="container mx-auto">
					<div class="grid grid-flow-row grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-between mt-8">
						<div class="col px-4 my-5">
							<div class="bg-white p-4 rounded-lg shadow h-full">
								<h3 class="text-xl font-bold mb-2 text-orange-500">Card 1</h3>
								<p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
								<button class="bg-black text-white hover:text-orange-500 px-4 py-2 mt-10 rounded-md">Button</button>
							</div>
						</div>

						<div class="col px-4 my-5">
							<div class="bg-white p-4 rounded-lg shadow h-full">
								<h3 class="text-xl font-bold mb-2 text-orange-500">Card 2</h3>
								<p class="text-gray-600">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
								<button class="bg-black text-white hover:text-orange-500 px-4 py-2 mt-10 rounded-md">Button</button>
							</div>
						</div>

						<div class="col px-4 my-5">
							<div class="bg-white p-4 rounded-lg shadow h-full">
								<h3 class="text-xl font-bold mb-2 text-orange-500">Card 3</h3>
								<p class="text-gray-600">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
								<button class="bg-black text-white hover:text-orange-500 px-4 py-2 mt-10 rounded-md">Button</button>
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
