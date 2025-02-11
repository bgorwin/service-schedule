import React from 'react';
import { createClient } from '../../utils/supabase/server';
import { cookies } from 'next/headers';


export default async function TestPage() {

    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const { data: workorders } = await supabase.from('workorders').select()
    return (
        <>
        <div className="container mx-auto p-4"> 
        <h1 className="text-3xl font-bold mb-4">Motorcycle Check-In Status</h1>
        {workorders?.map((workorder) => (
            <table key={workorder.id} className="w-full mt-4">
                <thead className="bg-orange-400 text-white">
                    <tr className="bg-gray-200">
                        <th className="px-4 py-4 bg-orange-400 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">Name</th>
                        <th className="px-4 py-4 bg-orange-400 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">Motorcycle</th>
                        <th className="px-4 py-4 bg-orange-400 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">Status</th>
                        <th className="px-4 py-4 bg-orange-400 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">Date Checked In</th>
                        <th className="px-4 py-4 bg-orange-400 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {workorders?.map((workorder) => (
                        <tr key={workorder.id} className="odd:bg-gray-100 even:bg-white">
                            <td className="border p-2">{workorder.name}</td>
                            <td className="border p-2">{workorder.motorcycle}</td>
                            <td className="border p-2">{workorder.status}</td>
                            <td className="border p-2">{new Date(workorder.created_at).toLocaleDateString("en-US", {
                                month: "long",   // use "short" for abbreviated month
                                day: "numeric",
                                year: "numeric",
                                })}
                            </td>
                            <td className="border p-2">
                                {/* <button
                                    onClick={() => handleDelete(item.id)}
                                    className="border border-orange-400 text-black hover:bg-black hover:text-white px-2 py-1 rounded-md transition duration-200">
                                    Delete
                                </button> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        ))}
        </div>
            
            
        </>
        
    );
}