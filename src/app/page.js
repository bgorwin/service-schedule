import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import "tailwindcss/tailwind.css";

export default function Home() {
	return (
		<div className='bg-black text-white'>
			<Navbar />
			<Hero
				heading='Service Schedule'
				message='Organize and prioritize all your service orders'
			/>
			{/* <main className='flex min-h-[80vh] flex-col items-center justify-center p-24'>
				<h1 className='text-6xl sm:text-center'>Service Schedule</h1>
			</main> */}

			<section className='h-screen bg-slate-100'>
				<h1>Second Section</h1>
			</section>
		</div>
	);
}
