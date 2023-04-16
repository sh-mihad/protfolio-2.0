import React from 'react';
import './App.css';
import About from './components/About/About';
import Expiriance from './components/Expiriance/Expiriance';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="bg-[#0a192f] App">
     <Navbar/>
     <Header/>
     <About/>
     <Skills/>
     <Projects/>
     <Expiriance/>
   
    </div>
  );
}

export default App;
