import React, { useState } from 'react';
import './index.scss';
import { Card, Segmented } from 'antd';

const Filter = () => {
  const [filters, setFilters] = useState({
    discipline: 'MAG',
    stage: 'Qualification',
    event: 'Apparatus',
    ageGroup: 'Seniors'
  });

  const handleFilterChange = (filterType, value) => {
    setFilters({
      ...filters,
      [filterType]: value
    });
  };

  return (
    <Card style={{ marginBottom: 16, display: 'flex', justifyContent: 'center', backgroundColor: '#080915', border: 'none' }} >
      <div className='filter-container'>
        <div>
          <Segmented
            className="custom-segmented"
            value={filters.discipline}
            onChange={(value) => handleFilterChange('discipline', value)}
            options={[
              { label: 'MAG', value: 'MAG' },
              { label: 'WAG', value: 'WAG' },
            ]}
          />
        </div>
        <div>
          <Segmented
            className="custom-segmented"
            value={filters.stage}
            onChange={(value) => handleFilterChange('stage', value)}
            options={[
              { label: 'Qualification', value: 'Qualification' },
              { label: 'Final', value: 'Final' },
            ]}
          />
        </div>
        <div>
          <Segmented
            className="custom-segmented"
            value={filters.event}
            onChange={(value) => handleFilterChange('event', value)}
            options={[
              { label: 'Apparatus', value: 'Apparatus' },
              { label: 'Team', value: 'Team' },
              { label: 'All-around', value: 'All-around' },
            ]}
          />
        </div>
        <div>
          <Segmented
            className="custom-segmented"
            value={filters.ageGroup}
            onChange={(value) => handleFilterChange('ageGroup', value)}
            options={[
              { label: 'Seniors', value: 'Seniors' },
              { label: 'Juniors', value: 'Juniors' },
            ]}
          />
        </div>
      </div>
    </Card>
  );
};

export default Filter;