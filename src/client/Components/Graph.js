import React, { useState } from 'react';
import Plot from 'react-plotly.js';
import ms from 'ms';

// can either take the point list in as a prop or access the store directly here...

const mapListToGraphData = (pointList, aggFunc) => {

  const NOW = new Date();

  const x = [];
  const y = [];

  let result = pointList.filter((point) => (
    (NOW - point.timestamp) < ms('7 days')
    && (NOW - point.timestamp > ms('1d')) ? (point.timestamp.getDay() !== NOW.getDay()) : true
  ))
    .sort((a, b) => a.timestamp - b.timestamp)
    .map((point) => ({
      ...point,
      day: point.timestamp.getDay(),
    }));
   
  if (aggFunc === 'sum') {
    const days = new Set();
    result = result.reduce((a, point) => {
      if (days.has(point.day)){
        a[a.length - 1].value += point.value;
      } else {
        days.add(point.day);
        a.push({
          day: point.day,
          value: point.value,
        });
      }
      return a;
    }, [])
  } else if (aggFunc === 'average') {
    const daysCount = {};
    result = result.reduce((a, point) => {
      if (daysCount[point.day]){
        daysCount[point.day] += 1;
        a[a.length - 1].value += point.value;
      } else {
        daysCount[point.day] = 1;
        a.push({
          day: point.day,
          value: point.value,
        });
      }
      return a;
    }, []);
    result.forEach((point) => {
      point.value /= daysCount[point.day]
    });
  }

  const dayTable = {
    0: 'Sun',
    1: 'Mon',
    2: 'Tues',
    3: 'Wed',
    4: 'Thurs',
    5: 'Fri',
    6: 'Sat',
  }

  result.forEach((point) => {
    x.push(dayTable[point.day]);
    y.push(point.value);
  })

  return { x, y };
}

function Graph ({ pointList }) {

  const { x, y } = mapListToGraphData(pointList, 'sum');

  return (
    <Plot
      data={[
        {
          x,
          y,
          type: 'scatter',
          mode: 'lines+markers',
          marker: {color: 'red'},
        },
      ]}
      layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
    />
  );
}

export default Graph;