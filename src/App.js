import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/ui_assets/NavBar';

import Home from './components/home/Home';
import Experience from './components/experience/Experience';
import Education from './components/education/Education';
import Skills from './components/Skills';

function App() {
  return (
    <Router>
      <div>
        <NavBar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
