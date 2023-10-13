import React from 'react';

const CustomerList = ({ items }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Customer Name</th>
          <th>Motorcycle</th>
          <th>Status</th>
          <th>Date Checked In</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td>{item.customerName}</td>
            <td>{item.motorcycle}</td>
            <td>{item.status}</td>
            <td>{item.dateCheckedIn}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomerList;