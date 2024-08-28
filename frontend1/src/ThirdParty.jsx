import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ThirdParty = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Replace this with your actual authentication logic
    const isThirdPartySignedUp = checkThirdPartySignup(username, password);

    if (isThirdPartySignedUp) {
      navigate('/add-details'); // Redirect to add details page
    } else {
      navigate('/signup'); // Redirect to signup page
    }
  };

  // Dummy function to simulate third-party user check
  const checkThirdPartySignup = (username, password) => {
    // Replace with actual logic to check if the third-party user is signed up
    return username === 'thirdPartyUser' && password === 'password'; // Example condition
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-6">Third Party Login</h1>
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
            onClick={handleLogin}
            className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition ease-in-out duration-300"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThirdParty;
