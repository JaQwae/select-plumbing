import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import './App.css'
import { AnimatedRoutes } from './components/navbar/AnimatedRoutes';
import Footer from './components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
      <Footer/>
    </BrowserRouter>
  )
}

export default App
