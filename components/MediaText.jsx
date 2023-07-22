import React from 'react';
import Image from 'next/image';


export default function MediaText({ src, heading, text}) {
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 auto-cols-max">
                <div className="p-3 media-text-image-1 h-[500px] rounded-lg">
                    
                </div>
                <div className="p-5 flex flex-col self-center text-black">
                    <p className="text-base font-bold text-orange-500">Service Communication</p>
                    <h1 className="text-4xl mb-4">{heading}</h1>
                    <p className="text-xl">{text}</p>
                </div>
            </div>
        </div>
    );
}