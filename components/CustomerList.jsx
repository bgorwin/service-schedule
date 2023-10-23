import React from 'react';
import { promises as fs } from 'fs';

export default async function CustomerList ({ customers })  {
  const file = await fs.readFile(process.cwd() + '/app/data/data.json', 'utf8');
  const data = JSON.parse(file);

  return (
    <table className="w-full mt-4">
      <thead>
        <tr>
          <th className="px-4 py-2 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Customer Name
          </th>
          <th className="px-4 py-2 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Motorcycle
          </th>
          <th className="px-4 py-2 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Status
          </th>
          <th className="px-4 py-2 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Date Checked In
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((order, index) => {
          return(
            <tr key={index}  >
              <td className="px-4 py-2 text-sm leading-5 font-medium text-gray-900">{order.name}</td>
              <td className="px-4 py-2 text-sm leading-5 font-medium text-gray-900">{order.motorcycle}</td>
              <td className="px-4 py-2 text-sm leading-5 font-medium text-gray-900">{order.status}</td>
              <td className="px-4 py-2 text-sm leading-5 font-medium text-gray-900">{order.dateCheckedIn}</td>
            </tr>
          );
        })}

       
        {customers.map((customer, index) => (
          <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
            <td>{customer.name}</td>
            <td>{customer.motorcycle}</td>
            <td>{customer.status}</td>
            <td>{customer.dateCheckedIn}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

