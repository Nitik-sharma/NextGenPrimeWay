import { useState } from 'react'
import Navbar from './components/common/Navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Footer from './components/common/Footer';
import About from './components/pages/About/About';
import Service from './components/pages/Service/Service';
import ProjectApproach from './components/pages/Projects/ProjectApproach';
import ContactPage from './components/pages/ContactUs/Contactpage';


function App() {
  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="//services" element={<Service />} />
        <Route path="/projects" element={<ProjectApproach />} />
        <Route path="/contact" element={<ContactPage/> } />
      </Routes>
      <Footer />
    </>
  );
}

export default App
