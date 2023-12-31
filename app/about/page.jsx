import React from 'react';
import Image from 'next/image'
import Hero from "../../components/Hero";

export default function About () {
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

            <div class="container mx-auto p-4">
                <div class="flex flex-col md:flex-row lg:flex-row xl:flex-row gap-3">
                    <div class="flex-3 bg-black rounded-lg p-6">
                        <h1 className="text-2xl md:text-5xl lg:text-9xl text-white">Hey! <span className="block text-5xl md:text-3xl sm:text-2xl">I'm Brent and this is my project.</span></h1>
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