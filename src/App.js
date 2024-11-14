import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Assuming Navbar is in the same folder
import Login from './components/Login';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/login"    element={<Login />} />
        <Route path="/aboutus" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
