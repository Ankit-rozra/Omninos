// components/Filter.js
import React from 'react';

const Filter = ({ data, onFilterChange }) => {
  const endYears = [...new Set(data.map((item) => item.end_year))];
  const topics = [...new Set(data.map((item) => item.topic))];
  const sectors = [...new Set(data.map((item) => item.sector))];
  const regions = [...new Set(data.map((item) => item.region))];
  const pests = [...new Set(data.map((item) => item.pestle))];
  const sources = [...new Set(data.map((item) => item.source))];
  const swots = [...new Set(data.map((item) => item.title))];
  const countries = [...new Set(data.map((item) => item.country))];
  const cities = [...new Set(data.map((item) => item.city))];

  const handleFilterChange = (filterType, value) => {
    onFilterChange(filterType, value);
  };

  return (
    <div className="filter-container">
      <h2>Filters</h2>
      <div className="filter">
        <label htmlFor="endYear">End Year:</label>
        <select
          id="endYear"
          onChange={(e) => handleFilterChange('end_year', e.target.value)}
        >
          <option value="">All</option>
          {endYears.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className="filter">
        <label htmlFor="topics">Topics:</label>
        <select
          id="topics"
          onChange={(e) => handleFilterChange('topic', e.target.value)}
        >
          <option value="">All</option>
          {topics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </div>

      <div className="filter">
        <label htmlFor="sector">Sector:</label>
        <select
          id="sector"
          onChange={(e) => handleFilterChange('sector', e.target.value)}
        >
          <option value="">All</option>
          {sectors.map((sector) => (
            <option key={sector} value={sector}>
              {sector}
            </option>
          ))}
        </select>
      </div>

      <div className="filter">
        <label htmlFor="region">Region:</label>
        <select
          id="region"
          onChange={(e) => handleFilterChange('region', e.target.value)}
        >
          <option value="">All</option>
          {regions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>

      <div className="filter">
        <label htmlFor="pest">PEST:</label>
        <select
          id="pest"
          onChange={(e) => handleFilterChange('pestle', e.target.value)}
        >
          <option value="">All</option>
          {pests.map((pest) => (
            <option key={pest} value={pest}>
              {pest}
            </option>
          ))}
        </select>
      </div>

      <div className="filter">
        <label htmlFor="source">Source:</label>
        <select
          id="source"
          onChange={(e) => handleFilterChange('source', e.target.value)}
        >
          <option value="">All</option>
          {sources.map((source) => (
            <option key={source} value={source}>
              {source}
            </option>
          ))}
        </select>
      </div>

      <div className="filter">
        <label htmlFor="swot">SWOT:</label>
        <select
          id="swot"
          onChange={(e) => handleFilterChange('title', e.target.value)}
        >
          <option value="">All</option>
          {swots.map((swot) => (
            <option key={swot} value={swot}>
              {swot}
            </option>
          ))}
        </select>
      </div>

      <div className="filter">
        <label htmlFor="country">Country:</label>
        <select
          id="country"
          onChange={(e) => handleFilterChange('country', e.target.value)}
        >
          <option value="">All</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>

      <div className="filter">
        <label htmlFor="city">City:</label>
        <select
          id="city"
          onChange={(e) => handleFilterChange('city', e.target.value)}
        >
          <option value="">All</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
