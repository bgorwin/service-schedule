import React from 'react';

export default function BannerDivider() {
    return (
        <div className="w-screen bg-orange-600">
            <div className="container mx-auto flex justify-center items-center h-[100px]">
                <div className="columns-2">
                    <div className="">
                        <p className="text-xl">Connect With Us Now</p>
                    </div>
                    <div className="">
                        <p className="text-base">See how Service Schedule can help with your department.</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}