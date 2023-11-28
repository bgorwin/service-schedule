import React from 'react';

export default function Hero({ heading, message, image, buttonText, buttonLink }) {
    return (
        <div className={`flex items-center justify-center h-[80vh] bg-fixed object-fill ${image}`}>
            {/* Overlay */}
            <div className="absolute top-0 left-0 right-0 bottom-0 w-3/4 h-[80vh] bg-gradient-to-r from-black to-transparent z-[2]" />

            <div className="container p-5 text-white z-[3] ">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold  text-orange-500">{heading}</h2>
                <p className="py-5 text-xl">{message}</p>
                
                <div className="mt-10">
                    <a href={buttonLink} className="hover:bg-white hover:text-black px-8 py-2 border">{buttonText}</a> 
                </div>
            </div>
        </div>
    );
}