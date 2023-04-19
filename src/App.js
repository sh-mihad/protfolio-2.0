import React from 'react';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Expiriance from './components/Expiriance/Expiriance';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import SideIcons from './components/SideIcons/SideIcons';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="bg-[#0a192f] App max-w-screen-2xl mx-auto relative">
     <Navbar/>
     <Header/>
     <About/>
     <Skills/>
     <Projects/>
     <Expiriance/>
     <Contact/>
     <SideIcons/>
   
    </div>
  );
}

export default App;
