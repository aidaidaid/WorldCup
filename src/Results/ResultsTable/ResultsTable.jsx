import React from 'react';
import './index.scss';
import { Table } from 'antd';
import { resultsData } from '../../JSON/resultsData';
import { totalFunction } from './totalFunction';

const ResultsTable = () => {
  const processedData = totalFunction(resultsData);
    
  const columns = [
    {
      title: 'Rank',
      dataIndex: 'rank',
      key: 'rank',
      width: 40,
      fixed: 'left',
        render: (rank) => (
        <div className='rank'>
          {rank}
        </div>
      ),
    },
    {
      title: 'Team',
      dataIndex: 'team',
      key: 'team',
      width: 100,
      render: (team) => (
        <div style={{ display: 'flex', alignItems: 'center'}}>
          <img 
            src={`${process.env.PUBLIC_URL}/img/${team}.png`} 
            alt={team} 
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
          <span style={{ fontWeight: 500 }}>{team}</span>
        </div>
      ),
    },
    {
      title: 'Bib',
      dataIndex: 'bib',
      key: 'bib',
      width: 80,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 200,
    },
    {
      title: 'D',
      key: 'D',
      render: (_, record) => (
        <div>
          {record.scores.map((score, i) => (
            <div key={`D-${i}`}>{score.D || '-'}</div>
          ))}
        </div>
      ),
      width: 100,
    },
    {
      title: 'E',
      key: 'E',
      render: (_, record) => (
        <div>
          {record.scores.map((score, i) => (
            <div key={`E-${i}`}>{score.E || '-'}</div>
          ))}
        </div>
      ),
      width: 100,
    },
    {
      title: 'Pen',
      key: 'Pen',
      render: (_, record) => (
        <div>
          {record.scores.map((score, i) => (
            <div key={`Pen-${i}`}>{score.Pen || '-'}</div>
          ))}
        </div>
      ),
      width: 100,
    },
    {
      title: 'Total',
      key: 'Total',
      render: (_, record) => (
        <div className="totals-column">
          {record.scores.map((score, i) => (
            <div key={`total-${i}`}>
              {score.total?.toFixed(3) || '-'}
            </div>
          ))}
          <div className="final-score">
            {record.finalScore.toFixed(3)}
          </div>
        </div>
      ),
      width: 120,
    },
  ];

  return (
    <Table
      className="results-table"
      columns={columns}
      dataSource={processedData}
      size="middle"
      pagination={false}
      scroll={{ x: 'max-content' }}
    />
  );
};

export default ResultsTable;