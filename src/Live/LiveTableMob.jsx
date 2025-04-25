import React from 'react';
import { liveData } from '../JSON/liveData';
import './index.scss';
import { DownOutlined } from '@ant-design/icons';
import { Collapse, Button } from 'antd';

const LiveTableMob = () => {
  const data = liveData.results.map(item => ({
    key: item.bib,
    ...item,
    finalScore: item.app || item.aa || item.teamScore
  }));

  return (
    <div className="results-collapse live-collapse">
      <Collapse
          accordion
          expandIconPosition="end"
          expandIcon={({ isActive, panelKey }) => {
            const currentAthlete = data[panelKey];
            if (currentAthlete?.status) return null;
            return (
              <DownOutlined
                rotate={isActive ? 180 : 0}
                style={{ color: '#FFFFFF' }}
              />
            );
          }}
        >
        {data.map((athlete, index) => (
          <Collapse.Panel 
            header={
              <div className='collapse-header live'>
                <p className="team-name">
                  <img 
                    src={athlete.sport}
                    alt='icon'
                    width={40}
                    height={32}
                    className="team-flag"
                    onError={(e) => e.target.style.display = 'none'}
                  />
                </p>
                <p className="team-name">{athlete.team}</p>
                <p className="name">{athlete.name}</p>
                {athlete.status ?
                  <p className="app-btn">
                    <Button 
                      className={athlete.status === 'Wait' ? 'warning-btn' : 'success-btn'}
                      type="primary"
                      danger 
                      size="small"
                    >{athlete.status}
                    </Button>
                  </p> : <p className="app-btn">{athlete.app.toFixed(3)}</p>
                }
              </div>
            }
            key={index}
            className={`athlete-panel ${athlete.status ? 'has-status' : ''}`}
            collapsible={athlete.status ? "disabled" : undefined}
          >
            <div className="athlete-details">    
              {athlete.scores.map((score, i) => (
                <div key={i}>
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
                      <span>{score.P?? '-'}</span>
                    </div>
                  </div>
                  <div className="detail-row total">
                    <span>App</span>
                    <div className='live-rank'>
                      <div>{athlete.app?.toFixed(3) ?? '-'}</div>
                      <div className='rank'>{athlete.appRank ?? '-'}</div>
                    </div>
                  </div>
                  <div className="detail-row total">
                    <span>AA</span>
                    <div className='live-rank'>
                      <div>{athlete.aa?.toFixed(3) ?? '-'}</div>
                      <div className='rank'>{athlete.aaRank ?? '-'}</div>
                    </div>
                  </div>
                  <div className="detail-row total">
                    <span>Team</span>
                    <div className='live-rank'>
                      <div>{athlete.teamScore?.toFixed(3) ?? '-'}</div>
                      <div className='rank'>{athlete.teamRank ?? '-'}</div>
                    </div>
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

export default LiveTableMob;