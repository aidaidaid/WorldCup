import React, { useState } from 'react';
import { Button, Card, Tag, Modal, Radio, Tabs } from 'antd';
import { CloseOutlined, FilterOutlined } from '@ant-design/icons';
import './index.scss';
import TabPane from 'antd/es/tabs/TabPane';

const FilterMob = () => {
  const [showModal, setShowModal] = useState(false);
  const [filters, setFilters] = useState({
    discipline: 'MAG',
    stage: 'Qualification',
    ageGroup: 'Seniors',
    event: 'Floor exercise'
  });

  const filterOptions = [
    {
      key: 'discipline',
      label: 'Discipline',
      options: ['MAG', 'WAG']
    },
    {
      key: 'stage',
      label: 'Stage',
      options: ['Qualification', 'Final']
    },
    {
      key: 'ageGroup',
      label: 'Age Group',
      options: ['Seniors', 'Juniors']
    },
    {
      key: 'event',
      label: 'Event',
      options: ['Floor exercise', 'Pommel horse', 'Rings', 'Vault', 'Parallel bars', 'Horizontal bar']
    }
  ];

  const handleFilterChange = (category, value) => {
    setFilters({ ...filters, [category]: value });
  };

  const removeFilter = (category) => {
    setFilters({ ...filters, [category]: '' });
  };

  return (
    <Card className="filter-card">
      <div className="filter-header">
        <Button 
          icon={<FilterOutlined />}
          onClick={() => setShowModal(true)}
          className="filter-btn"
        >
          Filter
        </Button>
        <div className="active-filters">
          {Object.entries(filters).map(([key, value]) => (
            value && (
              <Tag
                key={key}
                closable
                onClose={() => removeFilter(key)}
                className="filter-tag"
                closeIcon={<CloseOutlined style={{ color: '#fff', marginRight: 5 }} />}
              >
                {value}
              </Tag>
            )
          ))}
        </div>
      </div>
      <Modal
        title="Select Filters"
        open={showModal}
        onCancel={() => setShowModal(false)}
        footer={[
          <Button key="apply" onClick={() => setShowModal(false)}>
            OK
          </Button>
        ]}
        className="filter-modal"
      >
        <Tabs defaultActiveKey="discipline" className="filter-tabs">
          {filterOptions.map(tab => (
            <TabPane tab={tab.label} key={tab.key}>
              <Radio.Group
                value={filters[tab.key]}
                onChange={(e) => handleFilterChange(tab.key, e.target.value)}
                className="radio-group"
              >
                {tab.options.map(option => (
                  <Radio key={option} value={option} className="filter-option">
                    {option}
                  </Radio>
                ))}
              </Radio.Group>
            </TabPane>
          ))}
        </Tabs>
      </Modal>
    </Card>
  );
};

export default FilterMob;