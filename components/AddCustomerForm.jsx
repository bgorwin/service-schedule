import React, { useState } from 'react';

const AddCustomerForm = ({ onSubmit }) => {
  "use client";
  const [formData, setFormData] = useState({
    // define form fields here
    name: '',
    motorcycle: '',
    status: '',
    dateCheckedIn: '',
    // add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-semibold mb-2">
          Name:
        </label>
        <input
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-semibold mb-2">
          Motorcycle:
        </label>
        <input
          type="text" 
          name="motorcycle" 
          value={formData.motorcycle} 
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-semibold mb-2">
          Status:
        </label>
        <select
          type="text" 
          name="status" 
          value={formData.status} 
          onChange={handleChange}
          className="w-full border rounded p-2"
        >
          <option value="checked-in">Checked In</option>
          <option value="on-lift">On Lift</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div className="mb-4">
        <label 
          className="block text-gray-700 text-sm font-semibold mb-2">
          Date Checked In:
        </label>
        <input
          type="date" 
          name="dateCheckedIn" 
          value={formData.dateCheckedIn} 
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
};

export default AddCustomerForm;


