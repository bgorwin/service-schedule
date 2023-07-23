import React from 'react';

export default function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-white py-4">
            <div className="container mx-auto text-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <div className="text-center md:text-start lg:text-start">
                        <h4 className="text-xl">Service Schedule</h4>
                    </div>
                    <div className="text-center md:text-end lg:text-end text-orange-500">
                        <p>&copy; {currentYear} Brent Gorwin All rights reserved. </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}