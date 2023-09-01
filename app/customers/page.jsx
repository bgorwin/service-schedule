import Hero from '../../components/Hero';
import CustomerList from '../../components/CustomerList';
import CustomerForm from '../../components/CustomerForm';

export default function Customers() {
    return (
        <div>
            <Hero heading="Customer Dashboard" image="custom-img" />

            <section className="py-12">
                <CustomerList />
            </section>
            
            <section className="mt-10">
                <CustomerForm   />
            </section>
            
        
        </div>
    );
}