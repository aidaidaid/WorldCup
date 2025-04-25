import { Image } from 'antd';
import React from 'react';
import './index.scss';
import Floor from '../../img/Floor.png';
import HB from '../../img/HB.png';
import PB from '../../img/PB.png';
import PH from '../../img/PH.png';
import VT from '../../img/VT.png';
import Rings from '../../img/Rings.png';

const SportIcons = () => {
  const images = [Floor, PH, Rings, VT, PB, HB];

  return (
    <div className="sport-icons">
      {images.map((img, index) => (
        <Image
          key={index}
          src={img}
          width={45}
          height={45}
          preview={false}
          className="gallery-image"
        />
      ))}
    </div>
  );
};

export default SportIcons;