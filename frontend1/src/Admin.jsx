import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Admin=()=>{
  const[username, setUsername]=useState('');
  const[password, setPassword]=useState('');
  const navigate=useNavigate();

  const handleSubmit=(event)=>{
    event.preventDefault();
    axios.post('http://localhost:8081/admin', {username,password})
    .then(res=>{
      if(res.status===200){
        console.log('Login successful:',res.data);
        navigate('/add-details');
      }
    })
    .catch(err=>{
      console.log('Error:',err);
      if (err.response && err.response.status === 404) {
        alert('Wrong username or password');
      } else {
        alert('An error occurred during login');
      }
    });
  };

  return(
    <div className='d-flex vh-100 justify-content-center align-items-center bg-primary'>
      <div className='p-3 bg-white w-25'>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="username">UserName</label>
            <input
              type="username"
              id="username"
              placeholder='Enter Username'
              className='form-control'
              onChange={e=>setUsername(e.target.value)}
              value={username}
              />
          </div>
          <div className='mb-3'>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder='Enter Password'
              className='form-control'
              onChange={e=>setPassword(e.target.value)}
              value={password}
              />
          </div>
          <button type="submit" className='btn btn-success'>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Admin;