import React from 'react';

export default function BannerDivider() {
    return (
        <div className="w-screen bg-black mt-10 mb-10">
            <div className="container mx-auto flex justify-center items-center h-[100px]">
                <div className="columns-2">
                    <div className="">
                        <p className="text-lg">Heading 1</p>
                    </div>
                    <div className="">
                        <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci corrupti similique provident minima? Ducimus, dolor.</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}