import React from 'react';
import Image from 'next/image'
import Review from '../../components/Review';


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
            <div className="flex items-center justify-center h-[80vh] bg-fixed object-fill about-img">
                {/* Overlay */}
                <div className="absolute top-0 left-0 right-0 bottom-0 w-3/4 h-[80vh] bg-gradient-to-r from-black to-transparent z-2" />

                <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row items-center justify-evenly gap-3 z-2 w-full">
                    <div className="flex-1 flex justify-center rounded-lg p-6">
                        <h1 className="text-xl responsive-h1 animate-left-to-right text-orange-500 text-start z-3">About Us </h1>
                    </div>

                    <div className="flex-1 rounded-lg flex items-center justify-center md:justify-start lg:justify-start xl:justify-start">
                        <Image 
                            src="/images/spencer-davis-HZTveSqEkRQ-unsplash.png"
                            alt="Motorcycle rider"
                            width={500}
                            height={500}
                            className="animate-right-to-left w-full md:w-3/4 sm:w-3/4"
                        />
                    </div>
                </div>
            </div>

            <div className="container mx-auto pt-10 pb-10">
                <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row gap-3">
                    <div className="flex-1 bg-black rounded-lg p-6">
                        <h1 className="text-2xl md:text-5xl lg:text-9xl text-white">Hey! <span className="block text-5xl md:text-3xl sm:text-2xl">I&aposm Brent and this is my project.</span></h1>
                    </div>

                    <div className="flex-1 bg-orange-500 rounded-lg flex items-center justify-center ps-10 pe-10">
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
                <p className="text-lg text-center">Scroll to view more 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block"> <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
                </p>
            </div>

            <div>
                
            </div>
        </div>
    );
}