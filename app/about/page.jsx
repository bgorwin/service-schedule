import React from 'react';
import Image from 'next/image'
import Review from '../../components/Review';
import Hero from '../../components/Hero';


export default function About () {
    // Sample data, could be fetched from an API or similar
    const reviews = [
        {
            id: 1,
            name: "Travis Gorwin",
            date: "2021-01-01",
            text: "Great service, highly recommended!",
            rating: 5
        },
        {
            id: 2,
            name: "Brent G",
            date: "2023-01-03",
            text: "Great service, highly recommended!",
            rating: 5
        },
        {
            id: 3,
            name: "Glen Coco",
            date: "2024-01-01",
            text: "Great service, highly recommended!",
            rating: 5
        },
        {
            id: 4,
            name: "Lis Design",
            date: "2022-05-18",
            text: "Great service, highly recommended!",
            rating: 5
        },
        {
            id: 5,
            name: "Edward Collins",
            date: "2023-12-15",
            text: "Great service, highly recommended!",
            rating: 5
        },
        // ... more reviews
    ];

    return (
        <div>
            <Hero heading="About Us" image="about-img" buttonText="" buttonLink="/" />
            

            <div className="container mx-auto pt-10 pb-10">
                <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row gap-3">
                    <div className="flex-1 bg-black rounded-lg p-6">
                        <h1 className="text-2xl md:text-5xl lg:text-9xl text-white">Hey! <span className="block text-5xl md:text-3xl sm:text-2xl">I&apos;m Brent and this is my project.</span></h1>
                    </div>

                    <div className="flex-1 bg-orange-500 rounded-lg flex items-center justify-center p-6">
                        <div>
                            <p className="text-lg mb-5">I&apos;m a passionate Frontend Developer with a love for motorcycles. My fascination with two-wheelers isn&apos;t just a hobby; it&apos;s a lifestyle that fuels my creativity and drives my work.</p>

                            <p className="text-light font-semibold bg-orange-600 ps-2 pe-2 pt-1 pb-1 inline-block rounded-t">About This Project</p>
                            <p className="text-normal bg-orange-600 p-3 rounded-b rounded-tr">
                                This project is a specialized service department tool designed to streamline motorcycle repair tracking and enhance communication with customers. It&apos;s built to ensure that every repair job is efficiently managed and that customers are always in the loop about the status of their beloved bikes. With my background in frontend development and my deep understanding of the motorcycle community, I&apos;ve crafted a solution that blends technical precision with user-friendly design, making the repair process smoother for both technicians and customers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto mt-11 mb-11">
                <p className="text-xl text-center">Find out what our clients and their customers are saying!</p>
                <div className="container mx-auto flex overflow-x-auto space-x-4 p-4">
                    {reviews.map(review => (
                        <div key={review.id} className="min-w-max scroll"> 
                            <Review {...review} />
                        </div>
                    ))}
                </div>
                <p className="text-lg text-center">Scroll to view more 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block"> <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
                </p>
            </div>

            <div>
                
            </div>
        </div>
    );
}