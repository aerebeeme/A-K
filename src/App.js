import React from 'react'
import './App.css';
import Navbar from './components/Nav'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home.js';
import Services from './components/pages/Services.js';
import AboutUs from './components/pages/AboutUs.js';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/services" component={Services}/>
          <Route exact path="/aboutus" component={AboutUs}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
