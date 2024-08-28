import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import BackgroundImage from './assets/diginet.jpg'; // Adjust the path if needed

const Home = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle button clicks
  const handleButtonClick = (route) => {
    navigate(route); // Navigate to the specified route
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{ 
        backgroundImage: `url(${BackgroundImage})`,
        backgroundColor: '#000', // Fallback color
      }}
    >
      {/* Main Title or Logo */}
      <div className="text-center text-black mb-16">
        <h1 className="text-7xl font-extrabold">Digital Networking</h1>
      </div>

      {/* Main Content */}
      <div className="text-center text-black p-12 bg-opacity-80 bg-gray-900 rounded-lg shadow-lg max-w-lg">
        <h2 className="text-5xl font-bold mb-8">Choose Your Role</h2>
        <p className="text-2xl mb-8">
          Are you an Admin, User, or 3rd Party Administrator?
        </p>

        {/* Enlarged Buttons for Role Selection */}
        <div className="flex flex-col space-y-6">
          <button
            onClick={() => handleButtonClick('/admin')} // Navigate to Admin page
            className="px-8 py-4 text-2xl bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-200 transition ease-in-out duration-300"
          >
            Admin Login
          </button>
          <button
            onClick={() => handleButtonClick('/user-login')} // Adjust route as needed
            className="px-8 py-4 text-2xl bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-200 transition ease-in-out duration-300"
          >
            User Login
          </button>
          <button
            onClick={() => handleButtonClick('/3rd-party-login')} // Adjust route as needed
            className="px-8 py-4 text-2xl bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-200 transition ease-in-out duration-300"
          >
            3rd Party Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
