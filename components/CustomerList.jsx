"use server";

import React from 'react';
import { promises as fs } from 'fs';

export default async function CustomerList ()  {
  const file = await fs.readFile(process.cwd() + '/data/data.json', 'utf8'); 
  const data = JSON.parse(file);

  return (
    <table className="w-full mt-4">
      <thead className="bg-orange-400 text-white">
        <tr>
          <th className="px-4 py-4 bg-orange-400 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
            Customer Name
          </th>
          <th className="px-4 py-4 bg-orange-400 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
            Motorcycle
          </th>
          <th className="px-4 py-4 bg-orange-400 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
            Status
          </th>
          <th className="px-4 py-4 bg-orange-400 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
            Date Checked In
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((order, index) => {
          return(
            <tr key={index} className='bg-gray-200 even:bg-gray-50'>
              <td className="px-4 py-2 text-sm leading-5 font-medium text-gray-900">{order.name}</td>
              <td className="px-4 py-2 text-sm leading-5 font-medium text-gray-900">{order.motorcycle}</td>
              <td className="px-4 py-2 text-sm leading-5 font-medium text-gray-900">{order.status}</td>
              <td className="px-4 py-2 text-sm leading-5 font-medium text-gray-900">{order.dateCheckedIn}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

