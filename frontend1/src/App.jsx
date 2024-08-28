import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import backgroundImage from './assets/diginet.jpg';
//import { NavbarWrapper, NavLinks, NavLink } from './NavbarWrapper';
import Home from './Home';
import Contacts from './Contacts';
import Blog from './Blog';
import Login from './Login';
import Admin from './Admin';
import AddDetailsUser from './AddDetailsUser';
import Services from './Services';
import InnerHome from './InnerHome';
//import User from './User'; // Import User component
import AddDetails from './AddDetails';
import Navbar from './Navbar';

const App = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', // Full viewport height
    width: '100vw',  // Full viewport width
  };

  return (
    <Router>
      <div style={backgroundStyle}>
        <NavbarWrapper/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/services" element={<Services />}/>
          <Route path="/innerhome" element={<InnerHome />}/>
          <Route path="/user-login" element={<AddDetailsUser />} /> 
          <Route path="/add-details" element={<AddDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

// Component to conditionally render Navbar
const NavbarWrapper = () => {
  const location = useLocation();
  
  // Check if the current path is the home page
  const showNavbar = location.pathname === '/';
  
  return (
    <>
      {showNavbar && <Navbar />}
    </>
  );
};

export default App;

