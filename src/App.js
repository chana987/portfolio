import React from 'react'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import CV from './components/CV'
import profile from './assets/profile.jpeg'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faEnvelope, faPhone)

const App = () => {
  return (
    <Router>
      <div id="app">
        <div id="nav">
          <div>
            <img id="profile" src={profile} alt="" />
            <h3>Chana Meyer</h3>
            <h4>Full-Stack Web Developer</h4>
          </div>
          <div id="links">
            <NavLink className="nav-link" activeClassName="selected" to="/">Home</NavLink>
            <NavLink className="nav-link" activeClassName="selected" to="/about">About Me</NavLink>
            <NavLink className="nav-link" activeClassName="selected" to="/portfolio">Portfolio</NavLink>
            <NavLink className="nav-link" activeClassName="selected" to="/gallery">Gallery</NavLink>
            <NavLink className="nav-link" activeClassName="selected" to="/cv">My CV</NavLink>
            <NavLink className="nav-link" activeClassName="selected" to="/contact">Contact Me</NavLink>
          </div>
        </div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/portfolio' component={Portfolio} />
            <Route exact path='/gallery' component={Gallery} />
            <Route exact path='/cv' component={CV} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
      </div>
    </Router>
  )
}

export default App