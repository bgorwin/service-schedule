import Navbar from '../../../components/Navbar';
import Hero from '../../../components/Hero';
import CustomerList from '../../../components/CustomerList';
import CustomerForm from '../../../components/CustomerForm';

export default function Schedule() {
    return (
        <div className=" h-screen">
            <Navbar />
            <Hero heading="Schedule Dashboard" />

            <section className="mt-10">
                <CustomerForm   />
            </section>

            <section className="py-12">
                <CustomerList />
            </section>
        </div>
    );
}