import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>İletişim</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Fethiye mh. Pazar sk. No:30/A Tepelioğlu Apt A Blok D:2 </p>
        <p className="p__opensans">Nilüfer/BURSA</p>

        <p className="p__opensans">+90 541 203 47 66</p>
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.squirrelwithapeanut} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;