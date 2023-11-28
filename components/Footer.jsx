import React from 'react';
import Image from 'next/image';

import logo from '../public/images/white-logo.png';

export default function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-white py-8 border-2-black border border-t-slate-500 border-b-black border-x-black h-32 flex flex-row items-center">
            <div className="container mx-auto text-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <div className="text-center md:text-start lg:text-start">
                        {/* <h4 className="text-xl">Service Schedule</h4> */}
                        <Image className="fill-current text-white" src={logo} alt="Service Schedule white outline logo." width={150} height={100} />
                    </div>
                    <div className="text-center md:text-end lg:text-end text-orange-500">
                        <p>&copy; {currentYear} Brent Gorwin All rights reserved. </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}