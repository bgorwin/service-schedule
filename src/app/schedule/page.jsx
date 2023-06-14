import Navbar from '../../../components/Navbar';
import Hero from '../../../components/Hero';
import CustomerList from '../../../components/CustomerList';

export default function Schedule() {
    return (
        <div className=" h-screen">
            <Navbar />
            <Hero heading="Schedule Dashboard" />

            <section className="py-12">
                <CustomerList />
            </section>
        </div>
    );
}