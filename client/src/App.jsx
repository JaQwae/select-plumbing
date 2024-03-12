import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import './App.css'
import { AnimatedRoutes } from './components/navbar/AnimatedRoutes';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
    </BrowserRouter>
  )
}

export default App
