import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import Hero from './Hero';
import Project1 from './Project1';

function App() {
const location=useLocation()
  return (

<AnimatePresence>
        <Routes location={location} key={location.key} >
          <Route path='/' element={<Hero />} />
          <Route path='/Project1' element={<Project1 />} />
        </Routes>
      </AnimatePresence>
   
  );
}

export default App;
