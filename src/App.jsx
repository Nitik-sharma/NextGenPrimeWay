import { useState } from 'react'
import Navbar from './components/common/Navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Footer from './components/common/Footer';
import About from './components/pages/About/About';


function App() {
  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About/> } />
        
      </Routes>
      <Footer/>
    </>
  );
}

export default App
