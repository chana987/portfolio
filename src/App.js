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
      <HashRouter>
        <Routes>
          <Route exact path='/'><Home /></Route>
          <Route exact path='/about'><About /></Route>
          <Route exact path='/portfolio'><Portfolio /></Route>
          <Route exact path='/gallery'><Gallery /></Route>
          <Route exact path='/cv'><CV /></Route>
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;