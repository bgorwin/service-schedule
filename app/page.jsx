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
import Footer from "../components/Footer";

export default function HomePage() {
	return (
		<div className=' text-white'>
			<Navbar />
			<Hero
				heading='Service Schedule'
				message='Organize and prioritize all your service orders'
				image="custom-img"
			/>

			<section className='h-[600px] flex flex-col items-center justify-center container mx-auto'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 bg-glass p-5 text-black'>
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

			<section className='mt-10 mb-10'>
				<MediaText
					className='media-text-image-1'
					src=''
					heading='Customer service starts with communication'
					text='Color status indicators help you with tracking each customer and notifying them of their repairs.'
				/>
			</section>

			<section>
				<BannerDivider />
			</section>

			<Footer />
		</div>
	);
}