"use client";

import { useState } from 'react';
import { promises as fs } from 'fs';


const WorkorderList = ({ data: initialData }) => {

    const [data, setData] = useState(initialData);

    const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);

    // Save the updated data to the JSON file if needed
    const filePath = path.join(process.cwd(), 'data.json');
    fs.writeFileSync(filePath, JSON.stringify(newData));
    };
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">Motorcycle Check-In Status</h1>
      <table className="w-full mt-4">
        <thead className="bg-orange-400 text-white"> 
          <tr className="bg-gray-200">
            <th className="px-4 py-4 bg-orange-400 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">Name</th>
            <th className="px-4 py-4 bg-orange-400 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">Motorcycle</th>
            <th className="px-4 py-4 bg-orange-400 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">Status</th>
            <th className="bpx-4 py-4 bg-orange-400 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">Date Checked In</th>
            <th className="px-4 py-4 bg-orange-400 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">Remove</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className="border p-2">{entry.name}</td>
              <td className="border p-2">{entry.motorcycle}</td>
              <td className="border p-2">{entry.status}</td>
              <td className="border p-2">{entry.dateCheckedIn}</td>
              <td className="border p-2"><button
              onClick={() => handleDelete(index)}
              className="border border-orange-400 text-black hover:bg-red-400 hover:text-white px-2 py-1 rounded-md"
            >
              Delete
            </button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'data.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(jsonData);
  
    return {
      props: {
        data,
      },
    };
  }

export default WorkorderList;
