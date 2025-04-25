import React from 'react';
import './index.scss';
import LiveTable from './LiveTable';
import LiveTableMob from './LiveTableMob';

const Live = () => {
return (
    <>
      <div className="desktop-version">
        <LiveTable/>
      </div>
      <div className="mobile-version">
        <LiveTableMob/>
      </div>
    </>
  );
};

export default Live;