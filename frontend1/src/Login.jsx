import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = () => {
    const [aadhar, setAadhar] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/login', { aadhar,phone })
            .then(res => {
                if (res.status === 200) {
                    console.log('Login successful:', res.data);
                    // Redirect to AddDetailsUser page
                    navigate('/innerhome');
                }
            })
            .catch(err => {
                console.error('Error:', err);
                // Handle error here (e.g., show error message)
            });
    };

    return (
        <div className='d-flex vh-100 justify-content-center align-items-center bg-primary'>
            <div className='p-3 bg-white w-25'>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="aadhar">Aadhar Number</label>
                        <input
                            type="aadhar"
                            id="addhar"
                            placeholder='Enter Aadhar Number'
                            className='form-control'
                            onChange={e => setAadhar(e.target.value)}
                            value={aadhar}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="phone"
                            id="phone"
                            placeholder='Enter Phone'
                            className='form-control'
                            onChange={e => setPhone(e.target.value)}
                            value={phone}
                        />
                    </div>
                    <button type="submit" className='btn btn-success'>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
