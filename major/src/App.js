import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';

import Header from './components/Header';
import Homes from './pages/Home';
import Matos from './pages/Materials';
import Contacts from './pages/Contact';
import Project from './pages/Projects';
import Footer from './components/Footer';
// import Coming from './components/comingSoon';
import YouTubeBackground from './components/Youtubeback';


function App() {
  

  return (
    <Router>
      <div className='body'>
       <Header/>
       {/* <Coming/> */}
       <YouTubeBackground />
         <Routes>
            <Route path="/" element={<Homes/>} />
            <Route path="/projects" element={<Project />} />
            <Route path="/Materials" element={<Matos />} />
            <Route path="/contact" element={<Contacts />} />
        </Routes>
      <Footer />
         
      </div>
    </Router>
  );
}

export default App;