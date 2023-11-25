import React from 'react';

import Hero from '../../components/Hero';
// import CustomerList from '../../components/CustomerList';
import WorKorderList from '../../components/WorkorderList';
import data from "../../data/data.json";

export default function Customers() {

    return (
        <div >
            <Hero heading="Customer Dashboard" image="custom-img" />

            <section className="py-12 container mx-auto">
                {/* <CustomerList /> */}

                <WorKorderList data={data} />
            </section>

        </div>
    );
}
