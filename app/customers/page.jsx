"use client"
import React, { useState } from 'react';

import Hero from '../../components/Hero';
import CustomerList from '../../components/CustomerList';
import AddCustomerForm from '../../components/AddCustomerForm';

export default function Customers() {
    const [customers, setCustomers] = useState([]);

    const handleFormSubmit = (formData) => {
        setCustomers([...customers, formData]);
    };

    return (
        <div >
            <Hero heading="Customer Dashboard" image="custom-img" />

            <section className="py-12 container mx-auto">
                <CustomerList customers={customers}/>
            </section>  

            <section className="py-12 container mx-auto">
                <AddCustomerForm  onFormSubmit={handleFormSubmit}  />    
            </section>          
        </div>
    );
}