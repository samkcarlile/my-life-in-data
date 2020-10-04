import React, { useState } from 'react';
import Plot from 'react-plotly.js';

// can either take the point list in as a prop or access the store directly here...

const mapListToGraphData = (pointList) => {

  const MS_PER_DAY = 8.64e+7;
  const DAYS_PER_WEEK = 7;
  const NOW = new Date();

  const x = [];
  const y = [];

  pointList.filter((point) => point.timestamp - NOW < DAYS_PER_WEEK)
    .forEach((point) => {

      // algorithm to sum or average points in same day
      // 
    })


}

function Graph ({ pointList }) {

  return (
    <Plot
      data={[
        {
          x: [1, 2, 3],
          y: [2, 6, 3],
          type: 'scatter',
          mode: 'lines+markers',
          marker: {color: 'red'},
        },
        {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
      ]}
      layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
    />
  );
}

export default Graph;