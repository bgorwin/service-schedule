import React from 'react';
import Hero from "../../components/Hero";

export default function About () {
    return (
        <div>
            <Hero heading="About Me" image="about-img" buttonText="Back to home page" buttonLink="/" />
            <div className="container mx-auto flex py-11">
                <div className="flex flex-row">
                    <div className="flex-flex-col">
                        <span className="text-9xl">Hey!</span>
                        <h2 className="text-7xl">I'm Brent and this is my project</h2>
                        <p>I have a passion for motorcycles and coding and this is a page where you can utilize your service department and set them up for success. Keep your workorders organized and update the customers on the status of their repairs.</p>
                    </div>
                </div>

            </div>

            <div>
                
            </div>
        </div>
    );
}