import React from 'react';
import Link from 'next/link'

export default function Hero({ heading, message, image, buttonText, buttonLink }) {
    
    return (
        <div className={`relative flex items-center justify-center h-[600px] bg-fixed object-cover ${image}`}>
            {/* Overlay */}
            <div className="absolute inset-0 w-3/4  bg-gradient-to-r from-black to-transparent z-[2]" />

            <div className="container p-5 text-white z-[3] ">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold  text-orange-500 animate-left-to-right">{heading}</h2>
                <p className="py-5 text-xl animate-left-to-right">{message}</p>

                { buttonText ? (
                    <div className="mt-10 animate-left-to-right">
                        <Link href={buttonLink} className="hover:bg-white hover:text-black px-8 py-2 border">{buttonText}</Link>
                    </div>) : null
                }
                
            </div>
        </div>
    );
}