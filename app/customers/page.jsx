"use client"
import React, { useState } from 'react';

import Hero from '../../components/Hero';
import CustomerList from '../../components/CustomerList';
import AddCustomerForm from '../../components/AddCustomerForm';

export default function Customers() {
    const [items, setItems] = useState([]);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    return (
        <div>
            <Hero heading="Customer Dashboard" image="custom-img" />

            <section className="py-12">
                <CustomerList items={items}  />
            </section>  

            <section className="py-12">
                <AddCustomerForm onAdd={handleAddItem} />    
            </section>          
        </div>
    );
}