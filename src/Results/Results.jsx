import React from 'react';
import './index.scss';
import Filter from './Filter/Filter';
import ResultsTable from './ResultsTable/ResultsTable';
import SportIcons from './SportIcons/SportIcons';
import ResultsTableMob from './ResultsTable/ResultsTableMob';
import FilterMob from './Filter/FilterMob';

const Results = () => {
return (
    <>
      <div className="desktop-version">
        <Filter/>
        <SportIcons/>
        <ResultsTable/>
      </div>
      <div className="mobile-version">
        <FilterMob/>
        <ResultsTableMob/>
      </div>
    </>
  );
};

export default Results;