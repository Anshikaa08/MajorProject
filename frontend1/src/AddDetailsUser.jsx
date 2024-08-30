import React, { useState } from 'react';
import axios from 'axios';

const AddDetailsUser = () => {
    const [formData, setFormData] = useState({
        Username: '',
        Name: '',
        Date_Of_Birth: '',
        aadhaarNumber: '',
        phoneNumber: '',
        password: '',
        gender: '',
        address: '',
        country: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/add-user-details', formData)
            .then(res => {
                console.log('Details added successfully:', res.data);
                // Handle successful form submission here (e.g., redirect to another page)
            })
            .catch(err => {
                console.error('Error adding details:', err);
                // Handle error here (e.g., show error message)
            });
    };

    return (
        <>
        <div className='container mt-5'>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="Username">Username</label>
                    <input
                        type="text"
                        id="Username"
                        name="Username"
                        placeholder='Enter Username'
                        className='form-control'
                        value={formData.Username}
                        onChange={handleChange}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor="Name">Name</label>
                    <input
                        type="text"
                        id="Name"
                        name="Name"
                        placeholder='Enter Name'
                        className='form-control'
                        value={formData.Name}
                        onChange={handleChange}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor="Date_Of_Birth">Date of Birth</label>
                    <input
                        type="date"
                        id="Date_Of_Birth"
                        name="Date_Of_Birth"
                        className='form-control'
                        value={formData.Date_Of_Birth}
                        onChange={handleChange}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor="Aadhaar_Number">Aadhaar Number</label>
                    <input
                        type="text"
                        id="Aadhaar_Number"
                        name="Aadhaar_Number"
                        placeholder='Enter Aadhaar Number'
                        className='form-control'
                        value={formData.Aadhaar_Number}
                        onChange={handleChange}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor="Phone_Number">Phone Number</label>
                    <input
                        type="tel"
                        id="Phone_Number"
                        name="Phone_Number"
                        placeholder='Enter Phone Number'
                        className='form-control'
                        value={formData.phonPhone_NumbereNumber}
                        onChange={handleChange}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor="Password">Password</label>
                    <input
                        type="Password"
                        id="Password"
                        name="Password"
                        placeholder='Enter Password'
                        className='form-control'
                        value={formData.Password}
                        onChange={handleChange}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor="Gender">Gender</label>
                    <select
                        id="Gender"
                        name="Gender"
                        className='form-control'
                        value={formData.Gender}
                        onChange={handleChange}
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className='mb-3'>
                    <label htmlFor="Address">Address</label>
                    <textarea
                        id="Address"
                        name="Address"
                        placeholder='Enter Address'
                        className='form-control'
                        value={formData.Address}
                        onChange={handleChange}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor="Country">Country</label>
                    <input
                        type="text"
                        id="Country"
                        name="Country"
                        placeholder='Enter Country'
                        className='form-control'
                        value={formData.Country}
                        onChange={handleChange}
                    />
                </div>
                <button 
                type="submit" className='btn btn-primary'>Submit</button>
            </form>
        </div>
        </>
    );
};

export default AddDetailsUser;
