import React from 'react';

import Hero from '../../components/Hero';
import WorKorderList from '../../components/WorkorderList';
import data from "../../data/data.json";

export default function Customers() {

    return (
        <div>
            <Hero heading="Workorder Dashboard" image="workorder-img" buttonText="Home Page" buttonLink="/" />

            <section className="py-12 container mx-auto">
                <WorKorderList data={data} />
            </section>

        </div>
    );
}
