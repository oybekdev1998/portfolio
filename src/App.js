import React from 'react';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import {Routes, Route} from 'react-router-dom'

import './App.css';

function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      <div>
        
      </div>
    </>
  );
}

export default App;
