import React from 'react';
import './Navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Navs from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';

function Nav(){
    return(
        <Navbar collapseOnSelect expand="lg" style={{
            background:"#242424",
            margin:"0",
            paddingLeft:"10",
            color:"#fff"}} className='nav-style'>
        <Navbar.Brand href="/" style={{
            color:"#fff",
            fontSize:"2rem"}}>
            <img src={require('../assets/images/Solo.svg').default} style={{width:"220px", height:"60px"}} alt="AK Logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-toggler-icon"/>
        <Navbar.Collapse id="navbar-toggler-icon">  
        <Navs className='nav-link' style={{
            color:"#fff",
            display:"flex",
            fontSize:"1.45em",
        }}>
            <Navs.Link eventKey={2} style={{color:"#fff"}} href="/">Home</Navs.Link>
            <Navs.Link eventKey={2} style={{color:"#fff"}} href="/aboutus">About Us</Navs.Link>
            <Navs.Link eventKey={2} style={{color:"#fff"}} href="/services">Services</Navs.Link>
        </Navs>
        </Navbar.Collapse>
    </Navbar>
)
}


export default Nav;
