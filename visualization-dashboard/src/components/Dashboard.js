import React, { useState } from 'react';
import jsonData from '../jsondata.json';
import Filter from './Filter';
import Chart from './Chart';

const Dashboard = () => {
  const [filteredData, setFilteredData] = useState(jsonData);

  const handleFilterChange = (filterType, value) => {
    let filtered = jsonData;

    if (filterType !== 'All') {
      filtered = filtered.filter((item) => item[filterType] === value);
    }

    setFilteredData(filtered);
  };

  return (
    <div className="dashboard">
      <Filter data={jsonData} onFilterChange={handleFilterChange} />
      <Chart data={filteredData} />
    </div>
  );
};

export default Dashboard;
