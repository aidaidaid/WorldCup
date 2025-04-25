import React from 'react';
import { Collapse } from 'antd';
import { resultsData } from '../../JSON/resultsData';
import './index.scss';
import { DownOutlined } from '@ant-design/icons';
import { totalFunction } from './totalFunction';

const ResultsTableMob = () => {
  const processedData = totalFunction(resultsData);

  return (
    <div className="results-collapse">
      <Collapse
        accordion
        expandIconPosition="end"
        expandIcon={({ isActive }) => (
          <DownOutlined
            rotate={isActive ? 180 : 0}
            style={{ color: '#FFFFFF' }}
          />
        )}
      >
        {processedData.map((athlete, index) => (
          <Collapse.Panel 
            header={
              <div className='collapse-header'>
                <p className='rank'>{athlete.rank}</p>
                <p>{athlete.team}</p>
                <p>{athlete.name}</p>
                <p>{athlete.finalScore.toFixed(3)}</p>
              </div>
            }
            key={index}
            className="athlete-panel"
          >
            <div className="athlete-details">    
              {athlete.scores.map((score, i) => (
                <div key={i} className="score-section">
                  <div className='detail-header'>
                    <div className="detail-row">
                      <span>D:</span>
                      <span>{score.D?.toFixed(3) ?? '-'}</span>
                    </div>
                    <div className="detail-row">
                      <span>E:</span>
                      <span>{score.E?.toFixed(3) ?? '-'}</span>
                    </div>
                    <div className="detail-row">
                      <span>P:</span>
                      <span>{score.Pen?.toFixed(3) ?? '-'}</span>
                    </div>
                  </div>
                  <div className="detail-row total">
                    <span>Total:</span>
                    <span>{score.total?.toFixed(3) ?? '-'}</span>
                  </div>
                </div>
              ))}
            </div>
          </Collapse.Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default ResultsTableMob;