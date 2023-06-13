import React from 'react';
import Image from 'next/image';

export default function MediaText({ src, heading, text}) {
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 auto-cols-max">
                <div className="p-3">
                    <Image className="p-5 rounded-lg" width={500} height={500} alt="Motorcycle engine" src={src} />
                </div>
                <div className="p-5 flex flex-col self-center text-black">
                    <h1 className="text-4xl mb-4">{heading}</h1>
                    <p className="text-xl">{text}</p>
                </div>
            </div>
        </div>
    );
}