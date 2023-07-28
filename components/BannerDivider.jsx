import React from 'react';

export default function BannerDivider() {
    return (
        <div className="w-screen bg-orange-600">
            <div className="container mx-auto flex justify-between items-center h-[200px] md:h-[100px] lg:h-[100px] ">
                <div className="columns-2 flex flex-row justify-center md:justify-between lg:justify-between items-between w-full flex-wrap">
                    <div className="py-5">
                        <p className="text-base text-center md:text-start lg:text-start">See how Service Schedule can help with your department.</p>
                    </div>
                    <div className="py-5">
                        <a href="#" className="py-3 px-5 border border-white rounded-md hover:bg-black hover:text-white">Connect With Us</a>
                    </div>
                </div>
            </div>
            
        </div>
    );
}