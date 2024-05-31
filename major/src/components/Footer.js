
import React from 'react';
import { Link } from 'react-router-dom';
import { FaYoutube, FaLinkedin, FaEnvelope, FaFacebook } from 'react-icons/fa';
import '../App.css';


function Footer() {
  return (
    <footer id='CV' className='footer'>
      <div className='footerlinks'>
        
       <Link to={'https://www.youtube.com/@Major_Drone'} aria-label="Youtube" className='linkFooter' >
         <span className='spanFooter'>Youtube</span>
          <FaYoutube />
        </Link>
       <Link to={'https://www.linkedin.com/in/guillaume-marin-ab0875269/'} aria-label="LinkedIn" className='linkFooter'>
          <span className='spanFooter'>LinkedIn</span>
          <FaLinkedin />
        </Link>
        <Link to={'https://www.facebook.com/MajorDrone'} aria-label="Facebook" className='linkFooter'>
          <span className='spanFooter'>Facebook</span>
          <FaFacebook />
        </Link>
        <Link to={'./contact'} aria-label="Contact" className='linkFooter'>
          <span className='spanFooter'>Contact</span>
          <FaEnvelope />
        </Link>

      </div>
   <h4 style={{ fontSize: '15px', color: 'black', width: 'auto',fontFamily:'oxygen',fontWeight:'500'}}><Link className='linkCopyright' to ={'https://portfolio-frederic-toppan.vercel.app/'}>©2023 The Art of Code </Link>, Tous droits réservés </h4>
    </footer>
  );
}

export default Footer;