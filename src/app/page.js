import Navbar from "../../components/Navbar";
import "tailwindcss/tailwind.css";

export default function Home() {
	return (
		<div className='bg-black text-white'>
			<Navbar />
			<main className='flex min-h-[80vh] flex-col items-center justify-center p-24'>
				<h1 className='text-4xl sm:text-center'>Service Schedule</h1>
			</main>

			<section className='h-screen bg-slate-100'>
				<h1>Second Section</h1>
			</section>
		</div>
	);
}
