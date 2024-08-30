import React from 'react';
//import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import BackgroundImage from './assets/diginet.jpg'; // Adjust the path if needed

const Home = () => {
// Initialize the navigate function


  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{ 
        // backgroundImage: `url(${BackgroundImage})`,
        backgroundColor: '#000', // Fallback color
      }}
    >
      {/* Main Title or Logo */}
      <div className="text-center text-black mb-16">
      <h1 className="font-extrabold" style={{ fontSize: '5rem' }}>Digital Networking</h1>
      </div>

    </div>
  );
};

export default Home;
