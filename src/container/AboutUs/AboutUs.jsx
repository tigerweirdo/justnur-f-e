import React, { useState } from 'react';
/* import { images } from '../../constants'; */
import './AboutUs.css';

const AboutUs = () => {
  const [showMore, setShowMore] = useState(false);

  const extraContent = <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>;

  const handleButtonClick = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="app__aboutus app__bg flex__center section__padding" id="about">
      <div className="app__aboutus-overlay flex__center">
{/*         <img src={images.G} alt="G_overlay" />
 */}      </div>

      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">Hakkımızda</h1>
          <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
          {showMore && extraContent}
          <button className="custom-button1" onClick={handleButtonClick}>{showMore ? "Gizle" : "Devam"}</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

