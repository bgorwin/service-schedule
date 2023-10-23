"use client"

import React, { useState } from 'react';

const AddCustomerForm = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    motorcycle: '',
    status: 'checked-in',
    dateCheckedIn: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(formData);
    setFormData({
      name: '',
      motorcycle: '',
      status: 'checked-in',
      dateCheckedIn: '',
    });
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="motorcycle" className="block text-gray-700 text-sm font-semibold mb-2">
          Motorcycle:
        </label>
        <input
          type="text"
          id="motorcycle"
          name="motorcycle"
          value={formData.motorcycle}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="status" className="block text-gray-700 text-sm font-semibold mb-2">
          Status:
        </label>
        <select
          id="status"
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
        <label htmlFor="dateCheckedIn" className="block text-gray-700 text-sm font-semibold mb-2">
          Date Checked In:
        </label>
        <input
          type="date"
          id="dateCheckedIn"
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


