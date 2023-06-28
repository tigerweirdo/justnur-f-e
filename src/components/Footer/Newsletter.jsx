import React, { useState } from 'react';
import axios from 'axios'; // axios import etmeyi unutmayın!
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [email, setEmail] = useState('');

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
        setIsClicked(false);
    },1000); 

    // E-posta adresini sunucuya gönder
    axios.post('http://localhost:3000/api/newsletter', { email })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading/>
        <h1 className="headtext__cormorant">Bültenimize Abone Olun!</h1>
        <p className="p__opensans"></p>
      </div>
      <div className="app__newsletter-input flex__center">
        <input 
          type="email" 
          placeholder="Mail adresinizi giriniz" 
          value={email}
          onChange={handleEmailChange} 
        />
        <div className="wrap">
          <button 
            className={`button ${isClicked ? 'clicked' : ''}`} 
            onClick={handleClick}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
