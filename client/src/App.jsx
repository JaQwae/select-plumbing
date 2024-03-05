import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import './App.css'
import { AnimatedRoutes } from './components/Navbar/AnimatedRoutes';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
    </BrowserRouter>
  )
}

export default App
