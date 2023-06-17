"use client"
import React, { useState } from 'react';

const CustomerForm = () => {
  const [customers, setCustomers] = useState([]);
  const [name, setName] = useState('');
  const [motorcycle, setMotorcycle] = useState('');
  const [status, setStatus] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCustomer = {
      name,
      motorcycle,
      status,
      phone,
      email,
    };

    setCustomers([...customers, newCustomer]);

    // Reset form fields
    setName('');
    setMotorcycle('');
    setStatus('');
    setPhone('');
    setEmail('');
  };

  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded py-2 px-3 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="motorcycle" className="block text-gray-700 font-semibold mb-2">Motorcycle Details</label>
          <input
            type="text"
            id="motorcycle"
            value={motorcycle}
            onChange={(e) => setMotorcycle(e.target.value)}
            className="border rounded py-2 px-3 w-full"
            required
          />  
        </div>

        <div className="mb-4">
          <label htmlFor="status" className="block text-gray-700 font-semibold mb-2">Status</label>
          <input
            type="text"
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border rounded py-2 px-3 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Phone</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border rounded py-2 px-3 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded py-2 px-3 w-full"
            required
          />
        </div>
        
        
        <button type="submit" className="bg-orange-500 hover:bg-black text-white py-2 px-4 rounded-full">
          Add Customer
        </button>
      </form>

      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-3 px-4 bg-gray-100 font-semibold text-left">Name</th>
            <th className="py-3 px-4 bg-gray-100 font-semibold text-left">Motorcycle Details</th>
            <th className="py-3 px-4 bg-gray-100 font-semibold text-left">Status</th>
            <th className="py-3 px-4 bg-gray-100 font-semibold text-left">Phone</th>
            <th className="py-3 px-4 bg-gray-100 font-semibold text-left">Email</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{customer.name}</td>
              <td className="py-2 px-4 border-b">{customer.motorcycle}</td>
              <td className="py-2 px-4 border-b">{customer.status}</td>
              <td className="py-2 px-4 border-b">{customer.phone}</td>
              <td className="py-2 px-4 border-b">{customer.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerForm;
