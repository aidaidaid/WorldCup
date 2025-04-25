import React from 'react';
import './index.scss';
import { Tabs } from 'antd';
import Results from '../Results/Results';
import Live from '../Live/Live';

const Navbar = () => {

  const items = [
    {
      key: '1',
      label: 'Live',
      children: <Live/>,
      icon: <div className="circle-container">
              <div className="circle"></div>
            </div>,
    },
    {
      key: '2',
      label: 'Startlist',
      children: '',
    },
    {
      key: '3',
      label: 'Schedule',
      children: '',
    },
      {
      key: '4',
      label: 'Results',
      children: <Results/>,
    },
    {
      key: '5',
      label: 'Medals',
      children: '',
    },
  ];

  return (
    <Tabs defaultActiveKey="1" centered items={items} />
  )
};

export default Navbar;