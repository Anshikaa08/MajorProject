import React, { useState } from 'react';
import axios from 'axios';

const DeleteUser = () => {
  const [aadhar, setAadhar] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`http://localhost:8081/DeleteUser`, {
        data: {
          aadhar,
          phone,
        },
      });
      alert('User deleted successfully');
      setAadhar('');
      setPhone('');
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Failed to delete user');
    }
  };

  return (
    <div>
      <h1>DELETE USER</h1>
      <div className='d-flex vh-100 justify-content-center align-items-center bg-primary'>
        <div className='p-3 bg-white w-25'>
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label htmlFor="aadhar">Aadhar Number</label>
              <input
                type="text"
                id="aadhar"
                placeholder='Enter Aadhar Number'
                className='form-control'
                onChange={e => setAadhar(e.target.value)}
                value={aadhar}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                id="phone"
                placeholder='Enter Phone'
                className='form-control'
                onChange={e => setPhone(e.target.value)}
                value={phone}
              />
            </div>
            <button type="submit" className='btn btn-success'>Delete</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DeleteUser;
