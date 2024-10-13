import React from 'react';
import NavBar from './components/NavBar';
import Contact from './components/Contact';
import Projects from './components/Projects';
import About from './components/About';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


const App = () => { 
  return (
    <div>
    <Router>
      <div className="bg-customBg min-h-screen">
        <NavBar />
        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} /> 
        </Routes>
      </div>
    </Router>
    
    </div>
  );
};

export default App;
