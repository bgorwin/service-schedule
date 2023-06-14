import React from 'react';
import { AiFillQqCircle } from "react-icons/ai";

export default function CustomerList() {
    return (
        <div className="container mt-5 mx-auto">
            <table className="min-w-full border p-4">
                <thead >
                    <tr className="text-start">
                        <th className="py-3 px-4 bg-gray-300 font-semibold text-left">Name</th>
                        <th className="py-3 px-4 bg-gray-300 font-semibold text-left">Bike</th>
                        <th className="py-3 px-4 bg-gray-300 font-semibold text-left">Status</th>
                        <th className="py-3 px-4 bg-gray-300 font-semibold text-left">Phone</th>
                        <th className="py-3 px-4 bg-gray-300 font-semibold text-left">Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="py-5 px-4 border-b">Brent Gorwin</td>
                        <td className="py-5 px-4 border-b">2023 Fatboy</td>
                        <td className="py-5 px-4 border-b inline-block align-middle"><AiFillQqCircle  className="inline-block align-middle text-yellow-400 text-2xl" /> On Lift</td>
                        <td className="py-5 px-4 border-b">111-111-1111</td>
                        <td className="py-5 px-4 border-b">test@test.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
