import React, { useState } from 'react';
import axios from 'axios';

const AddDetails = () => {
    const [aadharno, setAadharno] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    // Add other fields as needed

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const crudData = { aadharno, phone };
        const userData = { name, address }; // Add other fields as needed

        // First, insert into `crud` table
        axios.post('http://localhost:8081/add-crud', crudData)
            .then(res => {
                if (res.status === 200) {
                    // If successful, proceed to insert into `user` table
                    axios.post('http://localhost:8081/add-user', userData)
                        .then(res => {
                            if (res.status === 200) {
                                console.log('User details added successfully');
                            }
                        })
                        .catch(err => {
                            console.error('Error adding user details:', err);
                        });
                }
            })
            .catch(err => {
                console.error('Error adding crud details:', err);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Crud Table Fields */}
            <input
                type="text"
                placeholder="Aadhar Number"
                value={aadharno}
                onChange={(e) => setAadharno(e.target.value)}
            />
            <input
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />

            {/* User Table Fields */}
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            
            {/* Add other fields as needed */}

            <button type="submit">Submit</button>
        </form>
    );
};

export default AddDetails;
