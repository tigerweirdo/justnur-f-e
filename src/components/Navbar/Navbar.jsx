import React from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.Logo} alt="header_img" />
       

      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><Link to="/">Anasayfa</Link></li>
        <li className="p__opensans"><a href="/#about">Hakkında</a></li>
        <li className="p__opensans"><Link to="/products">Ürünler</Link></li>
        <li className="p__opensans"><a href="/#contact">İletişim</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="/#login" className="p__opensans">Kayıt</a>
        <div />
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><Link to="/" onClick={() => setToggleMenu(false)}>Home</Link></li>
              <li><Link to="/#about" onClick={() => setToggleMenu(false)}>About</Link></li>
              <li><Link to="/products" onClick={() => setToggleMenu(false)}>Menu</Link></li>
              <li><Link to="/#contact" onClick={() => setToggleMenu(false)}>Contact</Link></li>
            </ul>
          </div>
          
        )}
      </div>
  
      
    </nav>
    
  );
};

export default Navbar;
