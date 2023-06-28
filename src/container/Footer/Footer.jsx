import React from 'react';
import { FiFacebook, FiInstagram } from 'react-icons/fi';
import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <div className="footer">
    <div className="footer__top">
      
      <div className="footer__social-icons">
        <FiFacebook className="footer__icon" />
        <FiInstagram className="footer__icon" />
      </div>
      <p className="p__opensans">0541 203 47 66</p>
      <a href="mailto:info@fıstıkezmecim.com" className="p__opensans">info@fıstıkezmecim.com</a>
      <img src={images.Logo2} alt="logo" className="logo2" />
      

    </div>
        
        
        
          <div className="logo-section">  
          <p className="p__opensans2">web design</p>
             <div className='img'>
             <a href="https://www.linkedin.com/in/mete-han-%C3%A7etiner-3534431a8/"target="_blank">
  <img src={images.logo3} alt="logo" className="logo" />
</a>
</div>
    <div className="footer__copyright-logo">
          <p className="p__opensans2">© JustNut, 2023</p>
          </div>
          </div>
  </div>
);

export default Footer;
