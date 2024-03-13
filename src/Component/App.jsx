import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Experience from './Experience';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

export default function App() {
  return (
    <>  
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/experience" element={<Experience/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>

      </BrowserRouter>
      
    </>
  )
}
