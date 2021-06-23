import React from 'react';
import './Navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
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
            <img src={require('../assets/images/Solo.svg').default} style={{width:"220px", height:"55px"}} alt="AK Logo"/></Navbar.Brand>
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
        <Navs>
            <NavDropdown title="Contact Us!" id="collasible-nav-dropdown" style={{textDecoration:"none", color:"white"}}>
                <NavDropdown.Item href="tel:+12014245507"><i class="fas fa-phone-square-alt"/> 2014245507</NavDropdown.Item>
                <NavDropdown.Item href="https://api.whatsapp.com/send?phone=15512389545"><i class="fab fa-whatsapp"/>5512389545</NavDropdown.Item>
                <NavDropdown.Item href="mailto:akcleanmain@gmail.com"><i class="far fa-envelope-open"/> akcleanmain@gmail.com</NavDropdown.Item>
                <NavDropdown.Item href="https://www.facebook.com/109691281348796/"><i class="fab fa-facebook-f"/> A&K Cleaning and Maintenance LLC</NavDropdown.Item>
                <NavDropdown.Item href="https://www.instagram.com/akcleanmain/"><i class="fab fa-instagram"/> akcleanmain</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item><i class="far fa-clock"/> Attention Schedule: 9:00 to 17:00 <br/> from Monday to Friday</NavDropdown.Item>
            </NavDropdown>
        </Navs>
        </Navbar.Collapse>
    </Navbar>
)
}


export default Nav;
