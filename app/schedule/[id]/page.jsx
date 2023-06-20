import Navbar from '../../../components/Navbar';
import Hero from '../../../components/Hero';

export default function ScheduleDetails({ params }) {
    return (
        <div className="bg-black text-white h-screen">
            <Navbar />
            <Hero heading="Service" />
            <h1>ID: {params.id} </h1>
        </div>
    );
}