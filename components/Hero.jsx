import React from 'react';

export default function Hero({ heading, message }) {
    return (
        <div className="flex items-center justify-center h-[80vh]  bg-fixed bg-cover custom-img">
            {/* Overlay */}
            <div className="absolute top-0 left-0 right-0 bottom-0 h-[80vh] bg-black/30 z-[2]" />

            <div className="container p-5 text-white z-[3] ">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold  text-orange-500">{heading}</h2>
                <p className="py-5 text-xl">{message}</p>
                
                <div className="mt-10">
                    <a href="/schedule" className="hover:bg-white hover:text-black px-8 py-2 border">View Dashboard</a> 
                </div>
            </div>
        </div>
    );
}