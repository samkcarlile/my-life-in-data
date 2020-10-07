import React, { useState } from 'react';
import Plot from 'react-plotly.js';
import { mapListToGraphData } from '../utils';

// can either take the point list in as a prop or access the store directly here...

function Graph({ pointList, setName }) {
  const { x, y } = mapListToGraphData(pointList, 'average');

  return (
    <Plot
      data={[
        {
          x,
          y,
          type: 'scatter',
          mode: 'lines+markers',
          marker: { color: 'blue' },
        },
      ]}
      layout={{ width: 1000, height: 500, title: setName }}
    />
  );
}

export default Graph;
