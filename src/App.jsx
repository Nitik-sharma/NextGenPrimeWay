import { useState } from 'react'
import Navbar from './components/common/Navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Footer from './components/common/Footer';


function App() {
  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
      <Footer/>
    </>
  );
}

export default App
