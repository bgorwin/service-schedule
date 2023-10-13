"use client"

import React, { useState } from 'react';

const AddCustomerForm = ({ onAdd }) => {
  const [customerName, setCustomerName] = useState('');
  const [motorcycle, setMotorcycle] = useState('');
  const [status, setStatus] = useState('checked-in');
  const [dateCheckedIn, setDateCheckedIn] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create an object with the form values
    const newItem = {
      customerName,
      motorcycle,
      status,
      dateCheckedIn,
    };

    // Pass the new item to the parent component
    onAdd(newItem);

    // Clear the form inputs
    setCustomerName('');
    setMotorcycle('');
    setStatus('checked-in');
    setDateCheckedIn('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Customer Name:
        <input
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
      </label>
      <label>
        Motorcycle:
        <input
          type="text"
          value={motorcycle}
          onChange={(e) => setMotorcycle(e.target.value)}
        />
      </label>
      <label>
        Status:
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="checked-in">Checked In</option>
          <option value="on-lift">On Lift</option>
          <option value="completed">Completed</option>
        </select>
      </label>
      <label>
        Date Checked In:
        <input
          type="date"
          value={dateCheckedIn}
          onChange={(e) => setDateCheckedIn(e.target.value)}
        />
      </label>
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddCustomerForm;