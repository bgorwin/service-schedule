import React from 'react';
import Image from 'next/image'
import Hero from "../../components/Hero";
import Review from '../../components/Review';


export default function About () {
    // Sample data, could be fetched from an API or similar
    const reviews = [
        {
            id: 1,
            name: "Jane Doe",
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
            name: "Harry Potter",
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
            <Hero heading="About Me" image="about-img" buttonText="Back to home page" buttonLink="/" />
            <div class="container mx-auto p-4">
                <div class="flex flex-col md:flex-row lg:flex-row xl:flex-row gap-3">
                    <div class="flex-1 bg-black rounded-lg p-6">
                        <h1 className="text-2xl md:text-5xl lg:text-9xl text-white">Hey! <span className="block text-5xl md:text-3xl sm:text-2xl">I'm Brent and this is my project.</span></h1>
                    </div>

                    <div class="flex-1 bg-orange-500 rounded-lg flex items-center justify-center ps-10 pe-10">
                        <p className="text-lg">With a passion for motorcycles and Web Development, this program helps with the service department aspect of making sure you provide the best customer experience.</p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto mt-11 mb-11">
                <p className="text-xl text-center">Find out what our clients and their customers are saying!</p>
                <div className="container mx-auto flex overflow-x-auto space-x-4 p-4">
                    {reviews.map(review => (
                        <div key={review.id} className="min-w-max">
                            <Review {...review} />
                        </div>
                    ))}
                </div>
                <p className="text-base">Scroll left to view more</p>
            </div>
            

            <div class="container mx-auto p-4">
                <div class="flex flex-col md:flex-row lg:flex-row xl:flex-row gap-3">
                    <div class="flex-3 rounded-lg p-6">
                        <span></span>
                        <h2 className="text-2xl md:text-5xl lg:text-9xl">Making </h2>
                    </div>

                    <div class="flex-2  rounded-lg flex items-center justify-center">
                        <Image 
                            src="/images/spencer-davis-HZTveSqEkRQ-unsplash.png"
                            alt="Motorcycle rider"
                            width={500}
                            height={500}
                            layout="responsive"
                        />
                    </div>
                </div>
            </div>

            <div>
                
            </div>
        </div>
    );
}