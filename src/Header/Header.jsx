import React from 'react';
import './index.scss';
import arrowImg from '../img/arrow.png';

const Header = () => {
  return (
    <>
      <header>
        <div className='header-img'>
          <img src={arrowImg} alt='arrow'></img>
        </div>
        <div className='header-text'>
          <h1>FIG ARTISTIC GYMNASTICS WORLD CUP</h1>
          <div className='header-info'>
            <p>Doha, Qatar</p>
            <p>12/03/2023 - 13/02/2023</p>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header