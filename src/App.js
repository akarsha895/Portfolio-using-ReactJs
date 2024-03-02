
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import "./components/Navigation.css";
import "./components/AboutMe.css";
import "./components/Home.css";
import "./components/Projects.css";
import "./components/Skills.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div >
        <Navigation />
       
        <main>
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
     
    </Router>
  );
}

export default App;


