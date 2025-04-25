import React from 'react';
import './index.scss';
import { Button, Table } from 'antd';
import { liveData } from '../JSON/liveData';

const LiveTable = () => {
  const data = liveData.results.map(item => ({
    key: item.id,
    ...item,
  }));

  const columns = [
    {
      dataIndex: 'sport',
      key: 'sport',
      width: 25,
      render: (sport, record) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src={sport}
            alt='icon'
            style={{
              width: '24px',
              height: '24px',
              marginRight: '8px',
              objectFit: 'contain'
            }}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      ),
    },
    {
      dataIndex: 'team',
      key: 'country',
      width: 50,
      render: (team) => (
        <div style={{ display: 'flex', alignItems: 'center'}}>
          <img 
            src={`${process.env.PUBLIC_URL}/img/${team}.png`} 
            alt={team} 
            style={{ 
              width: '20px', 
              height: '14px', 
              marginRight: '8px',
              objectFit: 'contain'
            }} 
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <span>{team}</span>
        </div>
      ),
    },
    {
      dataIndex: 'bib',
      key: 'bib',
      width: 50,
    },
    {
      dataIndex: 'name',
      key: 'name',
      width: 120,
    },
    {
      key: 'scores',
      width: 200,
      render: (_, record) => {
        let clsName;
        if (record.status) {
          if (record.status === 'Wait') clsName = 'warning-btn';
          if (record.status === 'Go') clsName = 'success-btn';
        }
        return (
          <div style={{ display: 'flex', gap: '8px' }}>
            {record.status ? (
              <Button
                className={clsName}
                type="primary" 
                danger 
                size="small"
              >
                {record.status}
              </Button>
            ) : (
              <>
                <div>D: {record.scores[0]?.D?.toFixed(3)}</div>
                <div>E: {record.scores[0]?.E?.toFixed(3)}</div>
                <div>P: {record.scores[0]?.P}</div>
              </>
            )}
          </div>
        )
      }
    },
    {
      title: 'App',
      key: 'app',
      width: 60,
      render: (_, record) => {
        if (!record.app && !record.appRank) return null;
        return (
          <div className='live-rank'>
            {record.app && <span>{record.app.toFixed(3)}</span>}
            {record.appRank && <div className='rank'>{record.appRank}</div>}
          </div>
        );
      },
    },
    {
      title: 'AA',
      key: 'aa',
      width: 60,
      render: (_, record) => {
        if (!record.aa && !record.aaRank) return null;
        return (
          <div className='live-rank'>
            {record.aa && <span>{record.aa.toFixed(3)}</span>}
            {record.aaRank && <div className='rank'>{record.aaRank}</div>}
          </div>
        );
      },
    },
    {
      title: 'Team',
      key: 'team',
      width: 60,
      render: (_, record) => {
        if (!record.teamScore && !record.teamRank) return null;
        return (
          <div className='live-rank'>
            {record.teamScore && <span>{record.teamScore.toFixed(3)}</span>}
            {record.teamRank && <div className='rank'>{record.teamRank}</div>}
          </div>
        );
      },
    },
  ];

  return (
    <Table
      className="results-table"
      columns={columns}
      dataSource={data}
      size="middle"
      pagination={false}
      scroll={{ x: 1500 }}
    />
  );
};

export default LiveTable