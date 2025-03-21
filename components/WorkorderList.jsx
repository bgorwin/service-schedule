"use client";

import { promises as fs } from 'fs';
import { useState, useEffect } from 'react';

const WorkorderList = ({ data: initialData }) => {
    const [formData, setFormData] = useState({
        name: '',
        motorcycle: '',
        status: [
            "Checked In",
            "On lift",
            "Waiting for parts",
            "Done"
        ],
        dateCheckedIn: '',
    });

    

    // Assign unique IDs to initial data if not already present
    const assignIds = (data) => data.map((item, index) => ({ ...item, id: item.id || index }));

    const [items, setItems] = useState(assignIds(initialData));

    useEffect(() => {
        setItems(assignIds(initialData));
    }, [initialData]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = { ...formData, id: Date.now() }; // Ensure new item has a unique ID
        setItems([...items, newItem]);
        setFormData({ name: '', motorcycle: '', status: [], dateCheckedIn: '' });
    };

    const handleDelete = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    return (
        <div className="container m-4 md:mx-4 my-8 overflow-x-auto">
            <h1 className="text-3xl font-bold mb-4">Motorcycle Check-In Status</h1>
            <table className="w-full mt-4">
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
                    {items.map((item) => (
                        <tr key={item.id} className="odd:bg-gray-100 even:bg-white">
                            <td className="border p-2">{item.name}</td>
                            <td className="border p-2">{item.motorcycle}</td>
                            {/* <td className="border p-2">{item.status}</td> */}
                            <td className="border p-2">
                                <select value={items.status}>
                                    {item.status.map((option, index) => (
                                        <option key={index} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                                
                            </td>
                            <td className="border p-2">{item.dateCheckedIn}</td>
                            <td className="border p-2">
                                <button
                                    onClick={() => handleDelete(item.id)}
                                    className="border border-orange-400 text-black hover:bg-black hover:text-white px-2 py-1 rounded-md transition duration-200">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
              
            <div className="container md:container md:mx-auto sm:container sm:mx-auto mx-auto pt-10 pb-10">
                <p className="text-xl">Add a New Customer</p>
                <hr />
                <form onSubmit={handleSubmit} className="flex flex-wrap mb-6 mt-6 gap-5">
                    <div>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Name"
                            className="shadow border rounded py-2 px-3 text-grey-darker"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="motorcycle"
                            value={formData.motorcycle}
                            onChange={handleInputChange}
                            placeholder="Motorcycle"
                            className="shadow border rounded py-2 px-3 text-grey-darker"
                            required
                        />
                    </div>
                    
                    <div>
                        <input
                            type="date"
                            name="dateCheckedIn"
                            value={formData.dateCheckedIn}
                            onChange={handleInputChange}
                            className="shadow border rounded py-2 px-3 text-grey-darker"
                            required
                        />
                    </div>
                    <button type="submit" className="border border-orange-400 text-black hover:bg-black hover:text-white px-2 py-1 rounded-md transition duration-200">
                        Add Entry
                    </button>
                </form>
            </div>
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
