import React from 'react'
import './App.css';
import Navbar from './components/Nav'
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home.js';
import Services from './components/pages/Services.js';
import AboutUs from './components/pages/AboutUs.js';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/services" exact component={Services}/>
          <Route path="/aboutus" exact component={AboutUs}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
