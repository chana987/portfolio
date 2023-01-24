import React from 'react';
import { HashRouter, Route, NavLink, Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Gallery from './components/Gallery';
import CV from './components/CV';
import profile from './assets/profile.jpeg';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faGlobe } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faEnvelope, faPhone, faGlobe);

const App = () => {
  return (
    <div id="app">
      <HashRouter>
        <div id="nav">
          <div>
            <img id="profile" src={ profile } alt="" />
            <h3>Chana Meyer</h3>
            <h4>Full-Stack Web Developer</h4>
          </div>
          <div id="links">
            <NavLink className="nav-link" activeclassname="selected" to="/">Home</NavLink>
            <NavLink className="nav-link" activeclassname="selected" to="/about">About Me</NavLink>
            <NavLink className="nav-link" activeclassname="selected" to="/portfolio">Portfolio</NavLink>
            <NavLink className="nav-link" activeclassname="selected" to="/gallery">Gallery</NavLink>
            <NavLink className="nav-link" activeclassname="selected" to="/cv">CV</NavLink>
          </div>
        </div>
        <Routes>
          <Route exact path='/' element={ <Home /> } />
          <Route exact path='/about' element={ <About /> } />
          <Route exact path='/portfolio' element={ <Portfolio /> } />
          <Route exact path='/gallery' element={ <Gallery /> } />
          <Route exact path='/cv' element={ <CV /> } />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;