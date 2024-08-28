/*import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddDetails = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Replace this with your actual logic to check user signup status
    const isUserSignedUp = checkUserSignup(username, password);

    if (isUserSignedUp) {
      // User is already signed up, redirect to the signup page
      navigate('/signup'); 
    } else {
      // User is not signed up, handle the case (e.g., show a message or redirect to signup)
      navigate('/signup'); // Redirect to signup page to sign up
    }
  };

  // Dummy function to simulate user check
  const checkUserSignup = (username, password) => {
    // Replace with actual logic to check if user is signed up
    return username === 'user' && password === 'password'; // Example condition
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-6">Add Your Details</h1>
        <div className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition ease-in-out duration-300"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddDetails;*/


import React, { useState } from 'react';
import axios from 'axios';

const AddDetailsUser = () => {
    const [formData, setFormData] = useState({
        username: '',
        name: '',
        dateOfBirth: '',
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
        axios.post('http://localhost:8081/add-details', formData)
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
        <div className='container mt-5'>
            <h2>Add Your Details</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder='Enter Username'
                        className='form-control'
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder='Enter Name'
                        className='form-control'
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor="dateOfBirth">Date of Birth</label>
                    <input
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        className='form-control'
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor="aadhaarNumber">Aadhaar Number</label>
                    <input
                        type="text"
                        id="aadhaarNumber"
                        name="aadhaarNumber"
                        placeholder='Enter Aadhaar Number'
                        className='form-control'
                        value={formData.aadhaarNumber}
                        onChange={handleChange}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder='Enter Phone Number'
                        className='form-control'
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder='Enter Password'
                        className='form-control'
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor="gender">Gender</label>
                    <select
                        id="gender"
                        name="gender"
                        className='form-control'
                        value={formData.gender}
                        onChange={handleChange}
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className='mb-3'>
                    <label htmlFor="address">Address</label>
                    <textarea
                        id="address"
                        name="address"
                        placeholder='Enter Address'
                        className='form-control'
                        value={formData.address}
                        onChange={handleChange}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor="country">Country</label>
                    <input
                        type="text"
                        id="country"
                        name="country"
                        placeholder='Enter Country'
                        className='form-control'
                        value={formData.country}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className='btn btn-primary'>Submit</button>
            </form>
        </div>
    );
};

export default AddDetailsUser;
