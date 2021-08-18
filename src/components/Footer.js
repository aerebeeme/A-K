    import React from 'react';
    import './Footer.css';
    import { Link } from 'react-router-dom';

    function Footer() {

        
    return (
        <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
            Contact us!
            </p>
            <p className='footer-subscription-text'>
            <i class="far fa-id-badge"/> Contact Us!<br/><br/>
            <i class="far fa-clock"/> Attention Schedule: 9:00 to 17:00 <br/> from Monday to Friday<br/><br/>
            <i class="fas fa-phone-square-alt"/><a href='tel:+12014245507'  style={{textDecoration:"none", color:"white", hover:"blue"}}> 2014245507</a><br/><br/>
            <i class="fab fa-whatsapp"/><a href='https://api.whatsapp.com/send?phone=15512389545'  style={{textDecoration:"none", color:"white", hover:"blue"}}> 5512389545</a><br/><br/>
            <i class="far fa-envelope-open"/> <a href='mailto:akcleanmain@gmail.com' style={{textDecoration:"none", color:"white", hover:"blue"}}> akcleanmain@gmail.com</a>
            </p>
            <div className='input-areas'>
            <p className="footer-description">"We are the solution to the daily problems of your life"</p>
            </div>
        </section>
        <section class='social-media'>
            <div class='social-media-wrap'>
            <div class='footer-logo'>
                <Link to='/' className='social-logo'>
                <img src={require('../assets/images/Horiontal.svg').default} style={{width:"220px", height:"95px"}} alt="AK Logo"/>
                </Link>
            </div>
            <small class='website-rights'>A&K © 2021</small>
            <div class='social-icons'>
                <Link
                class='social-icon-link facebook'
                target='_blank'
                aria-label='Facebook'
                > <a href='https://www.facebook.com/109691281348796/'>
                <i class='fab fa-facebook-f' /></a>
                </Link>
                <Link
                class='social-icon-link facebook'
                target='_blank'
                aria-label='Facebook'
                > <a href='https://www.instagram.com/akcleanmain/'>
                <i class="fab fa-instagram"/></a>
                </Link>
            </div>
            </div>
        </section>
        </div>
    );
    }

    export default Footer;
