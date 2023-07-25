// components/Chart.js
import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3'; // Make sure to install D3.js using 'npm install d3' in your project folder

const Chart = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    createBarChart();
  }, [data]);

  const createBarChart = () => {
    // Remove any existing chart elements
    d3.select(chartRef.current).selectAll('*').remove();

    // Chart dimensions and other settings
    const width = 500;
    const height = 300;
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Create SVG container
    const svg = d3
      .select(chartRef.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    // Create chart group
    const chartGroup = svg
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Create scales
    const xScale = d3
      .scaleBand()
      .domain(data.map((item) => item.title))
      .range([0, innerWidth])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (item) => item.intensity)])
      .range([innerHeight, 0]);

    // Create axes
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    chartGroup
      .append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0, ${innerHeight})`)
      .call(xAxis);

    chartGroup.append('g').attr('class', 'y-axis').call(yAxis);

    // Create bars
    chartGroup
      .selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (item) => xScale(item.title))
      .attr('y', (item) => yScale(item.intensity))
      .attr('width', xScale.bandwidth())
      .attr('height', (item) => innerHeight - yScale(item.intensity));
  };

  return <div ref={chartRef}></div>;
};

export default Chart;
