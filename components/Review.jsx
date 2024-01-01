// components/Review.js
import React from 'react';

function Review({ name, date, text, rating }) {
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl border border-orange-300">
            <div className="md:flex">
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-orange-500 font-semibold">{name}</div>
                    <p className="block mt-1 text-lg leading-tight font-medium text-black">{date}</p>
                    <p className="mt-2 text-gray-500">{text}</p>
                    <div className="mt-4">
                        <span className="text-yellow-400">
                            {'★'.repeat(rating)}
                            {'☆'.repeat(5 - rating)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Review;
