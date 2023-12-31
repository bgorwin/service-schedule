"use client";

import { useState } from 'react';
import { promises as fs } from 'fs';


const WorkorderList = ({ data: initialData }) => {
    // Adding a new item from form to the list
    const [formData, setFormData] = useState({
        name: '',
        motorcycle: '',
        status: '',
        dateCheckedIn: '',
    });
    const [items, setItems] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Optional: Add validation or other logic before adding the item
        setItems([...items, formData]); // Add the formData to the items array
        setFormData({ name: '', motorcycle: '', status: '', dateCheckedIn: '' }); // Clear the form
    };


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
              <td className="border p-2">
                <button
                  onClick={() => handleDelete(index)}
                  className="border border-orange-400 text-black hover:bg-black hover:text-white px-2 py-1 rounded-md  transition duration-200">Delete</button>
              </td>
            </tr>
          ))}
          {items.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                  <td className="border p-2">{item.name}</td>
                  <td className="border p-2">{item.motorcycle}</td>
                  <td className="border p-2">{item.status}</td>
                  <td className="border p-2">{item.dateCheckedIn}</td>
                  <td className="border p-2">
                    <button
                      onClick={() => handleDelete(index)}
                      className="border border-orange-400 text-black hover:bg-black hover:text-white px-2 py-1 rounded-md  transition duration-200">Delete</button>
                  </td>
              </tr>
          ))}

        </tbody>
      </table>

      <div className="container mx-auto pt-10 pb-10">
        <p className="text-xl">Add a New Customer</p>
        <hr />
        <form onSubmit={handleSubmit} className="flex flex-row mb-6 mt-6 gap-5">
            <div className="">
                <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    className="shadow shadow-sm border rounded py-2 px-3 text-grey-darker"
                />
            </div>
            <div className="">
                <input 
                    type="text"
                    name="motorcycle"
                    value={formData.motorcycle}
                    onChange={handleInputChange}
                    placeholder="Motorcycle"
                    className="shadow shadow-sm border rounded py-2 px-3 text-grey-darker"
                />
            </div>
            <div className="">
                <input 
                    type="text"
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    placeholder="Status"
                    className="shadow shadow-sm border rounded py-2 px-3 text-grey-darker"
                />
            </div>
            <div className="">
                <input 
                    type="date"
                    name="dateCheckedIn"
                    value={formData.dateCheckedIn}
                    onChange={handleInputChange}
                    className="shadow shadow-sm border rounded py-2 px-3 text-grey-darker"
                />
            </div>
            <div>
            
            </div>
            <button type="submit" className="border border-orange-400 text-black hover:bg-black hover:text-white px-2 py-1 rounded-md  transition duration-200">
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
